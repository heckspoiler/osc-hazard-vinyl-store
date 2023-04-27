import React from "react";
import { Link } from "react-router-dom";
import { HeaderSubpages } from "../HeaderSubpages/HeaderSubpages";
import { NewsSectionFirst } from "./NewsSectionFirst/NewsSectionFirst";
import "./News.css";

export const News = () => {
  return (
    <Link to="/news">
      <HeaderSubpages />
      <NewsSectionFirst />
    </Link>
  );
};
