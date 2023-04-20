import React, { useState, Link } from "react";
import "./NewsContainer.css";
import { News, newReleases } from "./News/News";

export const NewsContainer = () => {
  return (
    <div class="news-container-container mt-32">
      <h1 className="heading-slide-news relative font-mono text-2xl z-101 bg-white pr-2">
        New Arrivals
      </h1>
      <section className="news-container border bg-white border-black ml-auto mr-auto grid row-span-3 grid-cols-3 gap-6 justify-items-center content-center gap-x-1 h-auto w-auto">
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
