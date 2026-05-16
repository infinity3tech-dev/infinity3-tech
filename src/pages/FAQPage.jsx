import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import CTA from "../components/CTA";
import PageHeader from "../components/PageHeader";
const faqData = [
  {
    id: 1,
    question: "What services does Infinity3 Technology provide?",
    answer:
      "We provide complete IT solutions including web development, mobile app development, digital marketing, SEO services, SaaS products, and IT training programs.",
  },
  {
    id: 2,
    question: "Do you offer internship or training programs?",
    answer:
      "Yes, we offer hands-on internship and training programs in technologies like React, Node.js, Python, and full-stack development with real project experience.",
  },
  {
    id: 3,
    question: "Do you build custom websites and applications?",
    answer:
      "Yes, we specialize in building fully customized websites and mobile applications based on client requirements with modern design and scalable architecture.",
  },
  {
    id: 4,
    question: "Do you provide support after project delivery?",
    answer:
      "Yes, we provide ongoing maintenance, updates, and technical support to ensure smooth performance of your website or application.",
  },
  {
    id: 5,
    question: "How can I start a project with your company?",
    answer:
      "You can contact us through our website or inquiry form. Our team will analyze your requirements and guide you through the complete development process.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 pt-20 sm:pt-24 md:pt-28 overflow-hidden dark:bg-gray-900">
      
      {/* HEADER */}
      <PageHeader title="Frequently Asked Questions" />

      {/* FAQ SECTION */}
      <div className="max-w-4xl mx-auto py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        
        {/* TITLE */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Find answers to common questions about our services, courses, and
            internships.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition duration-300 hover:shadow-md"
            >
              
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-start justify-between gap-4 p-4 sm:p-5 md:p-6 text-left"
              >
                <span className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base md:text-lg leading-6">
                  {item.question}
                </span>

                <FaChevronDown
                  className={`min-w-[18px] text-sm sm:text-base text-orange-500 transition-transform duration-300 mt-1 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              <div
                className={`transition-all duration-300 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <div className="px-4 sm:px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-7">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default FAQ;