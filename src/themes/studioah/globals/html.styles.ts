import { css } from 'styled-components';

const html = css`
  html {
    font-size: ${({ theme }) => theme.fontSizes.ROOT_IN_PX}px;
  }
`;

export default html;
