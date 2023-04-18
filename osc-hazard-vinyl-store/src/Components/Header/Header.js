import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { LoginSection } from "./LoginSection/LoginSection";
import { Link } from "react-router-dom";

import "./Header.css";
import Decor from "../../icons/decor-header-1.svg";
import Logo from "../../icons/logo.svg";

export const Header = (props) => {
  return (
    <header className="bg-white p-4 flex justify-evenly items-center h-40">
      <div className="image-container">
        <img src={Logo} className="logo" />
      </div>
      <div className="wavy"></div>

      <div className="header-text-container flex gap-5 text-xxs text-gray-400 font-mono">
        <p className="flex width-32 gap-2">
          <img src={Decor} className="decor-svg" />
          Worldwide Shipping
        </p>
        <p className="flex width-20 gap-2">
          <img src={Decor} className="decor-svg" />
          Discount on First Purchase
        </p>
        <p className="flex width-20 gap-2">
          <img src={Decor} className="decor-svg" />
          Curbside Pickup available
        </p>
        <p className="flex width-20 gap-2">
          <img src={Decor} className="decor-svg" />
          New Collections Every Week
        </p>
      </div>

      <NavBar />
      <SearchBar />
      <LoginSection />
    </header>
  );
};
