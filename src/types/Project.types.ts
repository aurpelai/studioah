import { TranslatableStringType } from '../i18n/i18n.types';

export type PlacementType =
  | 'first'
  | 'sharedFirst'
  | 'second'
  | 'purchase'
  | 'honorableMention'
  | 'entry';

export interface CompetitionType {
  placement: PlacementType,
  placementDescription?: TranslatableStringType,
  title?: string,
}

interface LocationType {
  city: string,
  country: string,
  details?: TranslatableStringType,
}

export enum CategoryType {
  housing = 'housing',
  landscape = 'landscape',
  public = 'public',
  urban = 'urban',
}

type ColorNamesType = keyof typeof CategoryType;
export type ColorValuesType = typeof CategoryType[ColorNamesType];

export interface ProjectType {
  categories: CategoryType[],
  competition?: CompetitionType,
  date: number,
  description: TranslatableStringType,
  imageFolder: string,
  isHighlight: boolean,
  location?: LocationType,
  title: TranslatableStringType,
}

export interface ProjectRenderType extends ProjectType {
  images: string[],
}
