import React from "react";
import { BsCalendar2Week } from "react-icons/bs";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog-details/${blog.id}`}>
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md
          transition duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
        {/* IMAGE */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-52 sm:h-56 md:h-60 object-cover"/>

        {/* CONTENT */}
        <div className="p-5">
          {/* AUTHOR + DATE */}
          <div
            className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-gray-500 dark:text-gray-300 mb-3 ">
            {/* AUTHOR */}
            <div className="flex items-center gap-2">
              <img
                src={blog.avatar}
                alt="author"
                className="w-6 h-6 rounded-full"
              />

              <span>{blog.author}</span>
            </div>

            {/* DATE */}
            <span className="flex items-center gap-2">
              <BsCalendar2Week className="text-orange-500" size={18} />

              {blog.date}
            </span>
          </div>

          {/* TITLE */}
          <h3
            className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white leading-snug
              hover:text-orange-500 transition cursor-pointer">
            {blog.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
