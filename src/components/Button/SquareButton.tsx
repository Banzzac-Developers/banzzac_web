import styled from "@emotion/styled";
import { ReactElement } from "react";

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
  onClick: () => void;
  active?: boolean;
};

export default function SquareButton({ title, fill, backgroundColor }: Props) {
  return (
    <StyledButton fill={fill} backgroundColor={backgroundColor}>
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ fill: boolean; backgroundColor: string }>`
  width: 100%;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid;
  background-color: ${({ fill, backgroundColor }) =>
    fill ? backgroundColor : "#FFFFFF"};
  color: ${({ fill, backgroundColor }) => (fill ? "#FFFFFF" : backgroundColor)};
`;
