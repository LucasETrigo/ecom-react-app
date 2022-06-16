//Firestore imports
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBBycmDEcO-fQp8FPu_hCszgC2ehkCJYL8",
    authDomain: "ecommerce-reactjs-trigo.firebaseapp.com",
    projectId: "ecommerce-reactjs-trigo",
    storageBucket: "ecommerce-reactjs-trigo.appspot.com",
    messagingSenderId: "252903374246",
    appId: "1:252903374246:web:d6abca2e30eef690562367"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;