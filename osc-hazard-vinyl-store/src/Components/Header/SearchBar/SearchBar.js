import React, { useState } from "react";
import searchIcon from "../../../icons/searchIcon.svg";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="searchbar-container absolute right-96 w-auto
      h-14 flex items-center justify-center gap-2 mt-[-4rem]"
    >
      <button type="submit" className="h-7 w-7">
        <img src={searchIcon} alt="Search Icon" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="pl-5 bg-gray-100 border-black border color-black font-mono h-8 text-xs focus:border-FFEE57"
      />
    </form>
  );
};
