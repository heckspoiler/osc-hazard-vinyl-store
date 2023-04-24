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

  useEffect(() => {
    const logoScroll = () => {
      const logoContainer = document.querySelector(".image-container");
      const scrollPosition = window.scrollY;
      const viewportWidth = window.innerWidth;
      const pixelValue = 1400;
      const vwValue = (pixelValue / viewportWidth) * 100;
      logoContainer.style.marginLeft = `calc(-${vwValue}vw - ${scrollPosition}px)`;
      if (scrollPosition >= 860) {
        const pixelValue = -100;
        const vwValue = (pixelValue / viewportWidth) * 100;
        logoContainer.style.marginTop = "52rem";
        logoContainer.style.marginLeft = `calc(-${vwValue}vw)`;
      } else if (scrollPosition < 260) {
        logoContainer.style.marginTop = "2rem";
      }
      if (scrollPosition >= 1500) {
        const pixelValue = -1600;
        const vwValue = (pixelValue / viewportWidth) * 100;
        logoContainer.style.marginLeft = `calc(${vwValue}vw + ${
          scrollPosition - 1880
        }px)`;
      }
      console.log(scrollPosition);
    };
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
    <header className="header p-4 flex justify-evenly items-center h-40">
      <div className="image-container">
        <img src={Logo} className="logo" />
        {/* <div className="wavy"></div> */}
      </div>

      <div className="header-text-container flex gap-5 text-xxs text-gray-400 font-monoSpace">
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
