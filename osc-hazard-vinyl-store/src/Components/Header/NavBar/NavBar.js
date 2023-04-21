import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GenresButton } from "./GenresButton/GenresButton";
import classNames from "classnames";
import "./NavBar.css";

export const NavBar = (props) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScrollNavBar = () => {
    const navBar = document.querySelector(".navbar");
    const stickyThreshold = 96;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= stickyThreshold) {
    } else {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavBar);
    return () => {
      window.removeEventListener("scroll", handleScrollNavBar);
    };
  }, []);

  // const navbarClass =
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
    <ul className="navbar flex justify-between text-black p-4 w-3/5 gap-5 absolute mt-32 mr-32 p-1 border border-black rounded-4xl bg-yellow-100">
      <li className="navbar-button list-item bg-yellow-100 rounded-3xl font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300 border border-transparent hover:border-black ">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-button list-item bg-yellow-100 rounded-3xl font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300 border border-transparent hover:border-black ">
        <Link to="/news">News</Link>
      </li>
      <li className="navbar-button list-item bg-yellow-100 rounded-3xl font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300 border border-transparent hover:border-black ">
        <Link to="/warehouse-finds">Warehouse Finds</Link>
      </li>
      <GenresButton title="Genres" links={genresLinks} />

      <li className="navbar-button list-item bg-yellow-100 rounded-3xl font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300 border border-transparent hover:border-black ">
        <Link to="/releases">Releases</Link>
      </li>
      <li className="navbar-button list-item bg-yellow-100 rounded-3xl font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300 border border-transparent hover:border-black ">
        <Link to="/equipment">Equipment & More</Link>
      </li>
    </ul>
  );
};
