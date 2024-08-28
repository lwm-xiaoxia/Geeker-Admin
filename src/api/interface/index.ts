import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";

export interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  loading?: boolean;
}
export type InterceptResponse<T = any> = AxiosResponse<Response<T>> & { config: CustomAxiosRequestConfig };

export interface Response<T = any> {
  code: number;
  msg: string;
  data: T;
  ts: number;
}

export type Api = <D, T>(url: string, params?: D, config?: CustomAxiosRequestConfig) => Promise<Response<T>>;
