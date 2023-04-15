import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GenresButton.css";

export const GenresButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleGenresHover = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
      <button className="list-item bg-white border-b border-black font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300">
        Genres
      </button>
      <span className="genres-arrow"></span>
    </div>
  );
};
