import { Friend } from "@models/friends";
import { atom } from "recoil";

export const friendListState = atom<Friend[]>({
  key: "friendListState",
  default: undefined,
});

export const favoriteFriendListState = atom<Friend[]>({
  key: "favoriteFriendListState",
  default: undefined,
});
