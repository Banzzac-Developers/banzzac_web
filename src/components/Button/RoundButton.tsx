import styled from "@emotion/styled";

type Props = {
  title: string | React.ReactElement;
  fill: boolean;
  /**
   * 버튼 배경색
   */
  backgroundColor: string;
  onClick: () => void;
  active?: boolean;
};

export default function RoundButton({
  title,
  fill,
  backgroundColor,
  active = false,
  onClick,
}: Props) {
  return (
    <StyledButton
      onClick={onClick}
      active={active}
      fill={fill}
      backgroundColor={backgroundColor}
    >
      {title}
    </StyledButton>
  );
}

const StyledButton = styled.button<{
  fill: boolean;
  backgroundColor: string;
  active: boolean;
}>`
  width: 110px;
  height: 42px;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  border-radius: 22px;
  border: ${({ active }) => (active ? "2px solid" : "1px solid")};
  background-color: ${({ fill, backgroundColor }) =>
    fill ? backgroundColor : "#FFFFFF"};
  color: ${({ fill, backgroundColor }) => (fill ? "#FFFFFF" : backgroundColor)};
`;
