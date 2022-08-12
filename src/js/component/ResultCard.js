import React, { useContext, useState } from "react";
import "../../styles/ResultCard.css";
import excellent from "../../images/excellent.png";
import good from "../../images/good.png";
import bad from "../../images/bad.png";
import { Context } from "../store/appContext.js";
import { useAuth } from "../firebase/AuthContext";
import { Modal } from "react-bootstrap";

export const ResultCard = (props) => {
  const { store, actions } = useContext(Context);
  const { currentUser } = useAuth();
  const movie = props.movie;
  const [show, setShow] = useState(false);

  //Modal button functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  //call get trailer function using the movie's assigned id
  function getTrailer(id) {
    actions.getMovieTrailer(id);
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

  const poster = () => {
    if (movie.poster_path) {
      return (
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title}`}
        />
      );
    } else {
      return <div className="filler-poster">NO IMAGE AVAILABLE</div>;
    }
  };

  return (
    <div className="result-card position-relative">
      {/* movie poster image*/}
      <div className="movie-info-box">
        <div
          className="poster-wrapper"
          // Click to search movie trailer
          onClick={() => {
            handleShow();
            getTrailer(movie.id);
          }}
        >
          <button className="details">SHOW DETAILS</button>
          {poster()}
          {/* {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title}`}
          />
        ) : (
          // blank image incase there is no movie poster for a specific movie
          <div className="filler-poster">NO IMAGE AVAILABLE</div>
        )} */}
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
              className="circle-watchlist position-absolute top-0 start-0" title="Add to Watchlist"
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
              className="clay" title="Remove from Watchlist"
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
              className={"position-absolute top-0 end-0 circle-watched"} title="Move to Watched"
              onClick={() => {
                addToWatched(currentUser.email, props.collection_ID);
              }}
            >
              <i className="fas fa-check"></i>
            </button>
          </div>

          {/* Get Trailer */}

          {/* Bootstrap-react Modal to show movie trailer */}
          <Modal show={show} onHide={handleClose} className="modal">
            <Modal.Header closeButton className="modalStyle">
              <Modal.Title >{movie.title} Official Trailer</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalStyle modalBody">
              {store.trailer !== null ? (
                <div className="vid">
                <iframe
                  width="420"
                  height="315"
                  src={store.trailer.replace("watch?v=", "embed/")}
                ></iframe></div>
              ) : (
                "No Trailer found for this movie"
              )}
              {movie.overview}
            </Modal.Body>
            <Modal.Footer className="modalStyle">
              <button className="btn btn-danger" variant="secondary" onClick={handleClose}>
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};
