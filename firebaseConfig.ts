import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXfAQhBeDJXITZAsWA9O9Ky7M3yT5tqeE",
  authDomain: "myapp-qrcode.firebaseapp.com",
  projectId: "myapp-qrcode",
  storageBucket: "myapp-qrcode.firebasestorage.app",
  messagingSenderId: "764535012831",
  appId: "1:764535012831:web:26dacb035c99d49e03186a",
  measurementId: "G-WDZ8JMQKPR",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
