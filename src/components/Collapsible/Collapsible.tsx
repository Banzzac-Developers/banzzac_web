import { useState } from "react";
import styled from "@emotion/styled";
import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import SvgSelector from "@components/Svg/SvgSelector";
import DogProfileModal from "@containers/DogProfileModal";

type DogProfile = {
  name: string;
  profileImg: string;
  age: string;
  weight: string;
  gender: string;
  neutered: boolean;
  size: string;
  breed: string;
  personality: string;
  activityLevel: string;
};

export default function Collapsible(dogProfile: DogProfile) {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <Container>
      <ProfileHeader onClick={toggleOpen}>
        <SingleProfileImage
          img={dogProfile.profileImg}
          size={24}
          border={2}
          borderColor="#212121"
        />
        {dogProfile.name}
        {isOpen ? (
          <SvgSelector
            svg={"expandUp"}
            width={24}
            height={24}
            stroke={"#212121"}
          />
        ) : (
          <SvgSelector
            svg={"expandDown"}
            width={24}
            height={24}
            stroke={"#212121"}
          />
        )}
      </ProfileHeader>
      {isOpen && <DogProfileModal dogProfile={dogProfile} />}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 10px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 6px;
  cursor: pointer;
`;
