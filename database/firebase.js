// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1usS1qUhLjQKEZG-mcZsaYofYdI7qsYs",
  authDomain: "coursprogmobilelabo01.firebaseapp.com",
  databaseURL: "https://coursprogmobilelabo01-default-rtdb.firebaseio.com",
  projectId: "coursprogmobilelabo01",
  storageBucket: "coursprogmobilelabo01.appspot.com",
  messagingSenderId: "181378338546",
  appId: "1:181378338546:web:31dde654b8e0eefce00a6b",
  measurementId: "G-P2055XDM0B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export default app;
