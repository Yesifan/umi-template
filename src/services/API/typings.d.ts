// @ts-ignore
/* eslint-disable */

declare namespace API {
  type SuccessInterface<D> = {
    success: true,
    data: D,
  };

  type ErrorInterface<E = null> = {
    data: E,
    success: false,
    errCode?: number,
    errMsg?: string
  }

  type Interface<D, E = null> = SuccessInterface<D> | ErrorInterface<E>;

  type User = {
    name: string;
    accessToken: string,
    avatar?: string;
    userid: string;
    email: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type Menu = {
    path: string,
    name: string,
    icon: string,
    routes: Menu[]
  }

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };
}
