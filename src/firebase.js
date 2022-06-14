import firebase from "firebase";
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

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  export default db;