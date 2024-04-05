export type HeaderIcon = "search" | "friendAdd" | "setting";
import { Svg } from "@components/Svg/SvgSelector";

export const navList: { route: string; icon: Svg; name: string }[] = [
  {
    route: "/friends",
    icon: "friends",
    name: "친구",
  },
  {
    route: "/chat",
    icon: "chat",
    name: "채팅",
  },
  {
    route: "/search",
    icon: "search",
    name: "탐색",
  },
  {
    route: "/matching",
    icon: "feed",
    name: "매칭",
  },
  {
    route: "/profile",
    icon: "profile",
    name: "내 프로필",
  },
];
