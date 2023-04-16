import React, { useState } from "react";
import { Slide, slideData } from "./Slide/Slide"; // Import slideData from Slide component
import "./ImageSlider.css";
import Arrow from "./arrow.svg";

export const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <div className="content-slider relative">
      <Slide slide={slideData[currentSlide]} />
      <div className="arrow-container">
        <div className="arrow arrow-left" onClick={prevSlide}>
          <img src={Arrow} />
        </div>
        <div className="arrow arrow-right" onClick={nextSlide}>
          <img src={Arrow} />
        </div>
      </div>
    </div>
  );
};
