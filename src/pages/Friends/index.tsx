import FriendList from "@containers/friends/FriendList";
import ProfileCard from "@containers/friends/ProfileCard";
import styled from "@emotion/styled";
import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";

export default function Friends() {
  return (
    <>
      <SquareHeader
        title="친구"
        headerIcons={["search", "friendAdd", "setting"]}
      />
      <ProfileCard />
      <Divider />
      <FriendList />
      <Navigator />
    </>
  );
}

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #e0e0e0;
`;
