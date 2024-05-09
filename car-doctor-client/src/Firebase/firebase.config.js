// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3xzbpnDCFjcVXnD9N4TM8AOvhVf1cpwk",
  authDomain: "car-doctor-auth-3029b.firebaseapp.com",
  projectId: "car-doctor-auth-3029b",
  storageBucket: "car-doctor-auth-3029b.appspot.com",
  messagingSenderId: "326550814793",
  appId: "1:326550814793:web:3f85bcc525220ab714ff98",
  measurementId: "G-MJPVYRBT8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;