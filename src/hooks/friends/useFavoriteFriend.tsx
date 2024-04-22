import API from "@api/api";
import URLs from "@api/urls";
import { useCallback } from "react";

export default function useFavoriteFriend(id: string) {
  const addFavoriteFriend = useCallback(async (friendId: string) => {
    const res = API.get(URLs.friends.addFavoriteFriend(friendId));
    return res;
  }, []);

  const deleteFavoriteFriend = useCallback(async (friendId: string) => {
    const res = API.get(URLs.friends.deleteFavoriteFriend(friendId));
    return res;
  }, []);

  return { addFavoriteFriend, deleteFavoriteFriend };
}
