import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { GenresButton } from "../../../Header/NavBar/GenresButton/GenresButton";
import Logo from "../../../../icons/logo.svg";

import "./NavBarSubpages.css";

export const NavBarSubpages = ({ isSticky }) => {
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
    <div>
      <img src={Logo} className="logo-subpages" />
      <ul className="navbar-subpages fixed top-0 bg-transparent flex flex-row gap-5 transition-all duration-700 mt-0 z-50 border-b border-black ml-auto mr-auto top-4">
        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-violet-300 border border-transparent hover:border-black ">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-violet-300 border border-transparent hover:border-black ">
          <Link to="/news">News</Link>
        </li>
        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-violet-300 border border-transparent hover:border-black ">
          <Link to="/warehouse-finds">Warehouse Finds</Link>
        </li>
        <GenresButton title="Genres" links={genresLinks} />

        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-violet-300 border border-transparent hover:border-black ">
          <Link to="/releases">Releases</Link>
        </li>
        <li className="navbar-button list-item rounded-3xl font-inter tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xxs hover:bg-violet-300 border border-transparent hover:border-black ">
          <Link to="/equipment">Equipment & More</Link>
        </li>
      </ul>
    </div>
  );
};
