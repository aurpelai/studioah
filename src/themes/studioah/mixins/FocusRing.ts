import { FlattenSimpleInterpolation, css } from 'styled-components';
import colors from '../abstracts/colors';
import spacing from '../abstracts/spacing';
import strokeWidths from '../abstracts/strokeWidths';
import zIndices from '../abstracts/zIndices';

const FocusRing = (): FlattenSimpleInterpolation => css`
  border-radius: 0.125rem;
  border: ${strokeWidths.THIN} solid ${colors.GREY_500};
  bottom: -${spacing.XSMALL};
  content: '';
  left: -${spacing.XSMALL};
  position: absolute;
  right: -${spacing.XSMALL};
  top: -${spacing.XSMALL};
  z-index: ${zIndices.HIGH};
`;

export default FocusRing;
