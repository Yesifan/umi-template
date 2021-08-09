import { Request, Response } from 'express';
import { AUTHORIZATION_KEY } from '../src/lib/constant';

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export function auth(req: Request, res: Response, data: any) {
  if (req.get(AUTHORIZATION_KEY)) {
    return res.send({
      data,
      success: true,
    });
  } else {
    return res.send({
      data: {
        isLogin: false,
      },
      errorCode: '401',
      errorMessage: '请先登录！',
      success: false,
    })
  }
}

export function pagination(req: Request, res: Response, data: any) {
  const current = req.query.current;
  const size = req.query.pageSize;
  const num_size = Number(size) || 10;
  const num_current = Number(current) || 1;
  const datas = [];
  for (let i = 0; i < num_size; i++) {
    datas.push(data)
  }
  const pagination: API.Pagination<typeof data> = {
    list: datas,
    total: 100,
    page: 100 / num_size,
    pageSize: num_size,
    current: num_current,
  };

  auth(req, res, pagination)
}