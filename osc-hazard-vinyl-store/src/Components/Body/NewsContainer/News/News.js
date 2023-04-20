import React, { Link } from "react";
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
  return (
    <div className="news-item-container border border-black h-10/12 w-10/12">
      <div className="news-item p-4 pl-8">
        <div className="news-image-container flex h-52 w-52 border border-black">
          <img
            src={releaseCover}
            alt={`${artistName} - ${releaseName}`}
            className=""
          />
          <div className="buttons-container news-play-buttons"></div>
        </div>
        <div className="news-info-container mt-1 bg-white w-52 p-2">
          <div className="news-info flex flex-col">
            <div className="news-artist-name">
              <b>{artistName}</b>
            </div>
            <div className="news-release-name text-xs">{releaseName}</div>
            <div className="news-label-name text-xs text-gray-400">
              {labelName}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-container flex flex-row justify-between items-center text-s px-4 pb-4">
        <button className="font-mono border border-black bg-buttonViolet h-8 w-16 ml-4 rounded-3xl text-xs hover:bg-buttonYellowHover transition duration-200">
          More
        </button>
        <div className="news-price ml-20 font-mono text-sm font-semibold">
          {price}
        </div>
        <button>
          <img src={shoppingBag} className="h-10 w-10 shopping-bag" />
        </button>
      </div>
    </div>
  );
};
