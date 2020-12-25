import React from 'react';
import { SvgIconType } from '../Icon.types';

const Arrow: React.FC<SvgIconType> = ({ fill, size, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} strokeWidth={strokeWidth} stroke={fill} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="15" y1="16" x2="19" y2="12" />
    <line x1="15" y1="8" x2="19" y2="12" />
  </svg>
);

export default Arrow;
