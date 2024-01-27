import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/firestore');


const firebaseConfig = {
    apiKey: "AIzaSyAMEwmPyBRIKX4jdwi-V2ja_ZhwiYT6SSk",
    authDomain: "linkedin-clone-7ad8c.firebaseapp.com",
    projectId: "linkedin-clone-7ad8c",
    storageBucket: "linkedin-clone-7ad8c.appspot.com",
    messagingSenderId: "609763881612",
    appId: "1:609763881612:web:34d32bc1b9008b2baec1a9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};