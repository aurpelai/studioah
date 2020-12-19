import { ReactNode } from 'react';

export type ComponentWithChildren<Type = Record<string, unknown>> = Type & {
  children?: ReactNode,
};
