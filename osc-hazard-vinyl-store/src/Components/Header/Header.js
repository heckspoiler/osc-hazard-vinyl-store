import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";

export const Header = (props) => {
  return (
    <header className="bg-white p-4 flex justify-evenly items-center border-red-500 border-2 h-40">
      <div>LOGO</div>
      <NavBar />
      <SearchBar />
    </header>
  );
};
