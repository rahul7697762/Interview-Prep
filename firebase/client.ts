// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8SVqiZyPycP6rUH1w25gQ6G45WeSLNgk",
  authDomain: "prepwise-1090f.firebaseapp.com",
  projectId: "prepwise-1090f",
  storageBucket: "prepwise-1090f.firebasestorage.app",
  messagingSenderId: "219225428233",
  appId: "1:219225428233:web:d7c451b57b8bd8e60983d8",
  measurementId: "G-1F51EC6EZD"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);