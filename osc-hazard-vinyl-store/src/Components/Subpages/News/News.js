import React from "react";
import { Link } from "react-router-dom";
import { HeaderSubpages } from "../HeaderSubpages/HeaderSubpages";
import "./News.css";

export const News = () => {
  return (
    <Link to="/news">
      <div>
        <HeaderSubpages />
        <section className="news-container">
          <section className="news-section-main">
            <section className="news-first-Section"></section>
          </section>
        </section>
      </div>
    </Link>
  );
};
