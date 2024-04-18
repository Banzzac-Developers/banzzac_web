import API from "@api/api";
import URLs from "@api/urls";
import { useCallback } from "react";

export default function useDeleteFriend(id: string) {
  const deleteFriend = useCallback(async (friendId: string) => {
    const res = await API.get(URLs.friends.deleteFriend(id, friendId));
    return res;
  }, []);
  return { deleteFriend };
}
