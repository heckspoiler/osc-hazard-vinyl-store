import React from "react";
import { Route, Switch } from "react-router-dom";
import { Slide } from "./Slide/Slide";
import "./ImageSlider.css";

export const ImageSlider = () => {
  return (
    <section className="image-slider">
      <section className="image-slider__container">
        <Slide />
      </section>
    </section>
  );
};
