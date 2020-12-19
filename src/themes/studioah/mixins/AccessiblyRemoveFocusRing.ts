import { useContext } from 'react';
import { FlattenSimpleInterpolation, css } from 'styled-components';
import { GlobalStore } from '../../../context/StateProvider/StateProvider';

const AccessiblyRemoveFocusRing = (): FlattenSimpleInterpolation => {
  const { state } = useContext(GlobalStore);

  return css`
    &::before {
      display: ${!state.isTabbingAround ? 'none' : undefined};
    }
  `;
};

export default AccessiblyRemoveFocusRing;
