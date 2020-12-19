import { AppStateReducerType } from '../StateProvider/StateProvider.types';

const appStateReducer: AppStateReducerType = (state, action) => {
  switch (action.type) {
    case 'SET_TABBING_AROUND': {
      return {
        ...state,
        isTabbingAround: true,
      };
    }
    case 'CLEAR_TABBING_AROUND': {
      return {
        ...state,
        isTabbingAround: false,
      };
    }
    default:
      return state;
  }
};

export default appStateReducer;
