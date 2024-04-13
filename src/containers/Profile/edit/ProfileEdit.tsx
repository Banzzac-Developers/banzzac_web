import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import mangu from "@assets/images/mangu.jpg";
import styled from "@emotion/styled";
import { FontStyle } from "@utils/StyleUtil";
import Text from "@components/Text";
import Seperator from "@components/Seperator";
import InputDefault from "@components/Input";
import { ChangeEvent, useState } from "react";
import ButtonSelect from "@components/Input/ButtonSelect";
import SvgSelector from "@components/Svg/SvgSelector";

export default function ProfileEdit() {
  const [profileInfo, setProfileInfo] = useState<{
    statusMessage: string;
    walkingStyle: string;
  }>({ statusMessage: "", walkingStyle: "" });
  const [speed, setSpeed] = useState<number[]>([]);

  const handleChangeStatusMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileInfo((prev) => ({ ...prev, statusMessage: e.target.value }));
  };

  const handleChangeWalkingStyle = (e: ChangeEvent<HTMLInputElement>) => {
    setProfileInfo((prev) => ({ ...prev, walkingStyle: e.target.value }));
  };

  return (
    <Container>
      <ProfileContainer>
        <SingleProfileImage
          img={mangu}
          size={208}
          border={3}
          borderColor="#21212180"
        />
        <Seperator height={30} />
        <Text {...FontStyle(24, 700, 24, "#000")}>name</Text>
        <Seperator height={18} />
        <Text {...FontStyle(16, 700, 19, "#000")}>아이디 | 본명 | 26세</Text>
        <FinishButton>
          <SvgSelector
            svg="filledPin"
            stroke="#212121"
            width={24}
            height={24}
          />
          <Text {...FontStyle(16, 700, 19, "#212121")}>완료</Text>
        </FinishButton>
      </ProfileContainer>
      <Seperator height={28} />
      <InputDefault
        title="자기소개 한마디"
        placeholder="10자 이내 입력"
        id="statusMessage"
        value={profileInfo?.statusMessage}
        onChange={handleChangeStatusMessage}
        width="100%"
      />
      <Seperator height={20} />
      <InputDefault
        title="주간 산책 횟수 "
        placeholder=""
        id="statusMessage"
        value={profileInfo?.walkingStyle}
        onChange={handleChangeWalkingStyle}
        width="100%"
      />
      <Seperator height={20} />
      <ButtonSelection
        label="산책 스피드"
        buttonList={["빠름", "보통", "적당"]}
        value={speed}
        onChangeButton={setSpeed}
        isDuplicate={false}
        maxSelection={1}
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

const FinishButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid #212121;
  padding: 3px 15px 3px 8px;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin-left: 3px;
  }
`;

const ButtonSelection = styled(ButtonSelect)`
  width: 100%;
`;
