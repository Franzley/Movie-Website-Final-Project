import React, { useState } from "react";
import { ResultCard } from "../component/ResultCard";
import "../../styles/searchresults.css"


export const SearchResults = () => {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([])

	// onchange function connected to api, searches api for movie
	const onChange = e => {
		e.preventDefault();

		// allows state to be set to value entered in search input
		setQuery(e.target.value);

		// used this link (https://developers.themoviedb.org/3/search/search-movies) to help set up api fetch search functionality
		fetch(`https://api.themoviedb.org/3/search/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&page=1&include_adult=false&query=${e.target.value}`
		).then(res => res.json())
			.then(data => {
				console.log(data)
				if (!data.errors) { //if no errors, set results to api results
					setResults(data.results);
				} else { //if error, set results to empty
					setResults([]);
				}
			});
	}

	return (
		<div className="container">
			<div className="search-page">
				<h1>MOVIE SEARCH</h1>
				{/* search box */}
				<div className="input-wrapper">
					<input className="input-box"
						type="text"
						placeholder="Search for a movie..."
						value={query}
						onChange={onChange} />
				</div>
				{/* list of results from the search */}
				<div className="search-results-list">
					{results.length > 0 && (
						<ul className="results">
							{results.map(movie => (
								<li key={movie.id}>
									<ResultCard movie={movie} />
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	)
};
