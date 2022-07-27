import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/AuthContext";
// import logo from "/workspace/Movie-Website-Final-Project/src/images/logo.png";
// import logo from "../../images/logo.png"; 


export const Navbar = () => {
  const { currentUser } = useAuth();
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">REEL REVIEWS</span>
      </Link>
      <div className="ml-auto">
        <form>
          <input placeholder="Search" />
        </form>
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
        {currentUser ? (
          <Link to="/watch">
            <button className="btn btn-danger">WatchList</button>
          </Link>
        ) : (
          ""
        )}
        				<Link to="/search">
					<button className="btn btn-danger m-1">Movie Search</button>
				</Link>
      </div>
    </nav>
  );
};
