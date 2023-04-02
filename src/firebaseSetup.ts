// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwG8_hdBeRpF06spxpd6gyMxfo_sXvHwI",
  authDomain: "chronodiscgolf-d5454.firebaseapp.com",
  projectId: "chronodiscgolf-d5454",
  storageBucket: "chronodiscgolf-d5454.appspot.com",
  messagingSenderId: "955134883",
  appId: "1:955134883:web:6847ff7f7d81dbe4862016",
  measurementId: "G-N10RRH6EKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)