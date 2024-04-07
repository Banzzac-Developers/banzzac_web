import { useRecoilValue } from "recoil";
import styled from "@emotion/styled";

import { modalState } from "@recoil/index";
import useModal from "@hooks/common/useModal";
import FullScreenModal from "./FullScreenModal";
// import TailModal from "./TailModal";
import Popup from "./Popup";
import { isFullScreen, isPopup } from "@models/common";

export default function ModalRenderer() {
  const modals = useRecoilValue(modalState);
  const { removeCurrentModal } = useModal();

  return (
    <Container>
      <Background onClick={removeCurrentModal} />
      {modals.map((modal) => {
        if (isPopup(modal)) {
          const { props, type } = modal;
          return (
            <Popup
              key={type}
              buttonProps={props.buttonProps}
              contents={props.contents}
            />
          );
        }
        if (isFullScreen(modal))
          return (
            <FullScreenModal key={modal.type} contents={modal.props.contents} />
          );
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
