import SvgSelector from "@components/Svg/SvgSelector";
import styled from "@emotion/styled";
import useModal from "@hooks/common/useModal";

type Props = {
  contents: React.ReactNode;
};

export default function FullScreenModal({ contents }: Props) {
  const { removeCurrentModal } = useModal();

  return (
    <Container>
      <CloseButton onClick={removeCurrentModal}>
        <SvgSelector svg={"close"} width={24} height={24} stroke="#212121" />
      </CloseButton>
      <div>{contents}</div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 8px;
`;
