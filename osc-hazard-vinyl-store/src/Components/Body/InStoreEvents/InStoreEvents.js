import React from "react";
import { Link } from "react-router-dom";
import "./InStoreEvents.css";
import { EventsArray } from "./EventContainer/EventsArray";
import { EventContainer } from "./EventContainer/EventContainer";

export const InStoreEvents = () => {
  const iterateEvents = EventsArray.map((event) => {
    return <EventContainer key={event.id} event={event} />;
  });

  return (
    <div className="mt-10">
      <h1 className="title_in-store-events absolute font-mono text-2xl text-buttonViolet">
        Events at the Store
      </h1>
      <div className="in-store-events flex p-16 h-auto ml-auto mr-auto">
        {iterateEvents}
      </div>
    </div>
  );
};
