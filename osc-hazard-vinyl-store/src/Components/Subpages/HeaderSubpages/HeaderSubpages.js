import React from "react";
import { NavBarSubpages } from "./NavBarSubpages/NavBarSubpages";
import "./HeaderSubpages.css";

export const HeaderSubpages = () => {
  return (
    <section className="fixed header-subpages gap-40 h-auto w-auto flex flex-row z-10">
      <NavBarSubpages />
    </section>
  );
};
