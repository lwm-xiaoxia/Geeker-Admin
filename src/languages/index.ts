import type { App } from "vue";
import { createI18n } from "vue-i18n";
import { getBrowserLang } from "@/utils";
import { useGlobalStore } from "@/store/modules/global";
import { getLocal, fetchLangData } from "./helper/fetch-data";
export default function setupI18n(app: App<Element>) {
  const language = useGlobalStore().language;
  const i18n = createI18n({
    // Use Composition API, Set to false
    allowComposition: true,
    legacy: false,
    locale: getBrowserLang(),
    messages: { [language]: getLocal(language) }
  });
  app.use(i18n);
}
