import React from "react";
import { useNavigate } from "react-router-dom";
import { BsCalendar2Week } from "react-icons/bs";
import { MdGroups } from "react-icons/md";

const CourseCard = ({ course }) => {
  const isFree = course.price?.toLowerCase() === "free";
  const navigate = useNavigate();

  return (
    <div
      className="
        bg-white dark:bg-gray-800
        rounded-2xl
        shadow-sm hover:shadow-lg
        transition duration-300
        overflow-hidden
        border border-gray-100 dark:border-gray-700
      "
    >
      {/* IMAGE */}
      <div className="relative">
        <div
          className="
            bg-indigo-900 dark:bg-gray-900
            h-48
            flex items-center justify-center
            cursor-pointer
          "
          onClick={() => navigate(`/course-details/${course.slug}`)}
        >
          <img
            src={course.image}
            alt="course"
            className="h-32 object-contain"
          />
        </div>

        {/* PRICE */}
        {/* 
        <div
          className={`absolute bottom-[-20px] right-4 w-14 h-14 flex items-center justify-center rounded-full font-semibold shadow-md ${
            isFree
              ? "bg-green-500 text-white"
              : "bg-orange-500 text-white"
          }`}
        >
          {isFree ? "Free" : course.price}
        </div> 
        */}
      </div>

      {/* CONTENT */}
      <div className="p-5 pt-8">
        {/* AUTHOR */}
        <div className="flex items-center gap-2 mb-3">
          <img
            src={course.avatar}
            alt="author"
            className="w-6 h-6 rounded-full"
          />

          <span className="text-sm text-gray-500 dark:text-gray-300">
            {course.author}
          </span>
        </div>

        {/* TITLE */}
        <h2
          className="
            text-lg font-semibold
            text-gray-800 dark:text-white
          "
        >
          {course.title}
        </h2>

        {/* DESC */}
        <p
          className="
            text-gray-500 dark:text-gray-300
            text-sm mt-2 leading-6
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* FOOTER */}
        <div
          className="
            flex flex-col sm:flex-row
            sm:items-center sm:justify-between
            gap-3
            mt-5
            text-sm
          "
        >
          {/* DURATION */}
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
            <BsCalendar2Week
              className="text-orange-500"
              size={20}
            />

            {course.duration}
          </div>

          {/* STATUS */}
          <div
            className={`flex items-center gap-2 ${
              course.available
                ? "text-green-500"
                : "text-gray-400 dark:text-gray-500"
            }`}
          >
            <MdGroups size={20} />

            {course.available
              ? "Available Now"
              : "Not Available"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;