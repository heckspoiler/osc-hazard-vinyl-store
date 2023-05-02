import React, { useState, Link } from "react";
import { NewsOverlay } from "./NewsOverlay/NewsOverlay";
import "./News.css";
import shoppingBag from "./icons/add.svg";

export const newReleases = [
  {
    artistName: "FRANCESCA",
    releaseName: "THE INSIDE OUT LP",
    labelName: "Pleasure Club",
    price: "12.99£",
    releaseCover: require("./images/francesca-inside_out_lp.jpg"),
  },
  {
    artistName: "Various Artists",
    releaseName: "Slam Jams Vol. 2",
    labelName: "Holding Hands",
    price: "14.99£",
    releaseCover: require("./images/slam_jams_vol_2.jpg"),
  },
  {
    artistName: "Hysteric",
    releaseName: "OZ Wave Edits 83-87",
    labelName: "Self Released",
    price: "9.99£",
    releaseCover: require("./images/oz_wave_edits.jpg"),
  },
  {
    artistName: "Various Artists",
    releaseName: "Eight Two Five",
    labelName: "Parallel Minds",
    price: "10.99£",
    releaseCover: require("./images/parallel_minds.jpg"),
  },
  {
    artistName: "Various Artists",
    releaseName: "Black Belt Academy Vol. 1",
    labelName: "Ozelot Records",
    price: "12.99£",
    releaseCover: require("./images/ozelot-black_belt.jpg"),
  },
  {
    artistName: "Guillermo Lucena",
    releaseName: "Mi Corazon EP",
    labelName: "Ozelot Records",
    price: "14.49£",
    releaseCover: require("./images/ozelot_mi-corazon.jpg"),
  },
];

export const News = ({
  artistName,
  releaseName,
  labelName,
  price,
  releaseCover,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="news-item-container border border-black h-[100%] w-[90%] bg-white ">
      <div
        className="news-image-and-overlay-container relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && <NewsOverlay />}
        <div className="news-item p-4 pl-8">
          <div className="news-image-container flex h-36 w-36 border border-black">
            <img
              src={releaseCover}
              alt={`${artistName} - ${releaseName}`}
              className=""
            />
            <div className="buttons-container news-play-buttons"></div>
          </div>
        </div>
        <div className="news-info-container bg-white w-52 p-2 ml-6">
          <div className="news-info flex flex-col">
            <div className="news-artist-name font-inter text-xs">
              <b>{artistName}</b>
            </div>
            <div className="news-release-name text-xxs font-inter">
              {releaseName}
            </div>
            <div className="news-label-name text-xxs text-gray-400 font-inter">
              {labelName}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-container flex flex-row justify-between items-center text-s px-4 pb-4">
        <button className="font-monoSpace border border-black bg-buttonViolet h-6 w-12 ml-4 rounded-3xl text-xxs hover:bg-buttonYellowHover transition duration-200 z-50">
          More
        </button>
        <div className="news-price ml-20 font-inter text-xs font-semibold">
          {price}
        </div>
        <button>
          <img src={shoppingBag} className="h-8 w-8 shopping-bag" />
        </button>
      </div>
    </div>
  );
};
