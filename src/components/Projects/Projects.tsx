import React, {
  memo,
  useContext,
} from 'react';
import { useTranslation } from 'react-i18next';
import { StoreContext } from '../../context/StateProvider/StateProvider';
import projects from '../../data/projects';
import { translateString, importAll, translatePlacement } from '../../utils';
import ImageSlider from '../ImageSlider/ImageSlider';
import {
  StyledDescription,
  StyledDetails,
  StyledFigure,
  StyledProjects,
  StyledTitle,
} from './Projects.styles';

const Projects = () => {
  const { state } = useContext(StoreContext);
  useTranslation();

  const mappedProjects = projects
    .filter((project) => (state.projectsFilter
      ? project.categories.includes(state.projectsFilter)
      : true))
    .map((project) => {
      const imported = importAll(
        require.context(
          '../../../public/images/projects',
          true,
          /\.(png|jpe?g|svg)$/
        ),
        project.imageFolder
      );

      const images: string[] = Object
        .keys(imported)
        .map((image): string => imported[image].default);

      return ({
        ...project,
        images,
      });
    });

  return (
    <StyledProjects>
      {mappedProjects.map((project) => (
        <StyledFigure key={project.imageFolder}>
          <ImageSlider images={project.images} />
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
      ))}
    </StyledProjects>
  );
};

export default memo(Projects);
