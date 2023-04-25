import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAa5lK1-qI6fhQhYwbhq2CdaQ_92N7N4Aw",
    authDomain: "netflix-clone-a137f.firebaseapp.com",
    projectId: "netflix-clone-a137f",
    storageBucket: "netflix-clone-a137f.appspot.com",
    messagingSenderId: "486245275755",
    appId: "1:486245275755:web:37ffe0485bfa9d70e5b92e",
    measurementId: "G-KZ4QCCMZJ2"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);


export { auth, db };
