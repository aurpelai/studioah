import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as Diagram } from '../../svg/diagram.svg';
import projects from '../../data/projects';
import {
  translatePlacement,
  translateString,
  translateStringArray,
} from '../../utils';
import {
  StyledAbout,
  StyledHeader,
  StyledHighlight,
  StyledHighlightHeader,
  StyledHighlights,
  StyledImage,
  StyledParagraph,
  StyledStory,
} from './About.styles';
import { company } from '../../data/about';

const About = () => {
  const { t } = useTranslation();
  const highlightProjects = projects.filter((project) => project.isHighlight);
  const translatedStory = translateStringArray(company.about);

  return (
    <StyledAbout>
      <StyledImage>
        <Diagram />
      </StyledImage>

      <StyledStory>
        {translatedStory.map((paragraph) => (
          <StyledParagraph key={paragraph}>
            {paragraph}
          </StyledParagraph>
        ))}
      </StyledStory>

      <section>
        <StyledHeader>
          {t('Headlines.highlights')}
        </StyledHeader>

        <StyledHighlights>
          {highlightProjects.map((project) => (
            <StyledHighlight key={translateString(project.title)}>
              <StyledHighlightHeader>
                {`${project.date} \u00B7 ${translateString(project.title)}`}
                {project.competition && `, ${translatePlacement(project.competition, { toLowerCase: true })}`}
              </StyledHighlightHeader>
              <div>
                {translateString(project.description)}
              </div>
            </StyledHighlight>
          ))}
        </StyledHighlights>
      </section>
    </StyledAbout>
  );
};

export default memo(About);
