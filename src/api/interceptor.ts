import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleReqFulfilled = async (config: InternalAxiosRequestConfig) => {
  // authorize
  return config;
};

const handleReqError = (err: any) => {
  return Promise.reject(err);
};

const handleResFulfilled = (res: AxiosResponse<any, any>) => {
  return res.data;
};

const handleResError = (err: any) => {
  return Promise.reject(err);
};

axiosInstance.interceptors.request.use(handleReqFulfilled, handleReqError);
axiosInstance.interceptors.response.use(handleResFulfilled, handleResError);

export default axiosInstance;
