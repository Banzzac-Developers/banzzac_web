import { Friend } from "@models/friends";
import FriendCard from "./FriendCard";

type Props = {
  friendList: Friend[];
};

export default function EditFriendList({ friendList }: Props) {
  return (
    <ul>
      {friendList.map((friend) => (
        <li>
          <FriendCard {...friend} />
        </li>
      ))}
    </ul>
  );
}
