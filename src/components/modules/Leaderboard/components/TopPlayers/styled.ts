import styled from 'styled-components';

import GridPurple from 'images/grid_purple.png?external';
import GridBlue from 'images/grid_blue.png?external';
import GridPink from 'images/grid_pink.png?external';
import GridOrange from 'images/grid_orange.png?external';

export const TopPlayersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 40px;
`;

export const CharacterImage = styled.img`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  max-width: 245px;
  max-height: 245px;
`;

export const PlayerContent = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 80%;
  width: 100%;
  padding: 30px;
  border-radius: 3px;
  border: 5px solid ${({ theme }) => theme.colors.blue};
`;

export const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;

  &:first-child {
    margin-bottom: 10px;
  }
`;

export const PlayerItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  &:nth-child(1) {
    ${PlayerContent} {
      border-color: ${({ theme }) => theme.colors.blue};
      background: center / cover url(${GridBlue}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(0, 184, 255);
    }
  }
  &:nth-child(2) {
    ${PlayerContent} {
      border-color: ${({ theme }) => theme.colors.orange};
      background: center / cover url(${GridOrange}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(255, 125, 41);
    }
  }
  &:nth-child(3) {
    ${PlayerContent} {
      border-color: ${({ theme }) => theme.colors.pink};
      background: center / cover url(${GridPink}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(254, 0, 176);
    }
  }
  &:nth-child(4) {
    ${PlayerContent} {
      border-color: ${({ theme }) => theme.colors.purple};
      background: center / cover url(${GridPurple}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(72, 44, 131);
    }
  }
`;
