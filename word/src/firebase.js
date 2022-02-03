// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACQ2YOg3Sll6j3I8n-WjemQWH0hPnPcas",
  authDomain: "word-65c44.firebaseapp.com",
  projectId: "word-65c44",
  storageBucket: "word-65c44.appspot.com",
  messagingSenderId: "256363094567",
  appId: "1:256363094567:web:dbc566933e31ec3f532402",
  measurementId: "G-ZW0YY3NXQN"
};
initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();