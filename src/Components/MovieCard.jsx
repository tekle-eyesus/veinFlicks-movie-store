import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function MovieCard({ movie }) {
  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.poster_path}
        className='w-[110px] md:w-[200px] rounded-lg hover:border-[2px]
         border-gray-300 hover:scale-110 
        transition-all duration-300 ease-out cursor-pointer'
      />
    </>
  );
}

export default MovieCard;
