import { ActionType, action } from 'typesafe-actions';

import * as i from 'types';
import { GamesState } from './types';

export const gamesActions = {
  get: () => action('games/GET'),
  getSuccess: (data: i.GamesData[]) => action('games/GET_SUCCESS', data),
  getFailed: (error: string) => action('games/GET_FAILED', error),
};

const initialState: GamesState = {
  data: undefined,
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof gamesActions>) => {
  switch (action.type) {
    case 'games/GET':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'games/GET_SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    case 'games/GET_FAILED':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getGames: i.GetGames = () => (dispatch, getState, api) => {
  dispatch(gamesActions.get());

  new Promise((resolve) => (
    api.collection('games').get()
      .then((querySnapshot) => {
        const games: i.GamesData[] = [];

        querySnapshot.forEach((doc) => {
          games.push({
            id: doc.id,
            player1: doc.data().player1,
            player2: doc.data().player2,
            outcome: doc.data().outcome,
          });

          dispatch(gamesActions.getSuccess(games));
          resolve(games);
        });
      })
  ));
};
