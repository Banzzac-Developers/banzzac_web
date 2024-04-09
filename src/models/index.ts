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
  | "fillTwinkle"
  | "expandUp"
  | "expandDown";
;

export type NavItem = { route: string; name: string; icon: SvgIcon };
