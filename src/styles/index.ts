import { createGlobalStyle } from 'styled-components';

import theme from './theme';
import Fonts from './fonts';

const globalStyle = createGlobalStyle`
  ${Fonts};

  html {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: ${theme.font.primary};
  }

  p {
    font-family: ${theme.font.primary};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.font.heading};
  }
`;

export default globalStyle;
