import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC4zhCzS3o5ClGVpKQnuoF76ZX-ZbPGSNM",
    authDomain: "frontendcasestudy-9e523.firebaseapp.com",
    databaseURL: "https://frontendcasestudy-9e523-default-rtdb.firebaseio.com",
    projectId: "frontendcasestudy-9e523",
    storageBucket: "frontendcasestudy-9e523.firebasestorage.app",
    messagingSenderId: "307214112568",
    appId: "1:307214112568:web:b037fda51ed2664c2313cd",
    measurementId: "G-5V2JDY3W7Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Realtime Database instance
export const db = getDatabase(app);
