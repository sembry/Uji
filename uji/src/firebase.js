// src/firebase.js
import 'firebase/auth';
import firebase from "firebase";

const config = {
    apiKey: "AIzaSyCoR9TffQjePVhItJfaTut-3yL2T17SOSM",
    authDomain: "uji-data.firebaseapp.com",
    databaseURL: "https://uji-data.firebaseio.com",
    projectId: "uji-data",
    storageBucket: "uji-data.appspot.com",
    messagingSenderId: "1010678289713",
    appId: "1:1010678289713:web:12eff6d1fca0612292cc10",
    measurementId: "G-XHM7QBL4ZR"
};

const app = firebase.initializeApp(config);

export default app;