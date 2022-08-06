import React, { useContext } from "react";
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
    actions.loadDatabase(currentUser.email);
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
    <div className="result-card position-relative">
      {/* movie poster image*/}
      <div className="poster-wrapper">
      <button className="details">SHOW DETAILS</button>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        ) : (
          // blank image incase there is no movie poster for a specific movie
          <div className="filler-poster">NO IMAGE AVAILABLE</div>
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

        {/* WATCH LIST */}
        <div
          className={
            // If user is signed in and movie is not stored in watchlist, display add to watchlist
            currentUser &&
            !store.watchlist.some((e) => {
              if (e.original_title === movie.original_title) {
                return true;
              }
            }) &&
            !store.watched.some((e) => {
              if (e.original_title === movie.original_title) {
                return true;
              }
            })
              ? "controls"
              : "d-none"
          }
        >
          <button
            className="circle-watchlist position-absolute top-0 start-0"
            onClick={addToWatchList}
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>

        {/* REMOVE */}
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
            className="clay"
            onClick={() => {
              deleteWatchList(currentUser.email, props.collection_ID);
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>

        {/* COMPLETED MOVIES */}
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
            className={
              "position-absolute top-0 end-0 circle-watched"
            }
            onClick={() => {
              addToWatched(currentUser.email, props.collection_ID);
            }}
          >
            <i className="fas fa-check"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
