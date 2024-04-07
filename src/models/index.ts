export * from "./common";

export type HeaderIcon = "search" | "friendAdd" | "setting";

export type SvgIcon =
  | "chat"
  | "feed"
  | "friends"
  | "profile"
  | "search"
  | "setting"
  | "twinkle"
  | "userAdd"
  | "dogFace"
  | "face"
  | "close"
  | "fillTwinkle";

export type NavItem = { route: string; name: string; icon: SvgIcon };
