import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const getState = ({ getStore, getActions, setStore }) => {
  const db = firebase.firestore();
  let watchListArr = [];
  return {
    store: {
      watchlist: [],
      watched: [],
    },
    actions: {
      loadSomeData: () => {
        // getCollection();
      },
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
      getFromWatchList: (currentUser) => {
        const store = getStore();
        db.collection(currentUser)
          .get()
          .then((querySnapshot) => {
            setStore({ watchlist: [] });
            watchListArr = []
            querySnapshot.forEach((doc) => {
              //   setStore({watchlist: doc.data().movie});
              watchListArr.push(doc.data().movie);
            });
            const individualMovie = watchListArr.map((item) => {
              return item;
            });
            // setStore({ watchlist: individualMovie });
            setStore({ watchlist: individualMovie });
            console.log("StoreInfo: ", store);
            // console.log("StoreInfo: ",store.watchlist)
          });
      },
      deleteFromWatchList: (currentUser, id) => {
        const store = getStore();
        db.collection(currentUser)
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document successfully deleted!");
          })
          // .then(getCollection())
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      },
    },
  };
};

export default getState;