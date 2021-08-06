import { request } from 'umi';

/** 发送验证码 POST /api/login/captcha */
export async function getMenus() {
  return request<API.Menu[]>('/api/oauth/menus');
}