import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TranslationMapType } from './i18n.types';
import english from './translations/english';
import finnish from './translations/finnish';

const translationMap: TranslationMapType = {
  en: english,
  fi: finnish,
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'fi',
    interpolation: {
      escapeValue: false,
    },
    lng: 'fi',
    resources: {
      en: {
        translation: translationMap.en,
      },
      fi: {
        translation: translationMap.fi,
      },
    },
  });

export default i18n;
