import { Dispatch } from 'react';

export interface StateType {
  error: Error | null,
  isError: boolean,
  isLoggedIn: boolean,
  isTabbingAround: boolean,
}

export type DispatchType =
  | { type: 'CLEAR_TABBING_AROUND' }
  | { type: 'SET_TABBING_AROUND' };

export type AppStateReducerType = (state: StateType, action: DispatchType) => StateType;

export interface ContextType {
  dispatch: Dispatch<DispatchType>,
  state: StateType,
}
