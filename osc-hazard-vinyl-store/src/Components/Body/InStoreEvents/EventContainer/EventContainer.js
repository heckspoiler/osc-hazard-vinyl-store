import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EventContainer.css";

export const EventContainer = (props) => {
  const event = props.event;
  const backgroundImageStyle = {
    backgroundImage: `url(${event.backgroundImage})`,
  };

  return (
    <div className="in-store-event-container mt-8" style={backgroundImageStyle}>
      <div className="in-store-info-container bg-white justify-center align-center w-80 h-60 flex flex-col gap-1 border border-black p-4 ml-auto mr-auto mt-6">
        <h2 className="in-store-info-header text-xl font-monoSpace font-semibold pb-4">
          {event.header}
        </h2>
        <div className="in-store-info-description font-inter">
          {event.description}
        </div>
        <button className="in-store-event-button mt-44 text-xs border border-black w-16 p-1 rounded-3xl font-mono bg-buttonYellow hover:bg-buttonYellowHover ml-56 absolute mt-40">
          MORE
        </button>
      </div>
    </div>
  );
};
