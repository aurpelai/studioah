import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import projects from '../../data/projects';
import { ProjectType } from '../../types/Project.types';
// import { importAll, translateProjects } from '../../utils';
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
  useTranslation();

  return (
    <StyledProjects>
      {projects.map((project: ProjectType) => {
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
                {project.competition && `${translatePlacement(project.competition)} / `}
                {project.date}
                {project.location && ` / ${project.location.city}`}
                {project.location?.details && ` / ${translateString(project.location.details)}`}
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
