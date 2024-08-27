import { createApp } from "vue";
import App from "./App.vue";
import "@/styles/reset.scss";
import "@/styles/common.scss";
import "@/assets/style/init.scss";
import "@/assets/iconfont/iconfont.scss";
import "@/assets/fonts/font.scss";
import "virtual:svg-icons-register";

import setupDirectives from "@/directives";
import setupRouter from "@/router";
import setupI18n from "@/languages";
import setupStore from "@/store";
import setLibs from "@/libs";
import errorHandler from "@/utils/errorHandler";

const setupApp = async () => {
  const app = createApp(App);
  app.config.errorHandler = errorHandler;

  setupRouter(app);

  setupStore(app);

  setupDirectives(app);

  setupI18n(app);

  setLibs(app);

  app.mount("#app");
};

setupApp();
