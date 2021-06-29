const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

//fetching url

const MULTI_SEARCH = `${BASE_URL}search/multi?api_key=${API_KEY}&language=en-US&query=`;
const ROMANCE = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`;
const POPULAR = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const UPCOMING = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
const TOP_RATED = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const LATEST_TV = `${BASE_URL}trending/all/week?api_key=${API_KEY}`;
const TOP_RATED_TV = `${BASE_URL}tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const ACTION_MOVIE = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=28`;
const HORROR_MOVIE = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=27`;
const DOCUMENTRIES = `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=99`;
//images
const IMG_BASE_URL = "https://image.tmdb.org/t/p/";

//vide0 url

//size

const BACKDROP_SIZE = "w1280";
const POSTER_SIZE = "w780";

export {
  API_KEY,
  BASE_URL,
  MULTI_SEARCH,
  ROMANCE,
  IMG_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  POPULAR,
  UPCOMING,
  TOP_RATED,
  TOP_RATED_TV,
  LATEST_TV,
  ACTION_MOVIE,
  HORROR_MOVIE,
  DOCUMENTRIES,
};
