import { FlattenSimpleInterpolation, css } from 'styled-components';

const OverflowEllipsis = (): FlattenSimpleInterpolation => css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export default OverflowEllipsis;
