import React from 'react';
import * as i from 'types';

import getCharacterImage from 'services/getCharacterImage';

import {
  TopPlayersContainer, PlayerContent, PlayerItem, CharacterImage, ContentItem,
} from './styled';

const TopPlayers: React.FC<TopPlayersProps> = ({ players }) => (
  <TopPlayersContainer>
    {players.map((player, i) => {
      if (i > 3) return null;

      return (
        <PlayerItem>
          <CharacterImage src={getCharacterImage(player.character)} />
          <PlayerContent>
            <ContentItem>
              <h2>{player.name}</h2> <h2>{player.score}</h2>
            </ContentItem>
            <ContentItem>
              <span>{player.character}</span> <span>{i + 1}th place</span>
            </ContentItem>
          </PlayerContent>
        </PlayerItem>
      );
    })}
  </TopPlayersContainer>
);

type TopPlayersProps = {
  players: i.Player[];
}

export default TopPlayers;
