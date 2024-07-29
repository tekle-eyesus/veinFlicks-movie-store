import React from "react";
import GenersList from "../Constants/GenersList";
import MovieList from "./MovieList";
import Buttons from "./Buttons";

function GenreMovieList() {
  return (
    <div>
      {GenersList.genere.map(
        (item, index) =>
          index <= 5 && (
            <div className='p-8 px-8 md:px-16'>
              <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
              <MovieList genreId={item.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieList;
