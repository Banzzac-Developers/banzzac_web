import useFriendList from "@hooks/friends/useFriendList";
import FriendCard from "./FriendCard";
import { TEST_EMAIL } from "@constants/index";
import styled from "@emotion/styled";
import Text from "@components/Text";
import { FontStyle } from "@utils/StyleUtil";

export default function FriendList() {
  const { data: friendList } = useFriendList(TEST_EMAIL);

  if (!friendList) return <></>;

  return (
    <Container>
      <StyledText
        {...FontStyle(14, 700, 20, "#9e9e9e")}
      >{`친구 ${friendList.length}`}</StyledText>
      <FriendListWrapper>
        {friendList.map((friend) => (
          <li key={friend.mnickname}>
            <FriendCard {...friend} />
          </li>
        ))}
      </FriendListWrapper>
    </Container>
  );
}

const Container = styled.ul`
  padding: 0 20px 0 24px;
`;

const StyledText = styled(Text)`
  padding: 8px 0;
`;

const FriendListWrapper = styled.ul`
  li {
    padding: 8px 0;
  }
`;
