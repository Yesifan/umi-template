import { Random } from 'mockjs';
import { Request, Response } from 'express';

import { waitTime, auth } from './index';

import { AUTHORIZATION_KEY } from '../src/lib/constant';

const USER_INFO: API.User = {
  id: Random.natural(),
  username: Random.name(),
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  name: Random.name(),
  sex: 1,
  phone: '0752-268888888',
  role: [{ name: "asdf", id: 1 }],
  state: 1,
  remark: Random.string(),
  creationTime: Random.datetime(),
  lastmodificationTime: Random.datetime(),
}

const USER_WITH_ACCESS_TOEKN: API.UserWithToken = {
  ...USER_INFO,
  accessToken: Random.string(21)
}

const ROUTES = [
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
];

export default {
  // 支持值为 Object 和 Array
  'GET /api/user': (req: Request, res: Response) => {
    return auth(req, res, {
      success: true,
      data: USER_INFO,
    })
  },
  'POST /api/user/login': async (req: Request, res: Response) => {
    await waitTime(2000);
    res.send({
      success: true,
      data: USER_WITH_ACCESS_TOEKN
    });
  },
  'POST /api/user/outLogin': (req: Request, res: Response) => {
    res.send({ success: true });
  },
  'GET /api/user/menus': (req: Request, res: Response) => {
    if (req.get(AUTHORIZATION_KEY)) {
      return res.send({
        success: true,
        data: ROUTES
      });
    } else {
      return res.send({
        success: true,
        data: []
      });
    }
  }
};
