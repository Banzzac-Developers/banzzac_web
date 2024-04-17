import FriendList from "@containers/friends/FriendList";
import ProfileCard from "@containers/friends/ProfileCard";
import styled from "@emotion/styled";
import Navigator from "@layouts/Navigator";
import SquareHeader from "@layouts/SquareHeader";
import { useState } from "react";

export default function Friends() {
  const [openMenu, setOpenMenu] = useState(false);

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
