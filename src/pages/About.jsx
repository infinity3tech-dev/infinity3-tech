import React from "react";
import aboutUs from "./../assets/images/aboutUs.png";
import AboutUs from "../components/AboutUs";
import { MdOutlineDone } from "react-icons/md";
import OurHistory from "../components/OurHistory";
import DataScienceProcess from "../components/DataScienceProcess";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 pt-16 md:pt-20 overflow-hidden">
      
      <PageHeader title="About Us" />
      <AboutUs showButton={false} />

      {/* INFO CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* OUR HISTORY */}
          <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-black dark:text-white text-xl md:text-2xl font-bold mb-3">
              Our History
            </h3>

            <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base mb-5 leading-relaxed">
              Infinity3 Technology was founded with a vision to provide
              innovative IT solutions and practical training to students and
              businesses. 
            </p>

            <ul className="space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Founded with a vision for digital innovation</span>
              </li>

              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Successfully delivered multiple client projects</span>
              </li>

              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Expanded into training and internship programs</span>
              </li>

              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Focused on continuous growth and innovation</span>
              </li>
            </ul>
          </div>

          {/* OUR MISSION */}
          <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-black dark:text-white text-xl md:text-2xl font-bold mb-3">
              Our Mission
            </h3>

            <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base mb-5 leading-relaxed">
              Our mission is to empower students and businesses with modern
              technology skills and innovative digital solutions.
            </p>

            <ul className="space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Deliver quality IT education</span>
              </li>

              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Build career-ready professionals</span>
              </li>

              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Provide innovative solutions</span>
              </li>

              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Support business transformation</span>
              </li>
            </ul>
          </div>

          {/* WHO WE ARE */}
          <div className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-black dark:text-white text-xl md:text-2xl font-bold mb-3">
              Who We Are
            </h3>

            <p className="text-gray-500 dark:text-gray-300 text-sm md:text-base mb-5 leading-relaxed">
              We are a team of passionate developers, trainers, and technology
              experts dedicated to delivering high-quality IT services and
              training.
            </p>

            <ul className="space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Skilled & certified team</span>
              </li>

              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Client-focused approach</span>
              </li>

              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Hands-on training model</span>
              </li>

              <li className="flex items-start gap-2">
                <MdOutlineDone className="text-lg text-orange-500 shrink-0 mt-1" />
                <span>Commitment to excellence</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <OurHistory /> */}
      <DataScienceProcess />
      <Team limit={4} showHeader={true} />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default About;
