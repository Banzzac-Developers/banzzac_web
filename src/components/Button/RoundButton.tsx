import styled from "@emotion/styled";

type Props = {
  /**
   * button txt
   */
  title: string;
  /**
   * 채워진 버튼 여부
   */
  fill: boolean;
  /**
   * 버튼 배경색
   */
  backgroundColor: string;
};

export default function RoundButton({ title, fill, backgroundColor }: Props) {
  return (
    <StyledButton fill={fill} backgroundColor={backgroundColor}>
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ fill: boolean; backgroundColor: string }>`
  width: 110px;
  height: 42px;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 22px;
  border: 2px solid;
  background-color: ${({ fill, backgroundColor }) =>
    fill ? backgroundColor : "#FFFFFF"};
  color: ${({ fill, backgroundColor }) => (fill ? "#FFFFFF" : backgroundColor)};
`;
