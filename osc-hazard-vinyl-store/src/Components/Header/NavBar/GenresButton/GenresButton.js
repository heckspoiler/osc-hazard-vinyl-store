import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./GenresButton.css";

export const GenresButton = ({ title, links }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleGenresHover = (event) => {
    setShowDropdown(true);
    const genresButtonAfter = event.target.querySelector(".genres-arrow");
    genresButtonAfter.style.transform = "rotate(90deg)";
    genresButtonAfter.style.transition = "transform 0.2s ease-in-out";
  };
  const handleGenresLeave = (event) => {
    setShowDropdown(false);
    const genresButtonAfter =
      event.currentTarget.querySelector(".genres-arrow");
    genresButtonAfter.style.transform = "none";
  };
  return (
    <li
      className="list-item bg-yellow-100 rounded-3xl font-mono tracking-wider h-auto w-auto p-3 border-bottom-width transition-all duration-200 ease-in-out flex px-4 justify-center align-center text-xs hover:bg-violet-300 border border-transparent hover:border-black "
      onMouseEnter={handleGenresHover}
      onMouseLeave={handleGenresLeave}
    >
      {title}
      <span className="genres-arrow"></span>

      {showDropdown && (
        <div className="genres-content">
          {links.map((link, index) => (
            <Link className="dropdown-link" key={index} to={link.path}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
};
