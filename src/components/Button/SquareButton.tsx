import styled from "@emotion/styled";

type Props = {
  title: string;
  fill: boolean;
  backgroundColor: string;
};

export default function SquareButton({ title, fill, backgroundColor } : Props) {
  return <StyledButton fill={fill} backgroundColor={backgroundColor}>{title}</StyledButton>;
}

const StyledButton = styled.button<{fill : boolean, backgroundColor : string}>`
  width: 110px;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid;
  background-color: ${({ fill, backgroundColor }) => (fill ? backgroundColor : "#FFFFFF")};
  color: ${({ fill,backgroundColor }) => (fill ? "#FFFFFF" :  backgroundColor)};
`;

