import React from 'react';
import { SvgIconType } from '../Icon.types';

const Dots: React.FC<SvgIconType> = ({ fill, size, strokeWidth }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} strokeWidth={strokeWidth} stroke={fill} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="5" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
  </svg>
);

export default Dots;
