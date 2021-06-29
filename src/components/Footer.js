import React from "react";
import { AtSymbolIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap justify-between mx-auto px-6 pt-3">
        <div className="flex flex-col mx-auto md:mx-0 items-center md:items-start">
          <div className="">
            <h1 className="uppercase font-bold text-xs md:text-sm tracking-wider leading-snug cursor-pointer">
              <span className=" text-base md:text-xl text-yellow-500 uppercase  ">
                The
              </span>
              Movie
              <span className=" text-base md:text-xl text-yellow-500 uppercase  ">
                Box
              </span>
            </h1>
          </div>
          <div className="text-xs md:text-sm text-gray-400">
            About us
          </div>
          <div className="text-xs md:text-sm text-gray-400">
            Contact Us
          </div>
          <div className="text-xs md:text-sm text-gray-400">
            Mail Us
          </div>
        </div>
        <div className="flex flex-col text-gray-400 mx-auto items-center md:items-start md:mx-0  pt-2 md:pt-0">
          <div className="text-base md:text-lg font-semibold text-yellow-500">
            Genre List
          </div>
          <div className="text-xs md:text-sm">Action</div>
          <div className="text-xs md:text-sm">
            Top Rated Series and Movies
          </div>
          <div className="text-xs md:text-sm">
            Upcoming Series and Movies
          </div>
          <div className="text-xs md:text-sm">
            Horror Movies
          </div>
        </div>
        <div className="flex flex-col text-gray-400 mx-auto md:mx-0 items-center md:items-start pt-2 md:pt-0">
          <div className="text-base md:text-lg text-yellow-500 font-semibold">
            HelpFul Links
          </div>
          <div className="text-xs md:text-sm">Movies</div>
          <div className="text-xs md:text-sm">Tv Shows</div>
          <div className="text-xs md:text-sm">Trending</div>
        </div>
        <div className="flex flex-col pt-2 md:pt-0 mx-auto md:mx-0 items-center md:items-start">
          <div className="relative text-sm md:text-base font-semibold tracking-wider text-yellow-500">
            Subscribe For More Info
          </div>
          <div>
            <div className="relative py-1">
              <AtSymbolIcon className="h-4 w-4 absolute bottom-2 text-yellow-500" />
              <input
                placeholder="Enter Your Email"
                className="text-xs px-4 rounded-md py-1 focus:text-yellow-500"
              ></input>
            </div>
          </div>

          <button className="text-yellow-500 mt-1 bg-black border-r-4 border-l-4 border-b-2 border-t-2 border-yellow-500 rounded-lg px-12 text-sm md:text-base py-1 hover:bg-yellow-500 hover:text-white opacity-90">
            Subscribe
          </button>
        </div>
      </div>
      <div className="h-10 w-full bg-gradient-to-t from-gray-700 via-black to-transparent">
        {""}
      </div>
      <h1 className="text-center text-green-500 text-bold text-sm pb-2">
        Powered By
        <span className="pl-2 text-xs text-bold text-yellow-500">
          RAM
        </span>
      </h1>
    </>
  );
}
