import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoPykgSBOaCQmiRTK6gOkKTzA9fjLgwvk",
  authDomain: "twitterclone-692c4.firebaseapp.com",
  databaseURL: "https://twitterclone-692c4-default-rtdb.firebaseio.com",
  projectId: "twitterclone-692c4",
  storageBucket: "twitterclone-692c4.appspot.com",
  messagingSenderId: "723201453466",
  appId: "1:723201453466:web:59bf85490f1b2f52f45e23",
  measurementId: "G-NM1FNTK6WN",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
