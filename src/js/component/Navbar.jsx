//React
import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

//Styles CSS
import "../../styles/navbar.css";

//Images
import logo from "../../images/logo.png";
import logo_red from "../../images/logo_red.png";

//Context
import { useAuth } from "../firebase/AuthContext";
import { Context } from "../store/appContext.js";

const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const location = useLocation();

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
    actions.clearOnLogout();
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

export default Navbar