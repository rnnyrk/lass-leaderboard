import styled from 'styled-components';

import BgImg from 'images/bg_start.jpg?external';

export const IntroContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center / cover url(${BgImg}) no-repeat;
`;

export const LogoImg = styled.img`
  max-height: 70%;
`;
