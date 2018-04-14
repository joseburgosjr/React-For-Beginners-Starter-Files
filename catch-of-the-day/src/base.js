import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBniaO37lYMln0908InN5QMiP7OHmdr8WU",
  authDomain: "catch-of-the-day-jose-f19eb.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jose-f19eb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;