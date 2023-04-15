import React from "react";
import "./Slide.css";
import Image1 from "./images/cactus.jpg";
import Cover1 from "./images/cover_1.jpg";

export const Slide = ({ text, smallImages, largeImages }) => {
  const slideData = [
    {
      artistName: "Velvet Dynamite Exorcism",
      releaseName: "Four Hours Too Long EP",
      text: "Velvet Dynamite Exorcism's latest opus, <i>Four Hours Too Long<i>, is a triumphant exploration of experimental niche music. Renowned for their abstract structures, the band has transcended boundaries with an immersive auditory experience that challenges the listener's perceptions. Complex arrangements intertwine with dissonant harmonies, creating a meticulously crafted sonic landscape that dares to defy convention. This album solidifies Velvet Dynamite Exorcism's position as avant-garde maestros, fearlessly pushing the envelope of what music can be, and inviting the audience to delve into the depths of their groundbreaking vision.",
      smallImages: Cover1,
      largeImage: Image1,
    },
    {
      artistName: "",
      releaseName: "",
      text: "Slide 2 Text",
      smallImages: ["img2a.jpg", "img2b.jpg", "img2c.jpg", "img2d.jpg"],
      largeImage: "largeImg2.jpg",
    },
    {
      artistName: "",
      releaseName: "",
      text: "Slide 3 Text",
      smallImages: ["img3a.jpg", "img3b.jpg", "img3c.jpg", "img3d.jpg"],
      largeImage: "largeImg3.jpg",
    },
  ];
  return (
    <section className="slide grid grid-cols-3">
      <section className="slider-text h-80">
        <section className="artist-name font-mono text-xl">
          {slideData[0].artistName}
        </section>
        <section className="release-name font-mono text-l">
          {slideData[0].releaseName}
        </section>
        <section className="text">{slideData[0].text}</section>
      </section>
      <section className="slider-vinyl-cover grid grid-cols-2 gap-y-0 h-80">
        <div className="vinyl-cover">
          <img className="vinyl-cover-img" src={slideData[0].smallImages} />
        </div>
        <div className="vinyl-cover">
          <img className="vinyl-cover-img" src={slideData[0].smallImages} />
        </div>
        <div className="vinyl-cover">
          <img className="vinyl-cover-img" src={slideData[0].smallImages} />
        </div>
        <div className="vinyl-cover">
          <img className="vinyl-cover-img" src={slideData[0].smallImages} />
        </div>
      </section>
      <section className="slider-image">
        <img src={slideData[0].largeImage} className="slider-image-img" />
      </section>
    </section>
  );
};
