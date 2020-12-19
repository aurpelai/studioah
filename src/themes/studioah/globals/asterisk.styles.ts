import { css } from 'styled-components';

const asterisk = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    position: relative;
  }

  &:focus {
    outline: none;

    &::before {
      ${({ theme }) => theme.mixins.FocusRing()}
    }
  }
`;

export default asterisk;
