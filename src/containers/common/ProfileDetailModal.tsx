import Carousel from "@components/Carousel";
import styled from "@emotion/styled";
import { useState } from "react";
import mangu from "@assets/images/mangu.jpg";
import Seperator from "@components/Seperator";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";
import { Badge } from "@components/Badge/Badge";
import TemperatureBar from "@components/TemperatureBar/TemperatureBar";

const ProfileDetail = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const images = [mangu, mangu, mangu, mangu];
  const walkingStyle = ["mbti", "1", "2"];
  const { temperature, quantity, nickname } = {
    quantity: 15,
    nickname: "최성재",
    temperature: 365,
  };
  return (
    <Container>
      <div>
        <Carousel.Indicator
          currentIdx={carouselIdx}
          handleClick={setCarouselIdx}
          srcs={images}
        />
        <Seperator height={30} />
        <Carousel.Carousel
          currentIdx={carouselIdx}
          handleClick={setCarouselIdx}
          srcs={images}
        />
      </div>
      <Text {...FontStyle(24, 700, 24, "#000")}>name</Text>
      <Seperator height={18} />
      <Text {...FontStyle(16, 700, 20, "#000")}>{`nickname | age`}</Text>
      <Seperator height={20} />
      <BadgeContainer oneSentence={false}>
        {walkingStyle.map((v) => (
          <Badge key={v} bold txt={v} />
        ))}
      </BadgeContainer>
      <Seperator height={23} />
      <Box display={false} height={113}>
        <Text {...FontStyle(16, 600, 22, "#222")}>
          {`지금 ${nickname}님의 반짝온도는?`}
        </Text>
        <Seperator height={14} />
        <TemperatureBar point={temperature / 10} />
      </Box>
      <Seperator height={18} />
      <Box display={true} height={80}>
        <IconBox>
          <Text {...FontStyle(24, 600, 22, "#333")}>{quantity}</Text>
          <Text {...FontStyle(12, 600, 22, "#333")}>주간 산책 횟수</Text>
        </IconBox>
        <IconBox>
          <Text {...FontStyle(24, 600, 22, "#333")}>40</Text>
          <Text {...FontStyle(12, 600, 22, "#333")}>평균 산책 시간</Text>
        </IconBox>
        <IconBox>
          <Text {...FontStyle(24, 600, 22, "#333")}>리뷰</Text>
          <Text {...FontStyle(12, 600, 22, "#333")}>리뷰조회</Text>
        </IconBox>
      </Box>
    </Container>
  );
};

const Container = styled.div``;

const BadgeContainer = styled.ul<{ oneSentence: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
`;

const Box = styled.div<{ height: number; display: boolean }>`
  height: ${({ height }) => height + "px"};
  padding: 10px 20px;
  border-radius: 16px;
  border: 2px solid #212121;
  display: ${({ display }) => display && "flex"};
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  font-weight: 600;
`;

const BottomButton = () => {
  return (
    <ButtonContainer>
      <button>
        <Text {...FontStyle(16, 500, 24, "#E72B23")}>친구추가</Text>
      </button>
      <button>
        <Text {...FontStyle(16, 500, 24, "#007AFF")}>대화하기</Text>
      </button>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #3c3c435c;
  button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
  }
`;

const ProfileDetailModal = { ProfileDetail, BottomButton };

export default ProfileDetailModal;
