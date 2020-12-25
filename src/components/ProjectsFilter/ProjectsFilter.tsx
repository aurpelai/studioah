import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { StoreContext } from '../../context/StateProvider/StateProvider';
import { CategoryType } from '../../types/Project.types';
import {
  StyledFilter,
  StyledFilterList,
  StyledProjectsFilter,
} from './ProjectsFilter.styles';

const ProjectsFilter = () => {
  const { dispatch, state } = useContext(StoreContext);
  const { t } = useTranslation();

  const clearFilters = useCallback((): void => dispatch({ type: 'CLEAR_PROJECTS_FILTER' }), [dispatch]);
  const handleFilterClick = (type: CategoryType): void => dispatch({ type: 'SET_PROJECTS_FILTER', payload: type });

  useEffect(() => () => clearFilters(), [clearFilters]);

  return (
    <StyledProjectsFilter>
      <StyledFilterList isHidden={!state.isProjectsFilterVisible}>
        <StyledFilter
          isActive={state.projectsFilter === null}
          onClick={clearFilters}
          role="button"
          tabIndex={0}
        >
          {t('Common.all')}
        </StyledFilter>

        {Object.values(CategoryType).map((categoryType) => (
          <StyledFilter
            isActive={state.projectsFilter === categoryType}
            key={categoryType}
            onClick={() => handleFilterClick(categoryType)}
            role="button"
            tabIndex={0}
          >
            {t(`Categories.${categoryType}`)}
          </StyledFilter>
        ))}
      </StyledFilterList>

    </StyledProjectsFilter>
  );
};

export default memo(ProjectsFilter);
