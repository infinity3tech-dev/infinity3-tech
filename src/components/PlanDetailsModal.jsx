import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const PlanDetailsModal = ({ plan, techTitle, onClose }) => {
  const [openIndex, setOpenIndex] = useState(null);

  if (!plan) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-50 dark:bg-gray-900 
        text-black dark:text-white 
        max-w-2xl w-full rounded-xl p-8 relative shadow-xl 
        max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700
        transition-colors duration-300"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl text-gray-700 dark:text-gray-300 hover:text-orange-500 transition"
        >
          <IoClose />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-orange-500 mb-2">
          {techTitle}
        </h2>

        <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">
          {plan.duration} Program - {plan.level}
        </h3>

        {/* Features */}
        <h4 className="text-orange-500 font-semibold mb-3">
          Program Features:
        </h4>

        <div className="space-y-3 mb-6">
          {plan.topics.map((topic, i) => (
            <div
              key={i}
              className="border border-orange-100 dark:border-gray-700 
              rounded-lg p-3 bg-white dark:bg-gray-800 transition"
            >
              {/* HEADER */}
              <div
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex justify-between items-center cursor-pointer"
              >
                <span className="font-medium text-gray-800 dark:text-gray-100">
                  {topic.title}
                </span>

                {/* + / - */}
                <span className="text-orange-500 text-xl font-bold">
                  {openIndex === i ? "-" : "+"}
                </span>
              </div>

              {/* CONTENT */}
              {openIndex === i && (
                <div className="mt-3 text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  {/* Topics */}
                  {topic.content?.map((item, idx) => (
                    <div key={idx}>• {item}</div>
                  ))}

                  {/* Assignment */}
                  {topic.assignment && (
                    <div className="mt-2 text-green-600 dark:text-green-400">
                      Assignment: {topic.assignment}
                    </div>
                  )}

                  {/* Project */}
                  {topic.project && (
                    <div className="mt-2 text-blue-600 dark:text-blue-400">
                      Project: {topic.project}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* About */}
        <h4 className="text-orange-500 font-semibold mb-2">
          About This Technology:
        </h4>

        <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-7">
          {plan.about}
        </p>

        {/* Learn */}
        <h4 className="text-orange-500 font-semibold mb-2">
          What You'll Learn:
        </h4>

        <p className="text-gray-700 dark:text-gray-300 text-sm leading-7">
          {plan.learn}
        </p>
      </div>
    </div>
  );
};

export default PlanDetailsModal;