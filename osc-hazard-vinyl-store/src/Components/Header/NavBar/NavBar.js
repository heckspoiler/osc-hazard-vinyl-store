import React from "react";
import { Link } from "react-router-dom";
import { GenresButton } from "./GenresButton/GenresButton";
import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <ul className="flex justify-between text-black p-4 w-3/5 gap-5 absolute mt-24">
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300">
        <Link to="/news">News</Link>
      </li>
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300">
        <Link to="/warehouse-finds">Warehouse Finds</Link>
      </li>
      <li
        className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300"
        // onMouseEnter={handleGenresHover}
        // onMouseLeave={handleGenresLeave}
      >
        <Link to="/genres" className="genres">
          Genres
          <span className="genres-arrow"></span>
        </Link>
      </li>
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300">
        <Link to="/releases">Releases</Link>
      </li>
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300">
        <Link to="/equipment">Equipment & More</Link>
      </li>
    </ul>
  );
};
