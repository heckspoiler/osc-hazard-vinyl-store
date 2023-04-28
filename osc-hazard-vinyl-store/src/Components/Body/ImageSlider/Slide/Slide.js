import React from "react";
import "./Slide.css";
import { Link } from "react-router-dom";

import Image1 from "./images/cactus.jpeg";
import Cover1 from "./images/cover_1.jpg";
import Cover2 from "./images/cover_2.jpg";
import Image2 from "./images/weird-stuff-converted.jpeg";
import Cover3 from "./images/cover_3.jpg";
import Image3 from "./images/macintosh.jpg";

export const slideData = [
  {
    artistName: "Velvet Dynamite Exorcism",
    releaseName: "Four Hours Too Long EP",
    text: "Velvet Dynamite Exorcism's latest opus, \"Four Hours Too Long\", is a triumphant exploration of experimental niche music. Renowned for their abstract structures, the band has transcended boundaries with an immersive auditory experience that challenges the listener's perceptions. Complex arrangements intertwine with dissonant harmonies, creating a meticulously crafted sonic landscape that dares to defy convention. This album solidifies Velvet Dynamite Exorcism's position as avant-garde maestros, fearlessly pushing the envelope of what music can be.",
    smallImages: [Cover1, Cover1, Cover1, Cover1],
    largeImage: Image1,
  },
  {
    artistName: "Enigmatic Dweller",
    releaseName: "Eclectic Spectrum EP",
    text: 'Check out Enigmatic Dweller\'s latest EP, "Eclectic Spectrum"! This innovative producer from Ljubljana blends elements of electronica, jazz, hip-hop, and world music to create a unique auditory experience that defies genre boundaries. The five tracks on this EP showcase his versatility and creative genius, with intricate soundscapes and relentless breakbeats that will leave you hungry for more. Available on all major streaming platforms and as a limited-edition vinyl release, "Eclectic Spectrum" is a must-listen for fans of electronic music.',
    smallImages: [Cover2, Cover2, Cover2, Cover2],
    largeImage: Image2,
  },
  {
    artistName: "AudioJedi",
    releaseName: "First EP",
    text: '"First EP" by AudioJedi is a genre-defying release that combines immersive sound design with Latin percussion grooves and modern breakbeats. The debut release from the artist\'s solo project, it showcases their impressive production skills and ability to blend different genres and styles. The EP is the first release on the new label "Fung Ku" and promises to be a platform for innovative and boundary-pushing music. Fans of experimental electronic music and Latin rhythms should definitely check it out.',
    smallImages: [Cover3, Cover3, Cover3, Cover3],
    largeImage: Image3,
  },
];

const formatName = (name) => {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "");
};

const formatLink = (artistName, releaseName) => {
  return `${formatName(artistName)}_${formatName(releaseName)}`;
};

export const Slide = ({ slide, isHovered, setIsHovered }) => {
  return (
    <div className=" h-[45rem] flex justify-center items-center">
      <h1 className="heading-slide absolute font-monoSpace text-xl bg-transparent pr-2 z-50">
        Our Picks
      </h1>
      <section
        className="slide grid grid-cols-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <section className="slider-text h-100 bg-white border-r border-black">
          <Link
            to={`/releases/${encodeURIComponent(
              formatLink(slide.artistName, slide.releaseName)
            )}`}
          >
            <button className="learn-more-button font-monoSpace">
              Learn More
            </button>
          </Link>
          <section className="artist-name font-monoSpace text-l font-semibold">
            {slide.artistName}
          </section>
          <section className="release-name font-monoSpace text-sm ml-4">
            {slide.releaseName}
          </section>
          <section className="text text-sm ml-4 font-inter">
            {slide.text}
          </section>
        </section>
        <section className="slider-vinyl-cover grid grid-cols-2 gap-y-0 py-12 px-2 items-center w-[100%] bg-white h-[100%]">
          {slide.smallImages.map((image, index) => (
            <div key={index} className="vinyl-cover">
              <img className="vinyl-cover-img" src={image} />
            </div>
          ))}
        </section>
        <section className="slider-image border-l border-black">
          <img src={slide.largeImage} className="slider-image-img" />
        </section>
      </section>
    </div>
  );
};
