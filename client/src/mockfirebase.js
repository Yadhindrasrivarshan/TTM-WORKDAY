import firebase from "firebase";
var firebaseConfig = firebase.initializeApp({
  //add your own credentials
});

const provider = new firebase.auth.GoogleAuthProvider();
var database = firebaseConfig.firestore();
const app = firebaseConfig;
export const auth = app.auth();
export { app, database, provider };
