/* eslint-disable max-len */
import { CompanyContactType, PersonContactType, SocialContactType } from '../types/About.types';

export const company: CompanyContactType = {
  about: {
    en: [''],
    fi: [
      'Studio Architecture Helsinki on kestävään suunnitteluun erikoistunut arkkitehtitoimisto. Kolmen arkkitehdin ja maisema-arkkitehdin 2016 perustamalla toimistolla on taito työskennellä erilaisissa mittakaavoissa ja monipuolissa toimeksiannoissa, niin kaupunki- kuin maisema- ja arkkitehtisuunnittelun parissa. Laaja-alainen ja visuaalisesti vahva sekä ennakkoluuloton lähestyminen tuottaa mielenkiintoisia projekteja. Toimiston vahvuus on kokonaisvaltainen suunnittelu ympäristön, kontekstin sekä toiminnallisuuden ehdoilla.',
      'Keskeisenä lähtökohtana suunnittelussa vaikuttaa rakentamisen ja ympäristön kestävyys sekä mukautuminen tulevaisuuden muutoksiin. Paikan ehdoilla tapahtuva käyttäjälähtöisesti etenevä suunnittelu tuottaa toimivia ja aikaa kestäviä ratkaisuja. Tavoitteena on kehittää laadukkaita kokonaisuuksia, jotka parantavat luonnon ja ihmisten hyvinvointia. Lähestymistavan myötä eri projekteissa on kehitetty esimerkiksi puurakentamisen, muuntojoustavuuden ja ilmaston ääriolosuhteisiin sopeutumisen ratkaisuja.',
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
