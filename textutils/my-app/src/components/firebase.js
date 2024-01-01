// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBJhw0Dg1D5SCcJsfrTIBdIddltEEYKWg",
  authDomain: "text-utils-1e70d.firebaseapp.com",
  projectId: "text-utils-1e70d",
  storageBucket: "text-utils-1e70d.appspot.com",
  messagingSenderId: "284924439556",
  appId: "1:284924439556:web:7e8a7631aeb749d7add951",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
