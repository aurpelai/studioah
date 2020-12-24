import styled, { css } from 'styled-components';
import { StyledFilterType } from './Projects.types';

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

export const StyledFilters = styled.ul`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export const StyledDescription = styled.div`
  color: ${({ theme }) => theme.colors.GREY_700};
  text-align: center;
`;

export const StyledDetails = styled.div`
  color: ${({ theme }) => theme.colors.GREY_800};
  margin: ${({ theme }) => theme.spacing.XXXSMALL};
  text-align: center;
`;

export const StyledTitle = styled.div`
  ${({ theme }) => theme.objects.Heading.Main2};
  font-size: ${({ theme }) => theme.fontSizes.LARGE};
  font-weight: ${({ theme }) => theme.fontWeights.MEDIUM};
  margin: ${({ theme }) => theme.spacing.XXXSMALL};
  text-align: center;
`;

export const StyledFigure = styled.figure`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  margin: ${({ theme }) => `${theme.spacing.XXLARGE} 0 calc(${theme.spacing.XXLARGE} + ${theme.spacing.XXXLARGE})`};
`;

export const StyledProjects = styled.section``;
