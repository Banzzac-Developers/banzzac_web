import Seperator from "@components/Seperator";
import SvgSelector from "@components/Svg/SvgSelector";
import TemperatureBar from "@components/TemperatureBar/TemperatureBar";
import styled from "@emotion/styled";
import { Profile } from "@models/profile";
import { FontStyle } from "@utils/StyleUtil";
import Text from "@components/Text";

export default function UserCharacteristic({
  nickname,
  temperature,
  quantity,
}: Profile) {
  return (
    <>
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
      <Seperator height={18} />
      <Box display={true} height={80}>
        <IconBox>
          <SvgSelector
            svg="payment"
            height={30}
            width={30}
            stroke={"#A86EFA"}
          />
          <Text {...FontStyle(12, 600, 22, "#333")}>매칭권 구매</Text>
        </IconBox>
        <IconBox>
          <SvgSelector
            svg="paymentHistory"
            height={30}
            width={30}
            stroke={"#A86EFA"}
          />
          <Text {...FontStyle(12, 600, 22, "#333")}>구매내역</Text>
        </IconBox>
      </Box>
    </>
  );
}

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
