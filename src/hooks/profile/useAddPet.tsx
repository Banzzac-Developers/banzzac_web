import API from "@api/api";
import URLs from "@api/urls";
import { Pet } from "@models/profile";
import { useCallback } from "react";

export default function useAddPet(id: string) {
  const addPet = useCallback(async (pet: Pet) => {
    const res = await API.post(URLs.profile.addPet(id), pet);
    return res;
  }, []);

  return { addPet };
}
