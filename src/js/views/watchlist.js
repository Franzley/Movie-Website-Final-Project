import React, { useState, useRef, useEffect, useContext } from "react";
import { Card, Button, Alert, Form } from "react-bootstrap";
import { useAuth } from "../firebase/AuthContext";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Context } from "../store/appContext.js";
import { ResultCard } from "../component/ResultCard";

export const WatchList = () => {
    // const [error, setError] = useState("");
    const { currentUser, logout } = useAuth();
    // const history = useHistory();
    // const movieRef = useRef();
    const [watchList, setWatchList] = useState([]);
    const db = firebase.firestore();
  const { store, actions } = useContext(Context);

  // const getCollection = () => {
  //   actions.getFromWatchList(currentUser.email)
  //   console.log("storeValues", store)
  //   console.log("movieList watchlist", store.watchlist)
  // };
 
  // useEffect(() => {
  //   getCollection();
  // }, []);

  const getCollection = () => {
    db.collection(currentUser.email)
      .get()
      .then((querySnapshot) => {
        setWatchList([]);
        querySnapshot.forEach((doc) => {
          // console.log("The id is: ",doc.id)
          setWatchList((current) => {
            return [...current, {...doc.data().movie, collection_ID: doc.id}];
          });
          // console.log(doc.data().movie.id)
        });
      });
  };
 
  useEffect(() => {
    getCollection();
  }, []);


  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Watch List</h2>
          {/* {error && <Alert variant="danger">{error}</Alert>} */}
          <strong>Email: </strong>
          {currentUser.email}
        </Card.Body>
      </Card>
      {/* testing */}
      <br></br>
      <h4>
            {watchList.length === 0
              ? "Add a movie"
              : `Number of Movies Added: ${watchList.length}`}
          </h4>
          <hr></hr>
      <div className="search-results-list">
					{
						<ul className="results">
							{watchList.map(movie => (
								<li key={movie.id}>
									<ResultCard movie={movie} />
								</li>
							))}
						</ul>
					}
				</div>
    </>
  );
};
