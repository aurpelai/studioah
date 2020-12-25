import React, { memo, useContext } from 'react';
import { StoreContext } from '../../context/StateProvider/StateProvider';
import projects from '../../data/projects';
import { translateString, importAll, translatePlacement } from '../../utils';
import ImageSlider from '../ImageSlider/ImageSlider';
import { StackItemType } from '../ImageSlider/ImageSlider.types';
import {
  StyledDescription,
  StyledDetails,
  StyledFigure,
  StyledProjects,
  StyledTitle,
} from './Projects.styles';

const Projects = () => {
  const { state } = useContext(StoreContext);

  return (
    <StyledProjects>
      {projects
        .filter((project) => (state.projectsFilter ? project.categories.includes(state.projectsFilter) : true))
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
