// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtw1ZfQVVEkzVz9FenQZO4pa5w5fOqfso",
    authDomain: "loaner-8469c.firebaseapp.com",
    projectId: "loaner-8469c",
    storageBucket: "loaner-8469c.appspot.com",
    messagingSenderId: "468669317346",
    appId: "1:468669317346:web:cb147c89dc2757a01f9ebb",
    measurementId: "G-CD0FYVE1SR"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();
export const firebaseAnalytics = getAnalytics(firebase);