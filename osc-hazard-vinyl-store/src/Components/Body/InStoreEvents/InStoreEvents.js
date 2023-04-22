import React from "react";
import { Link } from "react-router-dom";
import "./InStoreEvents.css";
import { EventContainer } from "./EventContainer/EventContainer";
import { events } from "./EventContainer/EventContainer";

export const InStoreEvents = () => {
  const iterateEvents = events.map((event) => {
    return <EventContainer key={event.id} event={event} />;
  });

  return <div>{iterateEvents}</div>;
};
