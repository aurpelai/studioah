import { createGlobalStyle } from 'styled-components';

import anchor from './globals/anchor.styles';
import asterisk from './globals/asterisk.styles';
import body from './globals/body.styles';
import html from './globals/html.styles';
import list from './globals/list.styles';

import breakpoints from './abstracts/breakpoints';
import colors from './abstracts/colors';
import dimensions from './abstracts/dimensions';
import durations from './abstracts/durations';
import fontFamilies from './abstracts/fonts';
import fontSizes from './abstracts/fontSizes';
import fontWeights from './abstracts/fontWeights';
import iconSizes from './abstracts/iconSizes';
import lineHeights from './abstracts/lineHeights';
import spacing from './abstracts/spacing';
import strokeWidths from './abstracts/strokeWidths';
import zIndices from './abstracts/zIndices';

import mixins from './mixins';
import objects from './objects';

export const GlobalStyles = createGlobalStyle`
  ${asterisk} /* This must be first */
  ${html} /* This must be second */
  ${body} /* This must be third */
  ${anchor}
  ${list}
`;

// This allows us to have the theme prop strongly typed for IntelliSense autocomplete.
// This interface MUST contain all the properties that are defined in `const theme = { ... }`
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof breakpoints,
    colors: typeof colors,
    dimensions: typeof dimensions,
    durations: typeof durations,
    fontFamilies: typeof fontFamilies,
    fontSizes: typeof fontSizes,
    fontWeights: typeof fontWeights,
    iconSizes: typeof iconSizes,
    lineHeights: typeof lineHeights,
    mixins: typeof mixins,
    objects: typeof objects,
    spacing: typeof spacing,
    strokeWidths: typeof strokeWidths,
    zIndices: typeof zIndices,
  }
}

const theme = {
  breakpoints,
  colors,
  dimensions,
  durations,
  fontFamilies,
  fontSizes,
  fontWeights,
  iconSizes,
  lineHeights,
  mixins,
  objects,
  spacing,
  strokeWidths,
  zIndices,
};

export default theme;
