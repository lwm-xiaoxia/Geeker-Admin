// vite.config.ts
import { defineConfig, loadEnv } from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/vite@5.3.2_@types+node@20.5.7_sass@1.77.6_terser@5.19.2/node_modules/vite/dist/node/index.js";
import { resolve as resolve2, join } from "path";

// build/getEnv.ts
function wrapperEnv(envConf) {
  const ret = {};
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n");
    realName = realName === "true" ? true : realName === "false" ? false : realName;
    if (envName === "VITE_PORT") realName = Number(realName);
    if (envName === "VITE_PROXY") {
      try {
        realName = JSON.parse(realName);
      } catch (error) {
      }
    }
    ret[envName] = realName;
  }
  return ret;
}

// build/plugins.ts
import { resolve } from "path";
import { VitePWA } from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/vite-plugin-pwa@0.20.0_vite@5.3.2_@types+node@20.5.7_sass@1.77.6_terser@5.19.2__workbox-build@7.1.0_workbox-window@7.1.0/node_modules/vite-plugin-pwa/dist/index.js";
import { createHtmlPlugin } from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/vite-plugin-html@3.2.2_vite@5.3.2_@types+node@20.5.7_sass@1.77.6_terser@5.19.2_/node_modules/vite-plugin-html/dist/index.mjs";
import { visualizer } from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@2.79.1/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { createSvgIconsPlugin } from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/vite-plugin-svg-icons@2.0.1_vite@5.3.2_@types+node@20.5.7_sass@1.77.6_terser@5.19.2_/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import vue from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.3.2_@types+node@20.5.7_sass@1.77.6_terser@5.19.2__vue@3.4.31_typescript@5.5.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.3.2_@types+node@20.5.7_sass@1.77.6_terser@5.19.2__vue@3.4.31_typescript@5.5.2_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import eslintPlugin from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.57.0_vite@5.3.2_@types+node@20.5.7_sass@1.77.6_terser@5.19.2_/node_modules/vite-plugin-eslint/dist/index.mjs";
import viteCompression from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/vite-plugin-compression@0.5.1_vite@5.3.2_@types+node@20.5.7_sass@1.77.6_terser@5.19.2_/node_modules/vite-plugin-compression/dist/index.mjs";
import vueSetupExtend from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/unplugin-vue-setup-extend-plus@1.0.1/node_modules/unplugin-vue-setup-extend-plus/dist/vite.js";
import NextDevTools from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.5_rollup@2.79.1_vite@5.3.2_@types+node@20.5.7_sass@1.77.6_terser_zsowrurn4w5teqrzb4fba3ssvi/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var createVitePlugins = (viteEnv) => {
  const { VITE_GLOB_APP_TITLE, VITE_REPORT, VITE_DEVTOOLS, VITE_PWA } = viteEnv;
  return [
    vue(),
    // vue 可以使用 jsx/tsx 语法
    vueJsx(),
    // devTools
    VITE_DEVTOOLS && NextDevTools({ launchEditor: "code" }),
    // esLint 报错信息显示在浏览器界面上
    eslintPlugin(),
    // name 可以写在 script 标签上
    vueSetupExtend({}),
    // 创建打包压缩配置
    createCompression(viteEnv),
    // 注入变量到 html 文件
    createHtmlPlugin({
      minify: true,
      inject: {
        data: { title: VITE_GLOB_APP_TITLE }
      }
    }),
    // 使用 svg 图标
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), "src/assets/icons")],
      symbolId: "icon-[dir]-[name]"
    }),
    // vitePWA
    VITE_PWA && createVitePwa(viteEnv),
    // 是否生成包预览，分析依赖包大小做优化处理
    VITE_REPORT && visualizer({ filename: "stats.html", gzipSize: true, brotliSize: true })
  ];
};
var createCompression = (viteEnv) => {
  const { VITE_BUILD_COMPRESS = "none", VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv;
  const compressList = VITE_BUILD_COMPRESS.split(",");
  const plugins = [];
  if (compressList.includes("gzip")) {
    plugins.push(
      viteCompression({
        ext: ".gz",
        algorithm: "gzip",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  if (compressList.includes("brotli")) {
    plugins.push(
      viteCompression({
        ext: ".br",
        algorithm: "brotliCompress",
        deleteOriginFile: VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE
      })
    );
  }
  return plugins;
};
var createVitePwa = (viteEnv) => {
  const { VITE_GLOB_APP_TITLE } = viteEnv;
  return VitePWA({
    registerType: "autoUpdate",
    manifest: {
      name: VITE_GLOB_APP_TITLE,
      short_name: VITE_GLOB_APP_TITLE,
      theme_color: "#ffffff",
      icons: [
        {
          src: "/logo.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/logo.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "/logo.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        }
      ]
    }
  });
};

// package.json
var package_default = {
  name: "homgar-admin-next",
  private: true,
  version: "1.0.0",
  type: "module",
  description: "homgar\u540E\u53F0\u7BA1\u7406\u7CFB\u7EDF",
  author: "linwm",
  license: "MIT",
  homepage: "",
  repository: {
    type: "git",
    url: "git@github.com:HalseySpicy/Geeker-Admin.git"
  },
  bugs: {
    url: "https://github.com/HalseySpicy/Geeker-Admin/issues"
  },
  scripts: {
    dev: "vite",
    serve: "vite",
    "build:dev": "vue-tsc && vite build --mode development",
    "build:test": "vue-tsc && vite build --mode test",
    "build:pro": "vue-tsc && vite build --mode production",
    "type:check": "vue-tsc --noEmit --skipLibCheck",
    preview: "pnpm build:dev && vite preview",
    "lint:eslint": "eslint --fix --ext .js,.ts,.vue ./src",
    "lint:prettier": 'prettier --write "src/**/*.{js,ts,json,tsx,css,less,scss,vue,html,md}"',
    "lint:stylelint": 'stylelint --cache --fix "**/*.{vue,less,postcss,css,scss}" --cache --cache-location node_modules/.cache/stylelint/',
    "lint:lint-staged": "lint-staged",
    prepare: "husky install",
    release: "standard-version",
    commit: "git add -A && czg && git push"
  },
  dependencies: {
    "@element-plus/icons-vue": "^2.3.1",
    "@vueuse/core": "^10.11.0",
    "@wangeditor/editor": "^5.1.23",
    "@wangeditor/editor-for-vue": "^5.1.12",
    axios: "^1.7.2",
    dayjs: "^1.11.11",
    "driver.js": "^1.3.1",
    echarts: "^5.5.1",
    "echarts-liquidfill": "^3.1.0",
    "element-plus": "^2.8.1",
    md5: "^2.3.0",
    mitt: "^3.0.1",
    nprogress: "^0.2.0",
    pinia: "^2.1.7",
    "pinia-plugin-persistedstate": "^3.2.1",
    qs: "^6.12.1",
    radash: "^12.1.0",
    screenfull: "^6.0.2",
    sortablejs: "^1.15.2",
    vue: "^3.4.31",
    "vue-i18n": "^9.13.1",
    "vue-router": "^4.4.0",
    vuedraggable: "^4.1.0"
  },
  devDependencies: {
    "@commitlint/cli": "^18.4.3",
    "@commitlint/config-conventional": "^18.4.3",
    "@types/md5": "^2.3.5",
    "@types/nprogress": "^0.2.3",
    "@types/qs": "^6.9.15",
    "@types/sortablejs": "^1.15.8",
    "@typescript-eslint/eslint-plugin": "^7.14.1",
    "@typescript-eslint/parser": "^7.14.1",
    "@vitejs/plugin-vue": "^5.0.4",
    "@vitejs/plugin-vue-jsx": "^3.1.0",
    autoprefixer: "^10.4.19",
    "cz-git": "1.9.2",
    czg: "^1.9.2",
    eslint: "^8.57.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-prettier": "^5.1.3",
    "eslint-plugin-vue": "^9.26.0",
    husky: "^9.0.11",
    "lint-staged": "^15.2.5",
    postcss: "^8.4.38",
    "postcss-html": "^1.7.0",
    prettier: "^3.3.2",
    "rollup-plugin-visualizer": "^5.12.0",
    sass: "^1.77.6",
    "standard-version": "^9.5.0",
    stylelint: "^16.6.1",
    "stylelint-config-html": "^1.1.0",
    "stylelint-config-recess-order": "^5.0.1",
    "stylelint-config-recommended-scss": "^14.0.0",
    "stylelint-config-recommended-vue": "^1.5.0",
    "stylelint-config-standard": "^36.0.0",
    "stylelint-config-standard-scss": "^13.1.0",
    typescript: "^5.5.2",
    "unplugin-vue-setup-extend-plus": "^1.0.1",
    vite: "^5.3.2",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-eslint": "^1.8.1",
    "vite-plugin-html": "^3.2.2",
    "vite-plugin-pwa": "^0.20.0",
    "vite-plugin-svg-icons": "^2.0.1",
    "vite-plugin-vue-devtools": "^7.3.5",
    "vue-tsc": "^2.0.22"
  },
  engines: {
    node: ">=16.18.0"
  },
  browserslist: {
    production: [
      "> 1%",
      "not dead",
      "not op_mini all"
    ],
    development: [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  config: {
    commitizen: {
      path: "node_modules/cz-git"
    }
  }
};

// vite.config.ts
import dayjs from "file:///E:/%E5%BC%80%E5%8F%91%E7%9B%AE%E5%BD%95/%E9%A1%B9%E7%9B%AE_%E5%90%8E%E5%8F%B0/homar-admin/node_modules/.pnpm/dayjs@1.11.11/node_modules/dayjs/dayjs.min.js";

// build/build.ts
function createBuildOpts() {
  return {
    outDir: "dist",
    minify: "esbuild",
    // esbuild 打包更快，但是不能去除 console.log，terser打包慢，但能去除 console.log
    // minify: "terser",
    // terserOptions: {
    // 	compress: {
    // 		drop_console: viteEnv.VITE_DROP_CONSOLE,
    // 		drop_debugger: true
    // 	}
    // },
    sourcemap: false,
    // 禁用 gzip 压缩大小报告，可略微减少打包时间
    reportCompressedSize: false,
    // 规定触发警告的 chunk 大小
    chunkSizeWarningLimit: 200,
    rollupOptions: {
      output: {
        // Static resource classification and packaging
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]"
      }
      // output: {
      //   entryFileNames: chunkInfo => {
      //     // 获取当前的文件路径
      //     const path = chunkInfo.facadeModuleId;
      //     // 提取目录名
      //     const directoryName = path?.split("/").slice(-2, -1)[0];
      //     // 使用目录名作为文件名
      //     return `${directoryName}/[name].js`;
      //   },
      //   chunkFileNames: "assets/js/[name].[hash].js",
      //   assetFileNames: "assets/[ext]/[name].[hash].[ext]"
      // }
    }
  };
}

// build/server.ts
function createServerOpts(env) {
  return {
    host: true,
    port: env.VITE_PORT,
    open: env.VITE_OPEN,
    // cors: true,
    // Load proxy configuration from .env.development
    proxy: {
      "/admin": env.VITE_API_URL,
      "/auth": env.VITE_API_URL
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname = "E:\\\u5F00\u53D1\u76EE\u5F55\\\u9879\u76EE_\u540E\u53F0\\homar-admin";
var { dependencies, devDependencies, name, version } = package_default;
var __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
};
var vite_config_default = defineConfig(({ mode }) => {
  const root = process.cwd();
  const envDir = join(process.cwd(), "env");
  const env = loadEnv(mode, envDir);
  const viteEnv = wrapperEnv(env);
  return {
    envDir,
    base: viteEnv.VITE_BASE_URL,
    root,
    build: createBuildOpts(),
    server: createServerOpts(viteEnv),
    plugins: createVitePlugins(viteEnv),
    resolve: {
      alias: {
        "@": resolve2(__vite_injected_original_dirname, "./src"),
        "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
      }
    },
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/styles/var.scss";`
        }
      }
    },
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvZ2V0RW52LnRzIiwgImJ1aWxkL3BsdWdpbnMudHMiLCAicGFja2FnZS5qc29uIiwgImJ1aWxkL2J1aWxkLnRzIiwgImJ1aWxkL3NlcnZlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFx1NUYwMFx1NTNEMVx1NzZFRVx1NUY1NVxcXFxcdTk4NzlcdTc2RUVfXHU1NDBFXHU1M0YwXFxcXGhvbWFyLWFkbWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxcdTVGMDBcdTUzRDFcdTc2RUVcdTVGNTVcXFxcXHU5ODc5XHU3NkVFX1x1NTQwRVx1NTNGMFxcXFxob21hci1hZG1pblxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovJUU1JUJDJTgwJUU1JThGJTkxJUU3JTlCJUFFJUU1JUJEJTk1LyVFOSVBMSVCOSVFNyU5QiVBRV8lRTUlOTAlOEUlRTUlOEYlQjAvaG9tYXItYWRtaW4vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYsIENvbmZpZ0VudiwgVXNlckNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCB7IHJlc29sdmUsIGpvaW4gfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyB3cmFwcGVyRW52IH0gZnJvbSBcIi4vYnVpbGQvZ2V0RW52XCI7XHJcbmltcG9ydCB7IGNyZWF0ZVByb3h5IH0gZnJvbSBcIi4vYnVpbGQvcHJveHlcIjtcclxuaW1wb3J0IHsgY3JlYXRlVml0ZVBsdWdpbnMgfSBmcm9tIFwiLi9idWlsZC9wbHVnaW5zXCI7XHJcbmltcG9ydCBwa2cgZnJvbSBcIi4vcGFja2FnZS5qc29uXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0IGNyZWF0ZUJ1aWxkT3B0cyBmcm9tIFwiLi9idWlsZC9idWlsZFwiO1xyXG5pbXBvcnQgY3JlYXRlU2VydmVyT3B0cyBmcm9tIFwiLi9idWlsZC9zZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IHsgZGVwZW5kZW5jaWVzLCBkZXZEZXBlbmRlbmNpZXMsIG5hbWUsIHZlcnNpb24gfSA9IHBrZztcclxuY29uc3QgX19BUFBfSU5GT19fID0ge1xyXG4gIHBrZzogeyBkZXBlbmRlbmNpZXMsIGRldkRlcGVuZGVuY2llcywgbmFtZSwgdmVyc2lvbiB9LFxyXG4gIGxhc3RCdWlsZFRpbWU6IGRheWpzKCkuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzc1wiKVxyXG59O1xyXG5cclxuLy8gQHNlZTogaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfTogQ29uZmlnRW52KTogVXNlckNvbmZpZyA9PiB7XHJcbiAgY29uc3Qgcm9vdCA9IHByb2Nlc3MuY3dkKCk7XHJcbiAgY29uc3QgZW52RGlyID0gam9pbihwcm9jZXNzLmN3ZCgpLCBcImVudlwiKTtcclxuICBjb25zdCBlbnYgPSBsb2FkRW52KG1vZGUsIGVudkRpcik7XHJcbiAgY29uc3Qgdml0ZUVudiA9IHdyYXBwZXJFbnYoZW52KSBhcyBhbnk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlbnZEaXIsXHJcbiAgICBiYXNlOiB2aXRlRW52LlZJVEVfQkFTRV9VUkwsXHJcbiAgICByb290LFxyXG4gICAgYnVpbGQ6IGNyZWF0ZUJ1aWxkT3B0cygpLFxyXG4gICAgc2VydmVyOiBjcmVhdGVTZXJ2ZXJPcHRzKHZpdGVFbnYpLFxyXG4gICAgcGx1Z2luczogY3JlYXRlVml0ZVBsdWdpbnModml0ZUVudiksXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgICAgIFwidnVlLWkxOG5cIjogXCJ2dWUtaTE4bi9kaXN0L3Z1ZS1pMThuLmNqcy5qc1wiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgX19BUFBfSU5GT19fOiBKU09OLnN0cmluZ2lmeShfX0FQUF9JTkZPX18pXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL3N0eWxlcy92YXIuc2Nzc1wiO2BcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBlc2J1aWxkOiB7XHJcbiAgICAgIHB1cmU6IHZpdGVFbnYuVklURV9EUk9QX0NPTlNPTEUgPyBbXCJjb25zb2xlLmxvZ1wiLCBcImRlYnVnZ2VyXCJdIDogW11cclxuICAgIH1cclxuICB9O1xyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxcdTVGMDBcdTUzRDFcdTc2RUVcdTVGNTVcXFxcXHU5ODc5XHU3NkVFX1x1NTQwRVx1NTNGMFxcXFxob21hci1hZG1pblxcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcXHU1RjAwXHU1M0QxXHU3NkVFXHU1RjU1XFxcXFx1OTg3OVx1NzZFRV9cdTU0MEVcdTUzRjBcXFxcaG9tYXItYWRtaW5cXFxcYnVpbGRcXFxcZ2V0RW52LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8lRTUlQkMlODAlRTUlOEYlOTElRTclOUIlQUUlRTUlQkQlOTUvJUU5JUExJUI5JUU3JTlCJUFFXyVFNSU5MCU4RSVFNSU4RiVCMC9ob21hci1hZG1pbi9idWlsZC9nZXRFbnYudHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGV2Rm4obW9kZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIG1vZGUgPT09IFwiZGV2ZWxvcG1lbnRcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZEZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBtb2RlID09PSBcInByb2R1Y3Rpb25cIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGVzdEZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBtb2RlID09PSBcInRlc3RcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdoZXRoZXIgdG8gZ2VuZXJhdGUgcGFja2FnZSBwcmV2aWV3XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNSZXBvcnRNb2RlKCk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBwcm9jZXNzLmVudi5WSVRFX1JFUE9SVCA9PT0gXCJ0cnVlXCI7XHJcbn1cclxuXHJcbi8vIFJlYWQgYWxsIGVudmlyb25tZW50IHZhcmlhYmxlIGNvbmZpZ3VyYXRpb24gZmlsZXMgdG8gcHJvY2Vzcy5lbnZcclxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZXJFbnYoZW52Q29uZjogUmVjb3JkYWJsZSk6IFZpdGVFbnYge1xyXG4gIGNvbnN0IHJldDogYW55ID0ge307XHJcblxyXG4gIGZvciAoY29uc3QgZW52TmFtZSBvZiBPYmplY3Qua2V5cyhlbnZDb25mKSkge1xyXG4gICAgbGV0IHJlYWxOYW1lID0gZW52Q29uZltlbnZOYW1lXS5yZXBsYWNlKC9cXFxcbi9nLCBcIlxcblwiKTtcclxuICAgIHJlYWxOYW1lID0gcmVhbE5hbWUgPT09IFwidHJ1ZVwiID8gdHJ1ZSA6IHJlYWxOYW1lID09PSBcImZhbHNlXCIgPyBmYWxzZSA6IHJlYWxOYW1lO1xyXG4gICAgaWYgKGVudk5hbWUgPT09IFwiVklURV9QT1JUXCIpIHJlYWxOYW1lID0gTnVtYmVyKHJlYWxOYW1lKTtcclxuICAgIGlmIChlbnZOYW1lID09PSBcIlZJVEVfUFJPWFlcIikge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHJlYWxOYW1lID0gSlNPTi5wYXJzZShyZWFsTmFtZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgfVxyXG4gICAgcmV0W2Vudk5hbWVdID0gcmVhbE5hbWU7XHJcbiAgfVxyXG4gIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXQgdXNlciByb290IGRpcmVjdG9yeVxyXG4gKiBAcGFyYW0gZGlyIGZpbGUgcGF0aFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RQYXRoKC4uLmRpcjogc3RyaW5nW10pIHtcclxuICByZXR1cm4gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksIC4uLmRpcik7XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxcdTVGMDBcdTUzRDFcdTc2RUVcdTVGNTVcXFxcXHU5ODc5XHU3NkVFX1x1NTQwRVx1NTNGMFxcXFxob21hci1hZG1pblxcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcXHU1RjAwXHU1M0QxXHU3NkVFXHU1RjU1XFxcXFx1OTg3OVx1NzZFRV9cdTU0MEVcdTUzRjBcXFxcaG9tYXItYWRtaW5cXFxcYnVpbGRcXFxccGx1Z2lucy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovJUU1JUJDJTgwJUU1JThGJTkxJUU3JTlCJUFFJUU1JUJEJTk1LyVFOSVBMSVCOSVFNyU5QiVBRV8lRTUlOTAlOEUlRTUlOEYlQjAvaG9tYXItYWRtaW4vYnVpbGQvcGx1Z2lucy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBQbHVnaW5PcHRpb24gfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSBcInZpdGUtcGx1Z2luLXB3YVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVIdG1sUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLWh0bWxcIjtcclxuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gXCJyb2xsdXAtcGx1Z2luLXZpc3VhbGl6ZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI7XHJcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xyXG5pbXBvcnQgdnVlSnN4IGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI7XHJcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSBcInZpdGUtcGx1Z2luLWVzbGludFwiO1xyXG5pbXBvcnQgdml0ZUNvbXByZXNzaW9uIGZyb20gXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiO1xyXG5pbXBvcnQgdnVlU2V0dXBFeHRlbmQgZnJvbSBcInVucGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQtcGx1cy92aXRlXCI7XHJcbmltcG9ydCBOZXh0RGV2VG9vbHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiO1xyXG5cclxuLyoqXHJcbiAqIFx1NTIxQlx1NUVGQSB2aXRlIFx1NjNEMlx1NEVGNlxyXG4gKiBAcGFyYW0gdml0ZUVudlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVZpdGVQbHVnaW5zID0gKHZpdGVFbnY6IFZpdGVFbnYpOiAoUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10pW10gPT4ge1xyXG4gIGNvbnN0IHsgVklURV9HTE9CX0FQUF9USVRMRSwgVklURV9SRVBPUlQsIFZJVEVfREVWVE9PTFMsIFZJVEVfUFdBIH0gPSB2aXRlRW52O1xyXG4gIHJldHVybiBbXHJcbiAgICB2dWUoKSxcclxuICAgIC8vIHZ1ZSBcdTUzRUZcdTRFRTVcdTRGN0ZcdTc1MjgganN4L3RzeCBcdThCRURcdTZDRDVcclxuICAgIHZ1ZUpzeCgpLFxyXG4gICAgLy8gZGV2VG9vbHNcclxuICAgIFZJVEVfREVWVE9PTFMgJiYgTmV4dERldlRvb2xzKHsgbGF1bmNoRWRpdG9yOiBcImNvZGVcIiB9KSxcclxuICAgIC8vIGVzTGludCBcdTYyQTVcdTk1MTlcdTRGRTFcdTYwNkZcdTY2M0VcdTc5M0FcdTU3MjhcdTZENEZcdTg5QzhcdTU2NjhcdTc1NENcdTk3NjJcdTRFMEFcclxuICAgIGVzbGludFBsdWdpbigpLFxyXG4gICAgLy8gbmFtZSBcdTUzRUZcdTRFRTVcdTUxOTlcdTU3Mjggc2NyaXB0IFx1NjgwN1x1N0I3RVx1NEUwQVxyXG4gICAgdnVlU2V0dXBFeHRlbmQoe30pLFxyXG4gICAgLy8gXHU1MjFCXHU1RUZBXHU2MjUzXHU1MzA1XHU1MzhCXHU3RjI5XHU5MTREXHU3RjZFXHJcbiAgICBjcmVhdGVDb21wcmVzc2lvbih2aXRlRW52KSxcclxuICAgIC8vIFx1NkNFOFx1NTE2NVx1NTNEOFx1OTFDRlx1NTIzMCBodG1sIFx1NjU4N1x1NEVGNlxyXG4gICAgY3JlYXRlSHRtbFBsdWdpbih7XHJcbiAgICAgIG1pbmlmeTogdHJ1ZSxcclxuICAgICAgaW5qZWN0OiB7XHJcbiAgICAgICAgZGF0YTogeyB0aXRsZTogVklURV9HTE9CX0FQUF9USVRMRSB9XHJcbiAgICAgIH1cclxuICAgIH0pLFxyXG4gICAgLy8gXHU0RjdGXHU3NTI4IHN2ZyBcdTU2RkVcdTY4MDdcclxuICAgIGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuICAgICAgaWNvbkRpcnM6IFtyZXNvbHZlKHByb2Nlc3MuY3dkKCksIFwic3JjL2Fzc2V0cy9pY29uc1wiKV0sXHJcbiAgICAgIHN5bWJvbElkOiBcImljb24tW2Rpcl0tW25hbWVdXCJcclxuICAgIH0pLFxyXG4gICAgLy8gdml0ZVBXQVxyXG4gICAgVklURV9QV0EgJiYgY3JlYXRlVml0ZVB3YSh2aXRlRW52KSxcclxuICAgIC8vIFx1NjYyRlx1NTQyNlx1NzUxRlx1NjIxMFx1NTMwNVx1OTg4NFx1ODlDOFx1RkYwQ1x1NTIwNlx1Njc5MFx1NEY5RFx1OEQ1Nlx1NTMwNVx1NTkyN1x1NUMwRlx1NTA1QVx1NEYxOFx1NTMxNlx1NTkwNFx1NzQwNlxyXG4gICAgVklURV9SRVBPUlQgJiYgKHZpc3VhbGl6ZXIoeyBmaWxlbmFtZTogXCJzdGF0cy5odG1sXCIsIGd6aXBTaXplOiB0cnVlLCBicm90bGlTaXplOiB0cnVlIH0pIGFzIFBsdWdpbk9wdGlvbilcclxuICBdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBcdTY4MzlcdTYzNkUgY29tcHJlc3MgXHU5MTREXHU3RjZFXHVGRjBDXHU3NTFGXHU2MjEwXHU0RTBEXHU1NDBDXHU3Njg0XHU1MzhCXHU3RjI5XHU4OUM0XHU1MjE5XHJcbiAqIEBwYXJhbSB2aXRlRW52XHJcbiAqL1xyXG5jb25zdCBjcmVhdGVDb21wcmVzc2lvbiA9ICh2aXRlRW52OiBWaXRlRW52KTogUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10gPT4ge1xyXG4gIGNvbnN0IHsgVklURV9CVUlMRF9DT01QUkVTUyA9IFwibm9uZVwiLCBWSVRFX0JVSUxEX0NPTVBSRVNTX0RFTEVURV9PUklHSU5fRklMRSB9ID0gdml0ZUVudjtcclxuICBjb25zdCBjb21wcmVzc0xpc3QgPSBWSVRFX0JVSUxEX0NPTVBSRVNTLnNwbGl0KFwiLFwiKTtcclxuICBjb25zdCBwbHVnaW5zOiBQbHVnaW5PcHRpb25bXSA9IFtdO1xyXG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoXCJnemlwXCIpKSB7XHJcbiAgICBwbHVnaW5zLnB1c2goXHJcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XHJcbiAgICAgICAgZXh0OiBcIi5nelwiLFxyXG4gICAgICAgIGFsZ29yaXRobTogXCJnemlwXCIsXHJcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEVcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChjb21wcmVzc0xpc3QuaW5jbHVkZXMoXCJicm90bGlcIikpIHtcclxuICAgIHBsdWdpbnMucHVzaChcclxuICAgICAgdml0ZUNvbXByZXNzaW9uKHtcclxuICAgICAgICBleHQ6IFwiLmJyXCIsXHJcbiAgICAgICAgYWxnb3JpdGhtOiBcImJyb3RsaUNvbXByZXNzXCIsXHJcbiAgICAgICAgZGVsZXRlT3JpZ2luRmlsZTogVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEVcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiBwbHVnaW5zO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvbiBWaXRlUHdhXHJcbiAqIEBwYXJhbSB2aXRlRW52XHJcbiAqL1xyXG5jb25zdCBjcmVhdGVWaXRlUHdhID0gKHZpdGVFbnY6IFZpdGVFbnYpOiBQbHVnaW5PcHRpb24gfCBQbHVnaW5PcHRpb25bXSA9PiB7XHJcbiAgY29uc3QgeyBWSVRFX0dMT0JfQVBQX1RJVExFIH0gPSB2aXRlRW52O1xyXG4gIHJldHVybiBWaXRlUFdBKHtcclxuICAgIHJlZ2lzdGVyVHlwZTogXCJhdXRvVXBkYXRlXCIsXHJcbiAgICBtYW5pZmVzdDoge1xyXG4gICAgICBuYW1lOiBWSVRFX0dMT0JfQVBQX1RJVExFLFxyXG4gICAgICBzaG9ydF9uYW1lOiBWSVRFX0dMT0JfQVBQX1RJVExFLFxyXG4gICAgICB0aGVtZV9jb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAgIGljb25zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxyXG4gICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc3JjOiBcIi9sb2dvLnBuZ1wiLFxyXG4gICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxyXG4gICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgIHB1cnBvc2U6IFwiYW55IG1hc2thYmxlXCJcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH1cclxuICB9KTtcclxufTtcclxuIiwgIntcclxuICBcIm5hbWVcIjogXCJob21nYXItYWRtaW4tbmV4dFwiLFxyXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxyXG4gIFwidmVyc2lvblwiOiBcIjEuMC4wXCIsXHJcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXHJcbiAgXCJkZXNjcmlwdGlvblwiOiBcImhvbWdhclx1NTQwRVx1NTNGMFx1N0JBMVx1NzQwNlx1N0NGQlx1N0VERlwiLFxyXG4gIFwiYXV0aG9yXCI6IFwibGlud21cIixcclxuICBcImxpY2Vuc2VcIjogXCJNSVRcIixcclxuICBcImhvbWVwYWdlXCI6IFwiXCIsXHJcbiAgXCJyZXBvc2l0b3J5XCI6IHtcclxuICAgIFwidHlwZVwiOiBcImdpdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJnaXRAZ2l0aHViLmNvbTpIYWxzZXlTcGljeS9HZWVrZXItQWRtaW4uZ2l0XCJcclxuICB9LFxyXG4gIFwiYnVnc1wiOiB7XHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYWxzZXlTcGljeS9HZWVrZXItQWRtaW4vaXNzdWVzXCJcclxuICB9LFxyXG4gIFwic2NyaXB0c1wiOiB7XHJcbiAgICBcImRldlwiOiBcInZpdGVcIixcclxuICAgIFwic2VydmVcIjogXCJ2aXRlXCIsXHJcbiAgICBcImJ1aWxkOmRldlwiOiBcInZ1ZS10c2MgJiYgdml0ZSBidWlsZCAtLW1vZGUgZGV2ZWxvcG1lbnRcIixcclxuICAgIFwiYnVpbGQ6dGVzdFwiOiBcInZ1ZS10c2MgJiYgdml0ZSBidWlsZCAtLW1vZGUgdGVzdFwiLFxyXG4gICAgXCJidWlsZDpwcm9cIjogXCJ2dWUtdHNjICYmIHZpdGUgYnVpbGQgLS1tb2RlIHByb2R1Y3Rpb25cIixcclxuICAgIFwidHlwZTpjaGVja1wiOiBcInZ1ZS10c2MgLS1ub0VtaXQgLS1za2lwTGliQ2hlY2tcIixcclxuICAgIFwicHJldmlld1wiOiBcInBucG0gYnVpbGQ6ZGV2ICYmIHZpdGUgcHJldmlld1wiLFxyXG4gICAgXCJsaW50OmVzbGludFwiOiBcImVzbGludCAtLWZpeCAtLWV4dCAuanMsLnRzLC52dWUgLi9zcmNcIixcclxuICAgIFwibGludDpwcmV0dGllclwiOiBcInByZXR0aWVyIC0td3JpdGUgXFxcInNyYy8qKi8qLntqcyx0cyxqc29uLHRzeCxjc3MsbGVzcyxzY3NzLHZ1ZSxodG1sLG1kfVxcXCJcIixcclxuICAgIFwibGludDpzdHlsZWxpbnRcIjogXCJzdHlsZWxpbnQgLS1jYWNoZSAtLWZpeCBcXFwiKiovKi57dnVlLGxlc3MscG9zdGNzcyxjc3Msc2Nzc31cXFwiIC0tY2FjaGUgLS1jYWNoZS1sb2NhdGlvbiBub2RlX21vZHVsZXMvLmNhY2hlL3N0eWxlbGludC9cIixcclxuICAgIFwibGludDpsaW50LXN0YWdlZFwiOiBcImxpbnQtc3RhZ2VkXCIsXHJcbiAgICBcInByZXBhcmVcIjogXCJodXNreSBpbnN0YWxsXCIsXHJcbiAgICBcInJlbGVhc2VcIjogXCJzdGFuZGFyZC12ZXJzaW9uXCIsXHJcbiAgICBcImNvbW1pdFwiOiBcImdpdCBhZGQgLUEgJiYgY3pnICYmIGdpdCBwdXNoXCJcclxuICB9LFxyXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwiQGVsZW1lbnQtcGx1cy9pY29ucy12dWVcIjogXCJeMi4zLjFcIixcclxuICAgIFwiQHZ1ZXVzZS9jb3JlXCI6IFwiXjEwLjExLjBcIixcclxuICAgIFwiQHdhbmdlZGl0b3IvZWRpdG9yXCI6IFwiXjUuMS4yM1wiLFxyXG4gICAgXCJAd2FuZ2VkaXRvci9lZGl0b3ItZm9yLXZ1ZVwiOiBcIl41LjEuMTJcIixcclxuICAgIFwiYXhpb3NcIjogXCJeMS43LjJcIixcclxuICAgIFwiZGF5anNcIjogXCJeMS4xMS4xMVwiLFxyXG4gICAgXCJkcml2ZXIuanNcIjogXCJeMS4zLjFcIixcclxuICAgIFwiZWNoYXJ0c1wiOiBcIl41LjUuMVwiLFxyXG4gICAgXCJlY2hhcnRzLWxpcXVpZGZpbGxcIjogXCJeMy4xLjBcIixcclxuICAgIFwiZWxlbWVudC1wbHVzXCI6IFwiXjIuOC4xXCIsXHJcbiAgICBcIm1kNVwiOiBcIl4yLjMuMFwiLFxyXG4gICAgXCJtaXR0XCI6IFwiXjMuMC4xXCIsXHJcbiAgICBcIm5wcm9ncmVzc1wiOiBcIl4wLjIuMFwiLFxyXG4gICAgXCJwaW5pYVwiOiBcIl4yLjEuN1wiLFxyXG4gICAgXCJwaW5pYS1wbHVnaW4tcGVyc2lzdGVkc3RhdGVcIjogXCJeMy4yLjFcIixcclxuICAgIFwicXNcIjogXCJeNi4xMi4xXCIsXHJcbiAgICBcInJhZGFzaFwiOiBcIl4xMi4xLjBcIixcclxuICAgIFwic2NyZWVuZnVsbFwiOiBcIl42LjAuMlwiLFxyXG4gICAgXCJzb3J0YWJsZWpzXCI6IFwiXjEuMTUuMlwiLFxyXG4gICAgXCJ2dWVcIjogXCJeMy40LjMxXCIsXHJcbiAgICBcInZ1ZS1pMThuXCI6IFwiXjkuMTMuMVwiLFxyXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjQuNC4wXCIsXHJcbiAgICBcInZ1ZWRyYWdnYWJsZVwiOiBcIl40LjEuMFwiXHJcbiAgfSxcclxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcIkBjb21taXRsaW50L2NsaVwiOiBcIl4xOC40LjNcIixcclxuICAgIFwiQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbFwiOiBcIl4xOC40LjNcIixcclxuICAgIFwiQHR5cGVzL21kNVwiOiBcIl4yLjMuNVwiLFxyXG4gICAgXCJAdHlwZXMvbnByb2dyZXNzXCI6IFwiXjAuMi4zXCIsXHJcbiAgICBcIkB0eXBlcy9xc1wiOiBcIl42LjkuMTVcIixcclxuICAgIFwiQHR5cGVzL3NvcnRhYmxlanNcIjogXCJeMS4xNS44XCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luXCI6IFwiXjcuMTQuMVwiLFxyXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjcuMTQuMVwiLFxyXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWVcIjogXCJeNS4wLjRcIixcclxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiOiBcIl4zLjEuMFwiLFxyXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xOVwiLFxyXG4gICAgXCJjei1naXRcIjogXCIxLjkuMlwiLFxyXG4gICAgXCJjemdcIjogXCJeMS45LjJcIixcclxuICAgIFwiZXNsaW50XCI6IFwiXjguNTcuMFwiLFxyXG4gICAgXCJlc2xpbnQtY29uZmlnLXByZXR0aWVyXCI6IFwiXjkuMS4wXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tcHJldHRpZXJcIjogXCJeNS4xLjNcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi12dWVcIjogXCJeOS4yNi4wXCIsXHJcbiAgICBcImh1c2t5XCI6IFwiXjkuMC4xMVwiLFxyXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xNS4yLjVcIixcclxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzhcIixcclxuICAgIFwicG9zdGNzcy1odG1sXCI6IFwiXjEuNy4wXCIsXHJcbiAgICBcInByZXR0aWVyXCI6IFwiXjMuMy4yXCIsXHJcbiAgICBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiOiBcIl41LjEyLjBcIixcclxuICAgIFwic2Fzc1wiOiBcIl4xLjc3LjZcIixcclxuICAgIFwic3RhbmRhcmQtdmVyc2lvblwiOiBcIl45LjUuMFwiLFxyXG4gICAgXCJzdHlsZWxpbnRcIjogXCJeMTYuNi4xXCIsXHJcbiAgICBcInN0eWxlbGludC1jb25maWctaHRtbFwiOiBcIl4xLjEuMFwiLFxyXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY2Vzcy1vcmRlclwiOiBcIl41LjAuMVwiLFxyXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkLXNjc3NcIjogXCJeMTQuMC4wXCIsXHJcbiAgICBcInN0eWxlbGludC1jb25maWctcmVjb21tZW5kZWQtdnVlXCI6IFwiXjEuNS4wXCIsXHJcbiAgICBcInN0eWxlbGludC1jb25maWctc3RhbmRhcmRcIjogXCJeMzYuMC4wXCIsXHJcbiAgICBcInN0eWxlbGludC1jb25maWctc3RhbmRhcmQtc2Nzc1wiOiBcIl4xMy4xLjBcIixcclxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl41LjUuMlwiLFxyXG4gICAgXCJ1bnBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kLXBsdXNcIjogXCJeMS4wLjFcIixcclxuICAgIFwidml0ZVwiOiBcIl41LjMuMlwiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi1jb21wcmVzc2lvblwiOiBcIl4wLjUuMVwiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi1lc2xpbnRcIjogXCJeMS44LjFcIixcclxuICAgIFwidml0ZS1wbHVnaW4taHRtbFwiOiBcIl4zLjIuMlwiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi1wd2FcIjogXCJeMC4yMC4wXCIsXHJcbiAgICBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiOiBcIl4yLjAuMVwiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjogXCJeNy4zLjVcIixcclxuICAgIFwidnVlLXRzY1wiOiBcIl4yLjAuMjJcIlxyXG4gIH0sXHJcbiAgXCJlbmdpbmVzXCI6IHtcclxuICAgIFwibm9kZVwiOiBcIj49MTYuMTguMFwiXHJcbiAgfSxcclxuICBcImJyb3dzZXJzbGlzdFwiOiB7XHJcbiAgICBcInByb2R1Y3Rpb25cIjogW1xyXG4gICAgICBcIj4gMSVcIixcclxuICAgICAgXCJub3QgZGVhZFwiLFxyXG4gICAgICBcIm5vdCBvcF9taW5pIGFsbFwiXHJcbiAgICBdLFxyXG4gICAgXCJkZXZlbG9wbWVudFwiOiBbXHJcbiAgICAgIFwibGFzdCAxIGNocm9tZSB2ZXJzaW9uXCIsXHJcbiAgICAgIFwibGFzdCAxIGZpcmVmb3ggdmVyc2lvblwiLFxyXG4gICAgICBcImxhc3QgMSBzYWZhcmkgdmVyc2lvblwiXHJcbiAgICBdXHJcbiAgfSxcclxuICBcImNvbmZpZ1wiOiB7XHJcbiAgICBcImNvbW1pdGl6ZW5cIjoge1xyXG4gICAgICBcInBhdGhcIjogXCJub2RlX21vZHVsZXMvY3otZ2l0XCJcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxcdTVGMDBcdTUzRDFcdTc2RUVcdTVGNTVcXFxcXHU5ODc5XHU3NkVFX1x1NTQwRVx1NTNGMFxcXFxob21hci1hZG1pblxcXFxidWlsZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcXHU1RjAwXHU1M0QxXHU3NkVFXHU1RjU1XFxcXFx1OTg3OVx1NzZFRV9cdTU0MEVcdTUzRjBcXFxcaG9tYXItYWRtaW5cXFxcYnVpbGRcXFxcYnVpbGQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LyVFNSVCQyU4MCVFNSU4RiU5MSVFNyU5QiVBRSVFNSVCRCU5NS8lRTklQTElQjklRTclOUIlQUVfJUU1JTkwJThFJUU1JThGJUIwL2hvbWFyLWFkbWluL2J1aWxkL2J1aWxkLnRzXCI7aW1wb3J0IHR5cGUgeyBCdWlsZE9wdGlvbnMgfSBmcm9tIFwidml0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQnVpbGRPcHRzKCk6IEJ1aWxkT3B0aW9ucyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG91dERpcjogXCJkaXN0XCIsXHJcbiAgICBtaW5pZnk6IFwiZXNidWlsZFwiLFxyXG4gICAgLy8gZXNidWlsZCBcdTYyNTNcdTUzMDVcdTY2RjRcdTVGRUJcdUZGMENcdTRGNDZcdTY2MkZcdTRFMERcdTgwRkRcdTUzQkJcdTk2NjQgY29uc29sZS5sb2dcdUZGMEN0ZXJzZXJcdTYyNTNcdTUzMDVcdTYxNjJcdUZGMENcdTRGNDZcdTgwRkRcdTUzQkJcdTk2NjQgY29uc29sZS5sb2dcclxuICAgIC8vIG1pbmlmeTogXCJ0ZXJzZXJcIixcclxuICAgIC8vIHRlcnNlck9wdGlvbnM6IHtcclxuICAgIC8vIFx0Y29tcHJlc3M6IHtcclxuICAgIC8vIFx0XHRkcm9wX2NvbnNvbGU6IHZpdGVFbnYuVklURV9EUk9QX0NPTlNPTEUsXHJcbiAgICAvLyBcdFx0ZHJvcF9kZWJ1Z2dlcjogdHJ1ZVxyXG4gICAgLy8gXHR9XHJcbiAgICAvLyB9LFxyXG4gICAgc291cmNlbWFwOiBmYWxzZSxcclxuICAgIC8vIFx1Nzk4MVx1NzUyOCBnemlwIFx1NTM4Qlx1N0YyOVx1NTkyN1x1NUMwRlx1NjJBNVx1NTQ0QVx1RkYwQ1x1NTNFRlx1NzU2NVx1NUZBRVx1NTFDRlx1NUMxMVx1NjI1M1x1NTMwNVx1NjVGNlx1OTVGNFxyXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IGZhbHNlLFxyXG4gICAgLy8gXHU4OUM0XHU1QjlBXHU4OUU2XHU1M0QxXHU4QjY2XHU1NDRBXHU3Njg0IGNodW5rIFx1NTkyN1x1NUMwRlxyXG4gICAgY2h1bmtTaXplV2FybmluZ0xpbWl0OiAyMDAsXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIC8vIFN0YXRpYyByZXNvdXJjZSBjbGFzc2lmaWNhdGlvbiBhbmQgcGFja2FnaW5nXHJcbiAgICAgICAgY2h1bmtGaWxlTmFtZXM6IFwiYXNzZXRzL2pzL1tuYW1lXS1baGFzaF0uanNcIixcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdXCJcclxuICAgICAgfVxyXG4gICAgICAvLyBvdXRwdXQ6IHtcclxuICAgICAgLy8gICBlbnRyeUZpbGVOYW1lczogY2h1bmtJbmZvID0+IHtcclxuICAgICAgLy8gICAgIC8vIFx1ODNCN1x1NTNENlx1NUY1M1x1NTI0RFx1NzY4NFx1NjU4N1x1NEVGNlx1OERFRlx1NUY4NFxyXG4gICAgICAvLyAgICAgY29uc3QgcGF0aCA9IGNodW5rSW5mby5mYWNhZGVNb2R1bGVJZDtcclxuICAgICAgLy8gICAgIC8vIFx1NjNEMFx1NTNENlx1NzZFRVx1NUY1NVx1NTQwRFxyXG4gICAgICAvLyAgICAgY29uc3QgZGlyZWN0b3J5TmFtZSA9IHBhdGg/LnNwbGl0KFwiL1wiKS5zbGljZSgtMiwgLTEpWzBdO1xyXG4gICAgICAvLyAgICAgLy8gXHU0RjdGXHU3NTI4XHU3NkVFXHU1RjU1XHU1NDBEXHU0RjVDXHU0RTNBXHU2NTg3XHU0RUY2XHU1NDBEXHJcbiAgICAgIC8vICAgICByZXR1cm4gYCR7ZGlyZWN0b3J5TmFtZX0vW25hbWVdLmpzYDtcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgIGNodW5rRmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0uW2hhc2hdLmpzXCIsXHJcbiAgICAgIC8vICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tleHRdL1tuYW1lXS5baGFzaF0uW2V4dF1cIlxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXFx1NUYwMFx1NTNEMVx1NzZFRVx1NUY1NVxcXFxcdTk4NzlcdTc2RUVfXHU1NDBFXHU1M0YwXFxcXGhvbWFyLWFkbWluXFxcXGJ1aWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxcdTVGMDBcdTUzRDFcdTc2RUVcdTVGNTVcXFxcXHU5ODc5XHU3NkVFX1x1NTQwRVx1NTNGMFxcXFxob21hci1hZG1pblxcXFxidWlsZFxcXFxzZXJ2ZXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LyVFNSVCQyU4MCVFNSU4RiU5MSVFNyU5QiVBRSVFNSVCRCU5NS8lRTklQTElQjklRTclOUIlQUVfJUU1JTkwJThFJUU1JThGJUIwL2hvbWFyLWFkbWluL2J1aWxkL3NlcnZlci50c1wiO2ltcG9ydCB0eXBlIHsgU2VydmVyT3B0aW9ucyB9IGZyb20gXCJ2aXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTZXJ2ZXJPcHRzKGVudik6IFNlcnZlck9wdGlvbnMge1xyXG4gIHJldHVybiB7XHJcbiAgICBob3N0OiB0cnVlLFxyXG4gICAgcG9ydDogZW52LlZJVEVfUE9SVCxcclxuICAgIG9wZW46IGVudi5WSVRFX09QRU4sXHJcbiAgICAvLyBjb3JzOiB0cnVlLFxyXG4gICAgLy8gTG9hZCBwcm94eSBjb25maWd1cmF0aW9uIGZyb20gLmVudi5kZXZlbG9wbWVudFxyXG4gICAgcHJveHk6IHtcclxuICAgICAgXCIvYWRtaW5cIjogZW52LlZJVEVfQVBJX1VSTCxcclxuICAgICAgXCIvYXV0aFwiOiBlbnYuVklURV9BUElfVVJMXHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFVLFNBQVMsY0FBYyxlQUFzQztBQUNsWSxTQUFTLFdBQUFBLFVBQVMsWUFBWTs7O0FDcUJ2QixTQUFTLFdBQVcsU0FBOEI7QUFDdkQsUUFBTSxNQUFXLENBQUM7QUFFbEIsYUFBVyxXQUFXLE9BQU8sS0FBSyxPQUFPLEdBQUc7QUFDMUMsUUFBSSxXQUFXLFFBQVEsT0FBTyxFQUFFLFFBQVEsUUFBUSxJQUFJO0FBQ3BELGVBQVcsYUFBYSxTQUFTLE9BQU8sYUFBYSxVQUFVLFFB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
