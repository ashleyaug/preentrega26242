// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChbzKw6Q9PweDJ8o_fDdgYqJRcxxwR8rU",
  authDomain: "mi-proyecto-a830d.firebaseapp.com",
  projectId: "mi-proyecto-a830d",
  storageBucket: "mi-proyecto-a830d.firebasestorage.app",
  messagingSenderId: "322674659417",
  appId: "1:322674659417:web:611a8730cf218a64d0a148"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para el login
const auth = getAuth(app);

export { db, auth };