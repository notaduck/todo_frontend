import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBhRu-FRCMrcRrwbIkIqR3UjdTDzgxNAtg",
    authDomain: "todo-6d899.firebaseapp.com",
    projectId: "todo-6d899",
    storageBucket: "todo-6d899.appspot.com",
    messagingSenderId: "28589905710",
    appId: "1:28589905710:web:475b933326682c66808cbf"

  // apiKey: process.env.FIREBASE_KEY,
  // authDomain: process.env.FIREBASE_DOMAIN,
  // databaseURL: process.env.FIREBASE_DATABASE,
  // projectId: process.env.FIREBASE_PROJECT_ID,
  // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_SENDER_ID
});

export default app;
