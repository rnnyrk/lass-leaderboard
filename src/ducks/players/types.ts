import * as i from 'types';

export type PlayerData = {
  character: string;
  id: string;
  name: string;
  losses: string[];
  wins: string[];
};

export type PlayersState = {
  data?: PlayerData[];
  error: boolean;
  loading: boolean;
};

export type GetPlayers = i.ThunkAction<() => void>;
