import { CSSObject } from "@emotion/react";

interface DefaultModal {
  contents: React.ReactNode;
}

interface Popup extends DefaultModal {
  buttonProps: {
    handleClick: () => void;
    text: string;
    style: CSSObject;
  }[];
}

export type ModalType = "fullscreen" | "tailModal" | "popup" | "menuPopup";

export interface Modal {
  type: ModalType;
  props: DefaultModal | Popup;
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

export const isMenuPopup = (
  modal: Modal,
): modal is { type: ModalType; props: DefaultModal } => {
  return modal.type === "menuPopup";
};
