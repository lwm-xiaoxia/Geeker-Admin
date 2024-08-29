import type { App } from 'vue';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/styles/element-dark.scss';
import '@/styles/element.scss';
import ElementPlus from 'element-plus';
import * as Icons from '@element-plus/icons-vue';

export default function setupElementPlus(app: App<Element>) {
  Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
  });
  app.use(ElementPlus);
}
