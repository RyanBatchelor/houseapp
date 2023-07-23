import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqABM5NB6UFLePzUU7Wowar1jYEoJSMAw",
  authDomain: "house-market-7f102.firebaseapp.com",
  projectId: "house-market-7f102",
  storageBucket: "house-market-7f102.appspot.com",
  messagingSenderId: "741964672639",
  appId: "1:741964672639:web:b82f441f9d4d6b4f75d94a"
};

initializeApp(firebaseConfig)
export const db = getFirestore()
