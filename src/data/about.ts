/* eslint-disable max-len */
import { CompanyContactType, PersonContactType, SocialContactType } from '../types/About.types';

export const company: CompanyContactType = {
  about: {
    en: [
      'Studio Architecture Helsinki is a Finnish architecture practice established in 2017 by three architects and a landscape architect. We are specialized in sustainable architecture, urban design and landscape architecture.',
      'Our strength is a holistic approach with consideration of context, environment, and purpose. The objective is to improve the well-being of both, the environment and the people. Our aim to create durable design solutions has led to studying and developing resilient and adaptable systems, wood construction and user centric design methods in our projects.',
      'Together we have significant experience in working in different architectural offices, as well as expertise on projects ranging from urban visions to housing design. Both, our context sensitive, multidisciplinary approach and design experience from various scales have created successful outcomes, especially in projects that include historically and culturally valuable contexts and delicate natural features.',
    ],
    fi: [
      'Studio Architecture Helsinki on kestävään suunnitteluun erikoistunut arkkitehtitoimisto. Kolmen arkkitehdin ja maisema-arkkitehdin 2016 perustamalla toimistolla on taito työskennellä erilaisissa mittakaavoissa ja monipuolissa toimeksiannoissa, niin kaupunki- kuin maisema- ja arkkitehtisuunnittelun parissa. Toimiston vahvuus on kokonaisvaltainen suunnittelu ympäristön, kontekstin sekä toiminnallisuuden ehdoilla.',
      'Keskeisenä lähtökohtana suunnittelussa vaikuttaa rakentamisen ja ympäristön kestävyys sekä mukautuminen tulevaisuuden muutoksiin. Paikan ehdoilla tapahtuva ja käyttäjälähtöisesti etenevä suunnittelu tuottaa toimivia ja aikaa kestäviä ratkaisuja. Tavoitteena on kehittää laadukkaita kokonaisuuksia, jotka parantavat luonnon ja ihmisten hyvinvointia. Lähestymistavan myötä eri projekteissa on kehitetty esimerkiksi puurakentamisen, muuntojoustavuuden ja ilmaston ääriolosuhteisiin sopeutumisen ratkaisuja.',
      'Toimiston jäsenillä on laaja-alaisesti kokemusta monipuolisista suunnitteluhankkeista aina kaupunkitason visiosuunnitelmista rakennusten toteutussuunnitteluun. Monialainen osaaminen eri mittakaavoissa on luonut menestyksekkäitä lopputuloksia erityisesti uuden rakentamisen sovittamisessa historiallisesti ja kulttuurisesti arvokkaisiin kohteisiin sekä luontoarvoiltaan herkkiin ympäristöihin.',
    ],
  },
  email: 'info@studioah.fi',
  fullName: 'Studio Architecture Helsinki Oy',
  longName: 'Studio Architecture Helsinki',
  name: 'Studio A/H',
};

export const people: PersonContactType[] = [
  {
    email: 'kirsti@studioah.fi',
    name: 'Kirsti Paloheimo',
    phone: '+358 50 303 0690',
    title: 'architectSafa',
  },
  {
    email: 'inka@studioah.fi',
    name: 'Inka Norros',
    phone: '+358 40 733 4172',
    title: 'landscapeArchitect',
  },
  {
    email: 'sini@studioah.fi',
    name: 'Sini Coker',
    phone: '+358 40 847 5662',
    title: 'architect',
  },
  {
    email: 'hannele@studioah.fi',
    name: 'Hannele Cederström',
    phone: '+358 40 823 9035',
    title: 'architect',
  },
];

export const social: SocialContactType[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/studio_a_h/',
    image: 'instagram.svg',
  },
];
