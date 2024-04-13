import FriendCard from "./FriendCard";

export default function FriendsContainer() {
  const friendList = [""];
  return (
    <ul>
      {friendList.map((friend) => (
        <li>
          <FriendCard />
        </li>
      ))}
    </ul>
  );
}
