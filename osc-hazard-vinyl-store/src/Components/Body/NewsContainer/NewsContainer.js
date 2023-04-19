import React, { useState, Link } from "react";
import "./NewsContainer.css";
import { News, newReleases } from "./News/News";

export const NewsContainer = () => {
  return (
    <div class="news-container-container mt-36 border-t border-black">
      <div class="column-right bg-red-300">
        <p>FRESH DROPS</p>
      </div>
      <h1 className="heading-slide-news relative border-l border-r border-b border-black p-3 font-mono text-2xl font-bold z-101 bg-white">
        News
      </h1>
      <section className="news-container bg-transparent ml-auto mr-auto grid row-span-3 grid-cols-3 gap-6 justify-items-center content-center gap-x-1 h-auto w-auto">
        {newReleases.map((news, index) => (
          <News
            key={index}
            artistName={news.artistName}
            releaseName={news.releaseName}
            labelName={news.labelName}
            releaseDate={news.releaseDate}
            price={news.price}
            releaseCover={news.releaseCover}
          />
        ))}
      </section>
    </div>
  );
};
