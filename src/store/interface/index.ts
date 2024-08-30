export type LanguageType = 'zh' | 'en';

/* GlobalState */
export interface GlobalState {
  language: LanguageType;
  maximize: boolean;
  primary: string;
  isDark: boolean;
  isGrey: boolean;
  isWeak: boolean;
  isCollapse: boolean;
  accordion: boolean;
  watermark: boolean;
  breadcrumb: boolean;
  breadcrumbIcon: boolean;
  tabs: boolean;
  tabsIcon: boolean;
}

/* UserState */
export interface UserState {
  token: string;
  userInfo: { name: string };
}

/* tabsMenuProps */
export interface TabsMenuProps {
  icon: string;
  title: string;
  path: string;
  name: string;
  close: boolean;
  isKeepAlive: boolean;
}

/* TabsState */
export interface TabsState {
  tabsMenuList: TabsMenuProps[];
}

/* AuthState */
export interface AuthState {
  routeName: string;
  authButtonList: {
    [key: string]: string[];
  };
  authMenuList: Menu.MenuOptions[];
  authList: AuthItem[];
}

/* KeepAliveState */
export interface KeepAliveState {
  keepAliveName: string[];
}

export interface AuthItem {
  id: number;
  router: string; // 地址
  permCode: string;
  permLevel: 1 | 2 | 3;
  permName: string;
  icon?: string;
  isHide?: boolean;
  children?: AuthItem[];
}
