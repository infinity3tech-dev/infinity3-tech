import React from "react";
import star from "./../assets/images/star-icon.png";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { teamData } from "../data/teamData";
import bgImage from "./../assets/images/bg1.png";

const Team = ({ showHeader = true, limit }) => {
  const members = limit ? teamData.slice(0, limit) : teamData;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* HEADER */}
        {showHeader && (
          <>
            {/* SMALL TITLE */}
            <div className="flex items-center justify-center gap-2">
              <img
                src={star}
                alt="star"
                className="w-4 sm:w-5 md:w-6 animate-[float_4s_ease-in-out_infinite]"
              />

              <p className="text-orange-500 font-semibold uppercase tracking-wide text-xs sm:text-sm">
                Team Members
              </p>
            </div>

            {/* MAIN TITLE */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mt-3 transition">
              Our Team
            </h2>

            {/* DESCRIPTION */}
            <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-7 transition">
              Our team brings together experienced leaders, skilled developers,
              designers, and operations experts who work collaboratively to
              deliver innovative and reliable solutions.
            </p>
          </>
        )}

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-14">
          {members.map((member) => (
            <div
              key={member.id}
              className="group bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* IMAGE SECTION */}
              <div
                className="relative aspect-[4/5] bg-center bg-cover flex items-end justify-center overflow-hidden"
                style={{
                  backgroundImage: `url(${bgImage})`,
                }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className=" w-full h-full object-cover transition duration-500 group-hover:scale-105 "/>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                {/* NAME */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white transition">
                  {member.name}
                </h3>

                {/* ROLE */}
                <p className="text-orange-500 text-sm mt-1">{member.role}</p>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-3 sm:gap-4 mt-5">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full 
                    bg-white dark:bg-gray-700 
                    flex items-center justify-center 
                    shadow-sm hover:bg-orange-500 
                    transition duration-300 cursor-pointer group/icon"
                  >
                    <FaLinkedin className="text-sm sm:text-base text-gray-700 dark:text-white group-hover/icon:text-white" />
                  </div>

                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full 
                    bg-white dark:bg-gray-700 
                    flex items-center justify-center 
                    shadow-sm hover:bg-orange-500 
                    transition duration-300 cursor-pointer group/icon"
                  >
                    <MdEmail className="text-sm sm:text-base text-gray-700 dark:text-white group-hover/icon:text-white" />
                  </div>

                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full 
                    bg-white dark:bg-gray-700 
                    flex items-center justify-center 
                    shadow-sm hover:bg-orange-500 
                    transition duration-300 cursor-pointer group/icon"
                  >
                    <FaTwitter className="text-sm sm:text-base text-gray-700 dark:text-white group-hover/icon:text-white" />
                  </div>
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full 
                    bg-white dark:bg-gray-700 
                    flex items-center justify-center 
                    shadow-sm hover:bg-orange-500 
                    transition duration-300 cursor-pointer group/icon"
                  >
                    <FaInstagram className="text-sm sm:text-base text-gray-700 dark:text-white group-hover/icon:text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
