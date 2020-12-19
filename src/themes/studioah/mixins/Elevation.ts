import { FlattenSimpleInterpolation, css } from 'styled-components';
import colors from '../abstracts/colors';
import spacing from '../abstracts/spacing';
import HexWithAlphaChannel from './HexWithAlphaChannel';

interface ParamsType {
  blur?: string,
  color?: string,
  inset?: boolean,
  opacity?: number,
  spread?: string,
  type?: string,
  xDist?: string,
  yDist?: string,
}

const defaultValues = {
  blur: spacing.XSMALL,
  color: colors.GREY_900,
  opacity: 0.1,
  spread: '0',
  type: 'box-shadow',
  xDist: '0',
  yDist: spacing.XXSMALL,
};

const Elevation = (params: ParamsType = defaultValues): FlattenSimpleInterpolation => {
  const shadowColor = HexWithAlphaChannel(
    params.color || defaultValues.color,
    (params.opacity || defaultValues.opacity) * 100
  );

  if (params.type === 'svg-shadow') {
    return css`
      filter:
        drop-shadow(
          ${params.xDist || defaultValues.xDist}
          ${params.yDist || defaultValues.yDist}
          ${params.blur || defaultValues.blur}
          ${shadowColor}
        );
    `;
  }

  if (params.type === 'text-shadow') {
    return css`
      text-shadow:
        ${params.xDist || defaultValues.xDist}
        ${params.yDist || defaultValues.yDist}
        ${params.blur || defaultValues.blur}
        ${shadowColor};
    `;
  }

  return css`
    box-shadow:
      ${params.inset && 'inset'}
      ${params.xDist || defaultValues.xDist}
      ${params.yDist || defaultValues.yDist}
      ${params.blur || defaultValues.blur}
      ${params.spread || defaultValues.spread}
      ${shadowColor};
  `;
};

export default Elevation;
