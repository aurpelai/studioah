import styled, { css } from 'styled-components';
import { StyledFilterType } from './ProjectsFilter.types';

export const StyledFilter = styled.li<StyledFilterType>`
  ${({ theme }) => theme.objects.Button.BaseButton}
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: ${({ theme }) => theme.strokeWidths.THIN};
  text-transform: lowercase;

  ${({ isActive, theme }) => isActive && css`
    border-bottom-color: ${theme.colors.GREY_400};
  `}
`;

export const StyledProjectsFilter = styled.ul`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;
