// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import {
//   VITE_apiKey,
//   VITE_authDomain,
//   VITE_projectId,
//   VITE_storageBucket,
//   VITE_messagingSenderId,
//   VITE_appId,
// } from "../env.local";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClmkV32hcGxSXfZvphHyp86fzpjPTmid8",
//   authDomain: "festivity-architects.firebaseapp.com",
//   projectId: "festivity-architects",
//   storageBucket: "festivity-architects.appspot.com",
//   messagingSenderId: "955891444288",
//   appId: "1:955891444288:web:6ad552b842eea62756cda5",
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};
// const firebaseConfig = {
//   apiKey: VITE_apiKey,
//   authDomain: VITE_authDomain,
//   projectId: VITE_projectId,
//   storageBucket: VITE_storageBucket,
//   messagingSenderId: VITE_messagingSenderId,
//   appId: VITE_appId,
// };
// console.log(import.meta.env.VITE_apiKey);
// console.log(import.meta.env.VITE_authDomain);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
