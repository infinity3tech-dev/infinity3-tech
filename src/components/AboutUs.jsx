import React from "react";
import aboutImg from "./../assets/images/aboutUs.png";
import Star from "./../assets/images/star-icon.png";
import icon1 from "./../assets/images/icon1.png";
import icon2 from "./../assets/images/icon2.png";
import icon3 from "./../assets/images/icon3.png";
import icon4 from "./../assets/images/icon4.png";
import { useNavigate } from "react-router-dom";

const AboutUs = ({ showButton = true }) => {
  const navigate = useNavigate();

  const statsData = [
    { id: 1, icon: icon1, title: "4 Years", desc: "On the market" },
    { id: 2, icon: icon2, title: "10+", desc: "Team members" },
    { id: 3, icon: icon3, title: "90%", desc: "Satisfaction rate" },
    { id: 4, icon: icon4, title: "50+", desc: "Happy Customers" },
  ];

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center order-1">
            <img
              src={aboutImg}
              alt="About"
              className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg object-cover rounded-2xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-2 text-center lg:text-left">
            {/* SMALL TITLE */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <img
                src={Star}
                alt="Star Icon"
                className="w-4 sm:w-5 animate-[float_4s_ease-in-out_infinite]"
              />

              <p className="text-orange-500 font-bold uppercase tracking-wide text-xs sm:text-sm">
                About Us
              </p>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 leading-tight text-gray-800 dark:text-white">
              Why our customers choose working with us
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-5 text-sm sm:text-base leading-7 text-gray-500 dark:text-gray-300">
              High standards in products or services that meet or exceed
              expectations. A proven track record and positive reputation,
              building confidence among clients.
            </p>

            {/* STATS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-8">
              {statsData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 rounded-xl transition-all duration-300 hover:border-orange-500 hover:shadow-lg cursor-pointer"
                >
                  {/* ICON */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="text-left">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* BOTTOM DESCRIPTION */}
            <p className="mt-6 text-sm sm:text-base leading-7 text-gray-500 dark:text-gray-300">
             We leverage cutting-edge technologies to deliver innovative and customized solutions tailored to modern business needs. Our approach centers on building powerful strategies that enhance operational efficiency, elevate user experience, and address complex real-world challenges. By integrating advanced tools with creative thinking, we empower organizations to achieve sustainable growth and maintain a competitive edge.
            </p>

            {/* BUTTON */}
            {showButton && (
              <div className="mt-8 flex justify-center lg:justify-start">
                <button
                  onClick={() => navigate("/about")}
                  className="bg-orange-500 text-white px-6 sm:px-8 py-3 rounded-lg transition duration-300 text-sm sm:text-base font-medium shadow-md hover:bg-black dark:hover:bg-white dark:hover:text-black cursor-pointer"
                >
                  More About Us
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
