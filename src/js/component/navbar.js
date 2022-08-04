import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";
import { useHistory } from "react-router-dom";
import "/workspace/Movie-Website-Final-Project/src/styles/login.css"

export const Navbar = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();

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

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">REEL REVIEWS</span>
      </Link>
      <div className="ml-auto">
        <form>
          <input placeholder="Search" />
        </form>
        {/* Button to search for movies */}
        <Link to="/search">
          <button className="btn btn-danger m-1">Movie Search</button>
        </Link>
        {/* If there is no currently signed in user, display Join and Login */}
        {!currentUser ? (
          <>
            <Link to="/signup">
              <button className="btn btn-danger">Join Now</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-danger">Login</button>
            </Link>
          </>
        ) : (
          ""
        )}
        {/* If user is currently logged in, display watch list and logout button */}
        {currentUser ? (
          <>
            <Link to="/watch">
              <button className="btn btn-danger">WatchList</button>
            </Link>
            <Button variant="link" onClick={handleLogout}>
              Log Out
            </Button>
          </>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};
