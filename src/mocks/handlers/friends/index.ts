import { HttpResponse, http } from "msw";
import { favoriteFriendList, friendList } from "./data";

const fetchFriendList = http.get("/api/friend/list/:id", () => {
  const randIdx = Math.floor(Math.random() * friendList.length) + 1;
  return HttpResponse.json(friendList.slice(0, randIdx));
});

const deleteFriend = http.get("/api/friend/:id/delete/:friendId", () => {
  return HttpResponse.json();
});

const fetchFavoriteFriendList = http.get("/api/friend/favoriteList/:id", () => {
  const randIdx = Math.floor(Math.random() * favoriteFriendList.length) + 1;
  return HttpResponse.json(favoriteFriendList.slice(0, randIdx));
});

const addFavoriteFriend = http.get(
  "/api/friend/:id/friendFavorite/:friendId",
  () => {
    return HttpResponse.json();
  },
);

const deleteFavoriteFriend = http.get(
  "/api/friend/:id/friendUnFavorite/:friendId",
  () => {
    return HttpResponse.json();
  },
);

export default [
  fetchFriendList,
  deleteFriend,
  fetchFavoriteFriendList,
  addFavoriteFriend,
  deleteFavoriteFriend,
];
