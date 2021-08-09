import MenuIconMap from '@/icons/menus';

export const loopMenuItem = (menus: API.Menu[]): API.Menu[] =>
  menus.map(({ icon, routes, ...item }) => ({
    ...item,
    icon: icon && MenuIconMap[icon as string],
    routes: routes && loopMenuItem(routes),
  }));