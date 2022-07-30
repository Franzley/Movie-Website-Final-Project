import React, { useState, useEffect, useContext } from "react";
import { Card, Button, Alert, Form } from "react-bootstrap";
import { useAuth } from "../firebase/AuthContext";
import { Context } from "../store/appContext.js";
import { ResultCard } from "../component/ResultCard";

export const WatchList = () => {
  //Get the instance of the current user
  const { currentUser } = useAuth();
  const [watchList, setWatchList] = useState([]);
  //Access functions to use flux store
  const { store, actions } = useContext(Context);

  //Call the function to load the watch list and pass the current user's email
  const getCollection = () => {
    actions.loadWatchList(currentUser.email);
  };

  //Load watch list on every reload
  useEffect(() => {
    getCollection();
  }, []);

  //Listen to flux store on every reload and store values
  useEffect(() => {
    setWatchList(store.watchlist);
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
            {watchList.map((movie) => (
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
