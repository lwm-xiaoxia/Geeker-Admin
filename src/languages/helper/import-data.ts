import type { LanguageType } from '@/store/interface';
import type { LangData } from '../interface';

export const importLangData = async (language: LanguageType) => {
  const res = await import(`../modules/${language}.ts`);
  return res.default as LangData;
};
