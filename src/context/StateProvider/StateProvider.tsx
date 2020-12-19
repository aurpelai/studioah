import React, { createContext, memo, useReducer } from 'react';
import { ComponentWithChildren } from '../../types/Component.types';
import { StateType, ContextType } from './StateProvider.types';
import appStateReducer from '../reducers/appStateReducer';

export const GlobalStore = createContext({} as ContextType);

const StateProvider = ({ children }: ComponentWithChildren) => {
  const initialState: StateType = {
    error: null,
    isError: false,
    isLoggedIn: false,
    isTabbingAround: false,
  };

  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <GlobalStore.Provider value={{ dispatch, state }}>
      {children}
    </GlobalStore.Provider>
  );
};

export default memo(StateProvider);
