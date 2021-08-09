import { Request, Response } from 'express';

import { AUTHORIZATION_KEY } from '../src/lib/constant';

export default {
  'GET /api/oauth/menus': (req: Request, res: Response) => {
    if (req.get(AUTHORIZATION_KEY)) {
      return res.send({
        success: true,
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
      });
    } else {
      return res.send({
        success: true,
        data: []
      });
    }
  }
};
