import { css } from 'styled-components';

const body = css`
  body {
    font-family: ${({ theme }) => theme.fontFamilies.SANS_SERIF};
    font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
    font-weight: ${({ theme }) => theme.fontWeights.LIGHT};
    line-height: ${({ theme }) => theme.lineHeights.MEDIUM};
    margin: 0;
    text-rendering: geometricPrecision;
  }
`;

export default body;
