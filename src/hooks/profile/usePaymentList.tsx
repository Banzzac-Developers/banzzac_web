import API from "@api/api";
import URLs from "@api/urls";
import { PaymentListData } from "@models/profile";
import { useCallback, useEffect, useState } from "react";

export default function usePaymentList(id: string) {
  const [data, setData] = useState<PaymentListData>();

  const fetchPayment = useCallback(async () => {
    const res: PaymentListData = await API.get(URLs.profile.fetchPayment(id));
    setData(res);
  }, []);

  useEffect(() => {
    fetchPayment();
  }, []);

  return { data };
}
