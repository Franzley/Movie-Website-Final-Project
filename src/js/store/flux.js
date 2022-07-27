const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			watchlist: [],
			watched: [],
		},
		actions: {
			addToMovieWatchlist: () => {

			}
		}
	};
};

export default getState;
