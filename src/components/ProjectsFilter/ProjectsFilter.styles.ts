import styled, { css } from 'styled-components';
import { StyledFilterType, StyledListToggleType, StyledProjectFiltersType } from './ProjectsFilter.types';

export const StyledFilter = styled.li<StyledFilterType>`
  ${({ theme }) => theme.objects.Button.BaseButton}
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.strokeWidths.THIN};
  /* font-size: ${({ theme }) => theme.fontSizes.SMALL}; */
  text-transform: lowercase;

  ${({ isActive, theme }) => isActive && css`
    border-bottom-color: ${theme.colors.GREY_400};
  `}
`;

export const StyledFilterList = styled.ul<StyledProjectFiltersType>`
  ${({ theme }) => theme.mixins.Transition()}
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;

  ${({ isHidden, theme }) => isHidden && css`
    transform-origin: left;
    transform: scaleX(0) translateX(-100%);
    visibility: hidden;
  `}
`;

export const StyledListToggle = styled.span<StyledListToggleType>`
  ${({ theme }) => theme.mixins.AccessiblyRemoveFocusRing()}
  ${({ theme }) => theme.mixins.Transition()}
  cursor: pointer;
  width: ${({ theme }) => theme.iconSizes.XXSMALL};
`;

export const StyledProjectsFilter = styled.ul`
  ${({ theme }) => theme.mixins.Transition()}
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
