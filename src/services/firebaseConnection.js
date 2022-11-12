import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBbqEfLIvZIkQHFrjH7Mmlh4Oh4WqG0L20",
    authDomain: "devlinks-dd962.firebaseapp.com",
    projectId: "devlinks-dd962",
    storageBucket: "devlinks-dd962.appspot.com",
    messagingSenderId: "694828946608",
    appId: "1:694828946608:web:5075adca13ca39cc031775",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
