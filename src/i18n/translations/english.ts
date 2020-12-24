import { CategoryType } from '../../types/Project.types';
import { TranslationType } from '../i18n.types';

const english: TranslationType = {
  Categories: {
    [CategoryType.housing]: 'Housing',
    [CategoryType.landscape]: 'Landscape',
    [CategoryType.public]: 'Public',
    [CategoryType.urban]: 'Urban',
  },
  Common: {
    all: 'All',
  },
  Headlines: {
    highlights: 'Selected Works',
  },
  Navigation: {
    about: 'About',
    contact: 'Contact',
    projects: 'Work',
  },
  Placements: {
    first: '1st Prize',
    sharedFirst: 'Shared 1st Prize',
    second: '2nd Prize',
    purchase: 'Purchase',
    honorableMention: 'Honorable Mention',
    entry: 'Competition Entry',
  },
  Titles: {
    architect: 'Architect',
    architectSafa: 'Architect SAFA',
    landscapeArchitect: 'Landscape Architect MARK',
  },
  Translation: {
    fi: 'Suomeksi',
    en: 'In English',
  },
};

export default english;
