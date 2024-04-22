import { DoubleProfileImage } from "@components/ProfileImage/ProfileImage";
import Mangu from "@assets/images/mangu.jpg";
import Mangu2 from "@assets/images/mangu2.jpg";
import styled from "@emotion/styled";
import { Friend } from "@models/friends";
import SvgSelector from "@components/Svg/SvgSelector";
import useFavoriteFriend from "@hooks/friends/useFavoriteFriend";
import { TEST_EMAIL } from "@constants/index";
import useModal from "@hooks/common/useModal";
import ProfileDetailModal from "@containers/common/ProfileDetailModal";
import Seperator from "@components/Seperator";

export default function FriendCard({
  dogName,
  mnickname,
  mstatusMesaage,
  block,
  friendId,
}: Friend) {
  const { addModal } = useModal();
  const { addFavoriteFriend, deleteFavoriteFriend } =
    useFavoriteFriend(TEST_EMAIL);

  const handleStarButton = (block: number, friendId: string) => {
    if (block === 2) {
      deleteFavoriteFriend(friendId);
    } else {
      addFavoriteFriend(friendId);
    }
  };

  const showFriendDetail = () => {
    addModal({
      type: "fullscreen",
      props: {
        contents: (
          <ModalContainer>
            <ProfileDetailModal.ProfileDetail />
            <Seperator height={25} />
            <ProfileDetailModal.BottomButton />
          </ModalContainer>
        ),
        hasCloseButton: true,
      },
    });
  };

  return (
    <Container>
      <Profile onClick={showFriendDetail}>
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
      <button onClick={() => handleStarButton(block, friendId)}>
        <SvgSelector
          svg={block === 2 ? "filledStar" : "star"}
          stroke="#212121"
          width={24}
          height={24}
        />
      </button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.button`
  text-align: left;
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

const ModalContainer = styled.div`
  padding: 26px;
`;
