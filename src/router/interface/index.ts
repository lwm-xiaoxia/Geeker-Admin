export interface MapItem {
  id: number;
  name: string;
  component: any;
  icon?: string;
  children?: MapItem[];
  isHide?: boolean;
  isFull?: boolean;
  isKeepAlive?: boolean;
}
