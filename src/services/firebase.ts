import * as firebase from 'firebase';

import config from './firebaseConfig';
firebase.initializeApp(config);

export const api = firebase.firestore();
