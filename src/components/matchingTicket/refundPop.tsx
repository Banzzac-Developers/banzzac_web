import InputDefault from "@components/Input";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useAddRefund from "@hooks/profile/useAddRefund";
import useModal from "@hooks/common/useModal";
import { AddRefund, defaultAddRefund } from "@models/profile";

type Props = {
  orderId: number;
};

export default function RefundPop({ orderId }: Props) {
  const [refundInfo, setRefundInfo] = useState<AddRefund>(defaultAddRefund);
  const { addRefund } = useAddRefund();
  const { removeCurrentModal } = useModal();
  const handleAddRefund = () => {
    addRefund(refundInfo);
    removeCurrentModal();
  };
  useEffect(() => {
    setRefundInfo((prev) => ({
      ...prev,
      partnerOrderId: Number(orderId),
    }));
  }, []);
  return (
    <>
      <Container>
        <InputDefault
          title="환불사유를 입력하세요"
          placeholder=""
          width="100%"
          id="reason"
          value={refundInfo.reason}
          onChange={(e) =>
            setRefundInfo((prev) => ({
              ...prev,
              reason: String(e.target.value),
            }))
          }
        />
        <button
          onClick={handleAddRefund}
          style={{
            borderTop: "1px solid rgba(60, 60, 67, 0.36)",
            paddingTop: "20px",
            width: "83%",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: "5",
          }}
        >
          확인
        </button>
      </Container>
    </>
  );
}
const Container = styled.div`
  padding: 0 20px;
`;

const CheckButton = styled.button`
  border-top: "1px solid rgba(60, 60, 67, 0.36)";
  padding-top: "20px";
  width: "100%";
  height: "30px";
  display: "flex";
  justify-content: "center";
  align-items: "center";
`;
