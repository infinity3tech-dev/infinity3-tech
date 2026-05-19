import React from "react";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import techData from "../data/techData";

const TechnologyPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 mt-10 overflow-hidden dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <PageHeader title="Technology" />

        {/* TITLE */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
            Explore Our <span className="text-orange-500">Technologies</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-2xl mx-auto dark:text-gray-200">
            Tools & frameworks we use to build modern solutions
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {techData.map((tech, index) => {
            const slug = tech.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-+|-+$/g, "");
            return (
              <div
                key={index}
               className="group bg-white/80 backdrop-blur-xl border border-orange-200 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col text-center dark:bg-gray-800"
              >
                {/* TITLE */}
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition mb-6 whitespace-nowrap">
                  {tech.title}
                </h2>

                {/* ICON CIRCLE */}
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-full bg-black dark:bg-gray-900 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-orange-400 blur-sm"></div>

                  <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gray-900 dark:bg-black rounded-full flex items-center justify-center">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 text-orange-400 text-xl sm:text-2xl">
                      {tech.icons.map((Icon, i) => (
                        <Icon key={i} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* LIST */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300 mb-6 text-left">
                  {tech.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>

                      <span className="break-words whitespace-nowrap">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON */}
                <button
                  onClick={() => navigate(`/technology/${slug}`)}
                 className="mt-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 px-4 rounded-xl hover:from-black hover:to-gray-900 dark:hover:from-orange-600 dark:hover:to-orange-500 transition shadow-md hover:shadow-lg text-sm sm:text-base cursor-pointer"
                >
                  Explore
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologyPage;
