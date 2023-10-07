// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClmkV32hcGxSXfZvphHyp86fzpjPTmid8",
  authDomain: "festivity-architects.firebaseapp.com",
  projectId: "festivity-architects",
  storageBucket: "festivity-architects.appspot.com",
  messagingSenderId: "955891444288",
  appId: "1:955891444288:web:6ad552b842eea62756cda5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
