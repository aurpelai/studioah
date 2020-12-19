import styled from 'styled-components';
import { StyledImageNavigationItemType } from './ImageSlider.types';

const NavigationItem = styled.li`
  cursor: pointer;
  user-select: none;
`;

export const StyledImageNavigationButton = styled(NavigationItem)`
  ${({ theme }) => theme.mixins.AccessiblyRemoveFocusRing()}
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 ${({ theme }) => theme.spacing.XSMALL};
`;

export const StyledImageNavigationDot = styled(NavigationItem)<StyledImageNavigationItemType>`
  ${({ theme }) => theme.mixins.Transition({ duration: theme.durations.QUICK })}
  color: ${({ isActive, theme }) => (isActive ? theme.colors.GREY_900 : theme.colors.GREY_400)};
  font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
  height: ${({ theme }) => theme.iconSizes.MEDIUM};
  padding: 0 ${({ theme }) => theme.spacing.XXSMALL};
`;

export const StyledImageNavigationContainer = styled.ol`
  align-items: center;
  display: flex;
  justify-content: center;
  list-style: none;
  margin-bottom: ${({ theme }) => theme.spacing.XLARGE};
  padding-inline-start: 0;
`;

const StyledButton = styled.div`
  cursor: pointer;
  height: 100%;
  position: absolute;
  top: 0;
  user-select: none;
  width: ${({ theme }) => theme.dimensions.BUTTON_MAX_WIDTH__IMAGE_OVERLAY};
`;

export const StyledImageLeftButton = styled(StyledButton)`
  left: 0;
`;

export const StyledImageRightButton = styled(StyledButton)`
  right: 0;
`;

export const StyledImageButtonContainer = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  &::before {
    display: none;
  }
`;

export const StyledImageSlider = styled.div``;
