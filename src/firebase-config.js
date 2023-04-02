// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZzLz8y_LpheA1C_lJxrJCUh6tJ_FUuDQ",
  authDomain: "blockproject-52174.firebaseapp.com",
  projectId: "blockproject-52174",
  storageBucket: "blockproject-52174.appspot.com",
  messagingSenderId: "623434223708",
  appId: "1:623434223708:web:e1eae851fd99246528d699",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
