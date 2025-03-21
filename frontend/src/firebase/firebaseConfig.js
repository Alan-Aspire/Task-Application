import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP7EIb8oOsuzUvpfVT-6Xq2BnA2nL2C8c",
    authDomain: "task-application-auth.firebaseapp.com",
    projectId: "task-application-auth",
    storageBucket: "task-application-auth.firebasestorage.app",
    messagingSenderId: "54608944733",
    appId: "1:54608944733:web:498a1d788f3f7eb5adf7b4"
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);