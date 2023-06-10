// 
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAAIDgfLMGijRneFKC6l9q6pClqm8b7M7o",
    authDomain: "milestone-p3-pigeon.firebaseapp.com",
    projectId: "milestone-p3-pigeon",
    storageBucket: "milestone-p3-pigeon.appspot.com",
    messagingSenderId: "2997406736",
    appId: "1:2997406736:web:8e793e724dfc9b96cf4e95",
    measurementId: "G-HRX5LPX9BN"
  };

  // Initialize Firebase 
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();
  
  export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, googleAuthProvider };