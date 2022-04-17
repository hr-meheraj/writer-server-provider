import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDP4sgou5RwnLS_L6l2yCDrAy5hzpltc4s",
  authDomain: "writer-auth.firebaseapp.com",
  projectId: "writer-auth",
  storageBucket: "writer-auth.appspot.com",
  messagingSenderId: "327486709481",
  appId: "1:327486709481:web:b6beaee679bcaf66381a78"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;