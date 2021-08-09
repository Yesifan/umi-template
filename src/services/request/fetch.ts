import axios from 'axios';

import type { AxiosRequestConfig, AxiosError } from 'axios';

export type RequestConfig = AxiosRequestConfig;

const request = axios.create({
  baseURL: BASE_URL,
})

request.interceptors.response.use(
  // 2xx resolve
  (res) => {
    const response: API.Interface<any> = res.data;
    if (response.success) return response.data;
    return Promise.reject(response);
  },
  // outside 2xx reject
  (err) => {
    return Promise.reject((err as AxiosError).response?.data.data);
  }
);

type Fetcher = <D>(
  url: string,
  data?: any,
  options?: AxiosRequestConfig
) => Promise<D>;

export const geter: Fetcher = (url, data, options = {}) => {
  const p_options = {
    ...options,
    params: data
  }
  return request.get(url, p_options);
};

export const poster: Fetcher = (url, data, options) => {
  return request.post(url, data, options);
};
