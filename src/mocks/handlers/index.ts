import { HttpResponse, http } from "msw";
import chatHandlers from "./chat";
import profileHandlers from "./profile";
import friendsHandlers from "./friends";

export default [
  http.get("/todo", () => {
    return HttpResponse.json(["eat", "drink", "sleep"]);
  }),
  ...chatHandlers,
  ...profileHandlers,
  ...friendsHandlers,
];
