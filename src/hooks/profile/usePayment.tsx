import API from "@api/api";
import URLs from "@api/urls";
import {
  PaymentApprove,
  PaymentReady,
  defaultPaymentApprove,
} from "@models/profile";
import { useCallback, useState } from "react";

export default function usePayment() {
  const [data, setData] = useState<PaymentApprove>(defaultPaymentApprove);

  const payment = useCallback(async (payment: PaymentReady) => {
    const res: PaymentApprove = await API.post(
      URLs.profile.addPayment,
      payment,
    );
    setData(res);
  }, []);

  return { data, payment };
}
