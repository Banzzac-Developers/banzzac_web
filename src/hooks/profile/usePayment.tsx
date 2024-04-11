import API from "@api/api";
import URLs from "@api/urls";
import { PaymentInfo } from "@models/Profile";
import { useEffect, useState } from "react";

export default function usePayment(payInfo: PaymentInfo) {
  const [data, setData] = useState<any>();

  const requestPayment = async () => {
    const res: any = await API.post(URLs.profile.payment, payInfo);

    setData(res.next_redirect_pc_url);
  };

  //   useEffect(() => {
  //     requestPayment();
  //   }, []);

  return { data, requestPayment };
}
