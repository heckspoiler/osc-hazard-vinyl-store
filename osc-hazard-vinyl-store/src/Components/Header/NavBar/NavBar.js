import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/warehouse-finds">Warehouse Finds</Link>
      </li>
      <li>
        <Link to="/genres">Genres</Link>
      </li>
      <li>
        <Link to="/releases">Releases</Link>
      </li>
      <li>
        <Link to="/equipment">Equipment & More</Link>
      </li>
    </ul>
  );
};
