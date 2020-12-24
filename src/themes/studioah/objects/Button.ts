import { css } from 'styled-components';

const Button = {
  BaseButton: css`
    ${({ theme }) => theme.mixins.AccessiblyRemoveFocusRing()}
    ${({ theme }) => theme.mixins.Transition({ duration: theme.durations.QUICK, target: 'background-color, border-color, color' })}
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.GREY_700};
    cursor: pointer;
    font-family: ${({ theme }) => theme.fontFamilies.SANS_SERIF};
    font-size: ${({ theme }) => theme.fontSizes.MEDIUM};
    font-weight: ${({ theme }) => theme.fontWeights.LIGHT};
    height: fit-content;
    margin: ${({ theme }) => `${theme.spacing.XSMALL} ${theme.spacing.SMALL}`};
    max-width: ${({ theme }) => theme.dimensions.BUTTON_MAX_WIDTH};
    padding: 0;
    text-align: center;
    text-decoration: none;
    width: fit-content;

    &:hover {
      color: ${({ theme }) => theme.colors.GREY_800};
    }

    &:focus {
      color: ${({ theme }) => theme.colors.GREY_800};
      outline: none;
    }

    &:active {
      color: ${({ theme }) => theme.colors.GREY_900};
      outline: none;
    }
  `,
};

export default Button;
