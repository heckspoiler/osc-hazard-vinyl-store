import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <ul className="flex justify-between text-black p-4 w-3/5 gap-5 absolute mt-24">
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:rounded-xl">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:rounded-xl">
        <Link to="/news">News</Link>
      </li>
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:rounded-xl">
        <Link to="/warehouse-finds">Warehouse Finds</Link>
      </li>
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:rounded-xl">
        <Link to="/genres">Genres</Link>
      </li>
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:rounded-xl">
        <Link to="/releases">Releases</Link>
      </li>
      <li className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:rounded-xl">
        <Link to="/equipment">Equipment & More</Link>
      </li>
    </ul>
  );
};
