import { geter } from '../request';
import { loopMenuItem } from '@/lib/utils';

export async function getMenus() {
  try {
    const menus = await geter<API.Menu[]>('/api/oauth/menus');
    return loopMenuItem(menus);
  } catch (e) {
    return []
  }
}

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser() {
  return geter<API.User>('/api/currentUser');
}