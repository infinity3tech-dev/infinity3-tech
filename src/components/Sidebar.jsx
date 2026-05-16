import React from "react";
import blogs from "../data/blogs";
import { FaSearch } from "react-icons/fa";

const SectionTitle = ({ children }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-black dark:text-white">
      {children}
    </h3>

    <div className="w-10 h-0.5 bg-orange-500 mt-1"></div>
  </div>
);

const Sidebar = () => {
  return (
    <div className="space-y-10">
      
      {/* Search */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
        <SectionTitle>Search</SectionTitle>

        <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none text-sm text-black dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-300"
          />

          <FaSearch className="text-orange-500 text-sm" />
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
        <SectionTitle>Popular Posts</SectionTitle>

        <div className="space-y-4">
          {blogs.slice(0, 3).map((blog) => (
            <div
              key={blog.id}
              className="flex gap-3 items-start border-b border-gray-100 dark:border-gray-700 pb-4 last:border-none"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-16 h-16 rounded-md object-cover"
              />

              <div>
                <p className="text-xs text-gray-400 dark:text-gray-400 uppercase tracking-wide">
                  {blog.date}
                </p>

                <p className="text-sm font-semibold text-gray-800 dark:text-white leading-snug hover:text-orange-500 cursor-pointer transition">
                  {blog.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
        <SectionTitle>Categories</SectionTitle>

        <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          {[
            "Design (03)",
            "Lifestyle (05)",
            "Script (10)",
            "Device (08)",
            "Tips (01)",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 hover:text-orange-500 transition cursor-pointer"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>

              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm">
        <SectionTitle>Popular Tags</SectionTitle>

        <div className="flex flex-wrap gap-2">
          {[
            "Business (3)",
            "Design (3)",
            "Braike (2)",
            "Fashion (2)",
            "Travel (1)",
            "Smart (1)",
            "Marketing (1)",
            "Tips (2)",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-sm rounded-md hover:bg-orange-500 hover:text-white cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;