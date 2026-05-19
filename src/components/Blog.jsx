import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import star from "./../assets/images/star-icon.webp";
import { useNavigate } from "react-router-dom";
import blogs from "../data/blogs";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* HEADING */}
        <div className="flex justify-center items-center gap-2">
          <img
            src={star}
            alt="star"
            className="w-6 animate-[float_4s_ease-in-out_infinite]"
          />

          <p className="text-orange-500 font-semibold uppercase text-sm">
            Our Blog
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white transition">
          Latest Valuable Insights
        </h2>

        <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto transition">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>

        {/* BLOG CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {blogs.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden 
              shadow-sm hover:shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
              onClick={() => navigate("/blog-details/1")}
            >
              
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-left">

                {/* TOP */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-300 transition">

                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover"
                  />

                  <span>{item.author}</span>

                  <div className="flex items-center gap-2 min-w-30">
                    <IoCalendarOutline className="text-base text-orange-500" />
                    <span>{item.date}</span>
                  </div>

                </div>

                {/* TITLE */}
                <h3
                  className="mt-3 text-lg font-semibold 
                  text-gray-800 dark:text-white
                  hover:text-orange-500 transition"
                >
                  {item.title}
                </h3>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;