import API from "@api/api";
import URLs from "@api/urls";
import { useCallback } from "react";

export default function useBlockFriend(id: string) {
  const addBlockfriend = useCallback(async (friendId: string) => {
    const res = API.get(URLs.friends.addBlockFriend(friendId));
    return res;
  }, []);

  const deleteBlockfriend = useCallback(async (friendId: string) => {
    const res = API.get(URLs.friends.deleteBlockFriend(friendId));
    return res;
  }, []);
  return { addBlockfriend, deleteBlockfriend };
}
