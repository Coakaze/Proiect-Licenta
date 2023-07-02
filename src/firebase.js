import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWuAfqY8t_lq9_OEhA1l3x1cgcyCxtXe0",
    authDomain: "licenta-f5d5c.firebaseapp.com",
    projectId: "licenta-f5d5c",
    storageBucket: "licenta-f5d5c.appspot.com",
    messagingSenderId: "424812538406",
    appId: "1:424812538406:web:c7c9caa78748081f26d4e7",
    measurementId: "G-B13CYKYQDX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const auth = getAuth(app);

