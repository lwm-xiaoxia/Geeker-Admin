import { RouteRecordRaw } from 'vue-router';
import { __GLOBAL__ } from '@/constants/config';

/**
 * staticRouter (静态路由)
 */
export const staticRouter: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: __GLOBAL__.homeUrl
  },
  {
    path: __GLOBAL__.logonUrl,
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/layouts/index.vue'),
    redirect: __GLOBAL__.homeUrl,
    children: []
  }
];

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/components/ErrorMessage/403.vue'),
    meta: {
      title: '403页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/ErrorMessage/404.vue'),
    meta: {
      title: '404页面'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/components/ErrorMessage/500.vue'),
    meta: {
      title: '500页面'
    }
  },
  // Resolve refresh page, route warnings
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/components/ErrorMessage/404.vue')
  }
];
