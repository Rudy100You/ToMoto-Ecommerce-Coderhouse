// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsQki95ns48e_L7i1IuwM2eEeVuFjqxZ0",
  authDomain: "tomoto-ecommerce-coderhouse.firebaseapp.com",
  projectId: "tomoto-ecommerce-coderhouse",
  storageBucket: "tomoto-ecommerce-coderhouse.appspot.com",
  messagingSenderId: "260935240126",
  appId: "1:260935240126:web:6567ddb497792098bc91ef",
  measurementId: "G-YYJWNCLNL9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);