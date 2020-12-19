import styled from 'styled-components';

export const StyledCompanyName = styled.div``;

export const StyledEmail = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.XSMALL};
`;

export const StyledFooter = styled.footer`
  align-items: center;
  color: ${({ theme }) => theme.colors.GREY_500};
  display: flex;
  flex-flow: column nowrap;
  font-size: ${({ theme }) => theme.fontSizes.SMALL};
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.XXXLARGE} auto ${({ theme }) => theme.spacing.XLARGE};
  position: relative;
`;
