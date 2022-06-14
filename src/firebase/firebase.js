import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCnmH47H0bZe-fahho0bfB1mpN3oTKSb-Y",
    authDomain: "sunny-spa.firebaseapp.com",
    projectId: "sunny-spa",
    storageBucket: "sunny-spa.appspot.com",
    messagingSenderId: "386661039073",
    appId: "1:386661039073:web:f5405c7faf9975a37e70a0",
    measurementId: "G-11ZFGQGCJ3"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
export { auth, database };