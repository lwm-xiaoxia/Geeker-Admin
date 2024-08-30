import authMenuList from '@/assets/json/authMenuList.json';
import authButtonList from '@/assets/json/authButtonList.json';
import http from '@/api';

/**
 * @name 登录模块
 */
// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post('/auth/basic/admin/login', params);
};
export const authListApi = () => {
  return http.get('/admin/sys/permission/my/perms');
};

// 用户退出登录
export const logoutApi = () => {
  return http.post(`/logout`);
};
