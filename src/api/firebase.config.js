// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  connectAuthEmulator,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtqXGC19nFt7j3yhlTHpNtCtGnXh0052A",
  authDomain: "personote-29e66.firebaseapp.com",
  projectId: "personote-29e66",
  storageBucket: "personote-29e66.appspot.com",
  messagingSenderId: "836774559688",
  appId: "1:836774559688:web:a948207bd1713e7cee4afd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
