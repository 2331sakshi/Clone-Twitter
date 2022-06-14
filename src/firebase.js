import firebase from "firebase";
<<<<<<< HEAD
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBucG3PDAQxaVTpF-cmbiQcWAPfhK9oQYo",
  authDomain: "twitter-clone-5abf5.firebaseapp.com",
  projectId: "twitter-clone-5abf5",
  storageBucket: "twitter-clone-5abf5.appspot.com",
  messagingSenderId: "404866178946",
  appId: "1:404866178946:web:38ac28d3f9f0715756f99b",
  measurementId: "G-6Q4E30QZ5B"

};
=======
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
>>>>>>> 847da22f91f53cc2fa83513abf4911118af87efb

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
<<<<<<< HEAD
=======

>>>>>>> 847da22f91f53cc2fa83513abf4911118af87efb
  export default db;