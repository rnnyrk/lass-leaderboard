import * as i from 'types';
export * from './games/types';
export * from './players/types';

export type ReduxState = {
  games: i.GamesState;
  players: i.PlayersState;
};
