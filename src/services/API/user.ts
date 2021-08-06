import { request } from 'umi';

/** 发送验证码 POST /api/login/captcha */
export async function getMenus() {
  return request<{ data: API.Menu[] }>('/api/oauth/menus');
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser() {
  return request<{
    data: API.User;
  }>('/api/currentUser');
}