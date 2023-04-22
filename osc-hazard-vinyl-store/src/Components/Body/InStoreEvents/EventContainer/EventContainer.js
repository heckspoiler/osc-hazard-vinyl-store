import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EventContainer.css";
import recordStoreDay from "./images/record-store-day.png";
import eightBitBits from "./images/8-bit-games.png";
import cruelEnd from "./images/cruel-end.png";

export const events = [
  {
    id: 1,
    header: "Record Store Day 2023",
    description: "Join us at our store, sell your vinyl and enjoy yourself",
    backgroundImage: recordStoreDay,
  },

  {
    id: 2,
    header: "Best 8-Bit Bits from Games",
    description:
      "Join Nutori Sukozo's talk about 80s game music and how it persisted until today",
    backgroundImage: eightBitBits,
  },
  {
    id: 3,
    header: "Cruel End of the Amusment",
    description:
      "Karolina Kryznev's stance on why rave culture is doomed live at Osc Haz",
    backgroundImage: cruelEnd,
  },
];

export const EventContainer = (props) => {
  const event = props.event;
  const backgroundImageStyle = {
    backgroundImage: `url(${event.backgroundImage})`,
  };

  return (
    <div className="in-store-event-container" style={backgroundImageStyle}>
      <div className="in-store-info-container">
        <h2 className="in-store-info-header">{event.header}</h2>
        <div className="in-store-info-description">{event.description}</div>
        <button className="in-store-event-button">MORE</button>
      </div>
    </div>
  );
};
