// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: "contactapp-785e7.firebaseapp.com",
  projectId: "contactapp-785e7",
  storageBucket: "contactapp-785e7.appspot.com",
  messagingSenderId: "1077416399427",
  appId: "1:1077416399427:web:21407b9bf9abb086b77af6",
  measurementId: "G-424BDZBNPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
