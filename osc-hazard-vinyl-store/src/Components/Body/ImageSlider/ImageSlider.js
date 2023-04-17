import React, { useState, useEffect, useRef } from "react";
import { Slide, slideData } from "./Slide/Slide"; // Import slideData from Slide component
import "./ImageSlider.css";
import Arrow from "./arrow.svg";

export const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const slideTimer = useRef(null);

  useEffect(() => {
    startTimer();
    return () => clearTimeout(slideTimer.current);
  }, [currentSlide, isHovered]);

  const startTimer = () => {
    if (!isHovered) {
      slideTimer.current = setTimeout(() => {
        nextSlide();
      }, 4000);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
  };

  return (
    <div className="image-slider-wrapper">
      <div className="content-slider">
        <h1 className="absolute border border-black p-3 font-mono text-2xl text-buttonViolet bg-white ml-3 mt-16 z-10">
          Our Picks
        </h1>
      </div>
      <div className="arrow-container">
        <div className="arrow arrow-left" onClick={prevSlide}>
          <img src={Arrow} />
        </div>
        <div className="arrow arrow-right" onClick={nextSlide}>
          <img src={Arrow} />
        </div>
      </div>
      <Slide
        slide={slideData[currentSlide]}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
      />
    </div>
  );
};
