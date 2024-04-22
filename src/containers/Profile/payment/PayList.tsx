import { PaymentList, RefundList } from "@models/profile";
import MatchingTicket from "@components/matchingTicket";

type Props = {
  payList: PaymentList[];
};

export function PayList({ payList }: Props) {
  return (
    <>
      {payList.map((data, i) => {
        return (
          <div key={i}>
            <MatchingTicket
              text1={`매칭권 ${data.quantity}개`}
              text2={`${data.approvedAtStr}`}
              afterPay={true}
            ></MatchingTicket>
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
              text1={`매칭권 ${data.quantity}개`}
              text2={`환불신청일 ${data.refundRequestDateStr}`}
              afterPay={true}
            ></MatchingTicket>
          </div>
        );
      })}
    </>
  );
}
