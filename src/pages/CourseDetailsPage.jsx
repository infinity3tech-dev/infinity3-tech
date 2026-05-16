import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import bg from "./../assets/images/course-details-bg.jpg";
import CourseCard from "../components/CourseCard";
import courses from "../data/coursesData";
import {
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CourseDetailsPage = () => {
  const { slug } = useParams();
  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("curriculum");
  const [showModal, setShowModal] = useState(false);
  const [sidebarLoading, setSidebarLoading] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  const [modalFormData, setModalFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
  });

  const [sidebarFormData, setSidebarFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
  });

  const [sidebarErrors, setSidebarErrors] = useState({});
  const [modalErrors, setModalErrors] = useState({});
  const course = courses.find((item) => item.slug === slug);

  const inputClass =
    "w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-400";

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          Course Not Found
        </h1>
      </div>
    );
  }

  const validateForm = (data) => {
    const errors = {};

    // NAME
    if (!data.fullName || data.fullName.trim().length < 3) {
      errors.fullName = "Name must be at least 3 characters";
    }

    // EMAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = "Enter a valid email address";
    }

    // CONTACT
    const phoneRegex = /^[0-9]{10}$/;

    if (!data.contact || !phoneRegex.test(data.contact)) {
      errors.contact = "Enter valid 10 digit number";
    }

    return errors;
  };

  // ================= PDF DOWNLOAD =================
  const downloadCurriculumPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    // TITLE
    doc.setFontSize(24);
    doc.setTextColor(255, 102, 0);

    doc.text(`${course.title} Curriculum`, 20, y);

    y += 8;

    // LINE
    doc.setDrawColor(255, 102, 0);
    doc.line(20, y, 190, y);

    y += 15;

    // USER INFO
    doc.setFontSize(12);
    doc.setTextColor(80);

    doc.text(`Downloaded by: ${modalFormData.fullName}`, 20, y);

    y += 8;

    doc.text(`Email: ${modalFormData.email}`, 20, y);

    y += 15;

    // CURRICULUM
    course.curriculum.forEach((phase, index) => {
      if (y > 260) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(16);
      doc.setTextColor(0);

      doc.text(`${index + 1}. ${phase.title}`, 20, y);

      y += 10;

      doc.setFontSize(12);

      phase.content.forEach((topic) => {
        if (y > 280) {
          doc.addPage();
          y = 20;
        }

        doc.text(`• ${topic}`, 30, y);

        y += 8;
      });

      y += 10;
    });

    doc.save(`${course.title}-curriculum.pdf`);
  };

  // ================= MODAL INPUT CHANGE =================
  const handleModalChange = (e) => {
    setModalFormData({
      ...modalFormData,
      [e.target.name]: e.target.value,
    });

    setModalErrors({
      ...modalErrors,
      [e.target.name]: "",
    });
  };

  // ================= SIDEBAR INPUT CHANGE =================
  const handleSidebarChange = (e) => {
    setSidebarFormData({
      ...sidebarFormData,
      [e.target.name]: e.target.value,
    });

    setSidebarErrors({
      ...sidebarErrors,
      [e.target.name]: "",
    });
  };

  // ================= SIDEBAR SUBMIT =================
  const handleSidebarSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(sidebarFormData);

    setSidebarErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setSidebarLoading(true);
    const payload = {
      fullname: sidebarFormData.fullName,
      email: sidebarFormData.email,
      mobileNo: sidebarFormData.contact,
      course: course.id,
    };

    try {
      const response = await fetch(`${VITE_BASE_URL}/course-demo/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Inquiry sent successfully");

        setSidebarFormData({
          fullName: "",
          email: "",
          contact: "",
        });

        setSidebarErrors({});
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server error");
    } finally {
      setSidebarLoading(false);
    }
  };

  // ================= MODAL SUBMIT =================
  const handleModalSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm(modalFormData);

    setModalErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setModalLoading(true);

    const payload = {
      fullname: modalFormData.fullName,
      email: modalFormData.email,
      mobileNo: modalFormData.contact,
      course: course.id,
      is_curriculum_downloaded: true,
    };

    try {
      const response = await fetch(`${VITE_BASE_URL}/curriculum/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Pdf download successfully");

        // DOWNLOAD PDF
        downloadCurriculumPDF();

        // RESET FORM
        setModalFormData({
          fullName: "",
          email: "",
          contact: "",
        });

        setModalErrors({});

        // CLOSE MODAL
        setShowModal(false);
      } else {
        toast.error(data?.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server error");
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen pt-16 sm:pt-20 overflow-hidden">
      <ToastContainer />

      {/* PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
          {course.title}
        </h1>

        <p className="text-sm md:text-base text-gray-500 dark:text-gray-300 mt-2">
          Home / Technology /
          <span className="text-orange-500 ml-1">{course.title}</span>
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8 pb-14">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2">
          {/* IMAGE */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm mb-6">
            <img
              src={bg}
              alt={course.title}
              className="w-full h-64 sm:h-72 md:h-80 object-cover"
            />
          </div>

          {/* TABS */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 sm:p-6">
            {/* TAB BUTTONS */}
            <div className="flex flex-wrap gap-6 border-b border-gray-200 dark:border-gray-700 pb-4">
              <button
                onClick={() => setActiveTab("curriculum")}
                className={`font-medium transition ${
                  activeTab === "curriculum"
                    ? "text-orange-500 border-b-2 border-orange-500 pb-2"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Curriculum
              </button>

              <button
                onClick={() => setActiveTab("overview")}
                className={`font-medium transition ${
                  activeTab === "overview"
                    ? "text-orange-500 border-b-2 border-orange-500 pb-2"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                Overview
              </button>
            </div>

            {/* CONTENT */}
            <div className="mt-6">
              {activeTab === "curriculum" && (
                <div>
                  {/* TOP */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
                      Course Curriculum
                    </h2>

                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-orange-500 hover:bg-black transition text-white px-6 py-3 rounded-xl font-medium"
                    >
                      Download Curriculum
                    </button>
                  </div>

                  {/* ACCORDION */}
                  <div className="space-y-4">
                    {course.curriculum.map((item, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                      >
                        {/* HEADER */}
                        <button
                          onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                          }
                          className="w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-gray-800"
                        >
                          <span className="font-semibold text-left text-gray-800 dark:text-white">
                            {item.title}
                          </span>

                          {openIndex === index ? (
                            <FaMinus className="text-gray-500 dark:text-gray-300" />
                          ) : (
                            <FaPlus className="text-gray-500 dark:text-gray-300" />
                          )}
                        </button>

                        {/* BODY */}
                        {openIndex === index && (
                          <div className="px-8 py-5 bg-gray-50 dark:bg-gray-900">
                            <ul className="list-disc space-y-2 text-black dark:text-gray-200">
                              {item.content.map((lesson, i) => (
                                <li key={i}>{lesson}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="sticky top-24 h-fit">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-orange-500 p-6 text-white">
              <h2 className="text-2xl font-bold">Attend a Free Demo</h2>

              <p className="text-sm mt-2 text-orange-100">
                Fill the details and we will contact you shortly
              </p>
            </div>

            <form onSubmit={handleSidebarSubmit}>
              <div className="p-6 space-y-4">
                {/* NAME */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={sidebarFormData.fullName}
                    onChange={handleSidebarChange}
                    placeholder="Your Name"
                    className={inputClass}
                  />

                  {sidebarErrors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {sidebarErrors.fullName}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={sidebarFormData.email}
                    onChange={handleSidebarChange}
                    placeholder="Email Address"
                    className={inputClass}
                  />

                  {sidebarErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {sidebarErrors.email}
                    </p>
                  )}
                </div>

                {/* CONTACT */}
                <div>
                  <input
                    type="tel"
                    name="contact"
                    value={sidebarFormData.contact}
                    onChange={handleSidebarChange}
                    placeholder="10 Digit Contact Number"
                    className={inputClass}
                  />

                  {sidebarErrors.contact && (
                    <p className="text-red-500 text-sm mt-1">
                      {sidebarErrors.contact}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={sidebarLoading}
                  className="w-full bg-orange-500 hover:bg-black transition text-white py-3 rounded-xl font-semibold"
                >
                  {sidebarLoading ? "Sending..." : "Send Inquiry"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden w-full max-w-md"
          >
            {/* TOP */}
            <div className="bg-orange-500 p-6 text-white relative">
              <h2 className="text-2xl font-bold">Download Curriculum</h2>

              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-3xl"
              >
                ×
              </button>

              <p className="text-sm mt-2 text-orange-100">
                Fill details to download curriculum PDF
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleModalSubmit}>
              <div className="p-6 space-y-4">
                {/* NAME */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    value={modalFormData.fullName}
                    onChange={handleModalChange}
                    placeholder="Your Name"
                    className={inputClass}
                  />

                  {modalErrors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {modalErrors.fullName}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={modalFormData.email}
                    onChange={handleModalChange}
                    placeholder="Email Address"
                    className={inputClass}
                  />

                  {modalErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {modalErrors.email}
                    </p>
                  )}
                </div>

                {/* CONTACT */}
                <div>
                  <input
                    type="tel"
                    name="contact"
                    value={modalFormData.contact}
                    onChange={handleModalChange}
                    placeholder="10 Digit Contact Number"
                    className={inputClass}
                  />

                  {modalErrors.contact && (
                    <p className="text-red-500 text-sm mt-1">
                      {modalErrors.contact}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={modalLoading}
                  className="w-full bg-orange-500 hover:bg-black transition text-white py-3 rounded-xl font-semibold"
                >
                  {modalLoading ? "Generating PDF..." : "Download Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailsPage;
