import { ActionType, action } from 'typesafe-actions';

import * as i from 'types';
import { PlayersState } from './types';

export const playersActions = {
  get: () => action('players/GET'),
  getSuccess: (data: i.PlayerData[]) => action('players/GET_SUCCESS', data),
  getFailed: (error: string) => action('players/GET_FAILED', error),
};

const initialState: PlayersState = {
  data: undefined,
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof playersActions>) => {
  switch (action.type) {
    case 'players/GET':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'players/GET_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    case 'players/GET_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getPlayers: i.GetPlayers['thunk'] = () => (dispatch, getState, api) => {
  dispatch(playersActions.get());

  new Promise((resolve) => (
    api.collection('players')
      .get()
      .then((querySnapshot) => {
        const players: i.PlayerData[] = [];

        querySnapshot.forEach((doc) => {
          players.push({
            id: doc.id,
            name: doc.data().name,
            character: doc.data().character,
          });
        });

        dispatch(playersActions.getSuccess(players));
        resolve(players);
      })
  ));
};
