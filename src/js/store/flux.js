import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const getState = ({ getStore, getActions, setStore }) => {
  const db = firebase.firestore();
  return {
    store: {
      watchlist: [],
      watched: [],
    },
    actions: {
      loadSomeData: () => {},

      //Every new movie is sent to firestore
      //Each new collection created is tied to current user, each stored movie gets unique ID
      addToWatchList: (currentUser, movie) => {
        const store = getStore();
        db.collection(currentUser)
          .add({
            movie,
          })
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      },
      //Grab movies in firestore and store in watchlist
      loadWatchList: (currentUser) => {
        const store = getStore();
        db.collection(currentUser)
          .get()
          .then((querySnapshot) => {
            const watchListArray = [];
            querySnapshot.forEach((doc) => {
              watchListArray.push({
                //create a new object containing the current movie details and it's unique firestore ID
                ...doc.data().movie,
                collection_ID: doc.id,
              });
            });
            //store each movie locally in flux store
            setStore({ watchlist: watchListArray });
          });
      },
      //Grab the unique ID corresponding to the movie that will be deleted
      //Then call function to reload the watch list containing the updated values
      deleteFromWatchList: (currentUser, id) => {
        const store = getStore();
        const actions = getActions();
        db.collection(currentUser)
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .then(actions.loadWatchList(currentUser))
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      },
    },
  };
};

export default getState;
