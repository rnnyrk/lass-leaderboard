import styled from 'styled-components';

import BgImg from 'images/bg.png?external';

export const LeaderboardContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 60px;
  background: center / cover url(${BgImg}) no-repeat;
`;

export const LeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  width: 100%;
  height: 100%;
`;
