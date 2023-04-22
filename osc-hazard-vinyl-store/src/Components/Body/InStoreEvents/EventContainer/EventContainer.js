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
      <div className="in-store-info-container bg-white justify-center align-center w-80 h-60 flex flex-col gap-2 border border-black p-2 ml-auto mr-auto mt-6">
        <h2 className="in-store-info-header text-xl font-mono font-bold pb-8">
          {event.header}
        </h2>
        <div className="in-store-info-description">{event.description}</div>
        <button className="in-store-event-button mt-2 text-xs border border-black w-16 p-1 rounded-3xl font-mono bg-buttonYellow hover:bg-buttonYellowHover ml-56 absolute mt-40">
          MORE
        </button>
      </div>
    </div>
  );
};
