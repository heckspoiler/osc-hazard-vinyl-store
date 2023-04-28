import React from "react";
import { Link } from "react-router-dom";
import { HeaderSubpages } from "../HeaderSubpages/HeaderSubpages";
import { NewsSectionFirst } from "./NewsSectionFirst/NewsSectionFirst";
import { NewsSectionSecond } from "./NewsSectionSecond/NewsSectionSecond";
import "./News.css";

export const News = () => {
  return (
    <Link to="/news">
      <HeaderSubpages />
      <NewsSectionFirst />
      <NewsSectionSecond />
    </Link>
  );
};
