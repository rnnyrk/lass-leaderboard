import React from 'react';

import donkeykong from 'images/chars/donkeykong.png';
import samus from 'images/chars/samus.png';
import jigglypuff from 'images/chars/jigglypuff.png';
import corrin from 'images/chars/corrin.png';

import {
  TopPlayersContainer, PlayerContent, PlayerItem, CharacterImage, ContentItem,
} from './styled';

const TopPlayers: React.FC<TopPlayersProps> = ({ players }) => (
  <TopPlayersContainer>
    {players.map((player, i) => (
      <PlayerItem>
        <CharacterImage src={donkeykong} />

        <PlayerContent>
          <ContentItem>
            <h2>{player.name}</h2> <h2>{player.score}</h2>
          </ContentItem>
          <ContentItem>
            <span>{player.character}</span> <span>{i + 1}th place</span>
          </ContentItem>
        </PlayerContent>
      </PlayerItem>
    ))}
  </TopPlayersContainer>
);

type TopPlayersProps = {
  players: [{
    character: string;
    name: string;
    score: string;
  }];
}

export default TopPlayers;
