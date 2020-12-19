import React, { memo, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import icons from './icons';
import { StyledIcon } from './Icon.styles';
import { IconType } from './Icon.types';

const Icon = ({
  fill = 'currentColor',
  iconId,
  rotation,
  size: sizeProp,
  stroke = 'currentColor',
  strokeWidth: strokeWidthProp,
  title,
}: IconType) => {
  const theme = useContext(ThemeContext);

  const size = sizeProp || theme.iconSizes.MEDIUM;
  const strokeWidth = strokeWidthProp || theme.strokeWidths.MEDIUM;

  const IconComponent = icons[iconId];

  return (
    <StyledIcon
      rotation={rotation}
      title={title}
    >
      <IconComponent
        fill={fill}
        size={size}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </StyledIcon>
  );
};

export default memo(Icon);
