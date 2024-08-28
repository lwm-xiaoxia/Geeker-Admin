import type { App } from "vue";
import { createI18n } from "vue-i18n";
import { getBrowserLang } from "@/utils";
import { useGlobalStore } from "@/store/modules/global";
import type { LanguageType } from "@/store/interface";
import { getLocal, fetchLangData } from "./helper/fetch-data";

const language = getBrowserLang();
export const i18n = createI18n({
  allowComposition: true,
  legacy: false
});
export default async function setupI18n(app: App<Element>) {
  const { language } = useGlobalStore();
  i18n.global.locale.value = language;
  i18n.global.setLocaleMessage(language, getLocal(language));

  app.use(i18n);

  const languageData = await fetchLangData(language);
  i18n.global.setLocaleMessage(language, languageData);
}

export const switchLangData = async (language: LanguageType) => {
  i18n.global.locale.value = language;
  const local = getLocal(language);
  if (Object.keys(local).length) {
    i18n.global.setLocaleMessage(language, local);
  } else {
    const { setLanguageLoad } = useGlobalStore();
    setLanguageLoad(true);
    const languageData = await fetchLangData(language);
    setLanguageLoad(false);
    i18n.global.setLocaleMessage(language, languageData);
  }
};
