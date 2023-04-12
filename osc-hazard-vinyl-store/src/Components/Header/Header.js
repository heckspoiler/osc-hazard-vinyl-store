import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";

export const Header = (props) => {
  return (
    <header className="bg-white p-4 flex justify-evenly items-center h-40">
      <NavBar />
      <SearchBar />
    </header>
  );
};
