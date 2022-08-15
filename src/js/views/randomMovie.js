//React
import React, {useState, useEffect} from 'react'

//Styles CSS
import "../../styles/randomMovie.css"

//Components
import { ResultCard } from '../component/ResultCard.jsx'


export const RandomMovie = ({movie}) => {
  const [movieGenre, setMovieGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movieInfo, setMovieInfo] = useState('');


  const getGenres = () => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=55e81c3707b1511daf33d639a483655c"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieGenre(data.genres)
      })
      .catch((error) => console.log("error", error));
  }

  const getMovies = () => {
const randomNumber = Math.floor(Math.random() * 100) + 1;
const randomIndex = Math.floor(Math.random() * 10);

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&with_genres=${selectedGenre}&language=en-US&page=${randomNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieInfo(data.results[randomIndex])
      })
      .catch((error) => console.log("error", error));
  }
  

useEffect(() => {
  getGenres();
  getMovies()
}, []);

  return (
    <div className='vh-100 randomMoviePageBackground'>
    <div className='randomPageTitle'> 🍿 RANDOM MOVIE GENERATOR 🍿 </div>
    <form className="genreForm">
      <label className='chooseGenre'>CHOOSE A GENRE:</label>
      <select name="genres" id="genres" onChange={e => setSelectedGenre(e.target.value)}>
      {movieGenre.map((genre) => (
                 <option value={genre.id} key={genre.id}>{genre.name}</option>
                ))}
      </select>
      
    </form>
    <button className="btn btn-danger m-3" onClick={getMovies}>Let's Play!</button>
    <ResultCard movie={movieInfo}/>
    </div>
  )
}

