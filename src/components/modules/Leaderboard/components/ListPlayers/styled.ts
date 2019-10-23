import styled from 'styled-components';

import Texture from 'images/texture.png?external';
import Triangle from 'images/triangle.png?external';

export const ListPlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ListItemImg = styled.img`
  position: absolute;
  z-index: 30;
  left: 20px;
  top: 0%;
  height: 97%;
`;

export const ListItemContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 10px 30px 10px 160px;
  border-radius: 3px;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  background: center / cover url(${Texture}) no-repeat;

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

export const ListPart = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
