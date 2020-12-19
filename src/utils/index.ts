import i18n from '../i18n/i18n';
import {
  LanguageType,
  TranslatableStringArrayType,
  TranslatableStringType,
} from '../i18n/i18n.types';
import { CompetitionType } from '../types/Project.types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ImportFileType = Record<string, any>;

export const importAll = (
  requireContext: __WebpackModuleApi.RequireContext,
  filter: string
): ImportFileType => requireContext
  .keys()
  .reduce((accumulator, current) => {
    if (current.indexOf(filter) > 0) {
      accumulator[current.replace('./', '')] = requireContext(current);
    }
    return accumulator;
  }, {} as ImportFileType);

export const translateStringArray = (array: TranslatableStringArrayType): string[] => {
  const lang = i18n.language as LanguageType;
  return array[lang];
};

export const translateString = (translatableString: TranslatableStringType): string => {
  const lang = i18n.language as LanguageType;
  return translatableString[lang];
};

interface PlacementOptionsType {
  toLowerCase?: boolean,
}

export const translatePlacement = (competition: CompetitionType, options?: PlacementOptionsType): string => {
  let string = i18n.t(`Placements.${competition.placement}`);

  if (competition.placementDescription) {
    string = translateString(competition.placementDescription);
  }

  if (options?.toLowerCase) {
    string = string.toLocaleLowerCase();
  }

  return string;
};
