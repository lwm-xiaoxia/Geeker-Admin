import { defineStore } from 'pinia';
import { AuthState } from '@/store/interface';
import { authListApi } from '@/api/modules/login';
import { getFlatMenuList, getShowMenuList, getAllBreadcrumbList } from '@/utils';
import { getTree } from '../helper/persist';
import { getTarget } from '@/router/constants';

export const useAuthStore = defineStore({
  id: 'geeker-auth',
  state: (): AuthState => ({
    // 按钮权限列表
    authButtonList: {},
    // 菜单权限列表
    authMenuList: [],
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: '',
    authList: []
  }),
  getters: {
    // 按钮权限列表
    authButtonListGet: state => state.authButtonList,
    // 菜单权限列表 ==> 这里的菜单没有经过任何处理
    authMenuListGet: state => state.authMenuList,
    // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 isHide == true
    showMenuListGet: state => getShowMenuList(state.authList),
    // 菜单权限列表 ==> 扁平化之后的一维数组菜单，主要用来添加动态路由
    flatMenuListGet: state => getFlatMenuList(state.authMenuList),
    // 递归处理后的所有面包屑导航列表
    breadcrumbListGet: state => getAllBreadcrumbList(state.authMenuList),

    authListTree: state => getTree(state.authList, 0),
    menuListTree: state => {
      const menuList = state.authList.filter(item => !item.isHide);
      return getTree(menuList, 0);
    }
  },
  actions: {
    // Set RouteName
    async setRouteName(name: string) {
      this.routeName = name;
    },
    async fetchAuthList() {
      const { data = [] } = await authListApi();
      const list = data.filter(item => [1, 2].includes(item.permLevel));
      this.authList = list.map(item => {
        const { icon, isHide } = getTarget(item.id) || {};
        return { ...item, icon: icon || 'Setting', isHide };
      });
    }
  }
});
