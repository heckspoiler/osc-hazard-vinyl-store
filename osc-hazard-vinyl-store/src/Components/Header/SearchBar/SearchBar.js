import React, { useState } from "react";
import searchIcon from "../../../icons/searchIcon.svg";
import { Autosuggest, getSuggestions } from "react-autosuggest";
import "../../../CSS/Autosuggest.css";

export const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const renderSuggestion = (suggestion) => {
    return <div>{suggestion.name}</div>;
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="searchbar-container absolute right-96 w-auto h-14 flex items-center justify-center gap-2 mt-[-4rem]"
    >
      <button type="submit" className="h-5 w-5">
        <img src={searchIcon} alt="Search Icon" />
      </button>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        className="pl-5 bg-white border-black border text-black font-mono h-6 w-48 focus:border-FFEE57 text-xs"
      />
    </form>
  );
};
