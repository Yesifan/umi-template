import { Request, Response } from 'express';
import { waitTime, auth } from './index';

const USER_INFO: API.User = {
  id: 1,
  username: 'Serati Ma',
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  name: '达摩',
  sex: 1,
  phone: '0752-268888888',
  role: [{ name: "asdf", id: 1 }],
  state: 1,
  remark: '',
  creationTime: '',
  lastmodificationTime: '',
}

const USER_WITH_ACCESS_TOEKN: API.UserWithToken = {
  ...USER_INFO,
  accessToken: 'asdfasdf'
}

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
  }
};
