import * as firebase from 'firebase';
import * as i from 'types';

import config from './firebaseConfig';
firebase.initializeApp(config);

const db = firebase.firestore();

const getPlayers = new Promise((resolve) => (
  db.collection('players').get()
    .then((querySnapshot) => {
      const players: i.Player[] = [];

      querySnapshot.forEach((doc) => {
        players.push({
          id: doc.id,
          name: doc.data().name,
          character: doc.data().character,
        });
      });

      resolve(players);
    })
));

const getGames = new Promise((resolve) => (
  db.collection('games').get()
    .then((querySnapshot) => {
      const games: i.Game[] = [];

      querySnapshot.forEach((doc) => {
        games.push({
          id: doc.id,
          player1: doc.data().name,
          player2: doc.data().character,
          outcome: doc.data().outcome,
        });

        resolve(games);
      });
    })
));

export { getPlayers, getGames };
