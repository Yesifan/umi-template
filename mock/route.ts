export default {
  'GET /api/oauth/menus': {
    data: [
      {
        path: '/welcome',
        name: '欢迎页',
        icon: 'smile',
      },
      {
        name: '表单页',
        icon: 'table',
        path: '/list',
        component: './TableList',
      },
    ]
  },
};
