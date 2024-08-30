import type { MapItem } from '../interface';
import systemList from './system';
import userList from './user';

export const flatList = getFlatList([...systemList, ...userList]);

function getFlatList(list: MapItem[]): MapItem[] {
  return list.reduce((prev: MapItem[], item) => {
    return prev.concat(item.children ? getFlatList(item.children) : item);
  }, []);
}

export const getTarget = (id: number): MapItem | undefined => {
  console.log('----', id);
  return flatList.find(item => item.id === id);
};
