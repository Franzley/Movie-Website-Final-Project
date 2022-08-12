import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";
import { useHistory } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../images/logo.png";
import logo_red from "../../images/logo_red.png";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const location = useLocation();
  console.log(location.pathname.replace("/", ""));

  //Change navbar color depending on current webpage path
  const navColor = `navbar navbar-dark nav-${
    location.pathname.replace("/", "") === ""
      ? "home"
      : location.pathname.replace("/", "")
  }`;

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
    <nav className={navColor}>
      <Link to="/">
        <span className="navbar-brand mb-0 h1">
          <img
            src={location.pathname.replace("/", "") === "" ? logo : logo_red}
            alt="Logo"
          />
        </span>
      </Link>
      <div className="ml-auto">
        {/* Button to search for movies */}
        <Link to="/search">
          <button className="btn btn-danger m-1">Movie Search</button>
        </Link>
        <Link to="/random">
          <button className="btn btn-danger m-1">Random Movie</button>
        </Link>
        {/* If there is no currently signed in user, display Join and Login */}
        {!currentUser ? (
          <>
            <Link to="/signup">
              <button className="btn btn-danger m-1">Join Now</button>
            </Link>
            <Link to="/login">
              <button className="btn btn-danger m-1">Login</button>
            </Link>
          </>
        ) : (
          ""
        )}
        {/* If user is currently logged in, display watch list and logout button */}
        {currentUser ? (
          <>
            <Link to="/watch">
              <button className="btn btn-danger m-1">WatchList</button>
            </Link>
            <Button className="btn btn-danger m-1 logout" variant="link" onClick={handleLogout}>
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
