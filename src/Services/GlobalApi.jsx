import axios from "axios";
import API_KEY from "./apiKey";
const movieBaseURL = "https://api.themoviedb.org/3/";
// const api_key = "8f37f07591ea0b832e96dab800f5208c";
const api_key = API_KEY;
// require("dotenv").config();
// const api_key = import.meta.env.REACT_APP_API_KEY;
// console.log(api_key);
// console.log();

const getTrendingMovies = axios.get(
  movieBaseURL + "trending/all/day?api_key=" + api_key
);
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=" + api_key;
//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingMovies,
  getMovieByGenreId,
};
