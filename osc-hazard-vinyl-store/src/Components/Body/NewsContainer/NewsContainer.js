import React, { UseState, Link } from "react";
import "./NewsContainer.css";

export const NewsContainer = () => {
  return (
    <div class="news-container-container">
      <h1 className="heading-slide-news absolute border border-black p-3 font-mono text-2xl font-bold z-101 bg-white">
        News
      </h1>
      <section className="news-container border border-black bg-red-400 mt-36 ml-auto mr-auto"></section>
    </div>
  );
};
