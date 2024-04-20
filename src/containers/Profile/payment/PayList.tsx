import { PaymentList, RefundList } from "@models/profile";
import MatchingTicket from "@components/matchingTicket";
import Seperator from "@components/Seperator";
import DividerDefault from "@components/Divider/Divider";
import { PayButtonContainer, PayStyledDiv } from "./Payment";
import useModal from "@hooks/common/useModal";
import RefundPop from "@components/matchingTicket/refundPop";

type Props = {
  payList: PaymentList[];
};

export function PayList({ payList }: Props) {
  const { addModal } = useModal();
  const handleRefund = (orderId: number) => {
    addModal({
      type: "popup",
      props: {
        contents: <RefundPop orderId={orderId} />,
        buttonProps: [],
      },
    });
  };
  return (
    <>
      {payList.map((data, i) => {
        return (
          <div key={i}>
            <PayStyledDiv>
              <MatchingTicket
                semiTitle={`매칭권 ${data.quantity}개`}
                eventDate={`${data.approvedAtStr}`}
                afterPay={true}
              ></MatchingTicket>
              <PayButtonContainer
                onClick={() => handleRefund(data.partnerOrderId)}
              >
                환불신청
              </PayButtonContainer>
            </PayStyledDiv>
            <Seperator height={7} />
            <DividerDefault width={"100%"} />
            <Seperator height={7} />
          </div>
        );
      })}
    </>
  );
}

type Props2 = {
  refundList: RefundList[];
};

export function RefundStatusList({ refundList }: Props2) {
  return (
    <>
      {refundList.map((data, i) => {
        return (
          <div key={i}>
            <MatchingTicket
              semiTitle={`매칭권 ${data.quantity}개`}
              eventDate={`환불신청일 ${data.refundRequestDateStr}`}
              afterPay={true}
            ></MatchingTicket>
            <Seperator height={7} />
            <DividerDefault width={"100%"} />
            <Seperator height={7} />
          </div>
        );
      })}
    </>
  );
}
