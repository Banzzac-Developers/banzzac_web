export * from "./common";
export * from "./chat";

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
  | "expandUp"
  | "expandDown"
  | "close"
  | "fillTwinkle"
  | "payment"
  | "paymentHistory";

export type NavItem = { route: string; name: string; icon: SvgIcon };
