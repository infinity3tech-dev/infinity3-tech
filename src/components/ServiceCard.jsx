import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl 
      transition duration-300 group text-center border border-gray-100 
      hover:border-orange-400 flex flex-col justify-between h-full  dark:bg-gray-800 "
    >
      {/* TOP CONTENT */}
      <div>
        {/* ICON */}
        <div className="flex justify-center mb-5">
          <div className="p-4 rounded-full transition">
            <Icon size={40} className="text-orange-500" />
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-black mb-3 dark:text-white">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-black text-sm leading-6 min-h-[200px] line-clamp-4 dark:text-white">
          {item.desc}
        </p>
      </div>

      {/* BUTTON */}
      <Link to={`/service-details/${item.id}`}>
        <p className="mt-5 text-orange-500 font-medium cursor-pointer group-hover:underline">
          View Details
        </p>
      </Link>
    </div>
  );
};

export default ServiceCard;