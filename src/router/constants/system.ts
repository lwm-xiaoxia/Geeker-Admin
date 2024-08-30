import type { MapItem } from '../interface';

const systemList: MapItem[] = [
  {
    id: 3,
    name: 'systemMenu',
    component: () => import('@/views/system/menu/Menu.vue')
  },
  {
    id: 18,
    name: 'systemLang',
    component: () => import('@/views/system/lang/Lang.vue')
  }
];

export default systemList;
