import React, { Link } from "react";
import "./News.css";
import shoppingBag from "./icons/shopping-bag.svg";

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
    artistName: "FRANCESCA",
    releaseName: "THE INSIDE OUT LP",
    labelName: "Pleasure Club",

    price: "12.99£",
    releaseCover: require("./images/francesca-inside_out_lp.jpg"),
  },
  {
    artistName: "FRANCESCA",
    releaseName: "THE INSIDE OUT LP",
    labelName: "Pleasure Club",

    price: "12.99£",
    releaseCover: require("./images/francesca-inside_out_lp.jpg"),
  },
  {
    artistName: "FRANCESCA",
    releaseName: "THE INSIDE OUT LP",
    labelName: "Pleasure Club",

    price: "12.99£",
    releaseCover: require("./images/francesca-inside_out_lp.jpg"),
  },
  {
    artistName: "FRANCESCA",
    releaseName: "THE INSIDE OUT LP",
    labelName: "Pleasure Club",

    price: "12.99£",
    releaseCover: require("./images/francesca-inside_out_lp.jpg"),
  },
  {
    artistName: "FRANCESCA",
    releaseName: "THE INSIDE OUT LP",
    labelName: "Pleasure Club",

    price: "12.99£",
    releaseCover: require("./images/francesca-inside_out_lp.jpg"),
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
    <div className="news-item-container border border-black h-auto w-80 bg-red-300">
      <div className="news-item p-4 pl-8">
        <div className="news-image-container flex h-52 w-52 border border-black">
          <img
            src={releaseCover}
            alt={`${artistName} - ${releaseName}`}
            className=""
          />
          <div className="buttons-container news-play-buttons"></div>
        </div>
        <div className="news-info-container mt-1">
          <div className="news-info flex flex-col">
            <div className="news-artist-name font-mono">
              <b>{artistName}</b>
            </div>
            <div className="news-release-name text-xs font-mono">
              {releaseName}
            </div>
            <div className="news-label-name text-xs">{labelName}</div>
          </div>
        </div>
      </div>
      <div className="bottom-container flex flex-row justify-between items-center text-s px-4 pb-4">
        <button className="font-mono border border-black bg-buttonYellow h-8 w-16 ml-4 rounded-3xl text-xs">
          More
        </button>
        <div className="news-price ml-24">{price}</div>
        <button>
          <img src={shoppingBag} className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};
