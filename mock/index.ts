import { Request, Response } from 'express';
import { AUTHORIZATION_KEY } from '../src/lib/constant';

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export function auth(req: Request, res: Response, success: any) {
  if (req.get(AUTHORIZATION_KEY)) {
    return res.send(success);
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