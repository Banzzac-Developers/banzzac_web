import ModalRenderer from "@components/Modal/ModalRenderer";
import { modalState } from "@recoil/index";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import TokenInitialize from "./TokenInitialize";

export default function MainLayout() {
  const modals = useRecoilValue(modalState);

  return (
    <>
      {modals.length !== 0 && <ModalRenderer />}
      <TokenInitialize />
      <Outlet />
    </>
  );
}
