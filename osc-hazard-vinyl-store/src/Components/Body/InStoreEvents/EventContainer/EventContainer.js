import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./InStoreEvents.css";
import { recordStoreDay } from "./images/record-store-day.png";
import { eightBitBits } from "./images/8-bit-bits.png";
import { cruelEnd } from "./images/cruel-end.png";

const events = [
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

export const EventContainer = () => {
  return (
    <div className="in-store-event-container">
      <div className="in-store-info-container">
        <h2 className="in-store-info-header"></h2>
        <div className="in-store-info-description"></div>
        <button className="in-store-event-button"></button>
      </div>
    </div>
  );
};
