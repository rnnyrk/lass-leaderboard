import React from 'react';
import * as i from 'types';

import getCharacterImage from 'services/getCharacterImage';

import {
  ListPlayersContainer, ListItem, ListItemContent, ListPart, ListItemImg,
} from './styled';

const ListPlayers: React.FC<ListPlayersProps> = ({ players }) => (
  <ListPlayersContainer>
    {players.map((player, i) => {
      if (i <= 3) return null;

      return (
        <ListItem key={player.id}>
          <ListItemImg src={getCharacterImage(player.character)} />
          <ListItemContent>
            <ListPart>
              <h4>{player.name}</h4>
              <span>{player.character}</span>
            </ListPart>
            <ListPart>
              <span>Score</span>
              <h4>{player.wins}</h4>
            </ListPart>
          </ListItemContent>
        </ListItem>
      );
    })}
  </ListPlayersContainer>
);

type ListPlayersProps = {
  players: i.Player[];
}

export default ListPlayers;
