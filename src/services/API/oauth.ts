import { poster } from '../request';

/** 登录接口 POST /api/login/account */
export async function login() {
  return poster<API.User>('/api/user/login');
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin() {
  return poster<API.User>('/api/user/outLogin');
}