import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import pet from "@assets/images/pet2.jpeg";
import styled from "@emotion/styled";
import InputDefault from "@components/Input";
import { ChangeEvent, useState } from "react";
import Seperator from "@components/Seperator";
import ButtonSelect from "@components/Input/ButtonSelect";
import RoundButton from "@components/Button/RoundButton";
import SvgSelector from "@components/Svg/SvgSelector";

export default function PetEdit() {
  const [dogInfo, setDogInfo] = useState({
    introduce: "",
    age: 0,
    name: "",
    weight: 0,
    breed: [0],
  });
  const [breed, setBreed] = useState<number[]>([]);
  const [character, setCharacter] = useState<number[]>([]);

  const handleChangeIntroduce = (e: ChangeEvent<HTMLInputElement>) => {
    setDogInfo((prev) => ({ ...prev, introduce: e.target.value }));
  };

  const handleChangeBreed = (idx: number[]) => {
    setDogInfo((prev) => ({ ...prev, breed: idx }));
  };

  return (
    <Container>
      <SingleProfileImage
        img={pet}
        size={208}
        border={3}
        borderColor="#21212180"
      />
      <Seperator height={40} />
      <InputDefault
        width="100%"
        title="강아지 소개 한마디"
        id="dog"
        placeholder="10자 이내 입력"
        value={dogInfo.introduce}
        onChange={handleChangeIntroduce}
      />
      <Seperator height={24} />
      <InputDefault
        width="100%"
        title="나이"
        id="age"
        placeholder=""
        value={dogInfo.name}
        onChange={handleChangeIntroduce}
      />
      <Seperator height={24} />
      <InputDefault
        width="100%"
        title="이름"
        id="name"
        placeholder=""
        value={dogInfo.name}
        onChange={handleChangeIntroduce}
      />
      <Seperator height={24} />
      <InputDefault
        width="100%"
        title="몸무게"
        id="weight"
        placeholder=""
        value={dogInfo.name}
        onChange={handleChangeIntroduce}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="견종"
        isDuplicate={false}
        maxSelection={1}
        buttonList={[
          "믹스",
          "말티즈",
          "푸들",
          "포메라니안",
          "치와와",
          "시츄",
          "골든리트리버",
          "진돗개",
          "비글",
        ]}
        value={breed}
        onChangeButton={setBreed}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="성격"
        isDuplicate={true}
        maxSelection={2}
        buttonList={[
          "외향적",
          "에너제틱",
          "사회성  좋은",
          "내향적",
          "얌전한",
          "샤이한",
        ]}
        value={character}
        onChangeButton={setCharacter}
      />
      <Seperator height={24} />
      <RoundButton
        title={
          <>
            <SvgSelector
              svg="filledCloseRound"
              width={24}
              height={24}
              stroke="#212121"
            />
            반려견 삭제
          </>
        }
        onClick={() => {}}
        active
        fill={false}
        backgroundColor="#212121"
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonSelection = styled(ButtonSelect)`
  width: 100%;
`;
