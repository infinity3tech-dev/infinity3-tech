import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaUser, FaPhone, FaEnvelope, FaCity } from "react-icons/fa";
import { toast } from "react-toastify";

const ApplyFormModal = ({ plan, techTitle, courseId, onClose }) => {
  const [loading, setLoading] = useState(false);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  console.log(plan, techTitle, courseId, onClose )
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    department: "",
    city: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const payload = {
    FullName: formData.fullName,
    ContactNo: formData.mobile,
    Email: formData.email,
    CourseID: Number(courseId),
    CourseDurationID: Number(plan?.duration), 
    DepartmentID: Number(formData.department),
    CurrentCity: formData.city,
  };

  try {
    const response = await fetch(`${BASE_URL}/students/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success(data?.message || "Application submitted successfully!");

      setFormData({
        fullName: "",
        mobile: "",
        email: "",
        department: "",
        city: "",
      });

      onClose();
    } else {
      console.log("BACKEND ERROR:", data);
      toast.error(data?.message || "Failed to submit application");
    }
  } catch (error) {
    console.error("NETWORK ERROR:", error);
    toast.error("Server not reachable");
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 px-4"
    >
      {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl 
          bg-white dark:bg-gray-900 
          animate-[scaleUp_.3s_ease] 
          border border-gray-200 dark:border-gray-700
          transition-colors duration-300"
      >
        {/* HEADER */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 relative border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl text-black dark:text-white font-bold">
            Apply for Internship
          </h2>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {techTitle} - {plan?.duration}
          </p>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-orange-500 hover:scale-110 transition"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5 max-h-[70vh] overflow-y-auto"
        >
          {/* FULL NAME */}
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />

            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 
                border border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-800 
                text-black dark:text-white 
                rounded-lg 
                focus:ring-2 focus:ring-orange-400 
                outline-none transition"
            />
          </div>

          {/* MOBILE */}
          <div className="relative">
            <FaPhone className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number *"
              pattern="[0-9]{10}"
              required
              value={formData.mobile}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 
                border border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-800 
                text-black dark:text-white 
                rounded-lg 
                focus:ring-2 focus:ring-orange-400 
                outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />

            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 
                border border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-800 
                text-black dark:text-white 
                rounded-lg 
                focus:ring-2 focus:ring-orange-400 
                outline-none transition"
            />
          </div>

          {/* DEPARTMENT */}
          <select
            name="department"
            required
            value={formData.department}
            onChange={handleChange}
            className="w-full 
              border border-gray-300 dark:border-gray-700 
              bg-white dark:bg-gray-800 
              text-black dark:text-white 
              rounded-lg px-3 py-3 
              focus:ring-2 focus:ring-orange-400 
              outline-none transition"
          >
            <option value="">Select Department *</option>
            <option value="1">MSC.IT</option>
            <option value="2">MCA</option>
            <option value="3">BSC.IT</option>
            <option value="4">BCA</option>
            <option value="5">B.E/B.Tech</option>
            <option value="6">DIPLOMA CE/IT</option>
            <option value="7">Other</option>
          </select>

          {/* CITY */}
          <div className="relative">
            <FaCity className="absolute left-3 top-3 text-gray-500 dark:text-gray-400" />

            <input
              type="text"
              name="city"
              placeholder="Current City"
              value={formData.city}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-3 
                border border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-800 
                text-black dark:text-white 
                rounded-lg 
                focus:ring-2 focus:ring-orange-400 
                outline-none transition"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full 
              bg-orange-500 text-white 
              py-3 rounded-lg font-semibold 
              hover:bg-black dark:hover:bg-orange-600 
              active:scale-95 transition
              disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyFormModal;
