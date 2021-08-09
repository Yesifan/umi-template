import { Random } from 'mockjs';
import { Request, Response } from 'express';

import ROUTES from './routes';
import { waitTime, auth, pagination } from './index';

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

export default {
  // 获取当前用户信息
  'GET /api/user': (req: Request, res: Response) => {
    return auth(req, res, USER_INFO)
  },
  // 用户分页
  'GET /api/user/page': (req: Request, res: Response) => {
    return pagination(req, res, USER_INFO)
  },

  // 登录，登出
  'POST /api/user/login': async (req: Request, res: Response) => {
    await waitTime(2000);
    res.send(USER_WITH_ACCESS_TOEKN);
  },
  'POST /api/user/outLogin': (req: Request, res: Response) => {
    res.send(true);
  },

  // 路由
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
