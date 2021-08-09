import { PageLoading } from '@ant-design/pro-layout';
import { history } from 'umi';
import type { RunTimeLayoutConfig } from 'umi';

import RightContent from '@/components/RightContent';
import { currentUser as queryCurrentUser } from './services/API/user';
import { getMenus } from './services/API/user';
import { LOGIN_PATH } from './lib/constant';

const defaultRouter = [
  {
    name: 'login',
    path: LOGIN_PATH,
    hideInMenu: true,
    headerRender: false,
    menuRender: false
  },
]

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{ currentUser?: API.User }> {
  // 如果不是登录页面
  if (history.location.pathname !== LOGIN_PATH) {
    const currentUser = await queryCurrentUser();
    return { currentUser };
  }
  return {};
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      // TODO: 添加redirect
      if (!initialState?.currentUser && location.pathname !== LOGIN_PATH) {
        history.push(LOGIN_PATH);
      }
    },
    menu: {
      // initialState.currentUser 中包含了所有用户信息
      params: {
        userId: initialState?.currentUser?.id,
      },
      request: async () => {
        try {
          const menuData = await getMenus();
          return [...defaultRouter, ...menuData]
        } catch (e) {
          return defaultRouter;
        }
      },
    },
    // 自定义 403 页面
    unAccessible: <div>unAccessible</div>,
  };
};
