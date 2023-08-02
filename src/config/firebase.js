// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3-1OJT5t4Z48I6GSZKSyyPzOxEXpiouM",
  authDomain: "contact-a0b64.firebaseapp.com",
  projectId: "contact-a0b64",
  storageBucket: "contact-a0b64.appspot.com",
  messagingSenderId: "836111965546",
  appId: "1:836111965546:web:7e2f80c0c62a501a269913"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);