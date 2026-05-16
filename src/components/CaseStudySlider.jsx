import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import case1 from "./../assets/images/casestudy1.jpg";
import case2 from "./../assets/images/casestudy2.jpg";
import { IoEye } from "react-icons/io5";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
const CaseStudySlider = () => {
  const navigate = useNavigate();

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

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        >
          {/* SLIDE 1 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] md:min-h-[70vh] px-4 md:px-16 py-10 gap-8">

              {/* TEXT */}
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h5 className="text-orange-500 font-semibold text-sm md:text-base">
                  CASE STUDY #1
                </h5>

                <h1 className="text-2xl md:text-5xl font-bold leading-tight text-black dark:text-white transition">
                  Data Science in Pharmaceutical Industries
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base transition">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <button
                  className="flex items-center justify-center md:justify-start gap-2 
                  bg-orange-500 text-white px-5 md:px-6 py-2 rounded-lg 
                  hover:bg-black dark:hover:bg-white dark:hover:text-black 
                  transition mx-auto md:mx-0"
                  onClick={() => navigate("/case-studies/")}
                >
                  <IoEye />
                  <span>Details More</span>
                </button>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={case1}
                  alt="case1"
                  className="w-[90%] md:w-[80%] max-w-sm md:max-w-none rounded-xl shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide>
            <div className="flex flex-col md:flex-row items-center justify-between min-h-[60vh] md:min-h-[70vh] px-4 md:px-16 py-10 gap-8">

              {/* TEXT */}
              <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                <h5 className="text-orange-500 font-semibold text-sm md:text-base">
                  CASE STUDY #2
                </h5>

                <h1 className="text-2xl md:text-5xl font-bold leading-tight text-black dark:text-white transition">
                  Mathematics, Advanced Statistics in Python
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base transition">
                  AI helps doctors diagnose diseases faster and more accurately.
                </p>

                <button
                  className="flex items-center justify-center md:justify-start gap-2 
                  bg-orange-500 text-white px-5 md:px-6 py-2 rounded-lg 
                  hover:bg-black dark:hover:bg-white dark:hover:text-black 
                  transition mx-auto md:mx-0"
                  onClick={() => navigate("/case-studies/")}
                >
                  <IoEye />
                  <span>Details More</span>
                </button>
              </div>

              {/* IMAGE */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={case2}
                  alt="case2"
                  className="w-[90%] md:w-[80%] max-w-sm md:max-w-none rounded-xl shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CaseStudySlider;