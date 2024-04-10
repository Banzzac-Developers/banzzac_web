import RoundButton from "@components/Button/RoundButton";
import styled, { CSSObject } from "@emotion/styled";
import { SetStateAction } from "react";

type Props = {
  label: string;
  buttonList: string[];
  isDuplicate: boolean;
  maxSelection: number;
  value: number[];
  gridStyle?: CSSObject;
  onChangeButton: React.Dispatch<SetStateAction<number[]>>;
};

export default function ButtonSelect({
  label,
  buttonList,
  gridStyle = { gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" },
  isDuplicate,
  maxSelection,
  value,
  onChangeButton,
}: Props) {
  const handleClick = (idx: number) => {
    // 중복선택 불가능
    if (!isDuplicate) {
      if (value.includes(idx)) {
        onChangeButton((prev) => prev.filter((v) => v !== idx));
      } else {
        onChangeButton([idx]);
      }
    } else {
      if (!value.includes(idx) && value.length >= maxSelection) return;
      if (value.includes(idx)) {
        onChangeButton((prev) => prev.filter((v) => v !== idx));
      } else {
        onChangeButton((prev) => [...prev, idx]);
      }
    }
  };

  return (
    <Container gridStyle={gridStyle}>
      <Label>{label}</Label>
      <div style={{ height: "14px" }} />
      <ul>
        {buttonList.map((button, idx) => (
          <li key={button}>
            <RoundButton
              onClick={() => handleClick(idx)}
              title={button}
              fill={false}
              backgroundColor={value.includes(idx) ? "#212121" : "#757575"}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div<{ gridStyle: CSSObject }>`
  width: 390px;

  ul {
    display: grid;
    list-style: none;
    padding: 0;
    margin: 0;
    ${({ gridStyle }) => gridStyle}
  }
  ul li {
    width: 100%;
  }
`;

const Label = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  line-height: 24px;
`;
