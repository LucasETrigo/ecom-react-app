// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBycmDEcO-fQp8FPu_hCszgC2ehkCJYL8",
    authDomain: "ecommerce-reactjs-trigo.firebaseapp.com",
    projectId: "ecommerce-reactjs-trigo",
    storageBucket: "ecommerce-reactjs-trigo.appspot.com",
    messagingSenderId: "252903374246",
    appId: "1:252903374246:web:d6abca2e30eef690562367"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize FireStore
const db = getFirestore(app);

export default db;