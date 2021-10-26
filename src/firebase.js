// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAemyOmtOCQWNK4w4E9OoXL1oU4l5W7Pb4",
  authDomain: "triple-whale-fb5b7.firebaseapp.com",
  projectId: "triple-whale-fb5b7",
  storageBucket: "triple-whale-fb5b7.appspot.com",
  messagingSenderId: "346598792761",
  appId: "1:346598792761:web:85e61eae5a68ef31d4f7e8",
  measurementId: "G-EXH6Z1WDZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
