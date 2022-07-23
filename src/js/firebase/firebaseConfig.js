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

export const auth = app.auth()
export default app