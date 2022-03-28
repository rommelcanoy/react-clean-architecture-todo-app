import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDhee-S0ba2hRZWEf8bUPgslNoIQ1OgWJQ",
  authDomain: "wela-todo-app.firebaseapp.com",
  projectId: "wela-todo-app",
  storageBucket: "wela-todo-app.appspot.com",
  messagingSenderId: "54853383064",
  appId: "1:54853383064:web:d641d8e9ad2e6dde5cf1ed"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)