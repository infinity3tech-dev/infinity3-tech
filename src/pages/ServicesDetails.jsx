// import React from "react";
// import bg from "./../assets/images/services-bg.jpg";
// import img from "./../assets/images/cs2.jpg";
// import servicesBottom from "./../assets/images/servicesBottom.jpg";
// import { servicesData } from "../data/servicesData";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { FaClipboardUser } from "react-icons/fa6";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { GrLocation } from "react-icons/gr";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import ServiceCard from "../components/ServiceCard";
// import techData from "../data/techData";

// const ServicesDetails = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const service = servicesData.find(
//     (item) => item.id === parseInt(id)
//   );

//   if (!service) {
//     return (
//       <h2 className="p-10 text-red-500">
//         Service Not Found
//       </h2>
//     );
//   }

//   const techMap = {
//     "Web Development": "Frontend Technology",
//     "Apps Development": "Mobile Technology",
//     "MERN/MEAN Stack Developer": "Backend Technology",
//     "Python Full Course": "Backend Technology",
//     "SEO Services": "Frontend Technology",
//     "SaaS Products": "Cloud & DevOps",
//   };

//   const relatedTech = techData.find(
//     (tech) => tech.title === techMap[service.title]
//   );

//   return (
//     <div className="bg-gray-50 pt-20 dark:bg-gray-900 transition-colors duration-300">

//       {/* HEADER */}
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
//           {service.title}
//         </h1>

//         <p className="text-sm md:text-base text-gray-500 mt-2 dark:text-gray-300">
//           Service /{" "}
//           <span className="text-orange-500">
//             {service.title}
//           </span>
//         </p>
//       </div>

//       {/* MAIN SECTION */}
//       <div className="bg-gray-100 dark:bg-gray-800 py-10 px-6 transition-colors duration-300">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

//           {/* LEFT CONTENT */}
//           <div className="lg:col-span-2 space-y-8">

//             {/* IMAGE */}
//             <img
//               src={bg}
//               alt="banner"
//               className="rounded-xl w-full"
//             />

//             {/* ABOUT */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">
//               <h2 className="text-lg font-semibold my-4 text-black dark:text-white">
//                 About this Service
//               </h2>

//               <p className="text-gray-600 dark:text-gray-300 leading-7">
//                 {service.desc}
//               </p>
//             </div>

//             {/* IMPORTANT FACTS */}
//             <div className="grid md:grid-cols-2 gap-6 items-center bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">

//               <img
//                 src={img}
//                 alt=""
//                 className="rounded-lg"
//               />

//               <div>
//                 <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
//                   Important Facts
//                 </h3>

//                 <ul className="space-y-2 text-gray-700 dark:text-gray-300">
//                   {[
//                     "The Field of Data Science",
//                     "The Problem",
//                     "The Solution",
//                     "The Skills",
//                     "Statistics",
//                     "Mathematics",
//                   ].map((item) => (
//                     <li key={item}>
//                       • {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             {/* DESCRIPTION */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">
//               <p className="text-gray-600 dark:text-gray-300 leading-7">
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking at its layout.
//                 The point of using Lorem Ipsum is that it has a more-or-less
//                 normal distribution of letters, making it look like readable
//                 English.
//               </p>
//             </div>

//             {/* APPLICATION AREAS */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">
//               <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
//                 Application Areas
//               </h3>

//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {[
//                   "Manufacturing",
//                   "Healthcare",
//                   "Automobile",
//                   "Banking",
//                   "Real Estate",
//                   "Logistics",
//                 ].map((item) => (
//                   <div
//                     key={item}
//                     className="bg-gray-200 dark:bg-gray-800 dark:text-white p-4 rounded-lg shadow text-center hover:bg-orange-500 hover:text-white transition"
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* TECHNOLOGIES */}
//             <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">

//               <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
//                 Technologies That We Use
//               </h3>

//               <div className="flex flex-wrap gap-3">
//                 {relatedTech ? (
//                   relatedTech.items.map((item, index) => (
//                     <p
//                       key={index}
//                       className="text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-white px-3 py-2 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-all"
//                     >
//                       {item}
//                     </p>
//                   ))
//                 ) : (
//                   <p className="text-gray-400 dark:text-gray-500">
//                     No related technologies found
//                   </p>
//                 )}
//               </div>
//             </div>

//             {/* BOTTOM IMAGE */}
//             <img
//               src={servicesBottom}
//               alt=""
//               className="rounded-xl"
//             />
//           </div>

//           {/* RIGHT SIDEBAR */}
//           <div className="space-y-8">

//             {/* OUR SERVICES */}
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">

//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//                 Our Services
//               </h3>

