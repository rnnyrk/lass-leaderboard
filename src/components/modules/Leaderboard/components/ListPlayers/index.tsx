import React from 'react';
import * as i from 'types';
import { v4 as uuid } from 'uuid';

import getCharacterImage from 'services/getCharacterImage';
import Tooltip from 'common/Tooltip';

import {
  ListPlayersContainer, ListItem, ListItemContent, ListPart, ListItemImg,
} from './styled';

const ListPlayers: React.FC<ListPlayersProps> = ({ leaderboard, allPlayers }) => (
  <ListPlayersContainer>
    {leaderboard.map((player, i) => {
      if (i <= 3) return null;

      return (
        <Tooltip
          key={uuid()}
          wins={player.wins}
          losses={player.losses}
          allPlayers={allPlayers}
        >
          <ListItem key={player.id}>
            <ListItemImg src={getCharacterImage(player.character)} />
            <ListItemContent>
              <ListPart>
                <h4>{player.name}</h4>
                <span>{player.character}</span>
              </ListPart>
              <ListPart>
                <span>Score</span>
                <h4>{player.wins.length}</h4>
              </ListPart>
            </ListItemContent>
          </ListItem>
        </Tooltip>
      );
    })}
  </ListPlayersContainer>
);

type ListPlayersProps = {
  leaderboard: i.PlayerData[];
  allPlayers: i.PlayerData[];
}

export default ListPlayers;
