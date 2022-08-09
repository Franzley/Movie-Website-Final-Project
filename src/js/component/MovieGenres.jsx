import React from "react";
import { ResultCard } from "./ResultCard";
import "../../styles/home.css";
const MovieGenres = (props) => {
  const movieGenre = props.topMovieGenreList;

  //return listing of movie ranking i.e Top Movies of All Time or Top Movies Today, etc
  return (
    <>
      <p className="topMovies">{props.title}</p>
      <div className="results-list">
        {movieGenre.length > 0 && (
          <ul className="top-results">
            {movieGenre.map((movie) => (
              <li key={movie.id}>
                <ResultCard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MovieGenres;
