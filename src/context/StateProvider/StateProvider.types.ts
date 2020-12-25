import { Dispatch } from 'react';
import { CategoryType } from '../../types/Project.types';

export interface StateType {
  error: Error | null,
  isError: boolean,
  isLoggedIn: boolean,
  isProjectsFilterVisible: boolean,
  isTabbingAround: boolean,
  projectsFilter: CategoryType | null,
}

export type DispatchType =
  | { type: 'SET_PROJECTS_FILTER', payload: CategoryType }
  | { type: 'SHOW_PROJECTS_FILTER' }
  | { type: 'CLEAR_PROJECTS_FILTER' }
  | { type: 'HIDE_PROJECTS_FILTER' }
  | { type: 'TOGGLE_PROJECTS_FILTER' }
  | { type: 'SET_TABBING_AROUND' }
  | { type: 'CLEAR_TABBING_AROUND' };

export type AppStateReducerType = (state: StateType, action: DispatchType) => StateType;

export interface ContextType {
  dispatch: Dispatch<DispatchType>,
  state: StateType,
}
