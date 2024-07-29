import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HorMoviesCard from "./HorMoviesCard";

function MovieList({ genreId, index_ }) {
  //to call the function
  useEffect(() => {
    getMovieByGenreId();
  }, []);
  const [movieList, setMovielist] = useState([]);
  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      //   console.log(resp.data.results);
      setMovielist(resp.data.results);
    });
  };

  const elementRef = useRef(null);

  //   const sliderRight = (element) => {
  //     element.scrollLeft += screenDimension;
  //   };
  //   const sliderLeft = (element) => {
  //     element.scrollLeft -= screenDimension;
  //   };
  const slideRight = (element) => {
    element.scrollLeft += 500;
  };
  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };
  return (
    <div className='relative'>
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className='text-[30px] text-white
      p-2 z-10 cursor-pointer 
       hidden md:block absolute
        right-0 mr-[36px] mt-[-30px] rounded-full bg-red-600
         hover:scale-110 ease-out'
      />
      <div
        ref={elementRef}
        className='flex overflow-x-auto 
    scrollbar-none gap-8 pt-5 px-3 pb-5 scroll-smooth'
      >
        {movieList.map((item, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HorMoviesCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className='text-[30px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 mt-[-30px] rounded-full bg-red-600 hover:scale-110 ease-out'
        // "mt-[80px]" : "mt-[150px]"}`}
      />
    </div>
  );
}

export default MovieList;
