import styled from 'styled-components';

export const StyledCompanyName = styled.div``;

export const StyledEmail = styled.a`
  color: ${({ theme }) => theme.colors.GREY_500};
  font-size: ${({ theme }) => theme.fontSizes.SMALL};
  margin-top: ${({ theme }) => theme.spacing.XXXSMALL};

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.GREY_600};
  }
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
