import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">REEL REVIEWS</span>
			</Link>
			<div className="ml-auto">
			<form>
			<input placeholder="Search"/>
			</form>
			<Link to="/signup">
					<button className="btn btn-primary">Join Now</button>
				</Link>
				<Link to="/login">
					<button className="btn btn-primary">Login</button>
				</Link>
				<Link to="/watch">
					<button className="btn btn-primary">WatchList</button>
				</Link>
			</div>
		</nav>
	);
};
