import { HttpResponse, http } from "msw";
import chatHandlers from "./chat";

export default [
  http.get("/todo", () => {
    return HttpResponse.json(["eat", "drink", "sleep"]);
  }),
  ...chatHandlers,
];
