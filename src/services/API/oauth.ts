import { request } from 'umi';

/** 登录接口 POST /api/login/account */
export async function login() {
  return request<{
    data: API.User;
  }>('/api/user/login', {
    method: 'POST',
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin() {
  return request<{
    data: API.User;
  }>('/api/user/outLogin', {
    method: 'POST'
  });
}