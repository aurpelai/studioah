import { TranslatableStringArrayType } from '../i18n/i18n.types';

export interface CompanyContactType {
  about: TranslatableStringArrayType,
  email: string,
  fullName: string,
  longName: string,
  name: string,
}

type TitleType =
  | 'architect'
  | 'architectSafa'
  | 'landscapeArchitect';

interface BasePersonContactType {
  email?: string,
  name: string,
  phone?: string,
  title: TitleType,
}

interface PersonEmailContactType extends BasePersonContactType {
  email: string,
  phone?: string,
}

interface PersonPhoneContactType extends BasePersonContactType {
  email?: string,
  phone: string,
}

export type PersonContactType =
  | BasePersonContactType
  | PersonEmailContactType
  | PersonPhoneContactType;

export interface SocialContactType {
  image: string,
  name: string,
  url: string,
}
