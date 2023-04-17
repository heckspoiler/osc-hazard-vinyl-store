import React from "react";
import { Route, Switch } from "react-router-dom";
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { NewsContainer } from "./NewsContainer/NewsContainer";
import "./Body.css";

export const Body = () => {
  return (
    <section>
      <ImageSlider />
      <NewsContainer />
    </section>
  );
};
