import React from "react";

const PageHeader = ({ title}) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
        {title}
      </h1>

      <p className="text-sm md:text-base text-gray-500 dark:text-gray-200 mt-2">
        Home / <span className="text-orange-500">{title}</span>
      </p>
    </div>
  );
};

export default PageHeader;