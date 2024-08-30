import type { MapItem } from '../interface';

const userList: MapItem[] = [
  {
    id: 1,
    name: 'userSystem',
    component: () => import('@/views/user/system/System.vue')
  },
  {
    id: 2,
    name: 'userRole',
    component: () => import('@/views/user/role/Role.vue')
  }
];

export default userList;
