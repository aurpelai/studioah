import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { company, people, social } from '../../data/about';
import {
  StyledContact,
  StyledContactList,
  StyledHeader,
  StyledPerson,
  StyledPersonInfo,
  StyledPersonName,
  StyledSocialMediaLogo,
} from './Contact.styles';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <StyledContact>
      <StyledHeader>
        {t(company.longName)}
      </StyledHeader>
      <a href={`mailto:${company.email}`}>{company.email}</a>

      <StyledContactList>
        {people.map((datum) => (
          <StyledPerson key={datum.name}>
            <StyledPersonName>{datum.name}</StyledPersonName>
            <StyledPersonInfo>{t(`Titles.${datum.title}`)}</StyledPersonInfo>
            <StyledPersonInfo>{datum.email}</StyledPersonInfo>
            <StyledPersonInfo>{datum.phone}</StyledPersonInfo>
          </StyledPerson>
        ))}
      </StyledContactList>

      <StyledContactList>
        {social.map((datum) => (
          <a
            href={datum.url}
            key={datum.name}
            rel="noopener noreferrer"
            target="_blank"
            title={datum.name}
          >
            <StyledSocialMediaLogo imageUrl={`/images/social/${datum.image}`} />
          </a>
        ))}
      </StyledContactList>
    </StyledContact>
  );
};

export default memo(Contact);
