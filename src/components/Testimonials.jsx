import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import star from "./../assets/images/star-icon.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import reviewData from "../data/reviewData";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex justify-center items-center gap-2">
            <img
              src={star}
              alt="star"
              className="w-6 animate-[float_4s_ease-in-out_infinite]"
            />
            <p className="text-orange-500 font-semibold uppercase text-sm">
              Testimonials
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white transition">
            What Our Students Are Saying?
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-4 transition">
            Hear from our internship students who gained real-world experience
            and improved their development skills through live projects and
            professional mentorship.
          </p>
        </div>

        {/* SLIDER */}
        <div className="mt-12">
          {/* NAVIGATION BUTTONS */}
          <div className="relative mt-12">
            <button
              className="prev-btn absolute -top-15 left-0  bg-orange-500 dark:bg-orange-500 
              text-white dark:text-white shadow-md w-10 h-10 rounded-full flex justify-center items-center  hover:bg-white hover:text-orange-500 transition"
            >
              <MdOutlineKeyboardArrowLeft size={23} />
            </button>

            <button
              className="next-btn absolute -top-15 right-0 bg-orange-500 dark:bg-orange-500 
              text-white dark:text-white shadow-md w-10 h-10 rounded-full flex justify-center items-center hover:bg-white hover:text-orange-500 transition"
            >
              <MdOutlineKeyboardArrowRight size={23} />
            </button>
          </div>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {reviewData.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-gray-100 dark:bg-gray-800 
      min-h-[240px] p-5 md:p-6 rounded-2xl 
      shadow-md hover:shadow-2xl 
      transition-all duration-300 flex flex-col
      hover:-translate-y-2"
                >
                  {/* USER */}
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-orange-400"
                    />

                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white text-sm md:text-base transition">
                        {item.name}
                      </h4>

                      <p className="text-xs md:text-sm text-orange-500 font-medium transition">
                        {item.technology}
                      </p>
                    </div>
                  </div>

                  {/* REVIEW TEXT */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic line-clamp-5 transition">
                    “{item.text}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
