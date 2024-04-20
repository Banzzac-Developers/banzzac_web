import API from "@api/api";
import URLs from "@api/urls";
import { AddRefund } from "@models/profile";
import { useCallback } from "react";

export default function useAddRefund() {
  const addRefund = useCallback(async (refund: AddRefund) => {
    const res = await API.post(URLs.profile.addRefund, refund);
    return res;
  }, []);

  return { addRefund };
}
