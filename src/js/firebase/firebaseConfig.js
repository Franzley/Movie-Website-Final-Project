// import firebase from 'firebase/app'
// import "firebase/auth"

import firebase from 'firebase/compat/app' 
import 'firebase/compat/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyD3cSjXaxlTKP9799HNGS1v90AU3Q_-KSY",
    authDomain: "auth-development-88dd7.firebaseapp.com",
    projectId: "auth-development-88dd7",
    storageBucket: "auth-development-88dd7.appspot.com",
    messagingSenderId: "137778238011",
    appId: "1:137778238011:web:3b6ea616ee31797cc0c21e"
})

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// })


export const auth = app.auth()
export default app