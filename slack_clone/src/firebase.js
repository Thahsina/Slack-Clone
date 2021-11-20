// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
// import "firebase/compat/auth"
import {getDatabase} from 'firebase/database'
import {getAuth, GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {collection,doc,getDocs,addDocs, onSnapshot} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSENGING_SENDER_ID ,
    appId: process.env.REACT_APP_APP_ID 
};

// const firebaseApp = firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);

// const db = firebase.firestore()
const db = getDatabase(app);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider,signInWithPopup,collection,doc,onSnapshot,getDocs};
export default db;