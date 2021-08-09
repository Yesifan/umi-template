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

  type Pagination<D> = {
    list: D[],
    page: number,
    pageSize: number,
    total: number,
    current: number,
  }

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
    name: string,
    icon?: string,
    path?: string,
    routes?: Menu[]
  }
}
