import styled, { css } from 'styled-components';
import { StyledIconType } from './Icon.types';

// eslint-disable-next-line import/prefer-default-export
export const StyledIcon = styled.span<StyledIconType>`
  ${({ theme }) => theme.mixins.Transition({ target: 'transform' })}
  display: flex;

  ${({ rotation, theme }) => rotation && css`
    ${theme.mixins.Rotate(rotation)}
  `}
`;
