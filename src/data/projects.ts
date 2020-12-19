/* eslint-disable max-len */
import { ProjectType } from '../types/Project.types';

const projects: ProjectType[] = [
  {
    categories: ['architecture'],
    competition: {
      category: 'ideation',
      placement: 'purchase',
    },
    date: 2020,
    description: {
      en: 'Urban development and a new museum building for a historically and culturally important area',
      fi: 'Historiallisesti ja kulttuurisesti  merkittävän alueen kehittäminen ja museorakennuksen ideasuunnitelma',
    },
    imageFolder: 'linnaniemi',
    isHighlight: true,
    location: {
      city: 'Turku',
      country: 'Finland',
    },
    title: {
      en: 'International Idea Competition for Linnanniemi',
      fi: 'Turun Linnanniemen kansainvälinen ideakilpailu',
    },
  },
  {
    categories: ['architecture'],
    competition: {
      category: 'architecture',
      placement: 'first',
    },
    date: 2018,
    description: {
      en: 'An Adaptable wooden housing block for a new sustainable housing area in Tampere, Finland',
      fi: 'Joustavan, yhteisöllisen ja älykkään puurakenteisen asuinrakentamisen suunnittelu Tampereen Vuorekseen',
    },
    imageFolder: 'asuntoreformi',
    isHighlight: true,
    location: {
      city: 'Tampere',
      country: 'Finland',
    },
    status: 'implementation',
    title: {
      en: 'Housing Reform 2018',
      fi: 'Asuntoreformi 2018',
    },
  },
  {
    categories: ['architecture'],
    competition: {
      category: 'ideation',
      placement: 'first',
      placementDescription: {
        en: '1st Prize',
        fi: '1. palkinto kansainvälisessä ideakilpailussa',
      },
    },
    date: 2016,
    description: {
      en: 'International competition. A museum extension for a historically and culturally important context',
      fi: 'Historiallisesti ja kulttuurisesti arvokkaan museokokonaisuuden yhteyksien ja toiminnallisuuden kehittäminen paikkaan sovitetulla laajennusosalla',
    },
    imageFolder: 'aalto',
    isHighlight: true,
    location: {
      city: 'Jyväskylä',
      country: 'Finland',
    },
    status: 'implementation',
    title: {
      en: 'Extension of the Alvar Aalto Museum and the Museum of Central Finland',
      fi: 'Alvar Aalto -museon ja Keski-Suomen museon nivelosa',
    },
  },
  {
    categories: ['architecture'],
    competition: {
      category: 'ideation',
      placement: 'second',
      placementDescription: {
        en: '2nd Prize',
        fi: '2. palkinto kansainvälisessä kilpailussa',
      },
    },
    date: 2015,
    description: {
      en: 'An international urban and architectural competition. Campus development and wooden student housing in Espoo, Finland',
      fi: 'Yliopistokampuksen reuna-alueen kehittäminen ja joustavan puisen asuinrakentamisen suunnittelu Otaniemeen',
    },
    imageFolder: 'europan',
    isHighlight: true,
    location: {
      city: 'Espoo',
      country: 'Finland',
    },
    title: {
      en: 'Europan 13 The Adaptable City',
      fi: 'Europan 13 The Adaptable City',
    },
  },
  {
    categories: ['architecture'],
    competition: {
      category: 'architecture',
      placement: 'entry',
    },
    date: 2020,
    description: {
      en: 'Wooden student housing',
      fi: 'Puurakennukset opiskelija-asumiseen',
    },
    imageFolder: 'domus',
    isHighlight: false,
    location: {
      city: 'Tampere',
      country: 'Finland',
    },
    title: {
      en: 'Vanha Domus',
      fi: 'Vanha Domus',
    },
  },
  {
    categories: ['architecture'],
    competition: {
      category: 'architecture',
      placement: 'entry',
    },
    date: 2017,
    description: {
      en: 'New housing for a UNESCO World Heritage site',
      fi: 'Uusi puinen asuinkortteli Unescon maailmanperintökohteeseen',
    },
    imageFolder: 'suomenlinna',
    isHighlight: false,
    location: {
      city: 'Helsinki',
      country: 'Finland',
    },
    title: {
      en: 'Suomenlinna Housing Block',
      fi: 'Suomenlinnan täydennysrakentaminen',
    },
  },
  {
    categories: ['architecture'],
    competition: {
      category: 'architecture',
      placement: 'entry',
    },
    date: 2018,
    description: {
      en: 'Urban plan for a wooden housing area',
      fi: 'Puisen asuinalueen suunnitelma',
    },
    imageFolder: 'kormuniitty',
    isHighlight: false,
    location: {
      city: 'Vantaa',
      country: 'Finland',
      details: {
        en: 'BoKlok Suomi',
        fi: 'BoKlok Suomi',
      },
    },
    title: {
      en: 'Kormuniitty Urban Plan',
      fi: 'Kormuniityn aluesuunnitelma',
    },
  },
  {
    categories: ['architecture'],
    competition: {
      category: 'architecture',
      placement: 'entry',
    },
    date: 2017,
    description: {
      en: 'An extension for a museum building and an urban plan for the museum area and a market square',
      fi: 'Museorakennuksen laajennus ja ympäristön kehittäminen',
    },
    imageFolder: 'tampere',
    isHighlight: false,
    location: {
      city: 'Tampere',
      country: 'Finland',
    },
    title: {
      en: 'Tampere Art Museum Area and Pyynikintori Square',
      fi: 'Tampereen taidemuseon alueen sekä Pyynikintorin kehittäminen',
    },
  },
  {
    categories: ['architecture', 'thesis'],
    date: 2017,
    description: {
      en: 'Developing a user-centric and adaptable care environment',
      fi: 'Ihmislähtöisen ja joustavan hoitoympäristön kehittäminen',
    },
    imageFolder: 'turku',
    isHighlight: false,
    location: {
      city: 'Turku',
      country: 'Finland',
      details: {
        en: 'The Hospital District of Southwest Finland',
        fi: 'Varsinais-Suomen sairaanhoitopiiri',
      },
    },
    title: {
      en: 'New Psychiatric Hospital in Turku',
      fi: 'Turun uusi psykiatrinen sairaala',
    },
  },
  {
    categories: ['architecture', 'thesis'],
    date: 2017,
    description: {
      en: 'Developing modular wooden housing',
      fi: 'Puurakenteisen, modulaarisen asumisen kehittäminen',
    },
    imageFolder: 'housingunit',
    isHighlight: false,
    location: {
      city: 'Helsinki',
      country: 'Finland',
      details: {
        en: 'Private client',
        fi: 'Yksityinen',
      },
    },
    title: {
      en: 'Movable, Combinable and Stackable Housing Unit',
      fi: 'Siirrettävä, yhdisteltävä ja pinottava asumisyksikkö',
    },
  },
  {
    categories: ['architecture', 'thesis'],
    date: 2016,
    description: {
      en: 'Renewing an urban waterfront area',
      fi: 'Kaupungin ranta-alueen kehittäminen virkistysalueena',
    },
    imageFolder: 'ratina',
    isHighlight: false,
    location: {
      city: 'Tampere',
      country: 'Finland',
      details: {
        en: 'City of Tampere',
        fi: 'Tampereen kaupunki',
      },
    },
    title: {
      en: 'Stream Pool of Ratina - Urban Development Plan',
      fi: 'Ratinan suvanto - kaupunkitilojen kehittämissuunnitelma',
    },
  },
  {
    categories: ['architecture', 'thesis'],
    date: 2016,
    description: {
      en: '',
      fi: 'Kohtuuhintaisen asuinrakennuksen periaatemallin kehittäminen ja suunnittelu',
    },
    imageFolder: 'laajasalo',
    isHighlight: false,
    location: {
      city: 'Helsinki',
      country: 'Finland',
      details: {
        en: 'Skanska Talonrakennus Oy',
        fi: 'Skanska Talonrakennus Oy',
      },
    },
    title: {
      en: 'Reasonably Priced Apartment Building in Laajasalo by Using the Idea of Principal Planning',
      fi: 'Kohtuuhintaisen kerrostalon soveltaminen periaatekaavalla Laajasaloon',
    },
  },
  {
    categories: ['architecture'],
    competition: {
      category: 'ideation',
      placement: 'sharedFirst',
      placementDescription: {
        en: 'Shared 1st Prize',
        fi: 'Jaettu 1. palkinto ideakilpailussa',
      },
    },
    date: 2014,
    description: {
      en: 'Wooden infill block for an urban area',
      fi: 'Puurakenteisen täydennysrakentamisen ideointi Kuopion ruutukaavakeskustan alueelle',
    },
    imageFolder: 'kuopio',
    isHighlight: true,
    location: {
      city: 'Kuopio',
      country: 'Finland',
    },
    title: {
      en: 'Wooden Kuopio Urban Residential Area',
      fi: 'Uusi Puu-Kuopio',
    },
  },
];

export default projects;
