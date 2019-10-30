import styled from 'styled-components';

export const LeaderboardContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 60px;
`;

export const LeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  width: 100%;
  height: 100%;
`;

export const VideoBg = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -10;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;
