import styled from 'styled-components';

export const StyledDescription = styled.div`
  color: ${({ theme }) => theme.colors.GREY_700};
  font-size: ${({ theme }) => theme.fontSizes.LARGE};
  text-align: center;
`;

export const StyledDetails = styled.div`
  color: ${({ theme }) => theme.colors.GREY_800};
  font-size: ${({ theme }) => theme.fontSizes.LARGE};
  margin: ${({ theme }) => theme.spacing.XXSMALL};
  text-align: center;
`;

export const StyledTitle = styled.div`
  ${({ theme }) => theme.objects.Heading.Main2};
  margin: ${({ theme }) => theme.spacing.XXSMALL};
  text-align: center;
`;

export const StyledFigure = styled.figure`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  margin: ${({ theme }) => `${theme.spacing.XXLARGE} 0 calc(${theme.spacing.XXLARGE} + ${theme.spacing.XXXLARGE})`};
`;

export const StyledProjects = styled.section``;
