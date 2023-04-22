import React from "react";
import { Link } from "react-router-dom";
import "./InStoreEvents.css";
import { EventsArray } from "./EventContainer/EventsArray";
import { EventContainer } from "./EventContainer/EventContainer";

export const InStoreEvents = () => {
  const iterateEvents = EventsArray.map((event) => {
    return <EventContainer key={event.id} event={event} />;
  });

  return <div>{iterateEvents}</div>;
};
