import type { App } from 'vue';
import setupElementPlus from './elementPlus';

export default function setupLibs(app: App<Element>) {
  setupElementPlus(app);
}
