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
    margin: 0;
    text-transform: uppercase;
    font-family: ${theme.font.heading};
  }

  h1 {
    font-size: 60px;
    text-shadow: 0 0 14px rgba(255, 255, 255, 0.5);
  }

  h2 {
    font-size: 48px;
  }

  h3 {
    font-size: 32px;
    font-family: ${theme.font.primary};
  }

  h4 {
    font-size: 32px;
  }
`;

export default globalStyle;
