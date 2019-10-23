import styled from 'styled-components';

import BgImg from 'images/bg.png?external';
import Texture from 'images/texture.png?external';
import Triangle from 'images/triangle.png?external';

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

export const LeaderList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LeaderListItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const LeaderListItemImg = styled.img`
  position: absolute;
  z-index: 30;
  left: 20px;
  top: 0%;
  height: 97%;
`;

export const LeaderListItemContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 10px 30px 10px 160px;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  background: center / cover url(${Texture}) no-repeat;

  > div {
    position: relative;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &:before {
    content: '';
    position: absolute;
    z-index: 10;
    top: 0;
    right: 0;
    width: 140px;
    height: 100%;
    background: url(${Triangle}) no-repeat;
    background-size: auto 100%;
  }
`;
