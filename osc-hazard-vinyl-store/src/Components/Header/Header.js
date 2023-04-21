import React, { useState, useEffect } from "react";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { LoginSection } from "./LoginSection/LoginSection";
import classNames from "classnames";
import { Link } from "react-router-dom";

import "aos/dist/aos.css";
import "./Header.css";
import Decor from "../../icons/decor-header-1.svg";
import Logo from "../../icons/logo.svg";

export const Header = (props) => {
  const [isSticky, setIsSticky] = useState(false);
  const logoScroll = () => {
    const logoContainer = document.querySelector(".image-container");
    const scrollPosition = window.scrollY;
    logoContainer.style.marginLeft = `${-1400 - scrollPosition}px`;
    if (scrollPosition >= 260) {
      logoContainer.style.marginLeft = "-1660px";
    }
    console.log(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", logoScroll);
    return () => {
      window.removeEventListener("scroll", logoScroll);
    };
  }, []);

  const handleScrollNavBar = () => {
    const stickyThreshold = 96;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= stickyThreshold) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollNavBar);
    return () => {
      window.removeEventListener("scroll", handleScrollNavBar);
    };
  }, []);

  return (
    <header className="header bg-white p-4 flex justify-evenly items-center h-40">
      <div className="image-container">
        <img src={Logo} className="logo" />
        <div className="wavy"></div>
      </div>

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

      <NavBar isSticky={isSticky} />
      <SearchBar />
      <LoginSection />
    </header>
  );
};
