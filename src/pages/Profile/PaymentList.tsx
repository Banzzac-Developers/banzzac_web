import { TEST_EMAIL } from "@constants/index";
import usePaymentList from "@hooks/profile/usePaymentList";
import PayList from "@containers/Profile/payment/PaytList";

export default function PaymentListPage() {
  const { data: payList } = usePaymentList(TEST_EMAIL);

  if (!payList) return <></>;

  return (
    <>
      <PayList payList={payList.data}></PayList>
    </>
  );
}
