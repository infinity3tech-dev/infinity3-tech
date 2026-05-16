import React from "react";
import { useLocation, Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import internshipData from "../data/internshipData";
import coursesData from "../data/coursesData";
import blogs from "../data/blogs";
import { FaSearch } from "react-icons/fa";

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get("q") || "";

  // Combine all data
  const allData = [
    ...servicesData.map((item) => ({
      ...item,
      description: item.desc,
      type: "service",
      link: `/service-details/${item.id}`,
    })),

    ...internshipData.map((item) => ({
      ...item,
      description: item.desc,
      type: "internship",
      link: `/internship-details/${item.slug}`,
    })),
  ];

  // Filter logic
  const results = allData.filter((item) => {
    const text = `
      ${item.title || ""}
      ${item.desc || ""}
      ${item.description || ""}
    `.toLowerCase();

    const searchWords = query.toLowerCase().split(" ");

    return searchWords.every((word) => text.includes(word));
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-10">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
          Search Results
        </h2>

        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-3">
          Showing results for:
          <span className="text-orange-500 font-semibold ml-1">
            "{query}"
          </span>
        </p>
      </div>

      {/* NO RESULTS */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16 sm:mt-24 text-center px-4">
          
          <div className="text-5xl sm:text-6xl">
            <FaSearch className="text-orange-500" />
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold mt-5 text-gray-700 dark:text-white">
            No results found
          </h3>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-3">
            Try searching with different keywords
          </p>

          <Link
            to="/"
            className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-black transition duration-300"
          >
            Go Back Home
          </Link>
        </div>
      ) : (
        
        /* RESULTS GRID */
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 sm:pb-16">
          
          {results.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="
                group
                bg-white dark:bg-gray-800
                border border-gray-200 dark:border-gray-700
                rounded-2xl
                p-5 sm:p-6
                shadow-sm hover:shadow-xl
                transition duration-300
                hover:-translate-y-1
              "
            >
              
              {/* TYPE BADGE */}
              <span className="inline-block text-xs sm:text-sm px-3 py-1 rounded-full bg-orange-100 text-orange-600 mb-4 capitalize">
                {item.type}
              </span>

              {/* TITLE */}
              <h3 className="font-semibold text-lg sm:text-xl text-gray-800 dark:text-white group-hover:text-orange-500 transition leading-snug">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-3 line-clamp-3 leading-6">
                {item.description}
              </p>

              {/* READ MORE */}
              <div className="mt-5 text-orange-500 text-sm sm:text-base font-medium group-hover:underline">
                View Details
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;