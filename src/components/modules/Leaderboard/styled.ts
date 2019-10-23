import styled from 'styled-components';

import BgImg from 'images/bg.png?external';
import Texture from 'images/texture.png?external';
import Triangle from 'images/triangle.png?external';
import GridPurple from 'images/grid_purple.png?external';
import GridBlue from 'images/grid_blue.png?external';
import GridPink from 'images/grid_pink.png?external';
import GridOrange from 'images/grid_orange.png?external';

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
  border: 5px solid ${({ theme }) => theme.colors.blue};;

  > div {
    display: flex;
    justify-content: space-between;

    &:first-child {
      margin-bottom: 10px;
    }
  }
`;

export const LeaderTopItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  &:nth-child(1) {
    ${LeaderTopContent} {
      border-color: ${({ theme }) => theme.colors.blue};
      background: center / cover url(${GridBlue}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(0, 184, 255);
    }
  }
  &:nth-child(2) {
    ${LeaderTopContent} {
      border-color: ${({ theme }) => theme.colors.orange};
      background: center / cover url(${GridOrange}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(255, 125, 41);
    }
  }
  &:nth-child(3) {
    ${LeaderTopContent} {
      border-color: ${({ theme }) => theme.colors.pink};
      background: center / cover url(${GridPink}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(254, 0, 176);
    }
  }
  &:nth-child(4) {
    ${LeaderTopContent} {
      border-color: ${({ theme }) => theme.colors.purple};
      background: center / cover url(${GridPurple}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(72, 44, 131);
    }
  }
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
