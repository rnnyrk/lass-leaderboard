import styled, { css } from 'styled-components';

import GridBlue from 'images/grid_blue.png?external';
import GridPink from 'images/grid_pink.png?external';
import GridOrange from 'images/grid_orange.png?external';
import GridInactive from 'images/grid_inactive.png?external';

import { VariantProps } from '.';

export const CharacterImage = styled.img`
  position: absolute;
  left: 5px;
  top: 0;
  max-width: 185px;
  max-height: 185px;
`;

export const BracketPlayerContent = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 80%;
  width: 100%;
  padding: 30px;
  border-radius: 6px;
  border: 5px solid ${({ theme }) => theme.colors.blue};
`;

export const ContentItem = styled.div`
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;

  &:first-child {
    margin-bottom: 10px;
  }
`;

export const BracketPlayerItem = styled.div<BracketPlayerItemProps>`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  ${(props) => props.variant === 'blue' && css`
    ${BracketPlayerContent} {
      border-color: ${({ theme }) => theme.colors.blue};
      background: center / cover url(${GridBlue}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(0, 184, 255);
    }
  `}

  ${(props) => props.variant === 'pink' && css`
    ${BracketPlayerContent} {
      border-color: ${({ theme }) => theme.colors.pink};
      background: center / cover url(${GridPink}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(254, 0, 176);
    }
  `}

  ${(props) => props.variant === 'orange' && css`
    ${BracketPlayerContent} {
      border-color: ${({ theme }) => theme.colors.orange};
      background: center / cover url(${GridOrange}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(255, 125, 41);
    }
  `}

  ${(props) => props.variant === 'inactive' && css`
    justify-content: center;

    ${BracketPlayerContent} {
      border-color: ${({ theme }) => theme.colors.white};
      background: center / cover url(${GridInactive}) no-repeat;
    }
  `}
`;

type BracketPlayerItemProps = {
  variant: VariantProps;
};

export const BracketPlayerContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  &:nth-child(even) {
    justify-content: flex-end;

    ${CharacterImage} {
      left: auto;
      right: 5px;
    }

    ${ContentItem} {
      justify-content: flex-start;
    }
  }
`;
