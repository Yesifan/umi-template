import { request } from 'umi';
import MenuIconMap from '@/icons/menus';

/** 发送验证码 POST /api/login/captcha */
export async function getMenus() {
  const loopMenuItem = (menus: API.Menu[]): API.Menu[] =>
    menus.map(({ icon, routes, ...item }) => ({
      ...item,
      icon: icon && MenuIconMap[icon as string],
      routes: routes && loopMenuItem(routes),
    }));
  const menus = await request<{ data: API.Menu[] }>('/api/oauth/menus');
  if (menus.data) {
    menus.data = loopMenuItem(menus.data)
  }
  return menus
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser() {
  return request<{
    data: API.User;
  }>('/api/currentUser');
}