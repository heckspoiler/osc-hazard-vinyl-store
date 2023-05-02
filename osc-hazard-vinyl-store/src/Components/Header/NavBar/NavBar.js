import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { GenresButton } from "./GenresButton/GenresButton";

import "./NavBar.css";

export const NavBar = ({ isSticky }) => {
  const navbarClass = classNames("navbar", {
    "fixed top-0 bg-transparent flex gap-5 transition-all duration-700 mt-0 z-50 border-b border-black":
      isSticky,
    "flex justify-between text-black transition-all duration-700 p-4 w-3/5 gap-5 absolute mt-32 mr-32 p-1 ":
      !isSticky,
  });
  const genresLinks = [
    { label: "Unapolagetic Basslines", path: "/genres/techno-electro-breaks" },
    {
      label: "Dreamy, Fast and... Confusing?",
      path: "/genres/dnb-jungle-twostep-footwork",
    },
    { label: "For The Lovers and The Pleasers", path: "/genres/house-disco" },
    {
      label: "Nothing Like a Throwback",
      path: "/genres/90s-rap-hiphop-soul-rnb",
    },
    {
      label: "Life Hurts, but Tapefilters don't",
      path: "/genres/coldwave-synthwave-synth",
    },
    {
      label: "Rub your synapses with Floats and Drones",
      path: "/genres/ambient-drone-kraut",
    },
    {
      label: "Touch my Soul and F The System",
      path: "/genres/avant_garde-deconstructed_pop-postclub",
    },
    {
      label: "808 and Skeet Skeet",
      path: "/genres/modern_rap-trap",
    },
    {
      label: "80 Days Music Journey",
      path: "/genres/world",
    },
  ];

  return (
    <ul className={navbarClass}>
      <Link to="/">
        {" "}
        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-white border border-transparent hover:border-black ">
          Home
        </li>
      </Link>
      <Link to="/news">
        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-white border border-transparent hover:border-black ">
          News
        </li>
      </Link>
      <Link to="/warehouse-finds">
        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-white border border-transparent hover:border-black ">
          Warehouse Finds
        </li>
      </Link>
      <Link to="/genres">
        <GenresButton title="Genres" links={genresLinks} />
      </Link>
      <Link to="/releases">
        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-white border border-transparent hover:border-black ">
          Releases
        </li>
      </Link>
      <Link to="/equipment">
        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-white border border-transparent hover:border-black ">
          Equipment & More
        </li>
      </Link>
    </ul>
  );
};
