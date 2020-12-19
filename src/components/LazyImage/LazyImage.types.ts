import { RefObject } from 'react';

export interface LazyImageType {
  alt?: string,
  src: string,
}

export interface StyledImageType {
  isLoaded?: boolean,
  ref?: RefObject<HTMLImageElement>,
}
