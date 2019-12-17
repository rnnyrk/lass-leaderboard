import * as i from 'types';

export type BasicPlayer = {
  character: string;
  id: string;
  name: string;
}

export type PlayerData = BasicPlayer & {
  losses: string[];
  wins: string[];
  score: number;
};

export type PlayersState = {
  data?: PlayerData[];
  error: boolean;
  loading: boolean;
};

export type GetPlayers = i.ThunkAction<() => void>;
