import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import '../../styles/home.css';
import group from "/Users/concetta/Movie-Website-Final-Project/Movie-Website-Final-Project/src/images/group.png";

export const Home = () => {
	function handleLogout() {
	}

	var requestOptions = {
		method: 'GET',
		redirect: 'follow'
	};

	fetch("https://api.themoviedb.org/3/movie/550?api_key=55e81c3707b1511daf33d639a483655c", requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Home</h2>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				<Button variant="link" onClick={handleLogout}>Log Out</Button>
			</div>
			{/* title screen */}
			<div className="mainHomeScreen">
				<div className="leftHome">
					<h1>FIND YOUR NEXT FAVORITE MOVIE</h1>
					<p>Discover top trending movies, create your own personal watchlist, and keep track of what you’ve watched.</p>
				</div>
				<img className="tv" src={group} alt="Our Ranking System" />
			</div>
			{/* below the title screen */}
			<div className="middleHome">
				<p className="blurb">Browse movies and add them to your watchlist.</p>
				<div className="movieList">
					<p className="topMovies">Top Movies of All Time</p>
					<div className="card" style={{ width: "15rem" }}>
						<img className="card-img-top" src="..." alt="Movie Poster" />
						<div className="card-body">
							<h5 className="card-title">Movie title</h5>
							<p className="card-text">(Movie Year)</p>
							<a href="#" className="btn btn-primary">Add to Watchlist</a>
						</div>
					</div>
				</div>
				<div className="movieList">
					<p className="topMovies">Top Movies of This Month</p>
					<div className="card" style={{ width: "15rem" }}>
						<img className="card-img-top" src="..." alt="Movie Poster" />
						<div className="card-body">
							<h5 className="card-title">Movie title</h5>
							<p className="card-text">(Movie Year)</p>
							<a href="#" className="btn btn-primary">Add to Watchlist</a>
						</div>
					</div>
				</div>
				<div className="movieList">
					<p className="topMovies">Top Movies of This Week</p>
					<div className="card" style={{ width: "15rem" }}>
						<img className="card-img-top" src="..." alt="Movie Poster" />
						<div className="card-body">
							<h5 className="card-title">Movie title</h5>
							<p className="card-text">(Movie Year)</p>
							<a href="#" className="btn btn-primary">Add to Watchlist</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
