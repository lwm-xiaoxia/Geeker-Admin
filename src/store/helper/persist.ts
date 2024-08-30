import { PersistedStateOptions } from 'pinia-plugin-persistedstate';

/**
 * @description pinia 持久化参数配置
 * @param {String} key 存储到持久化的 name
 * @param {Array} paths 需要持久化的 state name
 * @return persist
 * */
const piniaPersistConfig = (key: string, paths?: string[]) => {
  const persist: PersistedStateOptions = {
    key,
    storage: localStorage,
    paths
  };
  return persist;
};

export default piniaPersistConfig;

interface TreeItem {
  id: number;
  parentId: number;
  [key: string]: any;
}

export const getTree = (items: TreeItem[], rootId: number): TreeItem[] => {
  const result: TreeItem[] = [];
  const itemMap: { [key: number]: TreeItem } = {};

  // 建立一个映射表
  items.forEach(item => {
    itemMap[item.id] = { ...item, children: [] };
  });

  items.forEach(item => {
    const currentItem = itemMap[item.id];
    if (item.parentId === rootId) {
      result.push(currentItem);
    } else {
      const parentItem = itemMap[item.parentId];
      if (parentItem) {
        parentItem.children.push(currentItem);
      }
    }
  });

  return result;
};
