/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GLOB_APP_TITLE: string;
  readonly VITE_PORT: number;
  readonly VITE_OPEN: boolean;
  readonly VITE_ENV: "dev" | "test" | "zh" | "us";
  readonly VITE_BASE_URL: string;
  readonly VITE_API_HOST: string;
  readonly VITE_IS_MOCK: boolean;
  readonly VITE_REPORT: boolean; // 打包后是否生成包分析文件
  readonly VITE_REMOVE_CONSOLE: boolean; // 打包时是否删除 console
  readonly VITE_PWA: boolean; // 是否开启 VitePWA
}
