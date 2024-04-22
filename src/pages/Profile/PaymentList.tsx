import usePaymentList from "@hooks/profile/usePaymentList";
import { PayList, RefundStatusList } from "@containers/Profile/payment/PayList";
import useRefundList from "@hooks/profile/useRefundList";
import { useState } from "react";
import styled from "@emotion/styled";
import Seperator from "@components/Seperator";
import { PayStyledDiv } from "@containers/Profile/payment/Payment";

export default function PaymentListPage() {
  const { data: payList } = usePaymentList();
  const { data: refundList } = useRefundList();
  const [isClick, setIsClick] = useState<string[]>(["#A86efa", "#222"]);

  return (
    <>
      <div style={{ padding: "30px 24px 60px 24px" }}>
        <Text color={"#222"} isTitle={true}>
          매칭권 내역
        </Text>
        <Tab>
          <Text
            isTitle={false}
            onClick={() => setIsClick(["#A86efa", "#212121"])}
            color={isClick[0]}
          >
            구매내역
          </Text>
          <Text
            isTitle={false}
            onClick={() => setIsClick(["#212121", "#A86efa"])}
            color={isClick[1]}
          >
            환불내역
          </Text>
        </Tab>
        <Seperator height={46} />
        {isClick[0] === "#A86efa" && payList ? (
          <PayList payList={payList.data}></PayList>
        ) : isClick[1] === "#A86efa" && refundList ? (
          <RefundStatusList refundList={refundList.data}></RefundStatusList>
        ) : isClick[0] === "#A86efa" && !payList ? (
          <PayStyledDiv>구매내역이 없습니다</PayStyledDiv>
        ) : isClick[1] === "#A86efa" && !refundList ? (
          <PayStyledDiv>환불신청 내역이 없습니다</PayStyledDiv>
        ) : (
          isClick[0] === "#A86efa" && !payList && !refundList && <></>
        )}
      </div>
    </>
  );
}

const Tab = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Text = styled.div<{ color: String; isTitle: boolean }>`
  width: 100%;
  padding-bottom: 5%;
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: ${({ isTitle }) => (isTitle ? "13.5px" : "14.5px")};
  text-align: center;
  border-bottom: 0.5px solid
    ${({ isTitle, color }) => (isTitle ? "none" : color)};
`;
