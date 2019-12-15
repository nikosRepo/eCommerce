import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDFSln0TzjSuqpTHcbpTwdhsdN9v0uOpSQ",
  authDomain: "ecommerce-db-1870f.firebaseapp.com",
  databaseURL: "https://ecommerce-db-1870f.firebaseio.com",
  projectId: "ecommerce-db-1870f",
  storageBucket: "ecommerce-db-1870f.appspot.com",
  messagingSenderId: "286579121755",
  appId: "1:286579121755:web:bb52f4f2cb1d8b3bf4a97e",
  measurementId: "G-G6K9D6XDCM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
