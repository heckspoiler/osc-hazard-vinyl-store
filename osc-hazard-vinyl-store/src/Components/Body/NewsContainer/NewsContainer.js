import React, { useState, Link } from "react";
import "./NewsContainer.css";
import { News, newReleases } from "./News/News";
import image1 from "./News/images/francesca-inside_out_lp.jpg";
import image2 from "./News/images/oz_wave_edits.jpg";
import image3 from "./News/images/ozelot_mi-corazon.jpg";
import image4 from "./News/images/ozelot-black_belt.jpg";
import image5 from "./News/images/parallel_minds.jpg";
import image6 from "./News/images/slam_jams_vol_2.jpg";

const imageArray = [image1, image2, image3, image4, image5, image6];
export const NewsContainer = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [image, setImage] = useState(imageArray[0]);
  const handleHover = (e) => {
    setIsHidden(!isHidden);
    setImage(imageArray[Math.floor(Math.random() * imageArray.length)]);
  };
  return (
    <div className="mt-10">
      <h1 className="heading-slide-news relative font-mono text-2xl bg-white pr-2 z-50">
        New Arrivals
      </h1>
      <div className="description-hover-container description-hover-container-left font-mono absolute flex flex-col">
        <h2>
          <i>Hover</i>
        </h2>
        <p
          className="text-lg font-sans class-image"
          onMouseOver={handleHover}
          onMouseLeave={handleHover}
        >
          Image
        </p>
        <img
          src={image}
          className={`w-20 h-20 absolute ml-16 ${isHidden ? "hidden" : ""}`}
        />
        <p className="text-xs">to</p> <h3 className="text-lg">play</h3>
        <h2 className="text-2xl">
          <b>Previews</b>
        </h2>
      </div>

      <div class="news-container-container mt-36">
        <section className="news-container border border-black ml-auto mr-auto grid row-span-3 grid-cols-3 gap-6 justify-items-center content-center gap-x-1 h-auto w-auto z-50">
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
    </div>
  );
};
