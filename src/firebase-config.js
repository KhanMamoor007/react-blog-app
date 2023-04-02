// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJrZbUIGTW2uKUIWSPaSVqvSEb7GHv0EU",
  authDomain: "react-dummy-project-8988a.firebaseapp.com",
  projectId: "react-dummy-project-8988a",
  storageBucket: "react-dummy-project-8988a.appspot.com",
  messagingSenderId: "33918014674",
  appId: "1:33918014674:web:5cbb198defb2fa978fc90b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
