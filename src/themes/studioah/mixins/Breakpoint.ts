import { css, FlattenSimpleInterpolation } from 'styled-components';
import breakpoints from '../abstracts/breakpoints';

const maxWidth = (value: number, styles: FlattenSimpleInterpolation) => css`
  @media screen and (max-width: ${value}px) {
    ${styles}
  }
`;

const minWidth = (value: number, styles: FlattenSimpleInterpolation) => css`
  @media screen and (min-width: ${value}px) {
    ${styles}
  }
`;

const range = (low: number, high: number, styles: FlattenSimpleInterpolation) => css`
  @media screen and (min-width: ${low}px) and (max-width: ${high}px) {
    ${styles}
  }
`;

const deviceAndDown = {
  PhoneAndDown: (styles: FlattenSimpleInterpolation) => maxWidth(
    breakpoints.PHABLET_FROM - 1,
    styles
  ),
  PhabletAndDown: (styles: FlattenSimpleInterpolation) => maxWidth(
    breakpoints.TABLET_FROM - 1,
    styles
  ),
  TabletAndDown: (styles: FlattenSimpleInterpolation) => maxWidth(
    breakpoints.LAPTOP_FROM - 1,
    styles
  ),
  LaptopAndDown: (styles: FlattenSimpleInterpolation) => maxWidth(
    breakpoints.DESKTOP_FROM - 1,
    styles
  ),
  DesktopAndDown: (styles: FlattenSimpleInterpolation) => maxWidth(
    breakpoints.MONSTER_FROM - 1,
    styles
  ),
};

const deviceAndUp = {
  PhabletAndUp: (styles: FlattenSimpleInterpolation) => minWidth(
    breakpoints.PHABLET_FROM,
    styles
  ),
  TabletAndUp: (styles: FlattenSimpleInterpolation) => minWidth(
    breakpoints.TABLET_FROM,
    styles
  ),
  LaptopAndUp: (styles: FlattenSimpleInterpolation) => minWidth(
    breakpoints.LAPTOP_FROM,
    styles
  ),
  DesktopAndUp: (styles: FlattenSimpleInterpolation) => minWidth(
    breakpoints.DESKTOP_FROM,
    styles
  ),
  MonsterAndUp: (styles: FlattenSimpleInterpolation) => minWidth(
    breakpoints.MONSTER_FROM,
    styles
  ),
};

const deviceRanges = {
  PhoneOnly: (styles: FlattenSimpleInterpolation) => range(
    0,
    breakpoints.PHABLET_FROM - 1,
    styles
  ),
  PhabletOnly: (styles: FlattenSimpleInterpolation) => range(
    breakpoints.PHABLET_FROM,
    breakpoints.TABLET_FROM - 1,
    styles
  ),
  TabletOnly: (styles: FlattenSimpleInterpolation) => range(
    breakpoints.TABLET_FROM,
    breakpoints.LAPTOP_FROM - 1,
    styles
  ),
  LaptopOnly: (styles: FlattenSimpleInterpolation) => range(
    breakpoints.LAPTOP_FROM,
    breakpoints.DESKTOP_FROM - 1,
    styles
  ),
  DesktopOnly: (styles: FlattenSimpleInterpolation) => range(
    breakpoints.DESKTOP_FROM,
    breakpoints.MONSTER_FROM - 1,
    styles
  ),
};

const Breakpoint = {
  ...deviceAndDown,
  ...deviceAndUp,
  ...deviceRanges,
};

export default Breakpoint;
