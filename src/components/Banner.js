import { React, useEffect, useState } from "react";
import poster from "../image/poster.png";
import { Link } from "react-router-dom";
import {
  VideoCameraIcon,
  SearchCircleIcon,
  FilmIcon,
  PlayIcon,
  DocumentAddIcon,
} from "@heroicons/react/solid";
import axios from "axios";

//movie url
import {
  BASE_URL,
  IMG_BASE_URL,
  BACKDROP_SIZE,
  API_KEY,
} from "./Config";

function Banner() {
  //url trending
  const Trending = `${BASE_URL}trending/all/week?api_key=${API_KEY}`;
  const UPCOMING = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
  //const genreMovie = `${BASE_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;

  const [content, setcontent] = useState([]);

  const fetchBanner = async () => {
    const { data } = await axios.get(UPCOMING);
    //console.log(data.results);
    // console.log(data.total_pages);
    setcontent(
      data.results[
        Math.floor(Math.random() * data.results.length)
      ]
    );
    // console.log(content);
  };

  useEffect(() => {
    fetchBanner();
  }, []);
  return (
    <div>
      {/* -------------------bannner image----------- */}
      <header
        className="w-full bg-cover bg-center bg-blend-darken opacity-75git config --global overflow-hidden relative"
        style={{
          backgroundImage: content.backdrop_path
            ? `url(${IMG_BASE_URL}${BACKDROP_SIZE}${content.backdrop_path})`
            : poster,
          height: "620px",
          zIndex: 0,
        }}
      >
        {/* ----------------------------nav bar---------------------- */}
        <nav className="w-full bg-gray-800 opacity-75 z-50 border-b-4 border-black shadow-lg">
          <div className="container flex flex-col md:flex-row flex-wrap justify-between items-center px-2 md:px-8 py-1 md:py-3">
            <div className="mb-2 md:mb-0 flex items-center justify-items-center">
              <h1 className="mr-4 uppercase font-bold text-xl tracking-wider leading-snug cursor-pointer">
                <span className=" text-4xl text-yellow-600 uppercase  ">
                  The
                </span>
                Movie
                <span className=" text-4xl text-yellow-600 uppercase  ">
                  Box
                </span>
              </h1>
            </div>

            <ul className="flex flex-col md:flex-row md:items-center items-stretch">
              <li className="relative mr-2 mb-2 md:mb-0 ">
                {" "}
                <SearchCircleIcon className="absolute md:top-0 top-13 z-50 text-xs h-6 w-6 lg:w-18 text-yellow-500" />
                <input
                  type="search"
                  placeholder="Serach"
                  className=" rounded-full px-12 h-6 border border-solid border-yellow-500 text-sm leading-snug shadow-none border-l-0 focus:text-yellow-600"
                ></input>
              </li>
              <li className=" mb-2 md:mb-0 text-yellow-500 pr-5 leading-snug tracking-wider text-sm uppercase font-bold hover:opacity-75">
                <Link to="/" className="flex flex-wrap ">
                  <FilmIcon className="text-xs h-5 w-5 text-yellow-500 mr-1" />
                  Movies
                </Link>
              </li>
              <li className="  leading-snug group tracking-wider text-sm uppercase font-bold hover:opacity-75 ">
                <Link
                  to="/detail"
                  className="flex flex-wrap text-white group-hover:text-yellow-500"
                >
                  <VideoCameraIcon className="text-xs h-5 w-5 text-white mr-1 group-hover:text-yellow-500" />
                  Tv Shows
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* ------------------------------banner details section----------------------- */}

        <div className="absolute bg-orange z-30 ml-4 bottom-11 w-8/12">
          <h1 className="text-yellow-500 tracking-wider leading-snug font-extrabold text-2xl md:4xl shadow-md hover:opacity-50 uppercase hover:translate-x-2">
            {content.title || content.name}
          </h1>
          <h2 className="text-white pb-2 tracking-tight leading-snug font-extrabold text-sm md:text-xl inline-block">
            IMDB:
            <span
              className={`text-base md:text-xl font-bold ml-1 inline-block ${
                content.vote_average > 7.5
                  ? "text-green-400"
                  : "text-red-500"
              }`}
            >
              {content.vote_average}
            </span>
            <span className="text-base md:text-xl text-green-400font-bold ml-1">
              ({content.vote_count})
            </span>
            <span className="text-white text-sm md:text-xl mx-2">
              |
            </span>
            <span className="text-white text-sm md:text-xl font-bold mr-1">
              Released Date:
            </span>
            <span className="text-yellow-500 text-sm md:text-xl font-bold inline-block">
              {content.release_date ||
                content.first_air_date}
            </span>
          </h2>
          <p className="text-white truncate tracking-wide leading-snug font-light md:text-base text-xs">
            {content.overview}
          </p>
          <div className="flex flex-col sm:flex-row pt-4 justify-items-center">
            <button className="flex opacity-75 bg-black text-sm md:text-base text-white font-semibold rounded-full border-l-4 border-r-4 border-yellow-600 hover:bg-yellow-600 hover:border-2 hover:border-yellow-600 hover:text-black px-3 py-2 leading-snug tracking-wide">
              <PlayIcon className="h-5 w-4 md:5 text-white mr-2" />{" "}
              Watch Trailer
            </button>
            <button className="flex opacity-75 bg-black text-sm md:text-base font-semibold text-white rounded-full border-l-4 border-r-4 border-yellow-600 hover:bg-yellow-600 hover:border-2 hover:border-yellow-600 hover:text-black px-3 py-2 mt-2 md:mt-0 md:ml-5 leading-snug tracking-wide">
              <DocumentAddIcon className="h-5 w-4 md:5 text-white mr-2" />
              More Details
            </button>
          </div>
        </div>
        <div className="h-11 w-full bg-gradient-to-t from-gray-700 via-black to-transparent absolute bottom-0 opacity-50">
          {" "}
        </div>
      </header>
    </div>
  );
}

export default Banner;
