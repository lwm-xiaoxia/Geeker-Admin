import { router } from '@/router/index';
import { __GLOBAL__ } from '@/constants/config';
import type { RouteRecordRaw } from 'vue-router';
import { ElNotification } from 'element-plus';
import { useUserStore } from '@/store/modules/user';
import { useAuthStore } from '@/store/modules/auth';
import type { AuthItem } from '@/store/interface';
import { getTarget } from '../constants';
import type { MapItem } from '../interface';

// 引入 views 文件夹下所有 vue 文件
// const modules = import.meta.glob('@/views/**/index.vue');

const createRouterItem = (authItem: AuthItem, item?: MapItem): RouteRecordRaw => {
  const { permName, router } = authItem;
  const { component, name, ...meta } = item || {};
  return {
    name,
    path: router,
    component: component || (() => import('@/views/empty/Empty.vue')),
    meta: { ...meta, title: permName }
  };
};

/**
 * @description 初始化动态路由
 */
export const initDynamicRouter = async () => {
  await useAuthStore().fetchAuthList();
  const { authList } = useAuthStore();
  if (!authList.length) {
    ElNotification({
      title: '无权限访问',
      message: '当前账号无任何菜单权限，请联系系统管理员！',
      type: 'warning',
      duration: 3000
    });
    useUserStore().setToken('');
    router.replace(__GLOBAL__.logonUrl);
    return Promise.reject('权限列表为空');
  }
  authList.forEach(item => {
    const target = getTarget(item.id);
    const routerItem = createRouterItem(item, target);
    if (target?.isFull) {
      router.addRoute(routerItem);
    } else {
      router.addRoute('layout', routerItem);
    }
  });
};
