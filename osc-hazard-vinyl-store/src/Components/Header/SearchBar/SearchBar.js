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
    <form onSubmit={handleSearchSubmit} className="searchbar-container">
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <img src={searchIcon} alt="Search Icon" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="ml-2 border border-gray-400 rounded py-2 px-4"
      />
    </form>
  );
};
