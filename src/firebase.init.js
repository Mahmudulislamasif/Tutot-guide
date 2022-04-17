// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUMa937TSsC1ocOy9_vq9G2F80rm3ffgI",
  authDomain: "tutor-project-28836.firebaseapp.com",
  projectId: "tutor-project-28836",
  storageBucket: "tutor-project-28836.appspot.com",
  messagingSenderId: "703241597821",
  appId: "1:703241597821:web:d7f00b60afc9fb71b85214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;