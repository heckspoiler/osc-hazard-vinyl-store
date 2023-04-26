import React from "react";
import { Link } from "react-router-dom";
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { NewsContainer } from "./NewsContainer/NewsContainer";
import { InStoreEvents } from "./InStoreEvents/InStoreEvents";
import "./Body.css";

export const Body = () => {
  return (
    <Link to="/body">
      <section className="body flex flex-col z-1">
        <ImageSlider />
        <NewsContainer />
        <InStoreEvents />
      </section>
    </Link>
  );
};
