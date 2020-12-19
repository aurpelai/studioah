import styled, { css, DefaultTheme, keyframes } from 'styled-components';
import { StyledImageType } from './LazyImage.types';

const animation = (theme: DefaultTheme) => keyframes`
  0% {
    background-color: ${theme.colors.GREY_50};
  }

  50% {
    background-color: ${theme.colors.GREY_200};
  }

  100% {
    background-color: ${theme.colors.GREY_50};
  }
`;

export const StyledPlaceholder = styled.div<StyledImageType>`
  animation: ${({ theme }) => theme.durations.XSLOW}ms ease-in-out infinite ${({ theme }) => css` ${animation(theme)} `};
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: ${({ isLoaded }) => (isLoaded ? 0 : 1)};
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
`;

export const StyledImage = styled.img<StyledImageType>`
  ${({ theme }) => theme.mixins.Transition({ target: 'opacity', duration: theme.durations.SLOW })}
  height: 100%;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  width: 100%;
`;

export const StyledLazyImage = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100vw;
  overflow: hidden;
  position: relative;
  width: ${({ theme }) => theme.dimensions.IMAGE_MAX_WIDTH};
`;
