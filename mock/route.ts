export default {
  'GET /api/oauth/menus': [
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
        },
      ],
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
      component: './TableList',
    },
  ],
};
