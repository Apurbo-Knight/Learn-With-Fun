// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuHdCk3SKnwjzkHKGOxMetAHw1_uUMMAM",
  authDomain: "assignment-9-fe49e.firebaseapp.com",
  projectId: "assignment-9-fe49e",
  storageBucket: "assignment-9-fe49e.firebasestorage.app",
  messagingSenderId: "210511953274",
  appId: "1:210511953274:web:50c021c658fd833a922ac3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;