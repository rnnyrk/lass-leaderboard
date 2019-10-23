import React from 'react';
import * as i from 'types';

import getCharacterImage from 'services/getCharacterImage';

import {
  ListPlayersContainer, ListItem, ListItemContent, ListPart, ListItemImg,
} from './styled';

const ListPlayers: React.FC<ListPlayersProps> = ({ players }) => (
  <ListPlayersContainer>
    {players.map((player, i) => (
      <ListItem>
        <ListItemImg src={getCharacterImage(player.character)} />
        <ListItemContent>
          <ListPart>
            <h4>{player.name}</h4>
            <span>{player.character}</span>
          </ListPart>
          <ListPart>
            <span>Score</span>
            <h4>{player.score}</h4>
          </ListPart>
        </ListItemContent>
      </ListItem>
    ))}
  </ListPlayersContainer>
);

type ListPlayersProps = {
  players: i.Player[];
}

export default ListPlayers;
