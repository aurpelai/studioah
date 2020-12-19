import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledContent = styled.main`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.dimensions.MAIN_CONTENT_MAX_WIDTH};
  padding: 0 ${({ theme }) => theme.spacing.MEDIUM};
  width: 100%;
`;
