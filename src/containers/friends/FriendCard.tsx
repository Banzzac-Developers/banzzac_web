import { DoubleProfileImage } from "@components/ProfileImage/ProfileImage";
import Mangu from "@assets/images/mangu.jpg";
import Mangu2 from "@assets/images/mangu2.jpg";
import styled from "@emotion/styled";
import { Friend } from "@models/friends";

export default function FriendCard({
  dogName,
  mnickname,
  mstatusMesaage,
}: Friend) {
  return (
    <Container>
      <Profile>
        <DoubleProfileImage
          size={48}
          border={3}
          borderColor="#fff"
          left={40}
          img={Mangu}
          img2={Mangu2}
        />
        <div style={{ width: "50px" }} />
        <div>
          <Name>{`${mnickname} | ${dogName}`}</Name>
          <StateMsg>{mstatusMesaage}</StateMsg>
        </div>
      </Profile>
    </Container>
  );
}

const Container = styled.div``;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #212121;
`;

const StateMsg = styled.div`
  color: #757575;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
`;
