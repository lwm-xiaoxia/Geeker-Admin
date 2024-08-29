/**
 * @file dictionaries.ts
 * @description 常用字典集中式管理，封装工具方法
 */

type DictionaryValue = number | string;
export interface Dictionary<T extends DictionaryValue = string> {
  [key: string]: T;
}

export const getDictionaryName = <T extends DictionaryValue = string>(
  dictionary: Dictionary<T>,
  value: T
): string => {
  const keys = Object.keys(dictionary);
  return keys.find(key => dictionary[key] === value) || '';
};

export const formatFormOpts = <T extends DictionaryValue = string>(dictionary: Dictionary<T>) => {
  const entries = Object.entries(dictionary);
  return entries.map(item => {
    return { label: item[0], value: item[1] };
  });
};
