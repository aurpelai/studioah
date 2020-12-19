import { css } from 'styled-components';

const Anchor = {
  BaseAnchor: css`
    ${({ theme }) => theme.mixins.Transition()}
    color: ${({ theme }) => theme.colors.GREY_700};
    cursor: pointer;
    text-decoration: none;

    &:visited {
      color: ${({ theme }) => theme.colors.GREY_700};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.GREY_800};
    }
  `,
  UnobtrusiveAnchor: css`
    color: currentColor;
    text-decoration: none;

    &:active,
    &:hover,
    &:visited {
      color: currentColor;
    }
  `,
};

export default Anchor;
