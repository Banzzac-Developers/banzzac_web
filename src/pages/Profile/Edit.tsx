import ProfileEdit from "@containers/Profile/edit/ProfileEdit";
import Collapsible from "@components/Collapsible/Collapsible";
import PetEdit from "@containers/Profile/edit/PetEdit";
import petImg from "@assets/images/pet2.jpeg";
import React from "react";
import styled from "@emotion/styled";

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
    <>
      <ProfileEdit />
      <ul>
        {pets.map((pet) => (
          <React.Fragment key={pet.name}>
            <li key={pet.name}>
              <Collapsible dogProfile={pet} contents={<PetEdit />} />
            </li>
            <Divider />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #757575;
`;
