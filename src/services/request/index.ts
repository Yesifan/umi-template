import { useMemo } from 'react';
import useSWR from 'swr';
import type { SWRResponse } from 'swr';

import { geter, poster } from './fetch';
import type { RequestConfig } from './fetch';

export { geter, poster } from './fetch';

interface Response<D, E> extends Omit<SWRResponse<D, E>, 'error'> {
  error: API.ErrorInterface<E>,
  isLoading: boolean;
}

type MySWR = <D = true, E = undefined>(
  url: string | null,
  data?: any,
  options?: RequestConfig
) => Response<D, E>;

export const useMySWR: MySWR = (url, data, options) => {
  const input = useMemo(
    () => (url ? [url, data, options] : null),
    [url, data, options]
  );
  const { data: res, error, ...rest } = useSWR<any, any>(input, geter);

  return {
    data: res,
    error,
    isLoading: !error && !data,
    ...rest,
  };
};

export const usePostSWR: MySWR = (url, data, options) => {
  const input = useMemo(
    () => (url ? [url, data, options] : null),
    [url, data, options]
  );
  const { data: res, error, ...rest } = useSWR<any, any>(input, poster);

  return {
    data: res,
    error,
    isLoading: !error && !data,
    ...rest,
  };
};

export default useMySWR;
