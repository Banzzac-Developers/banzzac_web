import styled from "@emotion/styled";

type Props = {
  title: string;
  fill: boolean;
  state: number;
};

export default function SquareButton({ title, fill, state } : Props) {
  return <StyledButton fill={fill} state={state}>{title}</StyledButton>;
}
let bgc = ["#212121","#757575","#E0E0E0"]
const StyledButton = styled.button<{fill : boolean, state : number}>`
  width: 110px;
  height: 50px;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 2px solid;
  background-color: ${({ fill,state }) => (fill ? bgc[state] : "#FFFFFF")};
  color: ${({ fill,state }) => (fill ? "#FFFFFF" :  bgc[state])};
`;

