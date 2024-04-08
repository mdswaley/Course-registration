// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeFcrEGY1OCLWgFp0jc-IIuJWkCd65m6U",
  authDomain: "subject-registration-234bc.firebaseapp.com",
  projectId: "subject-registration-234bc",
  storageBucket: "subject-registration-234bc.appspot.com",
  messagingSenderId: "1005525186794",
  appId: "1:1005525186794:web:4a6f6babeb7f410d177f93",
  measurementId: "G-0C5MGC6K4Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export{app,auth}  