import React, { useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { MdOutlineContactEmergency } from "react-icons/md";
import { FaPlus, FaExternalLinkAlt } from "react-icons/fa";
import { LuTag } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PageHeader from "../components/PageHeader";

const CaseStudyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const project = location.state?.project;
  const allProjects = location.state?.projects || [];

  useEffect(() => {
    if (!project) {
      navigate(`/case-studies/`);
    }
  }, [project, navigate]);

  if (!project) {
    return (
      <div className="pt-32 text-center text-black dark:text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950 pt-16 md:pt-20 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
          {project.title}
        </h1>

        <p className="text-sm md:text-base text-gray-500 mt-2 dark:text-gray-300">
          Project Details /{" "}
          <span className="text-orange-500">{project.title}</span>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 pb-12 md:pb-16">
          {/* ================= LEFT CONTENT ================= */}
          <div className="lg:col-span-2">
            {/* IMAGE SLIDER */}
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-800">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={project.images?.length > 1}
                className="rounded-3xl"
              >
                {project.images?.map((img) => (
                  <SwiperSlide key={img.id}>
                    <img
                      src={img.image}
                      alt={project.title}
                      className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* CONTENT */}
            <div className="mt-8 w-full">
              <div className="mt-10 bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 shadow-md border border-gray-200 dark:border-gray-800">
                <h2 className="text-2xl font-bold text-black dark:text-white">
                  Project Overview
                </h2>

                <p className="text-gray-600 dark:text-gray-300 mt-4 leading-7 text-sm md:text-base">
                  {project.project_description}
                </p>

                <div className="mt-8">
                  <h3 className="text-black dark:text-white text-lg md:text-xl font-semibold mb-3">
                    Important Facts
                  </h3>

                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {project.features?.length > 0 &&
                      project.features.map((f) => (
                        <li key={f.id} className="list-disc">
                          {f.feature_title}
                        </li>
                      ))}
                  </ul>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mt-6 leading-7 text-sm md:text-base">
                  {project.feature_description}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="sticky top-24 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              {/* TOP BAR */}
              <div className="h-2 bg-orange-500 w-full"></div>

              <div className="p-6 sm:p-7">
                <h3 className="text-2xl font-bold text-black dark:text-white mb-8">
                  Project Info
                </h3>

                <div className="space-y-7">
                  {/* CLIENT */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                      <MdOutlineContactEmergency size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">Client</p>
                      <h4 className="font-semibold text-black dark:text-white mt-1">
                        {project.client}
                      </h4>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                      <GrLocation size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <h4 className="font-semibold text-black dark:text-white mt-1">
                        {project.location}
                      </h4>
                    </div>
                  </div>

                  {/* TECHNOLOGIES */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                      <LuTag size={20} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">Technologies</p>
                      <h4 className="font-semibold text-black dark:text-white mt-1 leading-7">
                        {project.technologies?.join(", ")}
                      </h4>
                    </div>
                  </div>

                  {/* COMPLETED */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                      <MdDone size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">Completed</p>
                      <h4 className="font-semibold text-black dark:text-white mt-1">
                        {new Date(project.completed).toLocaleDateString()}
                      </h4>
                    </div>
                  </div>

                  {/* WEBSITE */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-500/10 text-orange-500 flex items-center justify-center shrink-0">
                      <TbWorld size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-400">Website</p>

                      <a
                        href={project.deployed_url || project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-semibold text-orange-500 hover:text-orange-600 mt-1 transition"
                      >
                        Visit Website
                        <FaExternalLinkAlt size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MORE PROJECTS ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            More Projects You Might Like
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3">
            Explore more creative and modern portfolio projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects
            ?.filter((item) => item.id !== project.id)
            ?.map((item) => (
              <div
                key={item.id}
                className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-200 dark:border-gray-800 transition-all duration-500 hover:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.images?.[0]?.image}
                    alt={item.title}
                    className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* CATEGORY */}
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-4 py-2 rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-orange-500 transition leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex gap-3">
                    <Link
                      to={`/case-studies/${item.id}`}
                      state={{ project: item }}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-500 hover:text-white transition"
                    >
                      <FaPlus />
                    </Link>

                    {item.deployed_url && (
                      <a
                        href={item.deployed_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:scale-110 transition"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
