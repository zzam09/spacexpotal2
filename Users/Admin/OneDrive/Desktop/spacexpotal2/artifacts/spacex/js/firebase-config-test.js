import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js';

const firebaseConfig = {
    apiKey:            "AIzaSyCigcrLp7-eb2gU0uThWWEOOKdrgPSAWNw",
    authDomain:        "spacexmembership-5cdc3.firebaseapp.com",
    projectId:         "spacexmembership-5cdc3",
    storageBucket:     "spacexmembership-5cdc3.firebasestorage.app",
    messagingSenderId: "373866019176",
    appId:             "1:373866019176:web:2df0df0cd94391760bbedd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
