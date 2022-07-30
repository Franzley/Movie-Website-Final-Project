import React, { useState, useRef, useEffect, useContext } from "react";
import { Card, Button, Alert, Form } from "react-bootstrap";
import { useAuth } from "../firebase/AuthContext";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Context } from "../store/appContext.js";
import { ResultCard } from "../component/ResultCard";

export const WatchList = () => {
    const { currentUser, logout } = useAuth();
    const [watchList, setWatchList] = useState([]);
    const db = firebase.firestore();
  const { store, actions } = useContext(Context);

  const getCollection = () => {
    actions.getFromWatchList(currentUser.email)
  };
 
  useEffect(() => {
    getCollection();
  }, []);

  useEffect(() => {
    setWatchList(store.watchlist)
    console.log("storeValues", store)
    console.log("New useeffect", store.watchlist)
  }, [store.watchlist]);

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
									<ResultCard movie={movie} collection_ID={movie.collection_ID} />
								</li>
							))}
						</ul>
					}
				</div>
    </>
  );
};
