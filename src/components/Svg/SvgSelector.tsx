import Chat from "@assets/svg/Chat.svg?react";
import Feed from "@assets/svg/Feed.svg?react";
import Friends from "@assets/svg/Friends.svg?react";
import Profile from "@assets/svg/Profile.svg?react";
import Search from "@assets/svg/Search.svg?react";
import Setting from "@assets/svg/Setting.svg?react";
import Twinkle from "@assets/svg/Twinkle.svg?react";
import UserAdd from "@assets/svg/User_Add.svg?react";
import { SvgIcon } from "@models/index";

type Props = {
  svg: SvgIcon;
  width: number;
  height: number;
  stroke: string;
};

export default function SvgSelector({ svg, width, height, stroke }: Props) {
  switch (svg) {
    case "chat":
      return <Chat width={width} height={height} stroke={stroke} />;
    case "feed":
      return <Feed width={width} height={height} stroke={stroke} />;
    case "friends":
      return <Friends width={width} height={height} stroke={stroke} />;
    case "profile":
      return <Profile width={width} height={height} stroke={stroke} />;
    case "search":
      return <Search width={width} height={height} stroke={stroke} />;
    case "setting":
      return <Setting width={width} height={height} stroke={stroke} />;
    case "twinkle":
      return <Twinkle width={width} height={height} stroke={stroke} />;
    case "userAdd":
      return <UserAdd width={width} height={height} stroke={stroke} />;
    default:
      return <div />;
  }
}