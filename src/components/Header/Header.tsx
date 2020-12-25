import React, {
  createRef,
  memo,
  useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import i18n from '../../i18n/i18n';
import { LanguageType } from '../../i18n/i18n.types';
import NavigationMenuDefinitions from '../../routes/NavigationMenuDefinitions';
import RouteDefinitions from '../../routes/RouteDefinitions';
import {
  StyledHeader,
  StyledLanguageToggle,
  StyledLogo,
  StyledNavigationBar,
  StyledNavLink,
  StyledNavLinkItem,
  StyledNavLinkList,
} from './Header.styles';

const Header = () => {
  const { t } = useTranslation();
  const headerRef = createRef<HTMLDivElement>();
  const headerIsStuck = useIntersectionObserver({ ref: headerRef });
  const [currentLanguage, setCurrentLanguage] = useState(i18n.languages[0] as LanguageType);

  const toggleLanguage = () => {
    if (currentLanguage === 'fi') {
      setCurrentLanguage('en');
    } else {
      setCurrentLanguage('fi');
    }
  };

  const handleLanguageKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      toggleLanguage();
    }
  };

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return (
    <StyledHeader
      isStuck={headerIsStuck}
      ref={headerRef}
    >
      <StyledLogo to={RouteDefinitions.Projects.path}>
        A / H
      </StyledLogo>
      <StyledNavigationBar>
        <StyledNavLinkList>
          {NavigationMenuDefinitions.map((datum) => (
            <StyledNavLinkItem key={datum.titleKey}>
              <StyledNavLink exact to={datum.path}>
                {t(datum.titleKey)}
              </StyledNavLink>
            </StyledNavLinkItem>
          ))}
          <StyledLanguageToggle onClick={toggleLanguage} onKeyDown={handleLanguageKeyDown} role="button" tabIndex={0}>
            {t(currentLanguage === 'fi' ? 'Translation.en' : 'Translation.fi')}
          </StyledLanguageToggle>
        </StyledNavLinkList>
      </StyledNavigationBar>
    </StyledHeader>
  );
};

export default memo(Header);
