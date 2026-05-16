import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import internshipData from "../data/internshipData";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import PlanDetailsModal from "../components/PlanDetailsModal";
import ApplyFormModal from "../components/ApplyFormModal";
import PageHeader from "../components/PageHeader";

const InternshipDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [applyPlan, setApplyPlan] = useState(null);
  const internship = internshipData.find((item) => item.slug === slug);

  if (!internship)
    return (
      <h2 className="text-center p-10 text-red-500 dark:text-red-400">
        Not Found
      </h2>
    );

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 md:py-16 px-4 sm:px-6 lg:px-8 mt-10 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <PageHeader title="Internship Details" />

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 md:mb-10 flex items-center gap-2 
          text-black dark:text-white 
          bg-white dark:bg-gray-800 
          shadow-md border border-orange-200 dark:border-gray-700 
          px-4 py-2 rounded-xl 
          hover:bg-orange-500 hover:text-white 
          transition text-sm md:text-base"
        >
          <MdOutlineKeyboardArrowLeft size={22} />
          Back
        </button>

        {/* TITLE */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-snug">
            Choose Your Learning <span className="text-orange-500">Path</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-3">
            Select a technology and internship duration
          </p>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4 text-gray-800 dark:text-gray-100">
            {internship.title}
          </h3>
        </div>

        {/* PLANS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {internship.plans.map((plan, index) => (
            <div
              key={index}
              className="group 
              bg-white/80 dark:bg-gray-800/90 
              backdrop-blur-xl 
              border border-orange-200 dark:border-gray-700 
              rounded-2xl p-5 md:p-6 
              shadow-lg hover:shadow-2xl 
              hover:-translate-y-2 
              transition-all duration-300 
              flex flex-col"
            >
              {/* TOP */}
              <div>
                {/* DURATION */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition">
                  {plan.duration}
                </h3>

                {/* LEVEL */}
                <span
                  className="inline-block mt-3 text-xs sm:text-sm 
                  bg-orange-100 dark:bg-orange-500/20 
                  text-orange-600 dark:text-orange-400 
                  px-3 py-1 rounded-full"
                >
                  {plan.level}
                </span>

                {/* DIVIDER */}
                <div className="my-4 border-t border-orange-100 dark:border-gray-700"></div>

                {/* TOPICS */}
                <ul className="space-y-3 mb-6 min-h-[220px]">
                  {plan.highlights?.slice(0, 6).map((item, i) => (
                    <li
                      key={i}
                      className="text-sm md:text-base 
                      text-black dark:text-gray-200 
                      flex items-start gap-2"
                    >
                      <span className="text-orange-500 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BUTTONS */}
              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                {/* DETAILS BUTTON */}
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="flex-1 
                  bg-white dark:bg-gray-700 
                  border border-orange-400 dark:border-orange-500 
                  text-orange-500 dark:text-orange-400 
                  py-2.5 rounded-xl 
                  hover:bg-orange-500 hover:text-white 
                  transition text-sm md:text-base cursor-pointer"
                >
                  Details
                </button>

                {/* APPLY BUTTON */}
                <button
                  onClick={() => setApplyPlan(plan)}
                  className="flex-1 
                  bg-gradient-to-r from-orange-500 to-orange-600 
                  text-white py-2.5 rounded-xl 
                  hover:from-black hover:to-gray-900 
                  transition shadow-md hover:shadow-lg 
                  text-sm md:text-base cursor-pointer"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODALS */}
      {selectedPlan && (
        <PlanDetailsModal
          plan={selectedPlan}
          techTitle={internship.title}
          onClose={() => setSelectedPlan(null)}
        />
      )}

      {applyPlan && (
        <ApplyFormModal
          plan={applyPlan}
          techTitle={internship.title}
          courseId={internship.courseId}
          onClose={() => setApplyPlan(null)}
        />
      )}
    </section>
  );
};

export default InternshipDetails;
