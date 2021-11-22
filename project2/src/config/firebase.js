import firebase from "firebase/app"
import "firebase/storage";

import "firebase/firestore";

import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7ZYQwhCHEuYoMrqIWiyeurpNUpuyLvIA",
  authDomain: "preprojeck.firebaseapp.com",
  databaseURL: "https://preprojeck-default-rtdb.firebaseio.com",
  projectId: "preprojeck",
  storageBucket: "preprojeck.appspot.com",
  messagingSenderId: "677700800517",
  appId: "1:677700800517:web:f7369158c5a37b9f80cc6c",
  measurementId: "G-61XVXJ3PEB"
};

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();



  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export { db, storage, auth, firebase as default };
