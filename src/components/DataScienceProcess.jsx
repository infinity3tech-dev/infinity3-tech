import React from "react";
import step1 from "./../assets/images/step1.png";
import step2 from "./../assets/images/step2.png";
import step3 from "./../assets/images/step3.png";
import step4 from "./../assets/images/step4.png";
import step5 from "./../assets/images/step5.png";
import step6 from "./../assets/images/step6.png";
import Star from "./../assets/images/star-icon.png";
import {
  FaLightbulb, 
  FaShieldAlt,
  FaUsers,
  FaBullseye,
  FaAward, 
  FaSyncAlt, 
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Innovative and Cutting-Edge Approach",
    desc: "We use technology in a strategic manner to address actual business issues and produce quantifiable business contribution. All of our solutions are based on performance, scalability, and long-term value to make certain that innovation is presented with practical benefits.",
    icon: FaLightbulb,
  },
  {
    id: 2,
    title: "Integrity Through Our Processes",
    desc: "Our delivery approach is characterized by transparency and accountability. We have effective communication, clear expectations, and well-organized work processes, which allow our clients to have confidence in the way we do things and deliver results, as well as ensure that there is consistency, & reliability in all projects.",
    icon: FaShieldAlt,
  },
  {
    id: 3,
    title: "We Work Together",
    desc: "Teamwork is the result of our success. We work in close collaboration with the clients and other stakeholders in order to make technical decisions in line with the business objectives, which are practical, relevant and have the potential to achieve measurable output in the real-life situations.",
    icon: FaUsers,
  },
  {
    id: 4,
    title: "Client-Driven Solutions",
    desc: "We build solutions based on business goals and requirements of the end-users. Our centrality of clients in all decisions also enables us to develop systems that result in quantifiable performance returns and long term sustainable growth even in changing market environments.",
    icon: FaBullseye,
  },
  {
    id: 5,
    title: "Approach with Excellence",
    desc: "Our planning, design, development and deployment processes incorporate quality. Our focus is to develop safe, scalable, and high-performance systems that are always reliable, flexible and efficient as organizations grow and business requirements change.",
    icon: FaAward,
  },
  {
    id: 6,
    title: "Agile and Adaptive",
    desc: "Our agile approach allows us to react quickly to changing requirements and remain on track. We achieve this by maintaining constant refinement and adaptive execution of projects so that they provide steady improvement, operational effectiveness.",
    icon: FaSyncAlt,
  },
];

export default function DataScienceProcess() {
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2">
            <img
              src={Star}
              alt="Star Icon"
              className="w-5 animate-[float_4s_ease-in-out_infinite]"
            />

            <p className="text-sm font-bold text-orange-500 uppercase">
              How It Work
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mt-3">
            Our Core Values
          </h2>

          <p className="text-gray-400 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
            We follow a structured and transparent approach to deliver
            high-quality, scalable, and reliable software solutions that drive
            real business growth.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 
                border border-gray-200 dark:border-gray-700
                hover:border-orange-500 hover:shadow-md hover:-translate-y-1
                transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 flex items-center justify-center 
                  rounded-lg bg-orange-200 dark:bg-orange-900/40 
                  text-orange-500 text-xl mb-4"
                >
                  <Icon />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
