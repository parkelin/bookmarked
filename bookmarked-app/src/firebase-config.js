import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; // aunthentification
// import 'firebase/firestore'; // database

const firebaseConfig = {
    apiKey: "AIzaSyBtyux7r4OVb0h2dpg3OT6rE8qmz28Xkok",
    authDomain: "bookmarked-c4d8f.firebaseapp.com",
    projectId: "bookmarked-c4d8f",
    storageBucket: "bookmarked-c4d8f.appspot.com",
    messagingSenderId: "425137796052",
    appId: "1:425137796052:web:11c6e270a0244a65f15c41",
    measurementId: "G-MSN954WENR"
  };
  
  // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
// const firestore = firebase.firestore();

