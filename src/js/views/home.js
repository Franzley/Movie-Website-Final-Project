import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import '../../styles/home.css';
import group from "/workspace/Movie-Website-Final-Project/src/images/group.png";
import { ResultCard } from "../component/ResultCard";

export const Home = () => {
	function handleLogout() {
	}

	const [topMoviesAllTime, setTopMoviesAllTime] = useState([])
	const [topMoviesToday, setTopMoviesToday] = useState([])
	const [topMoviesThisWeek, setTopMoviesThisWeek] = useState([])


	const fetchData = () => {

		fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&page=1")
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setTopMoviesAllTime(data.results)
			})
			.catch(error => console.log('error', error));

		fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=55e81c3707b1511daf33d639a483655c")
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setTopMoviesToday(data.results)
			})
			.catch(error => console.log('error', error));

		fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=55e81c3707b1511daf33d639a483655c")
			.then(response => response.json())
			.then(data => {
				console.log(data)
				setTopMoviesThisWeek(data.results)
			})
			.catch(error => console.log('error', error));


	}

	useEffect(() => {
		fetchData()
	}, [])


	return (
		<>
			{/* <Card>
				<Card.Body>
					<h2 className="text-center mb-4">Home</h2>
				</Card.Body>
			</Card> */}
			<div className="w-100 text-center">
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
					<div className="results-list">
						{topMoviesAllTime.length > 0 && (
							<ul className="results">
								{topMoviesAllTime.map(movie => (
									<li key={movie.id}>
										<ResultCard movie={movie} />
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
				<div className="movieList">
					<p className="topMovies">Top Movies Today</p>
					<div className="results-list">
						{topMoviesToday.length > 0 && (
							<ul className="results">
								{topMoviesToday.map(movie => (
									<li key={movie.id}>
										<ResultCard movie={movie} />
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
				<div className="movieList">
					<p className="topMovies">Top Movies This Week</p>
					<div className="results-list">
						{topMoviesThisWeek.length > 0 && (
							<ul className="results">
								{topMoviesThisWeek.map(movie => (
									<li key={movie.id}>
										<ResultCard movie={movie} />
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
