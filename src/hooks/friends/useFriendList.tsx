import API from "@api/api";
import URLs from "@api/urls";
import { Friend } from "@models/friends";
import { useCallback, useEffect, useState } from "react";

export default function useFriendList(id: string) {
  const [data, setData] = useState<Friend[]>();

  const fetchFriendList = useCallback(async () => {
    const res: Friend[] = await API.get(URLs.friends.fetchFriendList(id));
    setData(res);
  }, []);

  useEffect(() => {
    fetchFriendList();
  }, []);

  return { data };
}
