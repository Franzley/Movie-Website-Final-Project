import React, { useState, useContext } from "react";
import "../../styles/ResultCard.css";
import excellent from "../../images/excellent.png";
import good from "../../images/good.png";
import bad from "../../images/bad.png";
import { Context } from "../store/appContext.js";
import { useAuth } from "../firebase/AuthContext";

export const ResultCard = (props) => {
  const { store, actions } = useContext(Context);
  const { currentUser } = useAuth();
  const movie = props.movie;

  //Calls function to add selected movie to watch list
  function addToWatchList() {
    actions.addToWatchList(currentUser.email, movie);
  }
  //Calls function to remove selected movie from watch list
  function deleteWatchList(currentUser, id) {
    actions.deleteFromDatabase(currentUser, id);
  }
  function addToWatched(currentUser, id) {
    actions.addToWatched(currentUser, id);
  }

  //determines what face appears next to the rating
  const rateFace = () => {
    if (movie.vote_average >= 8) {
      return <img src={excellent} alt="" />;
    } else if (movie.vote_average >= 5 && movie.vote_average < 8) {
      return <img src={good} alt="" />;
    } else if (movie.vote_average >= 0.1 && movie.vote_average < 5) {
      return <img src={bad} alt="" />;
    } else {
      return "";
    }
  };

  return (
    <div className="result-card">
      {/* movie poster image*/}
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        ) : (
          // blank image incase there is no movie poster for a specific movie
          <div className="filler-poster"></div>
        )}
      </div>
      {/* movie info */}
      <div className="info">
        <div className="header">
          <h4 className="vote-average">
            {rateFace()} {movie.vote_average}
          </h4>
          <h3 className="title">{movie.title}</h3>
          {/* substring gives us only the 4 year numbers of the release date. if no date, shows "-" */}
          <h4 className="release-date">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
        </div>
        {/* Selected movie to be added to watch list */}
        <div
          className={
            // If user is signed in and movie is not stored in watchlist, display add to watchlist
            currentUser &&
            !store.watchlist.some((e) => {
              if (e.collection_ID === props.collection_ID) {
                return true;
              }
            }) &&
            !store.watched.some((e) => {
              if (e.collection_ID === props.collection_ID) {
                return true;
              }
            })
              ? "controls"
              : "d-none"
          }
        >
          <button className="btn btn-primary" onClick={addToWatchList}>
            Add to Watchlist
          </button>
        </div>
        {/* Remove selected movie from the watch list */}
        <div
          // If the movie is neither in watchlist or watched, remove button is hidden
          className={
            store.watchlist.some((e) => {
              if (e.collection_ID === props.collection_ID) {
                return true;
              }
            }) ||
            store.watched.some((e) => {
              if (e.collection_ID === props.collection_ID) {
                return true;
              }
            })
              ? "controls"
              : "d-none"
          }
        >
          <button
            className="btn btn-danger"
            onClick={() => {
              deleteWatchList(currentUser.email, props.collection_ID);
            }}
          >
            Remove
          </button>
        </div>
        {/* Add to finished movies */}
        <div
          className={
            // If user is signed in and movie is stored in watchlist, display add to watched
            currentUser &&
            store.watchlist.some((e) => {
              if (e.collection_ID === props.collection_ID) {
                return true;
              }
            })
              ? "controls"
              : "d-none"
          }
        >
          <button
            className={"btn btn-primary"}
            onClick={() => {
              addToWatched(currentUser.email, props.collection_ID);
            }}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
