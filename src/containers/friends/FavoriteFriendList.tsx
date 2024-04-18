import { TEST_EMAIL } from "@constants/index";
import Text from "@components/Text";
import useFavoriteFriendList from "@hooks/friends/useFavoriteFriendList";
import FriendCard from "./FriendCard";
import styled from "@emotion/styled";
import { FontStyle } from "@utils/StyleUtil";

export default function FavoriteFriendList() {
  const { data: favoriteFriendList } = useFavoriteFriendList(TEST_EMAIL);

  if (!favoriteFriendList) return <></>;
  return (
    <Container>
      <StyledText {...FontStyle(14, 700, 20, "#9e9e9e")}>즐겨찾기</StyledText>
      <FriendListWrapper>
        {favoriteFriendList.map((favoriteFriend) => (
          <li>
            <FriendCard {...favoriteFriend} />
          </li>
        ))}
      </FriendListWrapper>
    </Container>
  );
}

const Container = styled.div`
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
