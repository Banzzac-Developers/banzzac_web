import { CSSObject } from "@emotion/react";

export interface DefaultModal {
  contents: React.ReactNode;
}

export interface Popup extends DefaultModal {
  buttonProps: {
    handleClick: () => void;
    text: string;
    style: CSSObject;
  }[];
}

export interface IMenuPopup {
  menuList: {
    handleClick: () => void;
    menu: React.ReactNode | string;
  }[];
}

export type ModalType = "fullscreen" | "tailModal" | "popup" | "menuPopup";
export type ModalProps = DefaultModal | Popup | IMenuPopup;

export interface Modal {
  type: ModalType;
  props: ModalProps;
}

export const isPopup = (
  modal: Modal,
): modal is { type: ModalType; props: Popup } => {
  return modal.type === "popup";
};

export const isFullScreen = (
  modal: Modal,
): modal is { type: ModalType; props: DefaultModal } => {
  return modal.type === "fullscreen";
};

export const isTailModal = (
  modal: Modal,
): modal is { type: ModalType; props: DefaultModal } => {
  return modal.type === "tailModal";
};
