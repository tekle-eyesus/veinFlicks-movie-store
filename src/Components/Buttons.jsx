import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function Buttons() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movieL, setMovieList] = useState([]);
  useEffect(() => {
    getTrendingVideos();
  }, []);

  const getTrendingVideos = () => {
    GlobalApi.getTrendingMovies.then((resp) => {
      console.log(resp);
      setMovieList(resp.data.results);
    });
  };

  const truncateOverview = (overview, maxLength) => {
    if (overview.length > maxLength) {
      return overview.substring(0, maxLength) + "...";
    }
    return overview;
  };
  return (
    <div className='w-[200px] flex'>
      {movieL.map((item) => (
        <p className=' w-[100px]'>
          {truncateOverview(item.overview, 50)}
          {}
          {/* Adjust the length as needed */}
        </p>
      ))}
    </div>

    // <div
    //   className='flex gap-2 justify-center ml-[980px]
    // mt-[-30px]'
    // >
    //   <button className='rounded-full w-[20px] hover:border-red-600'>
    //     <IoIosArrowBack className='ml-[-7px]' />
    //   </button>
    //   <button className='rounded-full w-[20px]  hover:border-red-600'>
    //     <IoIosArrowForward className='ml-[-7px]' />
    //   </button>
    // </div>
  );
}

export default Buttons;
