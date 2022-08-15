//React
import React from "react";

//Components
import { ResultCard } from "./ResultCard.jsx";

//Styles CSS
import "../../styles/home.css";

const MovieGenres = (props) => {
  const movieGenre = props.movieGen;

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
