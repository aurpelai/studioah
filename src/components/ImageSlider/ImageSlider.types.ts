export type DirectionType =
  | 'LEFT'
  | 'RIGHT';

export type StackItemType = {
  id: string,
  src: string,
};

export type ImageSiderType = {
  images: StackItemType[],
};

export interface StyledImageNavigationItemType {
  isActive: boolean,
}
