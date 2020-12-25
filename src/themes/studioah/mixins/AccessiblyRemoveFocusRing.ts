import { useContext } from 'react';
import { FlattenSimpleInterpolation, css } from 'styled-components';
import { StoreContext } from '../../../context/StateProvider/StateProvider';

const AccessiblyRemoveFocusRing = (): FlattenSimpleInterpolation => {
  const { state } = useContext(StoreContext);

  return css`
    &::before {
      display: ${!state.isTabbingAround ? 'none' : undefined};
    }
  `;
};

export default AccessiblyRemoveFocusRing;
