import React from "react";
import image from "./../assets/images/star-icon.webp";
import { IoReload } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
        {/* Heading */}
        <div className="flex items-center justify-center gap-2">
          <img
            src={image}
            alt="Star Icon"
            loading="lazy"
            decoding="async"
            width="20"
            height="20"
            className="w-4 md:w-5 animate-[float_4s_ease-in-out_infinite]"
          />

          <p className="text-orange-500 font-bold uppercase text-xs md:text-sm">
            Our Services
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-2 leading-tight">
          We Offer Professional Solutions For Business
        </h2>

        {/* SERVICES GRID */}
        <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 px-2 sm:px-4 md:px-0">
          {servicesData.slice(0, 3).map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-6 md:mt-10">
          <button
            className="flex items-center gap-2 
            bg-orange-500 text-white 
            px-5 md:px-6 py-2.5 md:py-3 rounded-md 
            hover:bg-black dark:hover:bg-white dark:hover:text-black
            transition duration-300 text-sm md:text-base cursor-pointer"
            onClick={() => navigate(`/services`)}
          >
            <IoReload className="text-lg md:text-xl" />
            <span>Load More</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
