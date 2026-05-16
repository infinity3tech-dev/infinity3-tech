import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import heroImg from "../assets/images/hero.png";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const heroData = [
  {
    title: "Providing the Best IT Solutions for Your Business",
    desc: "Empowering businesses with modern IT solutions, web development, and innovative digital services for long-term growth and success.",
    image: heroImg,
  },
  {
    title: "Web Development",
    desc: "We create responsive, modern, and high-performance websites using the latest technologies to give your business a strong online presence.",
    image: heroImg,
  },
  {
    title: "Digital Marketing Solutions",
    desc: "Grow your brand with SEO, social media marketing, and paid campaigns that drive real traffic and conversions.",
    image: heroImg,
  },
  {
    title: "Internship & Training Programs",
    desc: "Get industry-ready with our hands-on internship programs in React, Java, Python, MERN Stack, and more.",
    image: heroImg,
  },
];

const Hero = () => {
  const navigate = useNavigate();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full min-h-screen mt-10 pt-20 overflow-hidden bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative">
          {/* PREV BUTTON */}
          <button
            ref={prevRef}
            className="
              absolute
              left-2 md:left-2 lg:left-5
              top-[78%] md:top-1/2
              md:-translate-y-1/2
              text-orange-500
              text-4xl md:text-6xl
              font-bold
              transition-all duration-300
              hover:text-orange-600
              z-20
              cursor-pointer
            "
          >
            &#8249;
          </button>

          {/* NEXT BUTTON */}
          <button
            ref={nextRef}
            className="
              absolute
              right-2 md:right-2 lg:right-5
              top-[78%] md:top-1/2
              md:-translate-y-1/2
              text-orange-500
              text-4xl md:text-6xl
              font-bold
              transition-all duration-300
              hover:text-orange-600
              z-20
              cursor-pointer
            "
          >
            &#8250;
          </button>

          {/* SWIPER */}
          <div className="px-2 sm:px-4 md:px-10 lg:px-16">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={true}
              autoplay={{
                delay: 10000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                if (
                  typeof swiper.params.navigation !== "boolean" &&
                  swiper.params.navigation
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }
              }}
            >
              {heroData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[70vh] py-10">
                    {/* LEFT CONTENT */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                      className="text-center md:text-left"
                    >
                      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h1>

                      <p className="mt-5 text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                        {item.desc}
                      </p>

                      <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        {/* ABOUT BUTTON */}
                        <button
                          className="
                            bg-orange-500
                            text-white
                            px-6 py-3
                            rounded-md
                            hover:bg-black
                            dark:hover:bg-white
                            dark:hover:text-black
                            transition-all duration-300
                            cursor-pointer
                          "
                          onClick={() => navigate("/about")}
                        >
                          About Us
                        </button>

                        {/* WATCH VIDEO */}
                        <button
                          className="flex items-center gap-3 justify-center group"
                          onClick={() =>
                            window.open(
                              "https://youtube.com/@infinity3technology",
                              "_blank"
                            )
                          }
                        >
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-md relative group-hover:bg-orange-500 transition">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-20 animate-ping"></span>

                            <FaPlay className="text-orange-500 group-hover:text-white" />
                          </div>

                          <span className="text-orange-500 font-semibold uppercase text-sm md:text-base group-hover:text-black dark:group-hover:text-white">
                            Watch Video
                          </span>
                        </button>
                      </div>
                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7 }}
                      className="flex justify-center"
                    >
                      <motion.img
                        src={item.image}
                        alt="hero"
                        className="w-[85%] md:w-full max-w-sm md:max-w-lg"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 5,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;