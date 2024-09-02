// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blogsite-mern-stack.firebaseapp.com",
  projectId: "blogsite-mern-stack",
  storageBucket: "blogsite-mern-stack.appspot.com",
  messagingSenderId: "805051326915",
  appId: "1:805051326915:web:f73a193bec3739398bdd76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);