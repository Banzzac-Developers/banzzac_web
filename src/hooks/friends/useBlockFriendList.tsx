import API from "@api/api";
import URLs from "@api/urls";
import { Friend } from "@models/friends";
import { useCallback, useEffect, useState } from "react";

export default function useBlockFriendList() {
  const [data, setData] = useState<Friend[]>();

  const fetchBlockFriendList = useCallback(async () => {
    const res: Friend[] = await API.get(URLs.friends.fetchBlockFriendList);
    setData(res);
  }, []);

  useEffect(() => {
    fetchBlockFriendList();
  }, []);

  return { data };
}
