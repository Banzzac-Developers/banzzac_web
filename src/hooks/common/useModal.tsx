import { Modal } from "@models/common";
import { modalState } from "@recoil/index";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

export default function useModal() {
  const setModal = useSetRecoilState(modalState);

  const addModal = useCallback(
    (modalType: Modal) => {
      setModal((prev) => [...prev, modalType]);
    },
    [setModal],
  );

  const removeCurrentModal = useCallback(() => {
    setModal((prev) => prev.slice(0, -1));
  }, [setModal]);

  const clearModal = useCallback(() => {
    setModal([]);
  }, [setModal]);

  return { addModal, removeCurrentModal, clearModal };
}
