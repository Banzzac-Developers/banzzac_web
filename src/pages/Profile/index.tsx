import Navigator from "@layouts/Navigator";
import axios from "axios";
import usePayment from "@hooks/profile/usePayment";

export default function Profile() {
  const payInfo = {
    partnerOrderId: 3238113,
    partnerUserId: "zkdlwjsxm@naver.com",
    quantity: 56,
    totalAmount: 5600,
  };
  const { requestPayment, data } = usePayment(payInfo);
  return (
    <>
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        결제
      </button>
      <Navigator></Navigator>
    </>
  );
}
