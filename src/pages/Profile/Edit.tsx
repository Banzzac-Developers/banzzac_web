import ProfileEdit from "@containers/Profile/edit/ProfileEdit";
import Collapsible from "@components/Collapsible/Collapsible";
import PetEdit from "@containers/Profile/edit/PetEdit";
import petImg from "@assets/images/pet2.jpeg";
import React from "react";
import styled from "@emotion/styled";
import RoundButton from "@components/Button/RoundButton";
import Seperator from "@components/Seperator";
import SvgSelector from "@components/Svg/SvgSelector";

export default function ProfileEditPage() {
  const pets = [
    {
      name: "멍뭉이",
      profileImg: petImg,
    },
    {
      name: "멈뭄미",
      profileImg: petImg,
    },
  ];
  return (
    <Container>
      <ExitButton>
        <SvgSelector svg="exit" width={22} height={20} stroke="" />
      </ExitButton>
      <ProfileEdit />
      <Seperator height={30} />
      <ul>
        <Divider />
        {pets.map((pet) => (
          <React.Fragment key={pet.name}>
            <li key={pet.name}>
              <Collapsible dogProfile={pet} contents={<PetEdit />} />
            </li>
            <Divider />
          </React.Fragment>
        ))}
      </ul>
      <Seperator height={24} />
      <ButtonContainer>
        <RoundButton
          active
          fill={false}
          title={
            <>
              <SvgSelector
                svg="filledAddRound"
                width={24}
                height={24}
                stroke="#212121"
              />
              <div>반려견 추가</div>
            </>
          }
          backgroundColor="#212121"
          onClick={() => {}}
        />
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 65px;
  padding-bottom: 24px;
  position: relative;
`;

const ExitButton = styled.div`
  position: absolute;
  top: 26px;
  right: 24px;
`;

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #757575;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
