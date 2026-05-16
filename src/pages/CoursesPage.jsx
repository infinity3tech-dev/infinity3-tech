import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import courses from "../data/coursesData";
import PageHeader from "../components/PageHeader";

const CoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;
  const indexOfLast = currentPage * coursesPerPage;
  const indexOfFirst = indexOfLast - coursesPerPage;
  const currentCourses = courses.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen pt-16 sm:pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <PageHeader title="Courses" />

        {/* CONTENT */}
        <div className="py-10 sm:py-12 md:py-16">
          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-wrap justify-center mt-10 sm:mt-12 items-center gap-2">
            {/* PREV */}
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="px-3 py-2 rounded-lg shadow-sm bg-white dark:bg-gray-800 text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-orange-500 hover:text-white transition disabled:opacity-50"
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
                  className={`
                    w-10 h-10 rounded-lg transition font-medium
                    ${
                      currentPage === page
                        ? "bg-orange-500 text-white"
                        : `
                          bg-white dark:bg-gray-800
                          text-black dark:text-white
                          border border-gray-200 dark:border-gray-700
                          hover:bg-orange-500 hover:text-white
                        `
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
              className="px-3 py-2 rounded-lg shadow-sm bg-white dark:bg-gray-800text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-orange-500 hover:text-white
                transition disabled:opacity-50"
            >
              »
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
