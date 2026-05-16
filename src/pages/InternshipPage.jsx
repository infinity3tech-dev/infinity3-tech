import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import internshipData from "../data/internshipData";
import reviewData from "../data/reviewData";
import InternshipCard from "../components/InternshipCard";
import PageHeader from "../components/PageHeader";

const InternshipPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-12 md:py-20 overflow-hidden transition-colors duration-300">
      
      {/* ================= PAGE HEADER ================= */}
      <PageHeader title="Internship" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION TITLE ================= */}
        <div className="text-center mb-10 md:mb-14">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-snug">
            Internship Opportunities
          </h2>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3">
            Explore internships and start your career journey
          </p>
        </div>

        {/* ================= INTERNSHIP SLIDER ================= */}
        <div className="relative">

          {/* LEFT BUTTON */}
          <button
            className="intern-prev absolute left-0 md:left-2 lg:left-4 top-1/2 -translate-y-1/2 
            z-20 bg-orange-500 hover:bg-orange-600 text-white 
            w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
            rounded-full shadow-lg flex items-center justify-center transition"
          >
            <MdOutlineKeyboardArrowLeft size={26} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            className="intern-next absolute right-0 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 
            z-20 bg-orange-500 hover:bg-orange-600 text-white 
            w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
            rounded-full shadow-lg flex items-center justify-center transition"
          >
            <MdOutlineKeyboardArrowRight size={26} />
          </button>

          {/* SWIPER */}
          <div className="px-8 sm:px-10 md:px-14 lg:px-16">

            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              centeredSlides={false}
              loop={true}
              speed={800}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: ".intern-next",
                prevEl: ".intern-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },

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
              {internshipData.map((item) => (
                <SwiperSlide key={item.id}>
                  <InternshipCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* ================= REVIEW SECTION ================= */}
        <div className="bg-white dark:bg-gray-900 mt-16 md:mt-24 rounded-3xl shadow-sm py-12 md:py-16 transition-colors duration-300">

          {/* REVIEW TITLE */}
          <div className="text-center mb-10">
            
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
              What Our Interns Say
            </h2>

            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-3">
              Real experiences from our students
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

            {/* LEFT BUTTON */}
            <button
              className="review-prev absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 
              z-20 bg-orange-500 hover:bg-orange-600 text-white 
              w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-lg 
              flex items-center justify-center transition"
            >
              <MdOutlineKeyboardArrowLeft size={22} />
            </button>

            {/* RIGHT BUTTON */}
            <button
              className="review-next absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 
              z-20 bg-orange-500 hover:bg-orange-600 text-white 
              w-9 h-9 sm:w-10 sm:h-10 rounded-full shadow-lg 
              flex items-center justify-center transition"
            >
              <MdOutlineKeyboardArrowRight size={22} />
            </button>

            {/* REVIEW SWIPER */}
            <div className="px-8 sm:px-10 md:px-12">

              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={24}
                loop={true}
                speed={800}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".review-next",
                  prevEl: ".review-prev",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },

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
                {reviewData.map((item) => (
                  <SwiperSlide key={item.id}>

                    <div
                      className="bg-gray-100 dark:bg-gray-800 
                      min-h-[240px] p-5 md:p-6 rounded-2xl 
                      shadow-md hover:shadow-2xl 
                      transition-all duration-300 flex flex-col"
                    >

                      {/* USER */}
                      <div className="flex items-center gap-4 mb-5">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-orange-400"
                        />

                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">
                            {item.name}
                          </h4>

                          <p className="text-xs md:text-sm text-orange-500">
                            {item.technology}
                          </p>
                        </div>
                      </div>

                      {/* REVIEW TEXT */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic line-clamp-5">
                        “{item.text}”
                      </p>
                    </div>

                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipPage;