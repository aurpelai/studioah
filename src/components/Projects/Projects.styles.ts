import styled from 'styled-components';

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
  margin: 0;
`;

export const StyledProjects = styled.section`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.XXXLARGE};
  grid-template-columns: 1fr;
  justify-content: center;
`;
