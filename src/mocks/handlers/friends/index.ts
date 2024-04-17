import { HttpResponse, http } from "msw";
import { friendList } from "./data";

const fetchFriendList = http.get("/api/friend/list/:id", () => {
  return HttpResponse.json(friendList);
});

const deleteFriend = http.get("/api/friend/:id/delete/:friendId", () => {
  return HttpResponse.json();
});

export default [fetchFriendList, deleteFriend];
