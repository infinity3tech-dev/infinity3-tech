import React from "react";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";

const EventCard = ({ id,image, date, title, location }) => {
  return (
      <Link to={`/event-details/${id}`}>
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300">
      
      {/* IMAGE */}
      <div className="relative">
        <img
          src={image}
          alt="event"
          className="w-full h-[220px] object-cover"
        />

        {/* DATE BADGE */}
        <div className="absolute bottom-3 left-3 bg-white text-orange-500 text-sm font-semibold px-3 py-1 rounded shadow">
          {date}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
          {title}
        </h3>

        <div className="flex items-center text-gray-500 text-sm gap-2">
         <GrLocation className="text-orange-500 text-lg" />
         {location}
        </div>
      </div>
    </div>
    </Link>
  );
};

export default EventCard;