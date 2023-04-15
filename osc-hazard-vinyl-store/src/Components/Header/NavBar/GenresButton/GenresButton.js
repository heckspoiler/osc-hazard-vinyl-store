import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GenresButton.css";

export const GenresButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleGenresHover = (event) => {
    setShowDropdown(!showDropdown);
    const genresButtonAfter = event.target.querySelector(".genres-arrow");
    genresButtonAfter.style.transform = "rotate(90deg)";
    genresButtonAfter.style.transition = "transform 0.2s ease-in-out";
  };
  const handleGenresLeave = (event) => {
    const genresButtonAfter = event.target.querySelector(".genres-arrow");
    genresButtonAfter.style.transform = "none";
  };
  return (
    <div
      className="genres-button-container"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300">
        Genres
      </button>
      <span className="genres-arrow"></span>
    </div>
  );
};
