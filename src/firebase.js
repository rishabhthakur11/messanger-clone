import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFrvWBIVFQWgb663sNVtaygwws13ZEbjc",
  authDomain: "messanger-clone-8ea3d.firebaseapp.com",
  projectId: "messanger-clone-8ea3d",
  storageBucket: "messanger-clone-8ea3d.appspot.com",
  messagingSenderId: "104146852648",
  appId: "1:104146852648:web:f21805408e5eaabca78e1d",
  measurementId: "G-L15TGMW71D",
});
const db = firebaseApp.firestore();

export default db;
