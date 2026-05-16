import React from "react";
import { events } from "../data/events";
import EventCard from "../components/EventCard";

const EventsPage = () => {
  return (
    <div className="bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}

        <div className="bg-gray-50 py-16 px-6">
          <h1 className="text-4xl font-bold text-gray-800">Events</h1>
          <p className="text-gray-500 mt-2">
            Home &gt; <span className="text-orange-500">Events</span>
          </p>
        </div>

        {/* EVENTS GRID */}
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
