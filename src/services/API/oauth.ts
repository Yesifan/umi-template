import { ACCESS_TOKEN } from '@/lib/constant';
import { useLocalStorageState } from 'ahooks';
import { useCallback } from 'react';
import { useModel } from 'umi';

import { poster } from '../request';

/** 登录接口 POST /api/login/account */
export async function login(username?: string, password?: string) {
  return poster<API.UserWithToken>('/api/user/login', { username, password });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin() {
  return poster('/api/user/outLogin');
}

export function useLogin() {
  const { setInitialState } = useModel('@@initialState');
  const [, setToken] = useLocalStorageState<string>(ACCESS_TOKEN);

  return useCallback(async (username?: string, password?: string) => {
    try {
      const user = await login(username, password);
      setToken(user.accessToken);
      await setInitialState((s) => ({ ...s, currentUser: user }));
      return { user }
    } catch (e) {
      return { error: e as API.ErrorInterface }
    }
  }, [setInitialState, setToken])
}