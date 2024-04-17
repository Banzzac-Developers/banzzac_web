import API from "@api/api";
import URLs from "@api/urls";
import { PetData } from "@models/profile";
import { useCallback, useEffect, useState } from "react";

export default function usePets(id: string) {
  const [data, setData] = useState<PetData>();

  const fetchPets = useCallback(async () => {
    const res: PetData = await API.get(URLs.profile.fetchPets(id));
    setData(res);
  }, []);

  useEffect(() => {
    fetchPets();
  }, []);

  return { data };
}
