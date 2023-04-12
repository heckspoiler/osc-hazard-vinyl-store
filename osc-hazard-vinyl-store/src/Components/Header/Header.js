import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";

export const Header = (props) => {
  return (
    <header>
      <NavBar />
      <SearchBar />
    </header>
  );
};