//               <ul className="space-y-3">
//                 {servicesData.map((item) => (
//                   <Link
//                     to={`/service-details/${item.id}`}
//                     key={item.id}
//                   >
//                     <li
//                       className="flex justify-between items-center px-4 py-3 text-black dark:text-white rounded-lg cursor-pointer 
//                       hover:bg-orange-500 hover:text-white transition duration-300 group"
//                     >
//                       <span className="text-sm font-medium">
//                         {item.title}
//                       </span>

//                       <MdOutlineKeyboardArrowRight
//                         size={20}
//                         className="transition-transform duration-300 group-hover:translate-x-1"
//                       />
//                     </li>
//                   </Link>
//                 ))}
//               </ul>
//             </div>

//             {/* TECHNOLOGY */}
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">

//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//                 Technology
//               </h3>

//               <div className="space-y-4">
//                 {techData.slice(0, 2).map((tech, i) => (
//                   <div key={i}>
//                     <h3 className="font-bold mb-3 text-black dark:text-white">
//                       {tech.title}
//                     </h3>

//                     <div className="flex flex-wrap gap-2">
//                       {tech.items.map((item, index) => (
//                         <p
//                           key={index}
//                           className="text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-white px-3 py-2 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-all"
//                         >
//                           {item}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* CONTACT INFO */}
//             <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">

//               <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//                 Contact Info
//               </h3>

//               <div className="space-y-4 text-sm">

//                 {/* PHONE */}
//                 <div
//                   className="flex items-start gap-3 px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl 
//                   hover:bg-orange-500 hover:text-white transition-all duration-300 group cursor-pointer"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
//                     <FaClipboardUser className="text-orange-500 text-lg" />
//                   </div>

//                   <div>
//                     <p className="text-xs font-bold text-black dark:text-white group-hover:text-orange-100">
//                       Phone Number
//                     </p>

//                     <p className="text-black dark:text-gray-300 group-hover:text-orange-100">
//                       +91 94092 59294
//                     </p>
//                   </div>
//                 </div>

//                 {/* ADDRESS */}
//                 <div
//                   className="flex items-start gap-3 px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl 
//                   hover:bg-orange-500 hover:text-white transition-all duration-300 group cursor-pointer"
//                 >
//                   <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
//                     <GrLocation className="text-orange-500 text-lg" />
//                   </div>

//                   <div>
//                     <p className="text-xs font-bold text-black dark:text-white group-hover:text-orange-100">
//                       Office Address
//                     </p>

//                     <p className="leading-relaxed text-black dark:text-gray-300 group-hover:text-orange-100">
//                       205, Emerald Complex, CG Road, Near Mithakhali,
//                       Navrangpura, Ahmedabad Gujarat 380009
//                     </p>
//                   </div>
//                 </div>

//                 {/* EMAIL */}
//                 <div
//                   className="flex items-start gap-3 px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl 
//                   hover:bg-orange-500 hover:text-white transition-all duration-300 group cursor-pointer"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
//                     <MdOutlineMailOutline className="text-orange-500 text-lg" />
//                   </div>

//                   <div>
//                     <p className="text-xs font-bold text-black dark:text-white group-hover:text-orange-100">
//                       Email Address
//                     </p>

//                     <p className="font-medium text-black dark:text-gray-300 group-hover:text-orange-100">
//                       infinity3tech@gmail.com
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* MORE SERVICES */}
//       <div className="max-w-7xl mx-auto mt-16 px-6">
//         <h2 className="text-2xl font-bold text-center mb-10 text-black dark:text-white">
//           More Services You Might Like
//         </h2>

//         <div className="max-w-7xl mx-auto px-6 pb-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {servicesData.slice(0, 3).map((item) => (
//             <ServiceCard
//               key={item.id}
//               item={item}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesDetails;

import React from "react";
import bg from "./../assets/images/services-bg.jpg";
import img from "./../assets/images/cs2.jpg";
import servicesBottom from "./../assets/images/servicesBottom.jpg";

import { servicesData } from "../data/servicesData";
import { Link, useParams } from "react-router-dom";

import { FaClipboardUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import ServiceCard from "../components/ServiceCard";
import techData from "../data/techData";

const ServicesDetails = () => {
  const { id } = useParams();

  const service = servicesData.find(
    (item) => item.id === parseInt(id)
  );

  if (!service) {
    return (
      <h2 className="p-10 text-red-500">
        Service Not Found
      </h2>
    );
  }

  return (
    <div className="bg-gray-50 pt-20 dark:bg-gray-900 transition-colors duration-300">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
          {service.title}
        </h1>

        <p className="text-sm md:text-base text-gray-500 mt-2 dark:text-gray-300">
          Service /{" "}
          <span className="text-orange-500">
            {service.title}
          </span>
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="bg-gray-100 dark:bg-gray-800 py-10 px-6 transition-colors duration-300">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-8">

            {/* IMAGE */}
            <img
              src={bg}
              alt="banner"
              className="rounded-xl w-full object-cover"
            />

            {/* ABOUT */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">

              <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">
                About this Service
              </h2>

              <p className="text-gray-600 dark:text-gray-300 leading-8">
                {service.desc}
              </p>
            </div>

            {/* IMPORTANT FACTS */}
            <div className="grid md:grid-cols-2 gap-6 items-center bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">

              <img
                src={img}
                alt=""
                className="rounded-xl h-full object-cover"
              />

              <div>
                <h3 className="text-2xl font-bold mb-5 text-black dark:text-white">
                  Important Facts
                </h3>

                <ul className="space-y-3">
                  {service.importantFacts?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">

              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                Why Choose This Service?
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-8">
                Our {service.title} service is designed to provide
                industry-level solutions with modern technologies,
                real-world experience, scalability, and performance.
                We focus on quality, innovation, and delivering
                user-friendly solutions that help businesses and
                individuals grow faster in the digital world.
              </p>
            </div>

            {/* APPLICATION AREAS */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">

              <h3 className="text-2xl font-bold mb-5 text-black dark:text-white">
                Application Areas
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {service.applicationAreas?.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 dark:text-white p-4 rounded-xl shadow-sm text-center font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}

              </div>
            </div>

            {/* TECHNOLOGIES */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 p-6">

              <h3 className="text-2xl font-bold mb-5 text-black dark:text-white">
                Technologies That We Use
              </h3>

              <div className="flex flex-wrap gap-3">

                {service.technologiesUsed?.map((item, index) => (
                  <p
                    key={index}
                    className="text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-white px-4 py-2 rounded-lg shadow-sm hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </p>
                ))}

              </div>
            </div>

            {/* BOTTOM IMAGE */}
            <img
              src={servicesBottom}
              alt=""
              className="rounded-xl w-full object-cover"
            />
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-8">

            {/* OUR SERVICES */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-5">
                Our Services
              </h3>

              <ul className="space-y-3">

                {servicesData.map((item) => (
                  <Link
                    to={`/service-details/${item.id}`}
                    key={item.id}
                  >
                    <li
                      className="flex justify-between items-center px-4 py-3 text-black dark:text-white rounded-xl cursor-pointer 
                      hover:bg-orange-500 hover:text-white transition duration-300 group"
                    >
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>

                      <MdOutlineKeyboardArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </li>
                  </Link>
                ))}

              </ul>
            </div>

            {/* TECHNOLOGY */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-5">
                Technology
              </h3>

              <div className="space-y-5">

                {techData.slice(0, 2).map((tech, i) => (
                  <div key={i}>

                    <h3 className="font-bold mb-3 text-black dark:text-white">
                      {tech.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">

                      {tech.items.map((item, index) => (
                        <p
                          key={index}
                          className="text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-white px-3 py-2 rounded-md shadow-sm hover:bg-orange-500 hover:text-white transition-all"
                        >
                          {item}
                        </p>
                      ))}

                    </div>
                  </div>
                ))}

              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-5">
                Contact Info
              </h3>

              <div className="space-y-4 text-sm">

                {/* PHONE */}
                <div
                  className="flex items-start gap-3 px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl 
                  hover:bg-orange-500 hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
                    <FaClipboardUser className="text-orange-500 text-lg" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-black dark:text-white group-hover:text-orange-100">
                      Phone Number
                    </p>

                    <p className="text-black dark:text-gray-300 group-hover:text-orange-100">
                      +91 94092 59294
                    </p>
                  </div>
                </div>

                {/* ADDRESS */}
                <div
                  className="flex items-start gap-3 px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl 
                  hover:bg-orange-500 hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
                    <GrLocation className="text-orange-500 text-lg" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-black dark:text-white group-hover:text-orange-100">
                      Office Address
                    </p>

                    <p className="leading-relaxed text-black dark:text-gray-300 group-hover:text-orange-100">
                      205, Emerald Complex, CG Road, Near Mithakhali,
                      Navrangpura, Ahmedabad Gujarat 380009
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div
                  className="flex items-start gap-3 px-4 py-4 bg-gray-50 dark:bg-gray-800 rounded-xl 
                  hover:bg-orange-500 hover:text-white transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm">
                    <MdOutlineMailOutline className="text-orange-500 text-lg" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-black dark:text-white group-hover:text-orange-100">
                      Email Address
                    </p>

                    <p className="font-medium text-black dark:text-gray-300 group-hover:text-orange-100">
                      infinity3tech@gmail.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* MORE SERVICES */}
      <div className="max-w-7xl mx-auto mt-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
          More Services You Might Like
        </h2>

        <div className="max-w-7xl mx-auto px-6 pb-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {servicesData
            .filter((item) => item.id !== service.id)
            .slice(0, 3)
            .map((item) => (
              <ServiceCard
                key={item.id}
                item={item}
              />
            ))}

        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;