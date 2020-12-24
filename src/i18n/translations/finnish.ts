import { CategoryType } from '../../types/Project.types';
import { TranslationType } from '../i18n.types';

const finnish: TranslationType = {
  Categories: {
    [CategoryType.housing]: 'Asuminen',
    [CategoryType.landscape]: 'Maisema',
    [CategoryType.public]: 'Julkinen',
    [CategoryType.urban]: 'Kaupunki',
  },
  Common: {
    all: 'Kaikki',
  },
  Headlines: {
    highlights: 'Valikoidut kilpailut',
  },
  Navigation: {
    about: 'Meistä',
    contact: 'Yhteystiedot',
    projects: 'Projektit',
  },
  Placements: {
    first: '1. palkinto',
    sharedFirst: 'Jaettu 1. palkinto',
    second: '2. palkinto',
    purchase: 'Lunastus',
    honorableMention: 'Kunniamaininta',
    entry: 'Kilpailutyö',
  },
  Titles: {
    architect: 'Arkkitehti',
    architectSafa: 'Arkkitehti SAFA',
    landscapeArchitect: 'Maisema-arkkitehti MARK',
  },
  Translation: {
    fi: 'Suomeksi',
    en: 'In English',
  },
};

export default finnish;
