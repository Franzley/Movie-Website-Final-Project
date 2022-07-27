import React from 'react'
import "../../styles/ResultCard.css"
import excellent from "/Users/concetta/Movie-Website-Final-Project/Movie-Website-Final-Project/src/images/excellent.png"
import good from "/Users/concetta/Movie-Website-Final-Project/Movie-Website-Final-Project/src/images/good.png"
import bad from "/Users/concetta/Movie-Website-Final-Project/Movie-Website-Final-Project/src/images/bad.png"
import { useState, useContext } from "react";
import { Context } from "../store/appContext.js";


export const ResultCard = ({ movie }) => {
    const { store, actions } = useContext(Context);

    //determines what face appears next to the rating
    const rateFace = () => {
        if (movie.vote_average >= 8) {
            return <img src={excellent} alt="" />
        } else if (movie.vote_average >= 5 && movie.vote_average < 8) {
            return <img src={good} alt="" />
        } else if (movie.vote_average >= 0.1 && movie.vote_average < 5) {
            return <img src={bad} alt="" />
        } else { return "" }
    }

    return (
        <div className="result-card">
            {/* movie poster image*/}
            <div className="poster-wrapper">
                {movie.poster_path ? (
                    <img
                        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                        alt={`${movie.title}`} />
                ) : (
                    // blank image incase there is no movie poster for a specific movie
                    <div className='filler-poster'></div>
                )}
            </div>
            {/* movie info */}
            <div className='info'>
                <div className='header'>
                    <h4 className='vote-average'>{rateFace()} {movie.vote_average}</h4>
                    <h3 className='title'>{movie.title}</h3>
                    {/* substring gives us only the 4 year numbers of the release date. if no date, shows "-" */}
                    <h4 className='release-date'>
                        {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
                    </h4>
                </div>

                <div className='controls'>
                    <button className='btn btn-danger' onClick={() => actions.addMovieToWatchlist()}>Add to Watchlist</button>
                </div>
            </div>
        </div>
    )
}
