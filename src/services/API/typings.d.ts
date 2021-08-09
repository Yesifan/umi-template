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
    errCode?: string,
    errMsg?: string
  }

  type Interface<D, E = null> = SuccessInterface<D> | ErrorInterface<E>;

  type User = {
    id: number,
    username: string,
    avatar: string,
    name: string,
    sex: number,
    phone: string,
    role: Role[],
    state: number,
    remark: string,
    creationTime?: string;
    lastmodificationTime?: string;
  };

  interface UserWithToken extends User {
    accessToken: string
  }

  type Role = {
    id: number,
    name: string
  }

  type Menu = {
    path: string,
    name: string,
    icon: string,
    routes: Menu[]
  }
}
