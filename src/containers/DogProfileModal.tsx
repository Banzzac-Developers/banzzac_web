import RoundButton from "@components/Button/RoundButton";
import { SingleProfileImage } from "@components/ProfileImage/ProfileImage";
import styled from "@emotion/styled";

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

export default function DogProfileModal({
  dogProfile,
}: {
  dogProfile: DogProfile;
}) {
  return (
    <ModalContainer>
      <SingleProfileImage
        img={dogProfile.profileImg}
        size={200}
        border={2}
        borderColor="#757575"
      />
      <ProfileDetails>
        <DetailItem>
          <DetailLabel>강아지 소개 한마디</DetailLabel>
          <DetailValue>dfdfasdf</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>나이</DetailLabel>
          <DetailValue>{dogProfile.age}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>이름</DetailLabel>
          <DetailValue>{dogProfile.name}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>몸무게</DetailLabel>
          <DetailValue>{dogProfile.weight}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>성별</DetailLabel>
          <DetailValue>{dogProfile.gender}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>중성화</DetailLabel>
          <DetailValue>{dogProfile.neutered}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>크기</DetailLabel>
          <DetailValue>{dogProfile.size}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>견종</DetailLabel>
          <DetailValue>{dogProfile.breed}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>성격</DetailLabel>
          <DetailValue>{dogProfile.personality}</DetailValue>
        </DetailItem>
        <DetailItem>
          <DetailLabel>활동량</DetailLabel>
          <DetailValue>{dogProfile.activityLevel}</DetailValue>
        </DetailItem>
      </ProfileDetails>
      <RoundButton
        backgroundColor="#212121"
        fill={true}
        title="X 반려견 삭제"
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  text-align: center;
`;

const ProfileDetails = styled.div`
  margin-top: 10px;
`;

const DetailItem = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-content: space-between;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: flex-start;
`;

const DetailLabel = styled.div`
  font-weight: bold;
`;

const DetailValue = styled.div`
  margin-left: 5px;
`;
