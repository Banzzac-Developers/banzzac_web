import { HttpResponse, http } from "msw";
import {
  deletePetResponse,
  petData,
  profile,
  updatePetResponse,
  updateUserResponse,
} from "./data";

export default [
  http.get("/api/profile/dog/:id", () => {
    return HttpResponse.json(petData);
  }),
  http.get("/api/profile/:id", () => {
    return HttpResponse.json(profile);
  }),
  http.get("/api/profile/dog/:id/delete/:name", () => {
    return HttpResponse.json(deletePetResponse);
  }),
  http.post("/api/profile/dog/:id/:name", () => {
    return HttpResponse.json(updatePetResponse);
  }),

  http.post("/api/profile/:id", () => {
    return HttpResponse.json(updateUserResponse);
  }),
];
