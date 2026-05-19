import React from "react";
import cta from "./../assets/images/cta.webp";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 md:py-14 lg:py-16 bg-gray-100 dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={cta}
              alt="CTA PNG"
              width="600"
              height="500"
              loading="lazy"
              decoding="async"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug transition-colors duration-300">
              We Like to Start Your Project With Us
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              We are ready to help you bring your project to life with modern
              design and reliable development. Share your idea with us and we’ll
              turn it into a working solution.
            </p>

            <button
              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-black dark:hover:bg-orange-600 transition duration-300 cursor-pointer"
              onClick={() => navigate("/contact-us")}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
