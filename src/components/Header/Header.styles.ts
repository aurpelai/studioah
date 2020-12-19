import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { StyledHeaderType } from './Header.types';

const StyledHeaderLink = styled(NavLink)`
  ${({ theme }) => theme.mixins.AccessiblyRemoveFocusRing()}
`;

export const StyledLogo = styled.div`
  ${({ theme }) => theme.mixins.AccessiblyRemoveFocusRing()}
  ${({ theme }) => theme.objects.Anchor.BaseAnchor};
`;

export const StyledNavLink = styled(StyledHeaderLink)`
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.strokeWidths.THIN};
  margin: 0 ${({ theme }) => theme.spacing.MEDIUM};
  padding-bottom: ${({ theme }) => theme.spacing.XXXSMALL};

  &.active {
    border-bottom-color: ${({ theme }) => theme.colors.GREY_400};
  }
`;

export const StyledNavLinkItem = styled.li`
  ${({ theme }) => theme.objects.Anchor.BaseAnchor};
  font-size: ${({ theme }) => theme.fontSizes.XLARGE};
  text-transform: lowercase;
`;

export const StyledLanguageToggle = styled(StyledNavLinkItem)`
  margin: 0 ${({ theme }) => theme.spacing.MEDIUM};
`;

export const StyledNavLinkList = styled.ul`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-inline-start: 0;
  width: 100%;
`;

export const StyledNavigationBar = styled.nav`
  display: flex;
  flex-flow: row wrap;
  margin-top: ${({ theme }) => theme.spacing.XSMALL};
  max-width: ${({ theme }) => theme.dimensions.MAIN_CONTENT_MAX_WIDTH};
  width: 100%;
`;

export const StyledHeader = styled.header<StyledHeaderType>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  display: flex;
  flex-flow: column nowrap;
  font-size: ${({ theme }) => theme.fontSizes.XXXLARGE};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.XXXLARGE} auto;
  padding: ${({ theme }) => `${theme.spacing.XLARGE} 0 ${theme.spacing.MEDIUM}`};
  position: sticky;
  top: 0;
  z-index: ${({ theme }) => theme.zIndices.HIGH};

  ${({ isStuck, theme }) => isStuck && css`
    border-bottom: ${theme.strokeWidths.THIN} solid ${theme.colors.GREY_200};
  `}
`;
