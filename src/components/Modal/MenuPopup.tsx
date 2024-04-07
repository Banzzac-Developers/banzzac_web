import DividerDefault from "@components/divider/divider";
import styled from "@emotion/styled";
import { IMenuPopup } from "@models/common";

import React from "react";

interface Props extends IMenuPopup {
  pos: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
}

export default function MenuPopup({ menuList, pos }: Props) {
  return (
    <Container pos={pos}>
      {menuList.map(({ menu, handleClick }, idx) => (
        <React.Fragment key={`${menu}`}>
          <li>
            <button onClick={handleClick}>{menu}</button>
          </li>
          {idx !== menuList.length - 1 && <DividerDefault width="100%" />}
        </React.Fragment>
      ))}
    </Container>
  );
}

const Container = styled.ul<{
  pos: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
}>`
  width: 228px;
  border-radius: 12px;
  box-shadow: 0px 0px 32px 0px #00000033;
  position: absolute;
  top: ${({ pos }) => `${pos.top}px`};
  left: ${({ pos }) => `${pos.left}px`};
  right: ${({ pos }) => `${pos.right}px`};
  bottom: ${({ pos }) => `${pos.bottom}px`};

  li {
    padding: 8px 16px;
  }
`;
