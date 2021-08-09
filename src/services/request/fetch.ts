import axios from 'axios';
import type { AxiosRequestConfig, AxiosError } from 'axios';

import { redirectLogin } from '@/lib/utils';
import { ACCESS_TOKEN, SERVER_CODE, AUTHORIZATION_KEY } from '@/lib/constant';

export type RequestConfig = AxiosRequestConfig;

const request = axios.create({
  baseURL: BASE_URL,
})

// [axios-拦截器](https://axios-http.com/zh/docs/interceptors)
request.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    const { headers, ...rest } = config;
    return {
      ...rest,
      headers: {
        ...(headers || {}),
        [AUTHORIZATION_KEY]: JSON.parse(token)
      }
    }
  }
  return config
})

request.interceptors.response.use(
  // 2xx resolve
  (res) => {
    const response: API.Interface<any> = res.data;
    if (response.success) return response.data;
    if (response.errCode === SERVER_CODE.UN_AUTHORIZED) {
      redirectLogin()
    }
    return Promise.reject(response);
  },
  // outside 2xx reject
  (err) => {
    return Promise.reject((err as AxiosError).response?.data);
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
