import React from "react";
import { useParams, Link } from "react-router-dom";
import techData from "../data/techData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const TechnologyDetails = () => {
  const { slug } = useParams();

  const technology = techData.find((tech) => {
    const techSlug = tech.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return techSlug === slug;
  });

  if (!technology) {
    return <h2 className="p-10 text-red-500">Technology Not Found</h2>;
  }

  const allTechnologies = technology.items;

  return (
    <div className="bg-gray-50 pt-16 md:pt-20 overflow-hidden dark:bg-gray-900">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug dark:text-white">
          {technology.title}
        </h1>

        <p className="text-sm md:text-base text-gray-500 mt-2 dark:text-gray-200">
          Technology /{" "}
          <span className="text-orange-500">{technology.title}</span>
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="bg-gray-100 dark:bg-gray-900 py-8 md:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* ABOUT */}
            <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-2xl shadow-md border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-black dark:text-white ">
                About {technology.title}
              </h2>

              <p className="text-gray-700 leading-7 dark:text-gray-200 md:leading-8 text-sm md:text-base tracking-wide">
                {technology.description}
              </p>

              {/* TECHNOLOGY SWIPER */}
              <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-10">
                {/* LEFT BUTTON */}
                <button
                  className="tech-prev absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 
    bg-orange-500 text-white shadow-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full 
    flex justify-center items-center hover:bg-orange-600 transition z-10"
                >
                  <MdOutlineKeyboardArrowLeft size={20} />
                </button>

                {/* RIGHT BUTTON */}
                <button
                  className="tech-next absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 
    bg-orange-500 text-white shadow-lg w-8 h-8 sm:w-10 sm:h-10 rounded-full 
    flex justify-center items-center hover:bg-orange-600 transition z-10"
                >
                  <MdOutlineKeyboardArrowRight size={20} />
                </button>

                {/* SWIPER */}
                <div className="px-8 sm:px-10 md:px-12">
                  <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      nextEl: ".tech-next",
                      prevEl: ".tech-prev",
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 1.2,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {allTechnologies.map((item, i) => {
                      const itemSlug = item
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-+|-+$/g, "");

                      return (
                        <SwiperSlide key={i}>
                          <Link to={`/course-details/${itemSlug}`}>
                            <div
                              className="bg-gray-200 min-h-[180px] p-5 md:p-6 rounded-xl 
                shadow-md hover:shadow-xl transition duration-300 
                flex flex-col justify-center items-center text-center
                hover:bg-orange-500 group cursor-pointer dark:bg-gray-600"
                            >
                              {/* TITLE */}
                              <h3
                                className="font-bold text-gray-800 dark:text-gray-200 text-lg md:text-xl 
                  group-hover:text-white transition"
                              >
                                {item}
                              </h3>

                              {/* SMALL TEXT */}
                              <p
                                className="text-sm text-gray-600 mt-2 
                  group-hover:text-orange-100 dark:text-gray-200 transition"
                              >
                                Explore complete Course
                              </p>
                            </div>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>

            {/* FEATURES + WHY LEARN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 dark:bg-gray-900">
              {/* FEATURES */}
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
                  Features
                </h3>

                <ul className="space-y-3">
                  {technology.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-700 text-sm md:text-base dark:text-gray-200"
                    >
                      <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full shrink-0"></span>

                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHY LEARN */}
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
                  Why Learn It?
                </h3>

                <p className="text-gray-600 leading-7 text-sm md:text-base dark:text-gray-200">
                  {technology.title} is widely used in modern industry and helps
                  you build scalable real-world applications.
                </p>
              </div>
            </div>

            {/* USE CASES + RIGHT CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 dark:bg-gray-900">
              {/* USE CASES */}
              <div className="lg:col-span-2 bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 dark:bg-gray-800">
                <h3 className="text-xl text-black font-bold mb-4 dark:text-white">
                  Use Cases
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {technology.useCases.map((u, i) => (
                    <div
                      key={i}
                      className="bg-gray-100 p-3 rounded-lg text-center text-sm md:text-base hover:bg-orange-500 hover:text-white transition dark:text-gray-800"
                    >
                      {u}
                    </div>
                  ))}
                </div>
              </div>

              {/* SIDE CONTENT */}
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 h-fit dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-black mb-3 dark:text-white">
                  Why Choose This Technology?
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-6 md:leading-7 dark:text-gray-200">
                  Mastering {technology.title} improves your skills and opens
                  career opportunities in modern software development.
                </p>
              </div>
            </div>

            {/* ROADMAP */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 dark:bg-gray-800">
              <h3 className="text-xl text-black font-bold mb-4 dark:text-white">
                Learning Roadmap
              </h3>

              <ol className="space-y-4">
                {technology.roadmap.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-700 text-sm md:text-base dark:text-gray-200"
                  >
                    <span className="font-bold text-orange-500 shrink-0 dark:text-gray-200">
                      {i + 1}.
                    </span>

                    <span>{r}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* PROJECTS */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-md border border-gray-100 dark:bg-gray-800">
              <h3 className="text-xl font-bold text-black mb-4 dark:text-white">
                Project Ideas
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {technology.projects.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 bg-gray-50 rounded-xl border 
                    hover:bg-orange-500 hover:text-white transition 
                    cursor-pointer text-sm md:text-base dark:text-gray-800"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyDetails;
