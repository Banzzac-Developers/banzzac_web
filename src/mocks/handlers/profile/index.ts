import { HttpResponse, http } from "msw";
import { petData, profile } from "./data";

export default [
  http.get("/api/profile/dog/:id", () => {
    return HttpResponse.json(petData);
  }),
  http.get("/api/profile/:id", () => {
    return HttpResponse.json(profile);
  }),
];
