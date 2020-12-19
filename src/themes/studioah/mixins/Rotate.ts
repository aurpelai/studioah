import { FlattenSimpleInterpolation, css } from 'styled-components';

const Rotate = (deg = 0): FlattenSimpleInterpolation => css`
  transform: rotate(${deg}deg);
`;

export default Rotate;
