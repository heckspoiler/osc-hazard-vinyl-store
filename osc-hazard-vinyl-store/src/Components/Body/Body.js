import React from "react";
import { Link } from "react-router-dom";
import { ImageSlider } from "./ImageSlider/ImageSlider";
import { NewsContainer } from "./NewsContainer/NewsContainer";
import { InStoreEvents } from "./InStoreEvents/InStoreEvents";
import { Header } from "../Header/Header";
import "./Body.css";

export const Body = () => {
  return (
    <section className="body flex flex-col z-1">
      <Header />
      <ImageSlider />
      <NewsContainer />
      <InStoreEvents />
    </section>
  );
};
