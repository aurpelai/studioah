import { css } from 'styled-components';

const Heading = {
  Main1: css`
    color: ${({ theme }) => theme.colors.GREY_800};
    font-size: ${({ theme }) => theme.fontSizes.XXLARGE};
    font-weight: ${({ theme }) => theme.fontWeights.LIGHT};
    margin: 0;
  `,
  Main2: css`
    color: ${({ theme }) => theme.colors.GREY_800};
    font-size: ${({ theme }) => theme.fontSizes.XLARGE};
    font-weight: ${({ theme }) => theme.fontWeights.LIGHT};
    margin: 0;
  `,
  Main3: css`
    color: ${({ theme }) => theme.colors.GREY_900};
    font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
    font-weight: ${({ theme }) => theme.fontWeights.MEDIUM};
    margin: 0;
  `,
};

export default Heading;
