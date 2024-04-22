import Payment from "@containers/Profile/payment/Payment";
import styled from "@emotion/styled";
import SvgSelector from "@components/Svg/SvgSelector";
import { useState } from "react";

export default function PaymentPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div style={{ padding: "30px 24px 60px 24px" }}>
        <ExitButton onClick={() => setMenuOpen(!menuOpen)}>
          <SvgSelector svg="close" width={22} height={20} stroke="" />
        </ExitButton>
        <Payment></Payment>
      </div>
    </>
  );
}
const ExitButton = styled.div`
  position: absolute;
  top: 26px;
  right: 24px;
`;
