import { AxiosRequestConfig } from "axios";
import axiosInstance from "./interceptor";

export default class API {
  static get<T>(
    url: string,
    params?: Pick<AxiosRequestConfig, "params">,
    config?: Omit<AxiosRequestConfig, "params">,
  ): Promise<T> {
    const option: AxiosRequestConfig = {
      method: "get",
      url,
      params,
      ...config,
    };
    return axiosInstance(option);
  }

  static post<T, D>(
    url: string,
    params: T,
    config?: Omit<AxiosRequestConfig, "params">,
  ): Promise<D> {
    const option: AxiosRequestConfig = {
      method: "post",
      url,
      params,
      ...config,
    };
    return axiosInstance(option);
  }

  static put<T, D>(
    url: string,
    params: T,
    config?: Omit<AxiosRequestConfig, "params">,
  ): Promise<D> {
    const option: AxiosRequestConfig = {
      method: "put",
      url,
      params,
      ...config,
    };
    return axiosInstance(option);
  }

  static delete<T>(
    url: string,
    params: T,
    config?: Omit<AxiosRequestConfig, "params">,
  ) {
    const option: AxiosRequestConfig = {
      method: "delete",
      url,
      params,
      ...config,
    };
    return axiosInstance(option);
  }
}
