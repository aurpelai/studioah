import React, { createContext, memo, useReducer } from 'react';
import { ComponentWithChildren } from '../../types/Component.types';
import { StateType, ContextType } from './StateProvider.types';
import appStateReducer from '../reducers/appStateReducer';

export const StoreContext = createContext({} as ContextType);

const StateProvider = ({ children }: ComponentWithChildren) => {
  const initialState: StateType = {
    error: null,
    isError: false,
    isLoggedIn: false,
    isProjectsFilterVisible: false,
    isUserTabbingAround: false,
    projectsFilter: null,
  };

  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <StoreContext.Provider value={{ dispatch, state }}>
      {children}
    </StoreContext.Provider>
  );
};

export default memo(StateProvider);
