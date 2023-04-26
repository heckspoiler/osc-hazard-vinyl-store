import React from "react";
import { NavBarSubpages } from "./NavBarSubpages/NavBarSubpages";
import "./HeaderSubpages.css";
import Logo from "../../../icons/logo.svg";

export const HeaderSubpages = () => {
  return (
    <section className="fixed header-subpages gap-40 h-auto w-auto flex flex-row z-10">
      <NavBarSubpages />
      <img src={Logo} className="logo-subpages z-[-10]" />
    </section>
  );
};
