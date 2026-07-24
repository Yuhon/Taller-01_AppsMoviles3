// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdQgtkf0EguEEor2ibd5F8HCNt30xWGXk",
  authDomain: "app-06-4201f.firebaseapp.com",
  databaseURL: "https://app-06-4201f-default-rtdb.firebaseio.com",
  projectId: "app-06-4201f",
  storageBucket: "app-06-4201f.firebasestorage.app",
  messagingSenderId: "328617711472",
  appId: "1:328617711472:web:f4137e5a29515b33c2a1b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth( app );
export const db = getDatabase(app);