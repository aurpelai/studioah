import React, {
  useState,
  useEffect,
  useRef,
  memo,
} from 'react';
import { StyledImage, StyledLazyImage, StyledPlaceholder } from './LazyImage.styles';
import { LazyImageType } from './LazyImage.types';

const LazyImage = ({
  alt,
  src,
}: LazyImageType) => {
  const [isLoaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current?.complete) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [src]);

  return (
    <StyledLazyImage>
      <StyledPlaceholder />
      <StyledImage
        alt={alt}
        isLoaded={isLoaded}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        ref={imgRef}
        src={src}
      />
    </StyledLazyImage>
  );
};
export default memo(LazyImage);
