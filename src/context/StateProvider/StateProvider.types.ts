import { Dispatch } from 'react';
import { CategoryType } from '../../types/Project.types';

export interface StateType {
  error: Error | null,
  isError: boolean,
  isLoggedIn: boolean,
  isTabbingAround: boolean,
  projectsFilter: CategoryType | null,
}

export type DispatchType =
  | { type: 'CLEAR_PROJECTS_FILTER' }
  | { type: 'CLEAR_TABBING_AROUND' }
  | { type: 'SET_PROJECTS_FILTER', payload: CategoryType }
  | { type: 'SET_TABBING_AROUND' };

export type AppStateReducerType = (state: StateType, action: DispatchType) => StateType;

export interface ContextType {
  dispatch: Dispatch<DispatchType>,
  state: StateType,
}
