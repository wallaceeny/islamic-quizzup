import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMnAiDxyaZCRSipOc4U8P2Wubo03WbOTo",
  authDomain: "islamicquizzup.firebaseapp.com",
  projectId: "islamicquizzup",
  storageBucket: "islamicquizzup.appspot.com",
  messagingSenderId: "585056667684",
  appId: "1:585056667684:web:4d2faab75cf83e4d3270b1",
  measurementId: "G-BDNJYL687P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);