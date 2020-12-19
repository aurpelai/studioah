import React, { memo, useState } from 'react';
import theme from '../../themes/studioah';
import Icon from '../Icon/Icon';
import LazyImage from '../LazyImage/LazyImage';
import {
  StyledImageButtonContainer,
  StyledImageNavigationButton,
  StyledImageNavigationContainer,
  StyledImageNavigationDot,
  StyledImageSlider,
  StyledImageLeftButton,
  StyledImageRightButton,
} from './ImageSlider.styles';
import { DirectionType, ImageSiderType } from './ImageSlider.types';

const ImageSlider = ({ images }: ImageSiderType) => {
  const [currentImage, setCurrentImage] = useState(0);

  const slideRight = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const slideLeft = () => {
    const nextIndex = currentImage - 1;
    if (nextIndex < 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(nextIndex);
    }
  };

  if (images.length === 0) {
    return null;
  }

  const handleKeyDown = (event: React.KeyboardEvent, direction?: DirectionType) => {
    if (direction === undefined) {
      if (event.key === 'ArrowLeft') {
        slideLeft();
      } else if (event.key === 'ArrowRight') {
        slideRight();
      }
    } else if (event.key === 'Enter') {
      if (direction === 'LEFT') {
        slideLeft();
      }
      if (direction === 'RIGHT') {
        slideRight();
      }
    }
  };

  return (
    <StyledImageSlider>
      <LazyImage src={images[currentImage].src} />

      <StyledImageButtonContainer onKeyDown={handleKeyDown} tabIndex={-1}>
        <StyledImageLeftButton onClick={slideLeft} onKeyDown={handleKeyDown} />
        <StyledImageRightButton onClick={slideRight} onKeyDown={handleKeyDown} />
      </StyledImageButtonContainer>

      <StyledImageNavigationContainer>
        <StyledImageNavigationButton
          onClick={slideLeft}
          onKeyDown={(event) => handleKeyDown(event, 'LEFT')}
          role="button"
          tabIndex={0}
        >
          <Icon iconId="Arrow" strokeWidth={theme.strokeWidths.THIN} rotation={180} fill={theme.colors.GREY_800} />
        </StyledImageNavigationButton>

        {images.map((image, idx) => (
          <StyledImageNavigationDot
            isActive={idx === currentImage}
            key={image.id}
            onClick={() => setCurrentImage(idx)}
          >
            &bull;
          </StyledImageNavigationDot>
        ))}
        <StyledImageNavigationButton
          onClick={slideRight}
          onKeyDown={(event) => handleKeyDown(event, 'RIGHT')}
          role="button"
          tabIndex={0}
        >
          <Icon iconId="Arrow" strokeWidth={theme.strokeWidths.THIN} fill={theme.colors.GREY_800} />
        </StyledImageNavigationButton>
      </StyledImageNavigationContainer>
    </StyledImageSlider>
  );
};

export default memo(ImageSlider);
