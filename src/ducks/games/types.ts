import * as i from 'types';

export type GamesData = {
  id: string;
  player1: string;
  player2: string;
  outcome: string;
};

export type GamesState = {
  data?: GamesData[];
  error: boolean;
  loading: boolean;
};

export type GetGames = i.ThunkAction<() => void>;
