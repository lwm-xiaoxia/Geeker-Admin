import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/style/init.scss";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// iconfont css
import "@/assets/iconfont/iconfont.scss";
// font css
import "@/assets/fonts/font.scss";
import "virtual:svg-icons-register";

import setupDirective from "@/directives";
import { setupRouter } from "@/router";
import setupI18n from "@/languages";
import setupStore from "@/store";
import setLibs from "@/libs";
import errorHandler from "@/utils/errorHandler";

const setupApp = async () => {
  const app = createApp(App);
  app.config.errorHandler = errorHandler;

  setupRouter(app);

  setupStore(app);

  setupDirective(app);

  setupI18n(app);

  setLibs(app);

  app.mount("#app");
};

setupApp();
