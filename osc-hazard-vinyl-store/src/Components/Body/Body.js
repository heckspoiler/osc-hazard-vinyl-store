import React from "react";
import { Route, Switch } from "react-router-dom";
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { NewsContainer } from "./NewsContainer/NewsContainer";
import "./Body.css";

export const Body = () => {
  return (
    <section className="body flex flex-col z-1">
      <ImageSlider />
      <div className="description-hover-container description-hover-container-left font-mono absolute flex flex-col">
        <h2>
          <i>Hover</i>
        </h2>
        <p className="text-lg font-sans class-image">Image</p>
        <p className="text-xs">to</p> <h3 className="text-lg">play</h3>
        <h2 className="text-2xl">
          <b>Previews</b>
        </h2>
      </div>
      <div className="description-hover-container description-hover-container-right font-mono absolute flex flex-col">
        <h2>
          <i>Hover</i>
        </h2>
        <p className="text-lg font-sans class-image">Image</p>
        <p className="text-xs">to</p> <h3 className="text-lg">play</h3>
        <h2 className="text-2xl">
          <b>Previews</b>
        </h2>
      </div>
      <NewsContainer />
    </section>
  );
};
