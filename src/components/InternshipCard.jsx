import React from "react";
import { useNavigate } from "react-router-dom";

const InternshipCard = ({ item }) => {
  const navigate = useNavigate();
  const Icon = item.icon;

  return (
    <div className="mt-3 flex justify-center">
      <div
        onClick={() => navigate(`/internship-details/${item.slug}`)}
        className="cursor-pointer relative group w-full max-w-[240px] sm:max-w-[260px] md:max-w-[300px]
        min-h-[240px] sm:min-h-[260px] md:min-h-[280px] bg-gray-200 backdrop-blur-lg border border-orange-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 dark:bg-gray-800 
        shadow-md transition duration-500 hover:shadow-2xl hover:-translate-y-2 md:hover:-translate-y-3 hover:bg-orange-400"
      >
        {/* ICON */}
        <div className="flex justify-center mb-4 md:mb-5 text-orange-500 group-hover:text-white group-hover:scale-110 transition duration-300">
          <Icon className="text-3xl sm:text-4xl md:text-5xl" />
        </div>

        {/* TITLE */}
        <h3 className="text-base sm:text-lg md:text-xl dark:text-white font-semibold text-gray-800 mb-2 text-center group-hover:text-white transition">
          {item.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-xs sm:text-sm md:text-base dark:text-white text-gray-500 text-center leading-relaxed group-hover:text-white transition">
          {item.desc}
        </p>

        {/* HOVER EFFECT */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-200/20 to-orange-400/20"></div>
      </div>
    </div>
  );
};

export default InternshipCard;
