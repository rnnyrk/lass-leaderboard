import { css } from 'styled-components';

import gameover from 'fonts/gameover.ttf';
import O4B from 'fonts/O4B.ttf';

const FontFamily = css`
  @font-face {
    font-family: 'gameover';
    src: url(${gameover}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }

  @font-face {
    font-family: 'O4B';
    src: url(${O4B}) format('truetype');
    font-style: normal;
    font-weight: normal;
  }
`;

export default FontFamily;
