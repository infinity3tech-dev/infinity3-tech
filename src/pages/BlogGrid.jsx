import React, { useState } from "react";
import BlogCard from "../components/BlogCard";
import blogs from "../data/blogs";
import PageHeader from "../components/PageHeader";

const BlogGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  return (
    <div className=" bg-gray-50 dark:bg-gray-900 min-h-screen pt-16 sm:pt-20 md:pt-24 overflow-hidden">
      {/* HEADER */}
      <PageHeader title="Blog Grid" />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex flex-wrap justify-center items-center gap-2 mt-10 sm:mt-12">
          {/* PREV */}
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-orange-500 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            «
          </button>

          {/* PAGE NUMBERS */}
          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium transition ${
                  currentPage === page
                    ? "bg-orange-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-orange-500 hover:text-white"
                }
                `}
              >
                {page}
              </button>
            );
          })}

          {/* NEXT */}
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-orange-500 hover:text-white transition  disabled:opacity-50 disabled:cursor-not-allowed ">
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
