import API from "@api/api";
import URLs from "@api/urls";
import { useCallback } from "react";

export default function useFavoriteFriend(id: string) {
  const addFavoriteFriend = useCallback(async (friendId: string) => {
    const res = API.get(URLs.friends.addFavoriteFriend(id, friendId));
    return res;
  }, []);

  const deleteFavoriteFriend = useCallback(async (friendId: string) => {
    const res = API.get(URLs.friends.deleteFavoriteFriend(id, friendId));
    return res;
  }, []);

  return { addFavoriteFriend, deleteFavoriteFriend };
}
