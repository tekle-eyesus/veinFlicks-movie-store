import axios from "axios";
import API_KEY from "./apiKey";
const movieBaseURL = "https://api.themoviedb.org/3/";

const api_key = API_KEY;

const getTrendingMovies = axios.get(
  movieBaseURL + "trending/all/day?api_key=" + api_key
);
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingMovies,
  getMovieByGenreId,
};
