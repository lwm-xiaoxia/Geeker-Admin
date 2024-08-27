import { ElMessage } from "element-plus";
import type { LanguageType } from "@/store/interface";
import type { LangData } from "../interface";

export const getLocal = (language: LanguageType): LangData => {
  const localJson = localStorage.getItem(language);
  return localJson ? JSON.parse(localJson) : {};
};

export const fetchLangData = async (language: LanguageType) => {
  const base = import.meta.env.VITE_BASE_URL;
  const local = getLocal(language);
  const res = await fetch(`${base}/lang/${language}.json`);
  try {
    const fetchLangData: LangData = await res.json();
    if (local.version === fetchLangData.version) {
      return local;
    }
    localStorage.setItem(language, JSON.stringify(fetchLangData));
    return fetchLangData;
  } catch (err) {
    ElMessage({ type: "error", message: `加载语言失败: ${err}` });
    return local;
  }
};
