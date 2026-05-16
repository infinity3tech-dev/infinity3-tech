import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { TbWorld } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import { MdOutlineContactEmergency } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

const CaseStudyDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) {
      navigate("/case-studies/movie-recommendation");
    }
  }, [slug, navigate]);

  const project =
    caseStudies.find((item) => item.slug === slug) || caseStudies[0];

  if (!project) {
    return (
      <h1 className="pt-24 text-center text-xl text-black dark:text-white">
        Project Not Found
      </h1>
    );
  }

  return (
    <div className="bg-gray-50 pt-16 md:pt-20 overflow-hidden dark:bg-gray-900">
      {/* HEADER */}
      <PageHeader title="Project Details" />

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 pb-12 md:pb-16">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          
          {/* IMAGE */}
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-64 sm:h-80 md:h-[450px] object-cover rounded-xl"
          />

          {/* CATEGORY */}
          <p className="mt-6 text-orange-500 font-semibold text-sm md:text-base">
            {project.category}
          </p>

          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl text-black dark:text-white font-bold mt-2 leading-snug">
            {project.title}
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-600 dark:text-gray-300 mt-4 leading-7 text-sm md:text-base">
            {project.desc}
          </p>

          {/* IMPORTANT FACTS */}
          <div className="mt-8">
            <h3 className="text-black dark:text-white text-lg md:text-xl font-semibold mb-3">
              Important Facts
            </h3>

            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
              <li>The Field of Data Science</li>
              <li>The Problem</li>
              <li>The Solution</li>
              <li>Statistics</li>
              <li>Mathematics</li>
            </ul>
          </div>

          {/* TEXT */}
          <p className="text-gray-600 dark:text-gray-300 mt-6 leading-7 text-sm md:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mt-4 leading-7 text-sm md:text-base">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form.
          </p>

          {/* RESULTS */}
          <div className="mt-8">
            <h3 className="text-black dark:text-white text-xl font-semibold">
              Results
            </h3>

            <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow-md border-t-4 border-orange-500 h-fit">
          
          <div className="space-y-5 text-sm text-gray-600 dark:text-gray-300">
            
            {/* CLIENT */}
            <div className="flex gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
              <MdOutlineContactEmergency className="text-orange-500 text-xl shrink-0" />

              <div>
                <p className="text-gray-400 dark:text-gray-500 text-xs">
                  Client
                </p>

                <p className="font-semibold break-words text-black dark:text-white">
                  {project.client}
                </p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
              <GrLocation className="text-orange-500 text-xl shrink-0" />

              <div>
                <p className="text-gray-400 dark:text-gray-500 text-xs">
                  Location
                </p>

                <p className="font-semibold break-words text-black dark:text-white">
                  {project.location}
                </p>
              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="flex gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
              <LuTag className="text-orange-500 text-xl shrink-0" />

              <div>
                <p className="text-gray-400 dark:text-gray-500 text-xs">
                  Technologies
                </p>

                <p className="font-semibold break-words text-black dark:text-white">
                  {project.technologies}
                </p>
              </div>
            </div>

            {/* COMPLETED */}
            <div className="flex gap-3 border-b border-gray-200 dark:border-gray-700 pb-4">
              <MdDone className="text-orange-500 text-xl shrink-0" />

              <div>
                <p className="text-gray-400 dark:text-gray-500 text-xs">
                  Completed
                </p>

                <p className="font-semibold text-black dark:text-white">
                  {project.completed}
                </p>
              </div>
            </div>

            {/* WEBSITE */}
            <div className="flex gap-3">
              <TbWorld className="text-orange-500 text-xl shrink-0" />

              <div>
                <p className="text-gray-400 dark:text-gray-500 text-xs">
                  Website
                </p>

                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-semibold break-all hover:text-black dark:hover:text-white transition"
                >
                  Visit Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MORE PROJECTS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        
        <h2 className="text-2xl text-black dark:text-white font-bold mb-8 text-center">
          More Projects You Might Like
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {caseStudies.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-orange-500/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  
                  <Link to={`/case-studies/${item.slug}`}>
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-orange-500 hover:bg-black hover:text-white transition">
                      <FaPlus />
                    </div>
                  </Link>
                </div>

                {/* CATEGORY */}
                <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-orange-500 transition leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;