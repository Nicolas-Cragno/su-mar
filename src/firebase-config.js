// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjduy6KqTr5B068PqSefXuM9olW7YQix0",
  authDomain: "sumar-7705d.firebaseapp.com",
  projectId: "sumar-7705d",
  storageBucket: "sumar-7705d.appspot.com",
  messagingSenderId: "812889380683",
  appId: "1:812889380683:web:740346b7d27c2200523ace",
  measurementId: "G-8TXZK0398M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);