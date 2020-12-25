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
    case 'SHOW_PROJECTS_FILTER': {
      return {
        ...state,
        isProjectsFilterVisible: true,
      };
    }
    case 'SET_PROJECTS_FILTER': {
      return {
        ...state,
        projectsFilter: action.payload,
      };
    }
    case 'CLEAR_PROJECTS_FILTER': {
      return {
        ...state,
        projectsFilter: null,
      };
    }
    case 'HIDE_PROJECTS_FILTER': {
      return {
        ...state,
        isProjectsFilterVisible: false,
      };
    }
    case 'TOGGLE_PROJECTS_FILTER': {
      return {
        ...state,
        isProjectsFilterVisible: !state.isProjectsFilterVisible,
      };
    }
    default:
      return state;
  }
};

export default appStateReducer;
