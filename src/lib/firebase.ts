// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9_bm3VkJwkCLVmjCk2oHeVw1UEP_fLHM",
  authDomain: "boop-2c1e9.firebaseapp.com",
  databaseURL: "https://boop-2c1e9-default-rtdb.firebaseio.com",
  projectId: "boop-2c1e9",
  storageBucket: "boop-2c1e9.firebasestorage.app",
  messagingSenderId: "963361882168",
  appId: "1:963361882168:web:80eec429a284f94e6926cd",
  measurementId: "G-7YX7EFNM2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

// Auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { app, auth, database, googleProvider, githubProvider };
