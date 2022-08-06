import React, { useState, useEffect, useContext } from "react";
import { Card } from "react-bootstrap";
import { useAuth } from "../firebase/AuthContext";
import { Context } from "../store/appContext.js";
import { ResultCard } from "../component/ResultCard";
import "/workspace/Movie-Website-Final-Project/src/styles/watchlist.css"

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
            <h2 className="text-center mb-4">My Watchlist</h2>
            <p>
              Click the <i className="fas fa-check"></i> to mark a movie as
              watched. Click the <i className="fas fa-trash-alt"></i> to delete
              a movie from your watchlist.{" "}
            </p>
            <strong>Email: </strong>
            {currentUser.email}
          </Card.Body>
        </Card>
        <br></br>
        <h4>{watchList.length === 0 ? "Add a movie" : "Want to Watch"}</h4>
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
          {watched.length === 0 ? "No Completed Movies" : "Completed Movies"}
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
