import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyD5u48IntG3EC77KsMOl4lS32ExXDf01wQ",
    authDomain: "carteira-6b73c.firebaseapp.com",
    projectId: "carteira-6b73c",
    storageBucket: "carteira-6b73c.appspot.com",
    messagingSenderId: "345221211572",
    appId: "1:345221211572:web:9c9dafa19484677a303ee1"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();


export { db, auth}