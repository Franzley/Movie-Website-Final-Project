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
      loadDatabase: (currentUser) => {

        db.collection(currentUser)
          .get()
          .then((querySnapshot) => {
            const watchListArray = [];
            //Load watchlist
            querySnapshot.forEach((doc) => {
              if (doc.data().movie) {
                watchListArray.push({
                  //create a new object containing the current movie details and it's unique firestore ID
                  ...doc.data().movie,
                  collection_ID: doc.id,
                });
              }
            });
            //store each movie locally in flux store
            setStore({ watchlist: watchListArray });

            const watchedArray = [];
            //load completed movies
            querySnapshot.forEach((doc) => {
              if (doc.data().watched) {
                watchedArray.push({
                  //create a new object containing the current movie details and it's unique firestore ID
                  ...doc.data().watched.movie,
                  collection_ID: doc.id,
                });
              }
            });
            //store each movie locally in flux store
            setStore({ watched: watchedArray });
          });
      },
      addToWatched: (currentUser, id) => {
        const store = getStore();
        const actions = getActions();

        //Check if movie already exists in the watchlist
        const movie = store.watchlist.filter((movie) => {
          return movie.collection_ID === id;
        });
        db.collection(currentUser)
          .doc(id)
          .update({
            //Create an object in firebase called watched that contains an object "movie" that holds the value of the filtered movie
            watched: { movie: movie[0] },
            //Delete the existing movie object in firebase
            movie: firebase.firestore.FieldValue.delete(),
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .then(actions.loadDatabase(currentUser))
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      },
      //Grab the unique ID corresponding to the movie that will be deleted
      //Then call function to reload the store containing the updated values
      deleteFromDatabase: (currentUser, id) => {
        const store = getStore();
        const actions = getActions();
        db.collection(currentUser)
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          .then(actions.loadDatabase(currentUser))
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      },
    },
  };
};

export default getState;
