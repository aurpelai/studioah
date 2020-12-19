import React from 'react';
import { SvgIconType } from '../Icon.types';

const Arrow: React.FC<SvgIconType> = ({ fill, size, strokeWidth }) => (
  // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} strokeWidth={strokeWidth}>
  //   <path
  //     style={{
  //       fill,
  //       strokeMiterlimit: 10,
  //     }}
  //     d="M12.7,7.1c-0.4-0.4-1-0.4-1.4,0l-7.1,7.1c-0.4,0.4-0.4,1,0,1.4l1.4,1.4c0.4,0.4,1,0.4,1.4,0L12,12l0,0l4.9,4.9
  //       c0.4,0.4,1,0.4,1.4,0l1.4-1.4c0.4-0.4,0.4-1,0-1.4C19.8,14.1,12.7,7.1,12.7,7.1z"
  //   />
  // </svg>

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} strokeWidth={strokeWidth} stroke={fill} fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <line x1="5" y1="12" x2="19" y2="12" />
    <line x1="15" y1="16" x2="19" y2="12" />
    <line x1="15" y1="8" x2="19" y2="12" />
  </svg>
);

export default Arrow;
