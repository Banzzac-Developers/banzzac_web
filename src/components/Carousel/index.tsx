import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import styled from "@emotion/styled";

type Props = {
  srcs: string[];
  currentIdx: number;
  handleClick: (idx: number) => void;
};

const Carousel = ({ srcs, currentIdx, handleClick }: Props) => {
  const handleClickImage = (idx: number) => {
    handleClick(idx);
  };

  return (
    <>
      <CarouselContainer>
        <Wrapper>
          {srcs.map((src, idx) => (
            <Circle
              active={idx === currentIdx}
              idx={idx}
              currentIdx={currentIdx}
              key={idx}
              onClick={() => handleClickImage(idx)}
            >
              <SingleProfileImage
                size={idx === currentIdx ? 204 : 80}
                border={idx === currentIdx ? 4 : 3}
                img={src}
                borderColor="#fff"
              />
            </Circle>
          ))}
        </Wrapper>
      </CarouselContainer>
    </>
  );
};

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 208px;
`;

const Wrapper = styled.div`
  position: absolute;
  width: 324px;
  height: 100%;
`;

const Circle = styled.button<{
  active: boolean;
  idx: number;
  currentIdx: number;
}>`
  border-radius: 50%;
  width: ${({ active }) => (active ? "204px" : "80px")};
  height: ${({ active }) => (active ? "204px" : "80px")};
  position: absolute;
  bottom: 0;
  left: ${({ idx, currentIdx }) =>
    idx <= currentIdx ? `${idx * 40}px` : `${idx * 40 + 122}px`};
  z-index: ${({ active, idx, currentIdx }) =>
    active ? 5 : idx <= currentIdx ? 0 : -1 * idx + 5};
  box-shadow: 0px 2px 6px 2px #00000026;
`;

const Indicator = ({ srcs, currentIdx, handleClick }: Props) => {
  const handleClickIndicator = (idx: number) => {
    handleClick(idx);
  };
  return (
    <IndicatorContainer>
      {srcs.map((_, idx) => (
        <li key={idx}>
          <IndicatorButton
            active={currentIdx === idx}
            onClick={() => handleClickIndicator(idx)}
          />
        </li>
      ))}
    </IndicatorContainer>
  );
};

const IndicatorContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const IndicatorButton = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border: 2px solid #212121;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#212121" : "#fff")};
`;

export default { Carousel, Indicator };
