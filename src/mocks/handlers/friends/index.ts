import { HttpResponse, http } from "msw";
import { friendList } from "./data";

const fetchFriendList = http.get("/api/friend/list/:id", () => {
  return HttpResponse.json(friendList);
});

export default [fetchFriendList];
