import styled, { css } from 'styled-components';

import GridPurple from 'images/grid_purple.png?external';
import GridPink from 'images/grid_pink.png?external';

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
  border-radius: 3px;
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
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  ${(props) => props.variant === 'purple' && css`
    ${BracketPlayerContent} {
      border-color: ${({ theme }) => theme.colors.purple};
      background: center / cover url(${GridPurple}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(72, 44, 131);
    }
  `}

  ${(props) => props.variant === 'pink' && css`
    ${BracketPlayerContent} {
      border-color: ${({ theme }) => theme.colors.pink};
      background: center / cover url(${GridPink}) no-repeat;
      box-shadow: 0px 2px 14px 0px rgb(254, 0, 176);
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