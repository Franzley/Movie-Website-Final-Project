import React, { useEffect, useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import "../../styles/home.css";
import group from "../../images/group.png";
import { ResultCard } from "../component/ResultCard";

export const Home = () => {
  const [topMoviesAllTime, setTopMoviesAllTime] = useState([]);
  const [topMoviesToday, setTopMoviesToday] = useState([]);
  const [topMoviesThisWeek, setTopMoviesThisWeek] = useState([]);
  const [popularActionMovies, setPopularActionMovies] = useState([]);
  const [popularAnimatedMovies, setPopularAnimatedMovies] = useState([]);
  const [popularComedyMovies, setPopularComedyMovies] = useState([]);
  const [popularDocumentaryMovies, setPopularDocumentaryMovies] = useState([]);
  const [popularDramaMovies, setPopularDramaMovies] = useState([]);
  const [popularHorrorMovies, setPopularHorrorMovies] = useState([]);
  const [popularRomanceMovies, setPopularRomanceMovies] = useState([]);
  const [popularSciFiMovies, setPopularSciFiMovies] = useState([]);

  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopMoviesAllTime(data.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=55e81c3707b1511daf33d639a483655c"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopMoviesToday(data.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=55e81c3707b1511daf33d639a483655c"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopMoviesThisWeek(data.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularActionMovies(data.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularAnimatedMovies(data.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularComedyMovies(data.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularDocumentaryMovies(data.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularDramaMovies(data.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularHorrorMovies(data.results);
      })
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopularRomanceMovies(data.results);
      })
      .catch((error) => console.log("error", error));

	  fetch(
		"https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate"
	  )
		.then((response) => response.json())
		.then((data) => {
		  console.log(data);
		  setPopularSciFiMovies(data.results);
		})
		.catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* <Card>
				<Card.Body>
					<h2 className="text-center mb-4">Home</h2>
				</Card.Body>
			</Card> */}
      {/* title screen */}
      <div className="mainHomeScreen">
        <div className="leftHome">
          <h1>FIND YOUR NEXT FAVORITE MOVIE</h1>
          <p>
            Discover top trending movies, create your own personal watchlist,
            and keep track of what you’ve watched.
          </p>
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
              <ul className="top-results">
                {topMoviesAllTime.map((movie) => (
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
              <ul className="top-results">
                {topMoviesToday.map((movie) => (
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
              <ul className="top-results">
                {topMoviesThisWeek.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="movieList">
          <p className="topMovies">Popular Action Movies</p>
          <div className="results-list">
            {popularActionMovies.length > 0 && (
              <ul className="top-results">
                {popularActionMovies.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="movieList">
          <p className="topMovies">Popular Animated Movies</p>
          <div className="results-list">
            {popularAnimatedMovies.length > 0 && (
              <ul className="top-results">
                {popularAnimatedMovies.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="movieList">
          <p className="topMovies">Popular Comedies</p>
          <div className="results-list">
            {popularComedyMovies.length > 0 && (
              <ul className="top-results">
                {popularComedyMovies.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="movieList">
          <p className="topMovies">Popular Documentaries</p>
          <div className="results-list">
            {popularDocumentaryMovies.length > 0 && (
              <ul className="top-results">
                {popularDocumentaryMovies.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="movieList">
          <p className="topMovies">Popular Dramas</p>
          <div className="results-list">
            {popularDramaMovies.length > 0 && (
              <ul className="top-results">
                {popularDramaMovies.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="movieList">
          <p className="topMovies">Popular Horror Movies</p>
          <div className="results-list">
            {popularHorrorMovies.length > 0 && (
              <ul className="top-results">
                {popularHorrorMovies.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <div className="movieList">
          <p className="topMovies">Popular Romance Movies</p>
          <div className="results-list">
            {popularRomanceMovies.length > 0 && (
              <ul className="top-results">
                {popularRomanceMovies.map((movie) => (
                  <li key={movie.id}>
                    <ResultCard movie={movie} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
		<div className="movieList">
          <p className="topMovies">Popular Sci-Fi Movies</p>
          <div className="results-list">
            {popularSciFiMovies.length > 0 && (
              <ul className="top-results">
                {popularSciFiMovies.map((movie) => (
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
  );
};
