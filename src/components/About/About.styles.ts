import styled from 'styled-components';

export const StyledImageContainer = styled.div`
  width: 25rem;

  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledHeader = styled.div`
  ${({ theme }) => theme.objects.Heading.Main2};
`;

export const StyledParagraph = styled.p``;

export const StyledStory = styled.section`
  margin: ${({ theme }) => theme.spacing.XLARGE} 0;
  text-align: justify;
`;

export const StyledHighlightHeader = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.MEDIUM};
`;

export const StyledHighlight = styled.li`
  &:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing.MEDIUM};
  }
`;

export const StyledHighlights = styled.ol`
  align-items: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  list-style: none;
  padding-inline-start: 0;
`;

export const StyledAbout = styled.section`
  align-items: center;
  color: ${({ theme }) => theme.colors.GREY_700};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
