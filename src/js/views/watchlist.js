import React, { useState, useRef, useEffect } from "react";
import { Card, Button, Alert, Form } from "react-bootstrap";
import { useAuth } from "../firebase/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export const WatchList = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const movieRef = useRef();
  const [watchList, setWatchList] = useState([]);
  const db = firebase.firestore();

  //Get collection of WatchList stored in Firebase
  const getCollection = () => {
    db.collection(currentUser.email)
      .get()
      .then((querySnapshot) => {
        setWatchList([]);
        querySnapshot.forEach((doc) => {
          setWatchList((current) => {
            return [...current, doc.data()];
          });
        });
      });
  };

  //Logout Feature
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  //Search for a new movie title
  function handleSearch(e) {
    const newMovie = movieRef.current.value;
    e.preventDefault();
    console.log(newMovie);
    movieRef.current.value = "";
    addToWatchList(newMovie);
  }

  //Store new movie in Database
  function addToWatchList(movie) {
    // Initialize Cloud Firestore and get a reference to the service
    db.collection(currentUser.email)
      .add({
        watchList: movie,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    getCollection();
  }

  //ONLOAD --> Runs once on initial or reload
  useEffect(() => {
    console.log("sfknjsdfj", currentUser);
    getCollection();
  }, []);

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Watch List</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email: </strong>
          {currentUser.email}
        </Card.Body>
      </Card>
      {/* Temporary Movie Watch List */}
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Search Movie</h2>
          <Form onSubmit={handleSearch}>
            <Form.Group id="watch-list">
              <Form.Label>Enter Movie</Form.Label>
              <Form.Control
                type="text"
                ref={movieRef}
                placeholder="Movie Title"
                required
              />
            </Form.Group>
          </Form>
          <br></br>
          <h4>
            {watchList.length === 0
              ? "Add a movie"
              : `Number of Movies Added: ${watchList.length}`}
          </h4>
          <hr></hr>
          {watchList.map((item, index) => {
            return <p key={index}>{item.watchList}</p>;
          })}
        </Card.Body>
      </Card>
      {/* Temporary Movie Watch List END */}
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
};
