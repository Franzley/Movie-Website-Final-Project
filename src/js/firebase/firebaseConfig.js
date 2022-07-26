import firebase from 'firebase/compat/app' 
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}) 

// // Initialize Cloud Firestore and get a reference to the service
// const db = firebase.firestore();
// db.collection("users").add({
//   first: "Ada",
//   last: "Lovelace",
//   born: 1815
// })
// .then((docRef) => {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });

// db.collection("users").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
//   });
// });

export const auth = app.auth()
export default app