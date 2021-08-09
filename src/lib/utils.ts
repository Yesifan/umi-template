import { history } from 'umi';

import MenuIconMap from '@/icons/menus';
import { LOGIN_PATH } from '@/lib/constant';

export const loopMenuItem = (menus: API.Menu[]): API.Menu[] =>
  menus.map(({ icon, routes, ...item }) => ({
    ...item,
    icon: icon && MenuIconMap[icon as string],
    routes: routes && loopMenuItem(routes),
  }));

export function redirectLogin() {
  const { location } = history;
  // TODO: 添加redirect
  if (location.pathname !== LOGIN_PATH) {
    history.push(LOGIN_PATH);
  }
}