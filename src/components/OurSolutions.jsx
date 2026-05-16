import React from "react";
import { IoRocketOutline } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import image from "./../assets/images/star-icon.png";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";

const OurSolutions = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Text */}
        <div className="flex items-center justify-center gap-0">
          <img
            src={image}
            alt="Star Icon"
            className="w-5 animate-[float_4s_ease-in-out_infinite]"
          />
          <p className="text-orange-500 font-bold uppercase text-sm">
            Our Solutions
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800">
          We Different From Others <br /> Should Choose Us
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12  ">
          {servicesData.slice(0, 3).map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-transparent hover:border-orange-500 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center text-4xl text-black mb-4 group-hover:scale-110 transition">
                  <Icon className="text-orange-500" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-500 mt-2">{item.desc}</p>

                {/* Link */}
                <p
                  className="text-orange-500 mt-4 cursor-pointer hover:underline transition"
                  onClick={() => navigate(`/service-details/${item.id}`)}
                >
                  View Details
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
