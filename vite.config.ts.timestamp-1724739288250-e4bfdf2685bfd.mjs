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
    server: {
      host: true,
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      // cors: true,
      // Load proxy configuration from .env.development
      proxy: {
        "/admin": viteEnv.VITE_API_URL,
        "/auth": viteEnv.VITE_API_URL
      }
    },
    plugins: createVitePlugins(viteEnv),
    esbuild: {
      pure: viteEnv.VITE_DROP_CONSOLE ? ["console.log", "debugger"] : []
    },
    build: {
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
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAiYnVpbGQvZ2V0RW52LnRzIiwgImJ1aWxkL3BsdWdpbnMudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcXHU1RjAwXHU1M0QxXHU3NkVFXHU1RjU1XFxcXFx1OTg3OVx1NzZFRV9cdTU0MEVcdTUzRjBcXFxcaG9tYXItYWRtaW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1NUYwMFx1NTNEMVx1NzZFRVx1NUY1NVxcXFxcdTk4NzlcdTc2RUVfXHU1NDBFXHU1M0YwXFxcXGhvbWFyLWFkbWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi8lRTUlQkMlODAlRTUlOEYlOTElRTclOUIlQUUlRTUlQkQlOTUvJUU5JUExJUI5JUU3JTlCJUFFXyVFNSU5MCU4RSVFNSU4RiVCMC9ob21hci1hZG1pbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiwgQ29uZmlnRW52LCBVc2VyQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSwgam9pbiB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCB7IHdyYXBwZXJFbnYgfSBmcm9tIFwiLi9idWlsZC9nZXRFbnZcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJveHkgfSBmcm9tIFwiLi9idWlsZC9wcm94eVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVWaXRlUGx1Z2lucyB9IGZyb20gXCIuL2J1aWxkL3BsdWdpbnNcIjtcclxuaW1wb3J0IHBrZyBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcclxuaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xyXG5cclxuY29uc3QgeyBkZXBlbmRlbmNpZXMsIGRldkRlcGVuZGVuY2llcywgbmFtZSwgdmVyc2lvbiB9ID0gcGtnO1xyXG5jb25zdCBfX0FQUF9JTkZPX18gPSB7XHJcbiAgcGtnOiB7IGRlcGVuZGVuY2llcywgZGV2RGVwZW5kZW5jaWVzLCBuYW1lLCB2ZXJzaW9uIH0sXHJcbiAgbGFzdEJ1aWxkVGltZTogZGF5anMoKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tOnNzXCIpXHJcbn07XHJcblxyXG4vLyBAc2VlOiBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9OiBDb25maWdFbnYpOiBVc2VyQ29uZmlnID0+IHtcclxuICBjb25zdCByb290ID0gcHJvY2Vzcy5jd2QoKTtcclxuICBjb25zdCBlbnZEaXIgPSBqb2luKHByb2Nlc3MuY3dkKCksIFwiZW52XCIpO1xyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgZW52RGlyKTtcclxuICBjb25zdCB2aXRlRW52ID0gd3JhcHBlckVudihlbnYpIGFzIGFueTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVudkRpcixcclxuICAgIGJhc2U6IHZpdGVFbnYuVklURV9CQVNFX1VSTCxcclxuICAgIHJvb3QsXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgXCJAXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxyXG4gICAgICAgIFwidnVlLWkxOG5cIjogXCJ2dWUtaTE4bi9kaXN0L3Z1ZS1pMThuLmNqcy5qc1wiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZWZpbmU6IHtcclxuICAgICAgX19BUFBfSU5GT19fOiBKU09OLnN0cmluZ2lmeShfX0FQUF9JTkZPX18pXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgICBzY3NzOiB7XHJcbiAgICAgICAgICBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL3N0eWxlcy92YXIuc2Nzc1wiO2BcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgaG9zdDogdHJ1ZSxcclxuICAgICAgcG9ydDogdml0ZUVudi5WSVRFX1BPUlQsXHJcbiAgICAgIG9wZW46IHZpdGVFbnYuVklURV9PUEVOLFxyXG4gICAgICAvLyBjb3JzOiB0cnVlLFxyXG4gICAgICAvLyBMb2FkIHByb3h5IGNvbmZpZ3VyYXRpb24gZnJvbSAuZW52LmRldmVsb3BtZW50XHJcbiAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgXCIvYWRtaW5cIjogdml0ZUVudi5WSVRFX0FQSV9VUkwsXHJcbiAgICAgICAgXCIvYXV0aFwiOiB2aXRlRW52LlZJVEVfQVBJX1VSTFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogY3JlYXRlVml0ZVBsdWdpbnModml0ZUVudiksXHJcbiAgICBlc2J1aWxkOiB7XHJcbiAgICAgIHB1cmU6IHZpdGVFbnYuVklURV9EUk9QX0NPTlNPTEUgPyBbXCJjb25zb2xlLmxvZ1wiLCBcImRlYnVnZ2VyXCJdIDogW11cclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBvdXREaXI6IFwiZGlzdFwiLFxyXG4gICAgICBtaW5pZnk6IFwiZXNidWlsZFwiLFxyXG4gICAgICAvLyBlc2J1aWxkIFx1NjI1M1x1NTMwNVx1NjZGNFx1NUZFQlx1RkYwQ1x1NEY0Nlx1NjYyRlx1NEUwRFx1ODBGRFx1NTNCQlx1OTY2NCBjb25zb2xlLmxvZ1x1RkYwQ3RlcnNlclx1NjI1M1x1NTMwNVx1NjE2Mlx1RkYwQ1x1NEY0Nlx1ODBGRFx1NTNCQlx1OTY2NCBjb25zb2xlLmxvZ1xyXG4gICAgICAvLyBtaW5pZnk6IFwidGVyc2VyXCIsXHJcbiAgICAgIC8vIHRlcnNlck9wdGlvbnM6IHtcclxuICAgICAgLy8gXHRjb21wcmVzczoge1xyXG4gICAgICAvLyBcdFx0ZHJvcF9jb25zb2xlOiB2aXRlRW52LlZJVEVfRFJPUF9DT05TT0xFLFxyXG4gICAgICAvLyBcdFx0ZHJvcF9kZWJ1Z2dlcjogdHJ1ZVxyXG4gICAgICAvLyBcdH1cclxuICAgICAgLy8gfSxcclxuICAgICAgc291cmNlbWFwOiBmYWxzZSxcclxuICAgICAgLy8gXHU3OTgxXHU3NTI4IGd6aXAgXHU1MzhCXHU3RjI5XHU1OTI3XHU1QzBGXHU2MkE1XHU1NDRBXHVGRjBDXHU1M0VGXHU3NTY1XHU1RkFFXHU1MUNGXHU1QzExXHU2MjUzXHU1MzA1XHU2NUY2XHU5NUY0XHJcbiAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiBmYWxzZSxcclxuICAgICAgLy8gXHU4OUM0XHU1QjlBXHU4OUU2XHU1M0QxXHU4QjY2XHU1NDRBXHU3Njg0IGNodW5rIFx1NTkyN1x1NUMwRlxyXG4gICAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDIwMCxcclxuICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgLy8gU3RhdGljIHJlc291cmNlIGNsYXNzaWZpY2F0aW9uIGFuZCBwYWNrYWdpbmdcclxuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0tW2hhc2hdLmpzXCIsXHJcbiAgICAgICAgICBlbnRyeUZpbGVOYW1lczogXCJhc3NldHMvanMvW25hbWVdLVtoYXNoXS5qc1wiLFxyXG4gICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IFwiYXNzZXRzL1tleHRdL1tuYW1lXS1baGFzaF0uW2V4dF1cIlxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvdXRwdXQ6IHtcclxuICAgICAgICAvLyAgIGVudHJ5RmlsZU5hbWVzOiBjaHVua0luZm8gPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyBcdTgzQjdcdTUzRDZcdTVGNTNcdTUyNERcdTc2ODRcdTY1ODdcdTRFRjZcdThERUZcdTVGODRcclxuICAgICAgICAvLyAgICAgY29uc3QgcGF0aCA9IGNodW5rSW5mby5mYWNhZGVNb2R1bGVJZDtcclxuICAgICAgICAvLyAgICAgLy8gXHU2M0QwXHU1M0Q2XHU3NkVFXHU1RjU1XHU1NDBEXHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGRpcmVjdG9yeU5hbWUgPSBwYXRoPy5zcGxpdChcIi9cIikuc2xpY2UoLTIsIC0xKVswXTtcclxuICAgICAgICAvLyAgICAgLy8gXHU0RjdGXHU3NTI4XHU3NkVFXHU1RjU1XHU1NDBEXHU0RjVDXHU0RTNBXHU2NTg3XHU0RUY2XHU1NDBEXHJcbiAgICAgICAgLy8gICAgIHJldHVybiBgJHtkaXJlY3RvcnlOYW1lfS9bbmFtZV0uanNgO1xyXG4gICAgICAgIC8vICAgfSxcclxuICAgICAgICAvLyAgIGNodW5rRmlsZU5hbWVzOiBcImFzc2V0cy9qcy9bbmFtZV0uW2hhc2hdLmpzXCIsXHJcbiAgICAgICAgLy8gICBhc3NldEZpbGVOYW1lczogXCJhc3NldHMvW2V4dF0vW25hbWVdLltoYXNoXS5bZXh0XVwiXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcXHU1RjAwXHU1M0QxXHU3NkVFXHU1RjU1XFxcXFx1OTg3OVx1NzZFRV9cdTU0MEVcdTUzRjBcXFxcaG9tYXItYWRtaW5cXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1NUYwMFx1NTNEMVx1NzZFRVx1NUY1NVxcXFxcdTk4NzlcdTc2RUVfXHU1NDBFXHU1M0YwXFxcXGhvbWFyLWFkbWluXFxcXGJ1aWxkXFxcXGdldEVudi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovJUU1JUJDJTgwJUU1JThGJTkxJUU3JTlCJUFFJUU1JUJEJTk1LyVFOSVBMSVCOSVFNyU5QiVBRV8lRTUlOTAlOEUlRTUlOEYlQjAvaG9tYXItYWRtaW4vYnVpbGQvZ2V0RW52LnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RldkZuKG1vZGU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBtb2RlID09PSBcImRldmVsb3BtZW50XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2RGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gbW9kZSA9PT0gXCJwcm9kdWN0aW9uXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Rlc3RGbihtb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gbW9kZSA9PT0gXCJ0ZXN0XCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGV0aGVyIHRvIGdlbmVyYXRlIHBhY2thZ2UgcHJldmlld1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVwb3J0TW9kZSgpOiBib29sZWFuIHtcclxuICByZXR1cm4gcHJvY2Vzcy5lbnYuVklURV9SRVBPUlQgPT09IFwidHJ1ZVwiO1xyXG59XHJcblxyXG4vLyBSZWFkIGFsbCBlbnZpcm9ubWVudCB2YXJpYWJsZSBjb25maWd1cmF0aW9uIGZpbGVzIHRvIHByb2Nlc3MuZW52XHJcbmV4cG9ydCBmdW5jdGlvbiB3cmFwcGVyRW52KGVudkNvbmY6IFJlY29yZGFibGUpOiBWaXRlRW52IHtcclxuICBjb25zdCByZXQ6IGFueSA9IHt9O1xyXG5cclxuICBmb3IgKGNvbnN0IGVudk5hbWUgb2YgT2JqZWN0LmtleXMoZW52Q29uZikpIHtcclxuICAgIGxldCByZWFsTmFtZSA9IGVudkNvbmZbZW52TmFtZV0ucmVwbGFjZSgvXFxcXG4vZywgXCJcXG5cIik7XHJcbiAgICByZWFsTmFtZSA9IHJlYWxOYW1lID09PSBcInRydWVcIiA/IHRydWUgOiByZWFsTmFtZSA9PT0gXCJmYWxzZVwiID8gZmFsc2UgOiByZWFsTmFtZTtcclxuICAgIGlmIChlbnZOYW1lID09PSBcIlZJVEVfUE9SVFwiKSByZWFsTmFtZSA9IE51bWJlcihyZWFsTmFtZSk7XHJcbiAgICBpZiAoZW52TmFtZSA9PT0gXCJWSVRFX1BST1hZXCIpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICByZWFsTmFtZSA9IEpTT04ucGFyc2UocmVhbE5hbWUpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge31cclxuICAgIH1cclxuICAgIHJldFtlbnZOYW1lXSA9IHJlYWxOYW1lO1xyXG4gIH1cclxuICByZXR1cm4gcmV0O1xyXG59XHJcblxyXG4vKipcclxuICogR2V0IHVzZXIgcm9vdCBkaXJlY3RvcnlcclxuICogQHBhcmFtIGRpciBmaWxlIHBhdGhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290UGF0aCguLi5kaXI6IHN0cmluZ1tdKSB7XHJcbiAgcmV0dXJuIHBhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAuLi5kaXIpO1xyXG59XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcXHU1RjAwXHU1M0QxXHU3NkVFXHU1RjU1XFxcXFx1OTg3OVx1NzZFRV9cdTU0MEVcdTUzRjBcXFxcaG9tYXItYWRtaW5cXFxcYnVpbGRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXFx1NUYwMFx1NTNEMVx1NzZFRVx1NUY1NVxcXFxcdTk4NzlcdTc2RUVfXHU1NDBFXHU1M0YwXFxcXGhvbWFyLWFkbWluXFxcXGJ1aWxkXFxcXHBsdWdpbnMudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LyVFNSVCQyU4MCVFNSU4RiU5MSVFNyU5QiVBRSVFNSVCRCU5NS8lRTklQTElQjklRTclOUIlQUVfJUU1JTkwJThFJUU1JThGJUIwL2hvbWFyLWFkbWluL2J1aWxkL3BsdWdpbnMudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgUGx1Z2luT3B0aW9uIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gXCJ2aXRlLXBsdWdpbi1wd2FcIjtcclxuaW1wb3J0IHsgY3JlYXRlSHRtbFBsdWdpbiB9IGZyb20gXCJ2aXRlLXBsdWdpbi1odG1sXCI7XHJcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb25zUGx1Z2luIH0gZnJvbSBcInZpdGUtcGx1Z2luLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlLWpzeFwiO1xyXG5pbXBvcnQgZXNsaW50UGx1Z2luIGZyb20gXCJ2aXRlLXBsdWdpbi1lc2xpbnRcIjtcclxuaW1wb3J0IHZpdGVDb21wcmVzc2lvbiBmcm9tIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjtcclxuaW1wb3J0IHZ1ZVNldHVwRXh0ZW5kIGZyb20gXCJ1bnBsdWdpbi12dWUtc2V0dXAtZXh0ZW5kLXBsdXMvdml0ZVwiO1xyXG5pbXBvcnQgTmV4dERldlRvb2xzIGZyb20gXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBcdTUyMUJcdTVFRkEgdml0ZSBcdTYzRDJcdTRFRjZcclxuICogQHBhcmFtIHZpdGVFbnZcclxuICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVWaXRlUGx1Z2lucyA9ICh2aXRlRW52OiBWaXRlRW52KTogKFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdKVtdID0+IHtcclxuICBjb25zdCB7IFZJVEVfR0xPQl9BUFBfVElUTEUsIFZJVEVfUkVQT1JULCBWSVRFX0RFVlRPT0xTLCBWSVRFX1BXQSB9ID0gdml0ZUVudjtcclxuICByZXR1cm4gW1xyXG4gICAgdnVlKCksXHJcbiAgICAvLyB2dWUgXHU1M0VGXHU0RUU1XHU0RjdGXHU3NTI4IGpzeC90c3ggXHU4QkVEXHU2Q0Q1XHJcbiAgICB2dWVKc3goKSxcclxuICAgIC8vIGRldlRvb2xzXHJcbiAgICBWSVRFX0RFVlRPT0xTICYmIE5leHREZXZUb29scyh7IGxhdW5jaEVkaXRvcjogXCJjb2RlXCIgfSksXHJcbiAgICAvLyBlc0xpbnQgXHU2MkE1XHU5NTE5XHU0RkUxXHU2MDZGXHU2NjNFXHU3OTNBXHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3NTRDXHU5NzYyXHU0RTBBXHJcbiAgICBlc2xpbnRQbHVnaW4oKSxcclxuICAgIC8vIG5hbWUgXHU1M0VGXHU0RUU1XHU1MTk5XHU1NzI4IHNjcmlwdCBcdTY4MDdcdTdCN0VcdTRFMEFcclxuICAgIHZ1ZVNldHVwRXh0ZW5kKHt9KSxcclxuICAgIC8vIFx1NTIxQlx1NUVGQVx1NjI1M1x1NTMwNVx1NTM4Qlx1N0YyOVx1OTE0RFx1N0Y2RVxyXG4gICAgY3JlYXRlQ29tcHJlc3Npb24odml0ZUVudiksXHJcbiAgICAvLyBcdTZDRThcdTUxNjVcdTUzRDhcdTkxQ0ZcdTUyMzAgaHRtbCBcdTY1ODdcdTRFRjZcclxuICAgIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG4gICAgICBtaW5pZnk6IHRydWUsXHJcbiAgICAgIGluamVjdDoge1xyXG4gICAgICAgIGRhdGE6IHsgdGl0bGU6IFZJVEVfR0xPQl9BUFBfVElUTEUgfVxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICAgIC8vIFx1NEY3Rlx1NzUyOCBzdmcgXHU1NkZFXHU2ODA3XHJcbiAgICBjcmVhdGVTdmdJY29uc1BsdWdpbih7XHJcbiAgICAgIGljb25EaXJzOiBbcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCBcInNyYy9hc3NldHMvaWNvbnNcIildLFxyXG4gICAgICBzeW1ib2xJZDogXCJpY29uLVtkaXJdLVtuYW1lXVwiXHJcbiAgICB9KSxcclxuICAgIC8vIHZpdGVQV0FcclxuICAgIFZJVEVfUFdBICYmIGNyZWF0ZVZpdGVQd2Eodml0ZUVudiksXHJcbiAgICAvLyBcdTY2MkZcdTU0MjZcdTc1MUZcdTYyMTBcdTUzMDVcdTk4ODRcdTg5QzhcdUZGMENcdTUyMDZcdTY3OTBcdTRGOURcdThENTZcdTUzMDVcdTU5MjdcdTVDMEZcdTUwNUFcdTRGMThcdTUzMTZcdTU5MDRcdTc0MDZcclxuICAgIFZJVEVfUkVQT1JUICYmICh2aXN1YWxpemVyKHsgZmlsZW5hbWU6IFwic3RhdHMuaHRtbFwiLCBnemlwU2l6ZTogdHJ1ZSwgYnJvdGxpU2l6ZTogdHJ1ZSB9KSBhcyBQbHVnaW5PcHRpb24pXHJcbiAgXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gXHU2ODM5XHU2MzZFIGNvbXByZXNzIFx1OTE0RFx1N0Y2RVx1RkYwQ1x1NzUxRlx1NjIxMFx1NEUwRFx1NTQwQ1x1NzY4NFx1NTM4Qlx1N0YyOVx1ODlDNFx1NTIxOVxyXG4gKiBAcGFyYW0gdml0ZUVudlxyXG4gKi9cclxuY29uc3QgY3JlYXRlQ29tcHJlc3Npb24gPSAodml0ZUVudjogVml0ZUVudik6IFBsdWdpbk9wdGlvbiB8IFBsdWdpbk9wdGlvbltdID0+IHtcclxuICBjb25zdCB7IFZJVEVfQlVJTERfQ09NUFJFU1MgPSBcIm5vbmVcIiwgVklURV9CVUlMRF9DT01QUkVTU19ERUxFVEVfT1JJR0lOX0ZJTEUgfSA9IHZpdGVFbnY7XHJcbiAgY29uc3QgY29tcHJlc3NMaXN0ID0gVklURV9CVUlMRF9DT01QUkVTUy5zcGxpdChcIixcIik7XHJcbiAgY29uc3QgcGx1Z2luczogUGx1Z2luT3B0aW9uW10gPSBbXTtcclxuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKFwiZ3ppcFwiKSkge1xyXG4gICAgcGx1Z2lucy5wdXNoKFxyXG4gICAgICB2aXRlQ29tcHJlc3Npb24oe1xyXG4gICAgICAgIGV4dDogXCIuZ3pcIixcclxuICAgICAgICBhbGdvcml0aG06IFwiZ3ppcFwiLFxyXG4gICAgICAgIGRlbGV0ZU9yaWdpbkZpbGU6IFZJVEVfQlVJTERfQ09NUFJFU1NfREVMRVRFX09SSUdJTl9GSUxFXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICBpZiAoY29tcHJlc3NMaXN0LmluY2x1ZGVzKFwiYnJvdGxpXCIpKSB7XHJcbiAgICBwbHVnaW5zLnB1c2goXHJcbiAgICAgIHZpdGVDb21wcmVzc2lvbih7XHJcbiAgICAgICAgZXh0OiBcIi5iclwiLFxyXG4gICAgICAgIGFsZ29yaXRobTogXCJicm90bGlDb21wcmVzc1wiLFxyXG4gICAgICAgIGRlbGV0ZU9yaWdpbkZpbGU6IFZJVEVfQlVJTERfQ09NUFJFU1NfREVMRVRFX09SSUdJTl9GSUxFXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuICByZXR1cm4gcGx1Z2lucztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb24gVml0ZVB3YVxyXG4gKiBAcGFyYW0gdml0ZUVudlxyXG4gKi9cclxuY29uc3QgY3JlYXRlVml0ZVB3YSA9ICh2aXRlRW52OiBWaXRlRW52KTogUGx1Z2luT3B0aW9uIHwgUGx1Z2luT3B0aW9uW10gPT4ge1xyXG4gIGNvbnN0IHsgVklURV9HTE9CX0FQUF9USVRMRSB9ID0gdml0ZUVudjtcclxuICByZXR1cm4gVml0ZVBXQSh7XHJcbiAgICByZWdpc3RlclR5cGU6IFwiYXV0b1VwZGF0ZVwiLFxyXG4gICAgbWFuaWZlc3Q6IHtcclxuICAgICAgbmFtZTogVklURV9HTE9CX0FQUF9USVRMRSxcclxuICAgICAgc2hvcnRfbmFtZTogVklURV9HTE9CX0FQUF9USVRMRSxcclxuICAgICAgdGhlbWVfY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICBpY29uczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCIvbG9nby5wbmdcIixcclxuICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCIvbG9nby5wbmdcIixcclxuICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHNyYzogXCIvbG9nby5wbmdcIixcclxuICAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgICBwdXJwb3NlOiBcImFueSBtYXNrYWJsZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbiIsICJ7XG4gIFwibmFtZVwiOiBcImhvbWdhci1hZG1pbi1uZXh0XCIsXG4gIFwicHJpdmF0ZVwiOiB0cnVlLFxuICBcInZlcnNpb25cIjogXCIxLjAuMFwiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcImhvbWdhclx1NTQwRVx1NTNGMFx1N0JBMVx1NzQwNlx1N0NGQlx1N0VERlwiLFxuICBcImF1dGhvclwiOiBcImxpbndtXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImhvbWVwYWdlXCI6IFwiXCIsXG4gIFwicmVwb3NpdG9yeVwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiZ2l0XCIsXG4gICAgXCJ1cmxcIjogXCJnaXRAZ2l0aHViLmNvbTpIYWxzZXlTcGljeS9HZWVrZXItQWRtaW4uZ2l0XCJcbiAgfSxcbiAgXCJidWdzXCI6IHtcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYWxzZXlTcGljeS9HZWVrZXItQWRtaW4vaXNzdWVzXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInZpdGVcIixcbiAgICBcInNlcnZlXCI6IFwidml0ZVwiLFxuICAgIFwiYnVpbGQ6ZGV2XCI6IFwidnVlLXRzYyAmJiB2aXRlIGJ1aWxkIC0tbW9kZSBkZXZlbG9wbWVudFwiLFxuICAgIFwiYnVpbGQ6dGVzdFwiOiBcInZ1ZS10c2MgJiYgdml0ZSBidWlsZCAtLW1vZGUgdGVzdFwiLFxuICAgIFwiYnVpbGQ6cHJvXCI6IFwidnVlLXRzYyAmJiB2aXRlIGJ1aWxkIC0tbW9kZSBwcm9kdWN0aW9uXCIsXG4gICAgXCJ0eXBlOmNoZWNrXCI6IFwidnVlLXRzYyAtLW5vRW1pdCAtLXNraXBMaWJDaGVja1wiLFxuICAgIFwicHJldmlld1wiOiBcInBucG0gYnVpbGQ6ZGV2ICYmIHZpdGUgcHJldmlld1wiLFxuICAgIFwibGludDplc2xpbnRcIjogXCJlc2xpbnQgLS1maXggLS1leHQgLmpzLC50cywudnVlIC4vc3JjXCIsXG4gICAgXCJsaW50OnByZXR0aWVyXCI6IFwicHJldHRpZXIgLS13cml0ZSBcXFwic3JjLyoqLyoue2pzLHRzLGpzb24sdHN4LGNzcyxsZXNzLHNjc3MsdnVlLGh0bWwsbWR9XFxcIlwiLFxuICAgIFwibGludDpzdHlsZWxpbnRcIjogXCJzdHlsZWxpbnQgLS1jYWNoZSAtLWZpeCBcXFwiKiovKi57dnVlLGxlc3MscG9zdGNzcyxjc3Msc2Nzc31cXFwiIC0tY2FjaGUgLS1jYWNoZS1sb2NhdGlvbiBub2RlX21vZHVsZXMvLmNhY2hlL3N0eWxlbGludC9cIixcbiAgICBcImxpbnQ6bGludC1zdGFnZWRcIjogXCJsaW50LXN0YWdlZFwiLFxuICAgIFwicHJlcGFyZVwiOiBcImh1c2t5IGluc3RhbGxcIixcbiAgICBcInJlbGVhc2VcIjogXCJzdGFuZGFyZC12ZXJzaW9uXCIsXG4gICAgXCJjb21taXRcIjogXCJnaXQgYWRkIC1BICYmIGN6ZyAmJiBnaXQgcHVzaFwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBlbGVtZW50LXBsdXMvaWNvbnMtdnVlXCI6IFwiXjIuMy4xXCIsXG4gICAgXCJAdnVldXNlL2NvcmVcIjogXCJeMTAuMTEuMFwiLFxuICAgIFwiQHdhbmdlZGl0b3IvZWRpdG9yXCI6IFwiXjUuMS4yM1wiLFxuICAgIFwiQHdhbmdlZGl0b3IvZWRpdG9yLWZvci12dWVcIjogXCJeNS4xLjEyXCIsXG4gICAgXCJheGlvc1wiOiBcIl4xLjcuMlwiLFxuICAgIFwiZGF5anNcIjogXCJeMS4xMS4xMVwiLFxuICAgIFwiZHJpdmVyLmpzXCI6IFwiXjEuMy4xXCIsXG4gICAgXCJlY2hhcnRzXCI6IFwiXjUuNS4xXCIsXG4gICAgXCJlY2hhcnRzLWxpcXVpZGZpbGxcIjogXCJeMy4xLjBcIixcbiAgICBcImVsZW1lbnQtcGx1c1wiOiBcIl4yLjguMVwiLFxuICAgIFwibWQ1XCI6IFwiXjIuMy4wXCIsXG4gICAgXCJtaXR0XCI6IFwiXjMuMC4xXCIsXG4gICAgXCJucHJvZ3Jlc3NcIjogXCJeMC4yLjBcIixcbiAgICBcInBpbmlhXCI6IFwiXjIuMS43XCIsXG4gICAgXCJwaW5pYS1wbHVnaW4tcGVyc2lzdGVkc3RhdGVcIjogXCJeMy4yLjFcIixcbiAgICBcInFzXCI6IFwiXjYuMTIuMVwiLFxuICAgIFwicmFkYXNoXCI6IFwiXjEyLjEuMFwiLFxuICAgIFwic2NyZWVuZnVsbFwiOiBcIl42LjAuMlwiLFxuICAgIFwic29ydGFibGVqc1wiOiBcIl4xLjE1LjJcIixcbiAgICBcInZ1ZVwiOiBcIl4zLjQuMzFcIixcbiAgICBcInZ1ZS1pMThuXCI6IFwiXjkuMTMuMVwiLFxuICAgIFwidnVlLXJvdXRlclwiOiBcIl40LjQuMFwiLFxuICAgIFwidnVlZHJhZ2dhYmxlXCI6IFwiXjQuMS4wXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGNvbW1pdGxpbnQvY2xpXCI6IFwiXjE4LjQuM1wiLFxuICAgIFwiQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbFwiOiBcIl4xOC40LjNcIixcbiAgICBcIkB0eXBlcy9tZDVcIjogXCJeMi4zLjVcIixcbiAgICBcIkB0eXBlcy9ucHJvZ3Jlc3NcIjogXCJeMC4yLjNcIixcbiAgICBcIkB0eXBlcy9xc1wiOiBcIl42LjkuMTVcIixcbiAgICBcIkB0eXBlcy9zb3J0YWJsZWpzXCI6IFwiXjEuMTUuOFwiLFxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNy4xNC4xXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjcuMTQuMVwiLFxuICAgIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI6IFwiXjUuMC40XCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi12dWUtanN4XCI6IFwiXjMuMS4wXCIsXG4gICAgXCJhdXRvcHJlZml4ZXJcIjogXCJeMTAuNC4xOVwiLFxuICAgIFwiY3otZ2l0XCI6IFwiMS45LjJcIixcbiAgICBcImN6Z1wiOiBcIl4xLjkuMlwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNTcuMFwiLFxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl45LjEuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1wcmV0dGllclwiOiBcIl41LjEuM1wiLFxuICAgIFwiZXNsaW50LXBsdWdpbi12dWVcIjogXCJeOS4yNi4wXCIsXG4gICAgXCJodXNreVwiOiBcIl45LjAuMTFcIixcbiAgICBcImxpbnQtc3RhZ2VkXCI6IFwiXjE1LjIuNVwiLFxuICAgIFwicG9zdGNzc1wiOiBcIl44LjQuMzhcIixcbiAgICBcInBvc3Rjc3MtaHRtbFwiOiBcIl4xLjcuMFwiLFxuICAgIFwicHJldHRpZXJcIjogXCJeMy4zLjJcIixcbiAgICBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiOiBcIl41LjEyLjBcIixcbiAgICBcInNhc3NcIjogXCJeMS43Ny42XCIsXG4gICAgXCJzdGFuZGFyZC12ZXJzaW9uXCI6IFwiXjkuNS4wXCIsXG4gICAgXCJzdHlsZWxpbnRcIjogXCJeMTYuNi4xXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLWh0bWxcIjogXCJeMS4xLjBcIixcbiAgICBcInN0eWxlbGludC1jb25maWctcmVjZXNzLW9yZGVyXCI6IFwiXjUuMC4xXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkLXNjc3NcIjogXCJeMTQuMC4wXCIsXG4gICAgXCJzdHlsZWxpbnQtY29uZmlnLXJlY29tbWVuZGVkLXZ1ZVwiOiBcIl4xLjUuMFwiLFxuICAgIFwic3R5bGVsaW50LWNvbmZpZy1zdGFuZGFyZFwiOiBcIl4zNi4wLjBcIixcbiAgICBcInN0eWxlbGludC1jb25maWctc3RhbmRhcmQtc2Nzc1wiOiBcIl4xMy4xLjBcIixcbiAgICBcInR5cGVzY3JpcHRcIjogXCJeNS41LjJcIixcbiAgICBcInVucGx1Z2luLXZ1ZS1zZXR1cC1leHRlbmQtcGx1c1wiOiBcIl4xLjAuMVwiLFxuICAgIFwidml0ZVwiOiBcIl41LjMuMlwiLFxuICAgIFwidml0ZS1wbHVnaW4tY29tcHJlc3Npb25cIjogXCJeMC41LjFcIixcbiAgICBcInZpdGUtcGx1Z2luLWVzbGludFwiOiBcIl4xLjguMVwiLFxuICAgIFwidml0ZS1wbHVnaW4taHRtbFwiOiBcIl4zLjIuMlwiLFxuICAgIFwidml0ZS1wbHVnaW4tcHdhXCI6IFwiXjAuMjAuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tc3ZnLWljb25zXCI6IFwiXjIuMC4xXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHNcIjogXCJeNy4zLjVcIixcbiAgICBcInZ1ZS10c2NcIjogXCJeMi4wLjIyXCJcbiAgfSxcbiAgXCJlbmdpbmVzXCI6IHtcbiAgICBcIm5vZGVcIjogXCI+PTE2LjE4LjBcIlxuICB9LFxuICBcImJyb3dzZXJzbGlzdFwiOiB7XG4gICAgXCJwcm9kdWN0aW9uXCI6IFtcbiAgICAgIFwiPiAxJVwiLFxuICAgICAgXCJub3QgZGVhZFwiLFxuICAgICAgXCJub3Qgb3BfbWluaSBhbGxcIlxuICAgIF0sXG4gICAgXCJkZXZlbG9wbWVudFwiOiBbXG4gICAgICBcImxhc3QgMSBjaHJvbWUgdmVyc2lvblwiLFxuICAgICAgXCJsYXN0IDEgZmlyZWZveCB2ZXJzaW9uXCIsXG4gICAgICBcImxhc3QgMSBzYWZhcmkgdmVyc2lvblwiXG4gICAgXVxuICB9LFxuICBcImNvbmZpZ1wiOiB7XG4gICAgXCJjb21taXRpemVuXCI6IHtcbiAgICAgIFwicGF0aFwiOiBcIm5vZGVfbW9kdWxlcy9jei1naXRcIlxuICAgIH1cbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxVSxTQUFTLGNBQWMsZUFBc0M7QUFDbFksU0FBUyxXQUFBQSxVQUFTLFlBQVk7OztBQ3FCdkIsU0FBUyxXQUFXLFNBQThCO0FBQ3ZELFFBQU0sTUFBVyxDQUFDO0FBRWxCLGFBQVcsV0FBVyxPQUFPLEtBQUssT0FBTyxHQUFHO0FBQzFDLFFBQUksV0FBVyxRQUFRLE9BQU8sRUFBRSxRQUFRLFFBQVEsSUFBSTtBQUNwRCxlQUFXLGFBQWEsU0FBUyxPQUFPLGFBQWEsVUFBVSxRQUFRO0FBQ3ZFLFFBQUksWUFBWSxZQUFhLFlBQVcsT0FBTyxRQUFRO0FBQ3ZELFFBQUksWUFBWSxjQUFjO0FBQzVCLFVBQUk7QUFDRixtQkFBVyxLQUFLLE1BQU0sUUFBUTtBQUFBLE1BQ2hDLFNBQVMsT0FBTztBQUFBLE1BQUM7QUFBQSxJQUNuQjtBQUNBLFFBQUksT0FBTyxJQUFJO0FBQUEsRUFDakI7QUFDQSxTQUFPO0FBQ1Q7OztBQ3JDaVYsU0FBUyxlQUFlO0FBRXpXLFNBQVMsZUFBZTtBQUN4QixTQUFTLHdCQUF3QjtBQUNqQyxTQUFTLGtCQUFrQjtBQUMzQixTQUFTLDRCQUE0QjtBQUNyQyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sa0JBQWtCO0FBTWxCLElBQU0sb0JBQW9CLENBQUMsWUFBd0Q7QUFDeEYsUUFBTSxFQUFFLHFCQUFxQixhQUFhLGVBQWUsU0FBUyxJQUFJO0FBQ3RFLFNBQU87QUFBQSxJQUNMLElBQUk7QUFBQTtBQUFBLElBRUosT0FBTztBQUFBO0FBQUEsSUFFUCxpQkFBaUIsYUFBYSxFQUFFLGNBQWMsT0FBTyxDQUFDO0FBQUE7QUFBQSxJQUV0RCxhQUFhO0FBQUE7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
