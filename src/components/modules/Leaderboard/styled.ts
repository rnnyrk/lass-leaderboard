import styled from 'styled-components';

import BgImg from 'images/bg.png?external';

export const LeaderboardContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  padding: 60px;
  background: center / cover url(${BgImg}) no-repeat;
`;

export const LeaderHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  height: 110px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.white};

  h3 {
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export const LeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  width: 100%;
  height: 100%;
`;

export const LeaderTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 40px;
`;

export const LeaderTopItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};
`;

export const LeaderTopImg = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  max-width: 245px;
  max-height: 245px;
`;

export const LeaderTopContent = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 80%;
  width: 100%;
  padding: 30px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.blue};

  > div {
    display: flex;
    justify-content: space-between;
  }
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
