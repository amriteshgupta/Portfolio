// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-MiLfvP9wL8LZW_chTqKTHsoS7FqVaSk",
  authDomain: "portfolio-2e721.firebaseapp.com",
  projectId: "portfolio-2e721",
  storageBucket: "portfolio-2e721.appspot.com",
  messagingSenderId: "707604750900",
  appId: "1:707604750900:web:88bfdc31daa06a92f16061",
  measurementId: "G-2K973EES76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);