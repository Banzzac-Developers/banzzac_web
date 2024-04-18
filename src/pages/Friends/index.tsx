import { TEST_EMAIL } from "@constants/index";
import FriendList from "@containers/friends/FriendList";
import FriendMenu from "@containers/friends/FriendMenu";
import ProfileCard from "@containers/friends/ProfileCard";
import styled from "@emotion/styled";
import useFriendList from "@hooks/friends/useFriendList";
import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";
import { useState } from "react";

export default function Friends() {
  const [openMenu, setOpenMenu] = useState(false);

  const { data: friendList } = useFriendList(TEST_EMAIL);

  if (!friendList) return <></>;

  return (
    <>
      <SquareHeader
        title="친구"
        headerIcons={[
          {
            icon: "search",
            onClick: () => {},
          },
          {
            icon: "friendAdd",
            onClick: () => {},
          },
          {
            icon: "setting",
            onClick: () => setOpenMenu(!openMenu),
          },
        ]}
      />
      {openMenu && <FriendMenu friendList={friendList} />}
      <ProfileCard />
      <Divider />
      <FriendList friendList={friendList} />
      <Navigator />
    </>
  );
}

const Divider = styled.div`
  width: 100%;
  border-top: 1px solid #e0e0e0;
`;
