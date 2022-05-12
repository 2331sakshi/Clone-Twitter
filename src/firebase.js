import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTemTbUsQy0v5z0C1PxiagTXdnfnK2NpY",
    authDomain: "twitter-clone-23d8e.firebaseapp.com",
    databaseURL: "https://twitter-clone-23d8e.firebaseio.com",
    projectId: "twitter-clone-23d8e",
    storageBucket: "twitter-clone-23d8e.appspot.com",
    messagingSenderId: "965727023475",
    appId: "1:965727023475:web:3244205051299fa102d506",
    measurementId: "G-RFBSW2TEWX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();

  export default db;