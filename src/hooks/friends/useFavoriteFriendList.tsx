import API from "@api/api";
import URLs from "@api/urls";
import { Friend } from "@models/friends";
import { useCallback, useEffect, useState } from "react";

export default function useFavoriteFriendList(id: string) {
  const [data, setData] = useState<Friend[]>();

  const fetchFavoriteFriendList = useCallback(async () => {
    const res: Friend[] = await API.get(URLs.friends.fetchFavoriteFriendList);
    setData(res);
  }, []);

  useEffect(() => {
    fetchFavoriteFriendList();
  }, []);

  return { data };
}
