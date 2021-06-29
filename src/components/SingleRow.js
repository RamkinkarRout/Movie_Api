import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import poster from "../image/1.jpg";
const IMAGE_URL = "https://image.tmdb.org/t/p/original/";
//const video_url = `${BASE_URL}movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;

function SingleRow({
  title,
  fetchurl,
  isLargeRow = false,
}) {
  const [content, setContent] = useState([]);
  const [video_url, setVideo_url] = useState("");
  // -------------youtube react----------
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axios.get(fetchurl);
      //console.log(data.results);
      setContent(data.results);
    };
    fetchdata();
  }, [fetchurl]);

  const handleClick = (c) => {
    if (video_url) {
      setVideo_url("");
    } else {
      movieTrailer(c?.name || c?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(
            new URL(url).search
          );
          setVideo_url(urlParams.get("v"));
        })
        .catch(() => console.log("Unavilable"));
    }
  };
  return (
    <div className="ml-5">
      <h1 className="font-bold text-gray-300 tracking-wide text-base md:text-lg py-4">
        {title}
      </h1>
      <div className="flex items-center p-2 overflow-hidden overflow-x-scroll scrollbar-hide">
        {content &&
          content.map(
            (c) =>
              ((isLargeRow && c.poster_path) ||
                (!isLargeRow && c.backdrop_path)) && (
                <>
                  <img
                    key={c.id}
                    onClick={() => handleClick(c)}
                    src={`${IMAGE_URL}${
                      isLargeRow
                        ? c.poster_path
                        : c.backdrop_path
                    }`}
                    alt={c.title || c.name}
                    title={c.title || c.name}
                    className={` object-center rounded-md object-contain mr-4 w-full h-24 transition-all duration-700 ease-in-out transform hover:scale-110 hover:z-30 cursor-pointer ${
                      isLargeRow && "h-40 md:h-60"
                    } `}
                  ></img>
                </>
              )
          )}
      </div>
      {video_url && (
        <YouTube videoId={video_url} opts={opts}></YouTube>
      )}
    </div>
  );
}

export default SingleRow;
