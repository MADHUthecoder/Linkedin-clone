// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo3vv9a5QOP64IRVoRH4j1bsdJfsiGkFk",
  authDomain: "linkedin-52d30.firebaseapp.com",
  projectId: "linkedin-52d30",
  storageBucket: "linkedin-52d30.appspot.com",
  messagingSenderId: "412542429325",
  appId: "1:412542429325:web:cfcb56ad9e3ee0c906dac4",
  measurementId: "G-L36PPDWYPY"
};


const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)


export { auth, db }