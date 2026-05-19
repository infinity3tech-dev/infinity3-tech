import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CaseStudySlider = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
        `${VITE_BASE_URL}/portfolio-projects/`,
        );

        const json = await res.json();

        if (json?.data && Array.isArray(json.data)) {
          setProjects(json.data);
        } else {
          setProjects([]);
        }
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="py-10 md:py-20 bg-gray-100 dark:bg-gray-900 relative transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* NAVIGATION BUTTONS */}
        <div className="custom-prev absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
          <span
            className="text-orange-500 text-3xl md:text-6xl font-bold 
            hover:text-black dark:hover:text-white transition"
          >
            &#8249;
          </span>
        </div>

        <div className="custom-next absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer">
          <span
            className="text-orange-500 text-3xl md:text-6xl font-bold 
            hover:text-black dark:hover:text-white transition"
          >
            &#8250;
          </span>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-300 text-lg">
              Loading Projects...
            </p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-red-500 text-lg">No Projects Found</p>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]}
            loop={projects.length > 1}
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-6 md:py-10 gap-6 md:gap-8">
                  {/* TEXT SECTION */}
                  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    {/* CATEGORY */}
                    <h5 className="text-orange-500 font-semibold text-sm md:text-base uppercase tracking-wide">
                      {project.category}
                    </h5>

                    {/* TITLE */}
                    <h1 className="text-2xl md:text-5xl font-bold leading-tight text-black dark:text-white transition">
                      {project.title}
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base transition leading-relaxed">
                      {project.project_description?.length > 50
                        ? `${project.project_description.slice(0, 50)}...`
                        : project.project_description}
                    </p>

                    {/* BUTTON */}
                    <button
                      className="flex items-center justify-center md:justify-start gap-2 
                      bg-orange-500 text-white px-5 md:px-6 py-2 rounded-lg 
                      hover:bg-black dark:hover:bg-white dark:hover:text-black 
                      transition mx-auto md:mx-0 cursor-pointer"
                      onClick={() =>
                        navigate(`/case-studies/${project.id}`, {
                          state: {
                            project: project,
                            projects: projects,
                          },
                        })
                      }
                    >
                      <IoEye />
                      <span>Details More</span>
                    </button>
                  </div>

                  {/* IMAGE SECTION */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={project.images?.[0]?.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover md:w-[80%] max-w-sm md:max-w-none rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default CaseStudySlider;
