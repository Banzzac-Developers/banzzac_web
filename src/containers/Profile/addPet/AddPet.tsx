import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import pet from "@assets/images/pet2.jpeg";
import styled from "@emotion/styled";
import InputDefault from "@components/Input";
import { ChangeEvent, useState } from "react";
import Seperator from "@components/Seperator";
import ButtonSelect from "@components/Input/ButtonSelect";
import RoundButton from "@components/Button/RoundButton";
import SvgSelector from "@components/Svg/SvgSelector";
import { Pet, defaultPet } from "@models/profile";
import {
  ACTIVITY,
  BREEDS,
  DOG_PERSONALITY,
  NEUTRIFICATION,
  SIZE,
} from "@constants/profile";
import { TEST_EMAIL } from "@constants/index";
import useAddPet from "@hooks/profile/useAddPet";
import { useNavigate } from "react-router-dom";

export default function AddPet() {
  const { addPet } = useAddPet(TEST_EMAIL);
  const navigator = useNavigate();
  const [petInfo, setPetInfo] = useState<Pet>(defaultPet);

  const handleChangeAge = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.target.value)) return;
    setPetInfo((prev) => ({ ...prev, age: Number(e.target.value) }));
  };

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setPetInfo((prev) => ({ ...prev, name: e.target.value }));
  };

  const handleChanteWeight = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]*$/.test(e.target.value)) return;
    setPetInfo((prev) => ({ ...prev, weight: Number(e.target.value) }));
  };

  const handleChangeNeutrification = (
    v: number[] | ((prev: number[]) => number[]),
  ) => {
    if (Array.isArray(v)) {
      const neutrification = v.map((i) => NEUTRIFICATION[i]);
      setPetInfo((prev) => ({ ...prev, neutrification: neutrification[0] }));
    }
  };

  const handleChangeSize = (v: number[] | ((prev: number[]) => number[])) => {
    if (Array.isArray(v)) {
      const size = v.map((i) => SIZE[i]);
      setPetInfo((prev) => ({ ...prev, size: size[0] }));
    }
  };

  const handleChangeBreed = (v: number[] | ((prev: number[]) => number[])) => {
    if (Array.isArray(v)) {
      const kind = v.map((i) => BREEDS[i]);
      setPetInfo((prev) => ({ ...prev, kind: kind[0] }));
    }
  };

  const handleChangePersonality = (
    v: number[] | ((prev: number[]) => number[]),
  ) => {
    if (!Array.isArray(v)) {
      setPetInfo((prev) => {
        const personalityIdxs = prev.personalityArr.map((personality) =>
          DOG_PERSONALITY.findIndex((v) => v === personality),
        );
        const selectedIdxs = v(personalityIdxs);
        const personalityArr = selectedIdxs.map(
          (selectedIdx) => DOG_PERSONALITY[selectedIdx],
        );
        return { ...prev, personalityArr };
      });
    }
  };

  const handleChangeActivity = (
    v: number[] | ((prev: number[]) => number[]),
  ) => {
    if (Array.isArray(v)) {
      const activity = v.map((i) => ACTIVITY[i]);
      setPetInfo((prev) => ({ ...prev, activity: activity[0] }));
    }
  };

  const handleConfirmButton = () => {
    addPet(petInfo);
    navigator("/profile/edit");
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
        title="나이"
        id="age"
        placeholder=""
        value={petInfo.age}
        onChange={handleChangeAge}
      />
      <Seperator height={24} />
      <InputDefault
        width="100%"
        title="이름"
        id="name"
        placeholder=""
        value={petInfo.name}
        onChange={handleChangeName}
      />
      <Seperator height={24} />
      <InputDefault
        width="100%"
        title="몸무게"
        id="weight"
        placeholder=""
        value={petInfo.weight}
        onChange={handleChanteWeight}
      />
      <Seperator height={24} />
      <ButtonSelection
        label="중성화"
        isDuplicate={false}
        maxSelection={1}
        buttonList={NEUTRIFICATION}
        value={[
          NEUTRIFICATION.findIndex(
            (neutirfication) => petInfo.neutrification === neutirfication,
          ),
        ]}
        onChangeButton={handleChangeNeutrification}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="크기"
        isDuplicate={false}
        maxSelection={1}
        buttonList={SIZE}
        value={[SIZE.findIndex((size) => petInfo.size === size)]}
        onChangeButton={handleChangeSize}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="견종"
        isDuplicate={false}
        maxSelection={1}
        buttonList={BREEDS}
        value={[BREEDS.findIndex((breed) => petInfo.kind === breed)]}
        onChangeButton={handleChangeBreed}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="성격"
        isDuplicate={true}
        maxSelection={2}
        buttonList={DOG_PERSONALITY}
        value={petInfo.personalityArr.map((personality) =>
          DOG_PERSONALITY.findIndex((v) => v === personality),
        )}
        onChangeButton={handleChangePersonality}
      />
      <Seperator height={24} />
      <ButtonSelection
        gridStyle={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}
        label="활동량"
        isDuplicate={false}
        maxSelection={1}
        buttonList={ACTIVITY}
        value={[ACTIVITY.findIndex((v) => v === petInfo.activity)]}
        onChangeButton={handleChangeActivity}
      />
      <Seperator height={24} />
      {
        <RoundButton
          title={
            <>
              <SvgSelector
                svg="filledAddRound"
                width={24}
                height={24}
                stroke="#212121"
              />
              확인
            </>
          }
          onClick={handleConfirmButton}
          active
          fill={false}
          backgroundColor="#212121"
        />
      }
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
