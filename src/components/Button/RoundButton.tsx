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
  padding: 8px 0;
  min-width: 82px;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  border-radius: 22px;
  border: 2px solid;
  background-color: ${({ fill, backgroundColor }) =>
    fill ? backgroundColor : "#FFFFFF"};
  color: ${({ fill, backgroundColor }) => (fill ? "#FFFFFF" : backgroundColor)};
`;
