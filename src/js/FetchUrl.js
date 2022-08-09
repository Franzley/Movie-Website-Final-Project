//list of urls to fetch

export const FetchUrl = [
  fetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&page=1"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=55e81c3707b1511daf33d639a483655c"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=55e81c3707b1511daf33d639a483655c"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=16&with_watch_monetization_types=flatrate"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=99&with_watch_monetization_types=flatrate"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=18&with_watch_monetization_types=flatrate"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate"
  ).then((response) => response.json()),
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=55e81c3707b1511daf33d639a483655c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878&with_watch_monetization_types=flatrate"
  ).then((response) => response.json()),
];