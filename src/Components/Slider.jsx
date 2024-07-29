// import React, { useEffect, useState } from "react";
// import GlobalApi from "../Services/GlobalApi";

// function Slider() {
//   const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
//   const [movieList, setMovieList] = useState([]);

//   useEffect(() => {
//     getTrendingVideos();
//   }, []);

//   const getTrendingVideos = () => {
//     GlobalApi.getTrendingMovies.then((resp) => {
//       console.log(resp);
//       setMovieList(resp.data.results);
//     });
//   };

//   const truncateOverview = (overview, maxLength) => {
//     if (overview.length > maxLength) {
//       return overview.substring(0, maxLength) + "...";
//     }
//     return overview;
//   };

//   return (
//     // the problem is that the the banneres are not aligned horizontally
//     <div className=''>
//       {movieList.map((item) => (
//         <div key={item.id} className='relative'>
//           <img
//             src={IMAGE_BASE_URL + item.backdrop_path}
//             alt={item.title}
//             className='min-w-full h-[300px] object-cover rounded-md mb-2'
//           />
//           <div className='absolute inset-0 flex flex-col justify-center items-start bg-opacity-50 text-white p-2 max-w-[600px] ml-5 mt-10'>
//             <h1 className='text-lg font-bold mb-2 text-[35px] md:text-[30px] font-serif'>
//               {item.name || item.title}
//             </h1>
//             <div className='flex'>
//               <button className='w-25 flex items-center justify-center h-8 mt-2 mb-2 mr-3 bg-gradient-to-b hover:bg-slate-800 animate-pulse font-serif rounded-s-lg'>
//                 play
//               </button>
//               <button className='w-25 flex items-center justify-center h-8 mt-2 mb-2 bg-gradient-to-b hover:bg-slate-800 transition font-serif'>
//                 My List
//               </button>
//             </div>

//             <p className='text-sm font-sans'>
//               {truncateOverview(item.overview, 300)}{" "}
//               {/* Adjust the length as needed */}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Slider;

import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi2";
import { BsFillForwardFill } from "react-icons/bs";
import { GiFastBackwardButton, GiFastForwardButton } from "react-icons/gi";
import Buttons from "./Buttons";

function Slider() {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenDimension = window.innerWidth;
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

  //functions to control the slider
  const sliderRight = (element) => {
    element.scrollLeft += screenDimension;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenDimension;
  };

  return (
    <div>
      <div
        className='overflow-x-auto whitespace-nowrap p-[20px] scrollbar-none scroll-smooth'
        ref={elementRef}
      >
        {movieList.map((item) => (
          <div
            key={item.id}
            className='inline-block relative w-full h-[300px] mr-8 hover:border-[4px] border-gray-300 transition-all ease-in duration-100 rounded-md  shadow-black shadow-md'
          >
            <img
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt={item.title}
              className='w-full h-full object-cover rounded-md hover:border-[4px] border-gray-300 transition-all ease-in duration-100'
            />
            <GiFastBackwardButton
              className='hidden md:block text-red-700  text-[35px] absolute inset-0 mt-[130px] items-start mx-[-2px] cursor-pointer'
              onClick={() => sliderLeft(elementRef.current)}
            />
            <GiFastForwardButton
              className='hidden md:block text-red-700 text-[35px] absolute inset-0 mt-[130px] mx-[-10px] cursor-pointer ml-[1200px]'
              onClick={() => sliderRight(elementRef.current)}
            />

            <div className='absolute inset-1 flex flex-col justify-center items-start bg-opacity-50 text-white p-5'>
              <h1 className='text-lg font-bold mb-2 text-[35px] md:text-[30px] font-serif'>
                {item.name || item.title}
              </h1>
              {/* the button */}
              <div className='flex ml-10'>
                <button className='w-25 flex items-center justify-center h-8 mt-2 mb-2 mr-3 bg-gradient-to-b hover:bg-slate-800 animate-pulse font-serif rounded-s-lg'>
                  Play
                </button>
                <button className='w-25 flex items-center justify-center h-8 mt-2 mb-2 bg-gradient-to-b hover:bg-slate-800 transition font-serif'>
                  My List
                </button>
              </div>

              <div className='max-w-[600px] object-fill'>
                <p className='hidden md:block relative'>
                  {truncateOverview(item.overview, 100)}
                  {}
                  {/* Adjust the length as needed */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
