import React from 'react';
import * as i from 'types';
import { v4 as uuid } from 'uuid';

import getCharacterImage from 'services/getCharacterImage';
import Tooltip from 'common/Tooltip';

import {
  TopPlayersContainer, PlayerContent, PlayerItem, CharacterImage, ContentItem,
} from './styled';

const TopPlayers: React.FC<TopPlayersProps> = ({ leaderboard, allPlayers }) => {
  const getOrdernal = (place: number): string => {
    switch (place) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      case 4:
        return 'th';
      default: return '';
    }
  };

  return (
    <TopPlayersContainer>
      {leaderboard.map((player, i) => {
        if (i > 3) return null;
        const place = i + 1;

        return (
          <Tooltip
            key={uuid()}
            wins={player.wins}
            losses={player.losses}
            allPlayers={allPlayers}
            currentPlayer={player.name}
          >
            <PlayerItem key={player.id}>
              <CharacterImage src={getCharacterImage(player.character)} />
              <PlayerContent>
                <ContentItem>
                  <h2>{player.name}</h2> <h2>{player.wins.length}</h2>
                </ContentItem>
                <ContentItem>
                  <span>{player.character}</span>
                  <span>{place}{getOrdernal(place)} place</span>
                </ContentItem>
              </PlayerContent>
            </PlayerItem>
          </Tooltip>
        );
      })}
    </TopPlayersContainer>
  );
};

type TopPlayersProps = {
  leaderboard: i.PlayerData[];
  allPlayers: i.PlayerData[];
}

export default TopPlayers;
