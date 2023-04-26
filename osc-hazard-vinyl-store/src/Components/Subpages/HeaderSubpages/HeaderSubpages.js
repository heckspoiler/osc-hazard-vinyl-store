import React from "react";
import { NavBarSubpages } from "./NavBarSubpages/NavBarSubpages";
import Logo from "../../../icons/logo.svg";

export const HeaderSubpages = () => {
  return (
    <section className="bg-red-400 h-20 w-auto flex flex-row align-center justify-center">
      <NavBarSubpages />
      <div className="">
        <img src={Logo} className="logo" />
      </div>
    </section>
  );
};
