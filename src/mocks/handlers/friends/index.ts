import { HttpResponse, http } from "msw";
import { favoriteFriendList, friendList } from "./data";

const fetchFriendList = http.get("/api/friend/list/:id", () => {
  return HttpResponse.json(friendList);
});

const deleteFriend = http.get("/api/friend/:id/delete/:friendId", () => {
  return HttpResponse.json();
});

const fetchFavoriteFriendList = http.get("/api/friend/favoriteList/:id", () => {
  return HttpResponse.json(favoriteFriendList);
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
