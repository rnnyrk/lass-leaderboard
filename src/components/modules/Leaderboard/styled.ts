import styled from 'styled-components';

import BgImg from 'images/bg.png?external';

export const LeaderboardContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: center / cover url(${BgImg}) no-repeat;
`;

export const LeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  width: 100%;
  height: 100%;
  padding: 60px;
`;

export const LeaderTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 40px;
`;

export const LeaderTopItem = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blue};
`;

export const LeaderList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeaderListItem = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.gray};
`;
