import { defineStore } from "pinia";
import { getBrowserLang } from "@/utils";
import { GlobalState } from "@/store/interface";
import { DEFAULT_PRIMARY } from "@/config";
import piniaPersistConfig from "@/store/helper/persist";

export const useGlobalStore = defineStore({
  id: "global",
  // 修改默认值之后，需清除 localStorage 数据
  state: (): GlobalState => ({
    // 当前系统语言
    language: getBrowserLang(),
    // 当前页面是否全屏
    maximize: false,
    // 主题颜色
    primary: DEFAULT_PRIMARY,

    // 深色模式
    isDark: false,
    // 灰色模式
    isGrey: false,
    // 色弱模式
    isWeak: false,
    // 折叠菜单
    isCollapse: false,
    // 菜单手风琴
    accordion: true,
    // 页面水印
    watermark: false,
    // 面包屑导航
    breadcrumb: true,
    // 面包屑导航图标
    breadcrumbIcon: true,
    // 标签页
    tabs: true,
    // 标签页图标
    tabsIcon: true,
    languageObj: {
      language: "",
      isLoad: false
    }
  }),
  actions: {
    // Set GlobalState
    setGlobalState(...args: ObjToKeyValArray<GlobalState>) {
      this.$patch({ [args[0]]: args[1] });
    },
    setLanguageLoad(isLoad: boolean) {
      this.languageObj.isLoad = isLoad;
    }
  },
  persist: piniaPersistConfig("global")
});
