import { PlacementType } from '../types/Project.types';

export interface TranslatableStringArrayType {
  en: string[],
  fi: string[],
}

export interface TranslatableStringType {
  en: string,
  fi: string,
}

export type LanguageType =
  | 'en'
  | 'fi';

export interface TranslationType {
  Headlines: {
    highlights: string,
  },
  Navigation: {
    about: string,
    contact: string,
    projects: string,
  },
  Placements: Record<PlacementType, string>,
  Titles: {
    architect: string,
    architectSafa: string,
    landscapeArchitect: string,
  },
  Translation: {
    fi: string,
    en: string,
  },
}

export type TranslationMapType = Record<LanguageType, TranslationType>;
