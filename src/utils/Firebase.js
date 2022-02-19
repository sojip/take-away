// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX6fYSK4JQbsPTfX4mGuahXYD-5RxsfVk",
  authDomain: "take-away-96bf1.firebaseapp.com",
  projectId: "take-away-96bf1",
  storageBucket: "take-away-96bf1.appspot.com",
  messagingSenderId: "1083205945424",
  appId: "1:1083205945424:web:d5588802818a8c9ba96955",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
