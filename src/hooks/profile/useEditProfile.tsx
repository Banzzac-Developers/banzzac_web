import API from "@api/api";
import URLs from "@api/urls";
import { Pet, Profile } from "@models/profile";
import { useCallback } from "react";

export default function useEditProfile(id: string) {
  const updateUser = useCallback(async (profile: Profile) => {
    const res = await API.post(URLs.profile.updateProfile(id), profile);
    return res;
  }, []);

  const updatePet = useCallback(async (pet: Pet) => {
    const res = await API.post(URLs.profile.updatePet(id, pet.name), pet);
    return res;
  }, []);

  const deletePet = useCallback(async (name: string) => {
    const res = await API.get(URLs.profile.deletePet(id, name));
    return res;
  }, []);

  return { updateUser, updatePet, deletePet };
}
