// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfHnwmw37jA9pUg4m-N6ntfO-N-2QAvc4",
  authDomain: "chatapp-28f39.firebaseapp.com",
  projectId: "chatapp-28f39",
  storageBucket: "chatapp-28f39.appspot.com",
  messagingSenderId: "13562182777",
  appId: "1:13562182777:web:766379faea8fe55d4968a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);