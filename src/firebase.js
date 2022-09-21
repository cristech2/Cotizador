// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBESkTs5D-dxsKCeZ6z8_r0Y6DNEfZ34s8",
  authDomain: "cotizador-b1adf.firebaseapp.com",
  projectId: "cotizador-b1adf",
  storageBucket: "cotizador-b1adf.appspot.com",
  messagingSenderId: "500649823435",
  appId: "1:500649823435:web:3094762bafffe6df6b1f4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
