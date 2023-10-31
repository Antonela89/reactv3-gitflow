// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXqAYL1wCSl7j_4gaOMLzyciodpXOauLA",
  authDomain: "reactvdb.firebaseapp.com",
  projectId: "reactvdb",
  storageBucket: "reactvdb.appspot.com",
  messagingSenderId: "314221567908",
  appId: "1:314221567908:web:e01002a272ce9ae4782b31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)