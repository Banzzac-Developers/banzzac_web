import styled from "@emotion/styled";

type Props = {
  title: string;
  fill: boolean;
  backgroundColor: string;
  onClick: () => void;
};

export default function RoundButton({
  title,
  fill,
  backgroundColor,
  onClick,
}: Props) {
  return (
    <StyledButton
      fill={fill}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ fill: boolean; backgroundColor: string }>`
  padding: 9px 15px;
  min-width: 82px;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
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
