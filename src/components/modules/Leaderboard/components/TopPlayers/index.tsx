import React from 'react';
import * as i from 'types';

import getCharacterImage from 'services/getCharacterImage';

import {
  TopPlayersContainer, PlayerContent, PlayerItem, CharacterImage, ContentItem,
} from './styled';

const TopPlayers: React.FC<TopPlayersProps> = ({ players }) => {
  const getOrdernal = (place: number): string => {
    switch (place) {
      case 1:
        return '1st';
      case 2:
        return '2nd';
      case 3:
        return '3rd';
      case 4:
        return '4th';
      default: return '';
    }
  };

  return (
    <TopPlayersContainer>
      {players.map((player, i) => {
        if (i > 3) return null;
        const place = i + 1;

        return (
          <PlayerItem key={player.id}>
            <CharacterImage src={getCharacterImage(player.character)} />``
            <PlayerContent>
              <ContentItem>
                <h2>{player.name}</h2> <h2>{player.wins || 0}</h2>
              </ContentItem>
              <ContentItem>
                <span>{player.character}</span>
                <span>{place}{getOrdernal(place)} place</span>
              </ContentItem>
            </PlayerContent>
          </PlayerItem>
        );
      })}
    </TopPlayersContainer>
  );
};

type TopPlayersProps = {
  players: i.PlayerData[];
}

export default TopPlayers;
