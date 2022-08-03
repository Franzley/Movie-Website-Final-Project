import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../firebase/AuthContext";
import { Context } from "../store/appContext.js";
import { ResultCard } from "../component/ResultCard";

export const WatchList = () => {
  //Get the instance of the current user
  const { currentUser } = useAuth();
  const [watchList, setWatchList] = useState([]);
  const [watched, setWatched] = useState([]);
  //Access functions to use flux store
  const { store, actions } = useContext(Context);

  //Call the function to load the watch list and pass the current user's email
  const getCollection = () => {
    actions.loadDatabase(currentUser.email);
  };

  //Load watch list on every reload
  useEffect(() => {
    getCollection();
  }, []);

  //Listen to flux store on every reload and store values
  useEffect(() => {
    setWatchList(store.watchlist);
  }, [store.watchlist]);
  useEffect(() => {
    setWatched(store.watched);
  }, [store.watched]);

  return (
    <>
      <div>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Watch List</h2>
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
                  <ResultCard
                    movie={movie}
                    collection_ID={movie.collection_ID}
                  />
                </li>
              ))}
            </ul>
          }
        </div>
      </div>

      <div>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Watched</h2>
          </Card.Body>
        </Card>
        <br></br>
        <h4>
          {watched.length === 0
            ? "No Completed Movies"
            : `Number of Completed Movies: ${watched.length}`}
        </h4>
        <hr></hr>
        <div className="search-results-list">
          {
            <ul className="results">
              {watched.map((movie) => (
                <li key={movie.id}>
                  <ResultCard
                    movie={movie}
                    collection_ID={movie.collection_ID}
                  />
                </li>
              ))}
            </ul>
          }
        </div>
      </div>
    </>
  );
};
