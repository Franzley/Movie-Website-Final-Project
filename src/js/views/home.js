//React
import React, { useEffect, useState } from "react";

//Styles CSS
import "../../styles/home.css";

//Images
import group from "../../images/group.png";

//Components
import MovieGenres from "../component/MovieGenres.jsx";

//Functions
import { FetchUrl } from "../FetchUrl.js";


export const Home = () => {
  const [movieGenre, setMovieGenre] = useState({
    topMoviesAllTime: [],
    topMoviesToday: [],
    topMoviesThisWeek: [],
    popularActionMovies: [],
    popularAnimatedMovies: [],
    popularComedyMovies: [],
    popularDocumentaryMovies: [],
    popularDramaMovies: [],
    popularHorrorMovies: [],
    popularRomanceMovies: [],
    popularSciFiMovies: [],
  });
  const genre = Object.keys(movieGenre);

  const topMoviesGenres = [
    { genres: genre[0], title: "Top Movies of All Time" },
    { genres: genre[1], title: "Top Movies Today" },
    { genres: genre[2], title: "Top Movies This Week" },
    { genres: genre[3], title: "Popular Action Movies" },
    { genres: genre[4], title: "Popular Animated Movies" },
    { genres: genre[5], title: "Popular Comedies" },
    { genres: genre[6], title: "Popular Documentaries" },
    { genres: genre[7], title: "Popular Dramas" },
    { genres: genre[8], title: "Popular Horror Movies" },
    { genres: genre[9], title: "Popular Romance Movies" },
    { genres: genre[10], title: "Popular Sci-Fi Movies" },
  ];

  const fetchData = () => {
    Promise.all(FetchUrl).then((data) => {
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          topMoviesAllTime: data[0].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          topMoviesToday: data[1].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          topMoviesThisWeek: data[2].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          popularActionMovies: data[3].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          popularAnimatedMovies: data[4].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          popularComedyMovies: data[5].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          popularDocumentaryMovies: data[6].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          popularDramaMovies: data[7].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          popularHorrorMovies: data[8].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          popularRomanceMovies: data[9].results,
        };
      });
      setMovieGenre((prevValue) => {
        return {
          ...prevValue,
          popularSciFiMovies: data[10].results,
        };
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
        <p className="blurb">
          Browse movies and add them to your watchlist. Just click the{" "}
          <i className="fas fa-plus"></i> to add a movie to your watchlist.
        </p>
        {topMoviesGenres.map((item, index) => {
          return (
            <MovieGenres
              key={index}
              movieGen={movieGenre[item.genres]}
              title={item.title}
            />
          );
        })}
      </div>
    </>
  );
};
