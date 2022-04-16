// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBny684e7R7ht82h-Z3XDJyxyxgQ7wIcOw",
  authDomain: "e-commerce-site-with-react.firebaseapp.com",
  projectId: "e-commerce-site-with-react",
  storageBucket: "e-commerce-site-with-react.appspot.com",
  messagingSenderId: "726161149382",
  appId: "1:726161149382:web:76bd9735f8324d0b1e36c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;