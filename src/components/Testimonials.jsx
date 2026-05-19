import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import star from "./../assets/images/star-icon.webp";
import { toast } from "react-toastify";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaTimes } from "react-icons/fa";

const Testimonials = ({ title, subtitle }) => {
  
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
  const fetchTestimonials = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${VITE_BASE_URL}/testimonials/`);

      if (!response.ok) {
        throw new Error("Failed to fetch testimonials");
      }

      const result = await response.json();

      setTestimonials(result.data || []);
    } catch (err) {
      console.error(err);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);



  return (
    <>
      <section className="py-10 md:py-16 bg-gray-100 dark:bg-gray-900 transition-all duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex justify-center items-center gap-2">
              <img
                src={star}
                alt="star"
                width="24"
                height="24"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-6 animate-[float_4s_ease-in-out_infinite]"
              />

              <p className="text-orange-500 font-semibold uppercase text-sm tracking-wide">
                Testimonials
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-800 dark:text-white leading-tight">
              {title}
            </h2>

            <p className="text-gray-500 dark:text-gray-300 mt-4 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* SLIDER */}
          <div className="mt-16 relative">
            {/* PREV BUTTON */}
            <button
              className="
              prev-btn
              absolute left-0 top-1/2 -translate-y-1/2 z-10
              w-11 h-11
              rounded-full
              shadow-lg
              border border-gray-200
              flex items-center justify-center
              bg-orange-500 text-white
              transition-all duration-300
              cursor-pointer
              "
            >
              <MdOutlineKeyboardArrowLeft size={24} />
            </button>

            {/* NEXT BUTTON */}
            <button
              className="
              next-btn
              absolute right-0 top-1/2 -translate-y-1/2 z-10
              w-11 h-11
              rounded-full
              shadow-lg
              border border-gray-200
              flex items-center justify-center
              bg-orange-500 text-white
              transition-all duration-300
              cursor-pointer
              "
            >
              <MdOutlineKeyboardArrowRight size={24} />
            </button>

            {/* LOADING */}
            {loading && (
              <div className="text-center text-gray-500 dark:text-gray-300 py-10">
                Loading testimonials...
              </div>
            )}

            {/* ERROR */}
            {error && (
              <div className="text-center text-red-500 py-10">{error}</div>
            )}

            {/* SWIPER */}
            {!loading && !error && testimonials.length > 0 && (
              <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={25}
                slidesPerView={1}
                loop={testimonials.length > 3}
                speed={1000}
                observer={true}
                observeParents={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: false,
                }}
                navigation={{
                  nextEl: ".next-btn",
                  prevEl: ".prev-btn",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="px-2 sm:px-6"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div
                      className="
                      bg-white dark:bg-gray-800
                      rounded-3xl
                      border border-gray-200 dark:border-gray-700
                      shadow-md hover:shadow-2xl
                      transition-all duration-500
                      p-6
                      min-h-[260px]
                      flex flex-col
                      hover:-translate-y-2
                      "
                    >
                      {/* USER */}
                      <div className="flex items-center gap-4 mb-5">
                        <img
                          src={item.profile_image}
                          alt={item.full_name}
                          width="60"
                          height="60"
                          loading="lazy"
                          decoding="async"
                          className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
                        />

                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white text-base">
                            {item.full_name}
                          </h4>

                          <p className="text-sm text-orange-500 font-medium mt-1">
                            {item.designation}
                          </p>
                        </div>
                      </div>

                      {/* FEEDBACK */}
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed italic">
                        “{item.feedback}”
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
      
        </div>
      </section>
    </>
  );
};

export default Testimonials;
