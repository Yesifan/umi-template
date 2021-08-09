const ROUTES: API.Menu[] = [
  {
    path: '/welcome',
    name: '欢迎页',
    icon: 'smile',
  },
  {
    name: '表单页',
    icon: 'table',
    path: '/list',
  },
  {
    name: '用户管理',
    icon: 'table',
    routes: [{
      name: '用户管理',
      path: '/useradmin/usermanager',
    }]
  }
];

export default ROUTES;