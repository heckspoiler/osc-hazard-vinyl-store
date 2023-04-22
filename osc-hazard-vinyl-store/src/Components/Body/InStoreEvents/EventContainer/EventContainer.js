import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EventContainer.css";

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
