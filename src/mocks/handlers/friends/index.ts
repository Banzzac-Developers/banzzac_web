import { HttpResponse, http } from "msw";
import { friendList } from "./data";

export default [
  http.get("/api/friend/list/:id", () => {
    return HttpResponse.json(friendList);
  }),
];
