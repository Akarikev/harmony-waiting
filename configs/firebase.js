// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl0TJvGVXWeDAIiJE8cTJhblJJwHe1By8",
  authDomain: "harmony-haven-waiting-list.firebaseapp.com",
  projectId: "harmony-haven-waiting-list",
  storageBucket: "harmony-haven-waiting-list.appspot.com",
  messagingSenderId: "966190675140",
  appId: "1:966190675140:web:555cbdae92c52b4d334591",
  measurementId: "G-TP2D3007X1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
