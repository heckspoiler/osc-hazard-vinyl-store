import React, { useState } from "react";
import searchIcon from "../../../icons/searchIcon.svg";
import Autosuggest from "react-autosuggest";
import "../../../CSS/Autosuggest.css";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const products = [
    { artist: "dinglelele", release: "jueue EP" },
    { artist: "dingleasdflele", release: "juasdfeue EP" },
  ];

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    // Filter products array for matching artist names
    const matchingProducts = products.filter((product) => {
      const artistName = product.artist.toLowerCase();
      const releaseName = product.release.toLowerCase();
      const searchString = artistName + "" + releaseName;

      return searchString.includes(inputValue);
    });

    //if there are no matching products, return an empty array
    if (inputLength === 0 || matchingProducts.length === 0) {
      return [];
    }

    const suggestions = matchingProducts.slice(0, 4).map((product) => {
      return {
        name: product.artist,
        releaseDate: product.releaseDate,
        imageURL: product.imageURL,
      };
    });

    return suggestions;
  };

  const getSuggestionValue = (suggestion) => {
    return suggestion.name;
  };

  const renderSuggestion = (suggestion) => {
    return (
      <div className="suggestion-container">
        <img src={suggestion.imageURL} alt="" />
        <div className="suggestion-details">
          <div className="suggestion-name">{suggestion.name}</div>
          <div className="suggestion-release">{suggestion.releaseDate}</div>
        </div>
      </div>
    );
  };

  const inputProps = {
    placeholder: "Search...",
    value: search,
    onChange: handleSearch,
  };

  const autosuggestStyles = {
    container: {
      top: "100%",
      left: 0,
      width: "100%",
      background: "#fff",
      overflow: "auto",
      zIndex: 1,
    },
    suggestion: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "red",
      height: "4rem",
      width: "auto",
      padding: "8px",
      cursor: "pointer",
      fontSize: "14px",
      borderBottom: "1px solid #ccc",
    },
    suggestionHighlighted: {
      background: "#f9f9f9",
    },
  };

  const renderAutosuggest = () => {
    return (
      <Autosuggest
        suggestions={getSuggestions(search)}
        onSuggestionsFetchRequested={() => {}}
        onSuggestionsClearRequested={() => {}}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={autosuggestStyles}
      />
    );
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="searchbar-container absolute right-96 w-80 h-14 flex items-center justify-center gap-2 mt-[-4rem]"
    >
      <button type="submit" className="h-5 w-5">
        <img src={searchIcon} alt="Search Icon" />
      </button>
      {renderAutosuggest()}
    </form>
  );
};
