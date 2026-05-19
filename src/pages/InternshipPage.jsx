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
import Testimonials from "../components/Testimonials";

const InternshipPage = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-950 py-15 md:py-26 overflow-hidden transition-colors duration-300">
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
            rounded-full shadow-lg flex items-center justify-center transition cursor-pointer"
          >
            <MdOutlineKeyboardArrowLeft size={26} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            className="intern-next absolute right-0 md:right-2 lg:right-4 top-1/2 -translate-y-1/2 
            z-20 bg-orange-500 hover:bg-orange-600 text-white 
            w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 
            rounded-full shadow-lg flex items-center justify-center transition cursor-pointer"
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
        <Testimonials
          title="What Our Interns Are Saying?"
          subtitle="Hear from our interns who gained real-world experience and improved their development skills through live projects and mentorship."
        />
      </div>
    </section>
  );
};

export default InternshipPage;
