import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import projects from '../../data/projects';
import { CategoryType } from '../../types/Project.types';
import { translateString, importAll, translatePlacement } from '../../utils';
import ImageSlider from '../ImageSlider/ImageSlider';
import { StackItemType } from '../ImageSlider/ImageSlider.types';
import {
  StyledDescription,
  StyledDetails,
  StyledFigure,
  StyledFilter,
  StyledFilters,
  StyledProjects,
  StyledTitle,
} from './Projects.styles';

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<CategoryType | null>(null);

  const clearFilters = (): void => setActiveFilter(null);
  const handleFilterClick = (type: CategoryType): void => setActiveFilter(type);

  return (
    <StyledProjects>
      <StyledFilters>
        <StyledFilter
          isActive={activeFilter === null}
          onClick={clearFilters}
          role="button"
          tabIndex={0}
        >
          {t('Common.all')}
        </StyledFilter>
        {Object.values(CategoryType).map((categoryType) => (
          <StyledFilter
            isActive={activeFilter === categoryType}
            key={categoryType}
            onClick={() => handleFilterClick(categoryType)}
            role="button"
            tabIndex={0}
          >
            {t(`Categories.${categoryType}`)}
          </StyledFilter>
        ))}
      </StyledFilters>

      {projects
        .filter((project) => (activeFilter ? project.categories.includes(activeFilter) : true))
        .map((project) => {
          const images = importAll(
            require.context('../../../public/images/projects', true, /\.(png|jpe?g|svg)$/),
            project.imageFolder
          );

          const projectSliderItems: StackItemType[] = Object.keys(images)
            .map((image): StackItemType => ({
              id: images[image].default,
              src: images[image].default,
            }));

          return (
            <StyledFigure key={`${translateString(project.title)}-${project.date}`}>
              <ImageSlider images={projectSliderItems} />
              <figcaption>
                <StyledTitle>
                  {translateString(project.title)}
                </StyledTitle>

                <StyledDetails>
                  {project.competition && `${translatePlacement(project.competition)} \u00B7 `}
                  {project.date}
                  {project.location && ` \u00B7 ${project.location.city}`}
                  {project.location?.details && ` \u00B7 ${translateString(project.location.details)}`}
                </StyledDetails>

                {project.description && (
                  <StyledDescription>
                    {translateString(project.description)}
                  </StyledDescription>
                )}
              </figcaption>
            </StyledFigure>
          );
        })}
    </StyledProjects>
  );
};

export default memo(Projects);
