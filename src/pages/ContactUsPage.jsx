import React, { useState } from "react";
import { LuPhoneCall, LuClock8 } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import img from "./../assets/images/contact-us.webp";
import Star from "./../assets/images/star-icon.webp";
import PageHeader from "../components/PageHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUsPage = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    ContactNo: "",
    Subject: "",
    Message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/contact-inquiry-create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully ");

        setFormData({
          Name: "",
          Email: "",
          ContactNo: "",
          Subject: "",
          Message: "",
        });
      } else {
        toast.error(data?.message || "Something went wrong ");
      }
    } catch (error) {
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20 sm:pt-24 md:pt-28 overflow-hidden dark:bg-gray-900">
      {/* HEADER */}
      <PageHeader title="Contact Us" />

      {/* INFO SECTION */}
      <div className="max-w-6xl mx-auto py-10 md:py-14 px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* ADDRESS */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition flex items-start gap-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-xl hover:bg-orange-500 group cursor-pointer transition shrink-0">
              <SlLocationPin
                size={24}
                className="text-orange-500 group-hover:text-white transition"
              />
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white text-lg mb-2">
                Our Address
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-6">
                205, Emerald Complex, CG Road, Near Mithakhali, Navrangpura,
                Ahmedabad Gujarat 380009
              </p>
            </div>
          </div>

          {/* CONTACT */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition flex items-start gap-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-xl hover:bg-orange-500 group cursor-pointer transition shrink-0">
              <LuPhoneCall
                size={24}
                className="text-orange-500 group-hover:text-white transition"
              />
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white text-lg mb-2">
                Contact Us
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm leading-6">
                +91 94092 59294
              </p>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                infinity3tech@gmail.com
              </p>
            </div>
          </div>

          {/* HOURS */}
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm hover:shadow-md transition flex items-start gap-4">
            <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-xl hover:bg-orange-500 group cursor-pointer transition shrink-0">
              <LuClock8
                size={24}
                className="text-orange-500 group-hover:text-white transition"
              />
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white text-lg mb-2">
                Hours of Operation
              </h3>
              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Monday - Friday: 09:30 AM - 06:30 PM
              </p>

              <p className="text-gray-500 dark:text-gray-300 text-sm">
                Saturday: 09:30 AM - 04:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 md:pb-20">
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-2">
            <img
              src={Star}
              alt="Star Icon"
              loading="lazy"
              decoding="async"
              className="w-4 sm:w-5"
            />
            <p className="text-orange-500 text-sm font-semibold uppercase">
              Get In Touch
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold mt-3 text-gray-800 dark:text-white">
            Ready to Get Started?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="Contact Us"
              loading="lazy"
              decoding="async"
              className="w-full max-w-md"
            />
          </div>

          {/* FORM */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="p-3 border rounded-xl w-full"
                  required
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="p-3 border rounded-xl w-full"
                  required
                />
              </div>

              <input
                type="text"
                name="ContactNo"
                placeholder="Contact Number"
                value={formData.ContactNo}
                onChange={handleChange}
                className="p-3 border rounded-xl w-full"
                required
              />

              <input
                type="text"
                name="Subject"
                placeholder="Subject"
                value={formData.Subject}
                onChange={handleChange}
                className="p-3 border rounded-xl w-full"
                required
              />

              <textarea
                name="Message"
                placeholder="Message"
                value={formData.Message}
                onChange={handleChange}
                rows="5"
                className="p-3 border rounded-xl w-full"
                required
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-black transition cursor-pointer"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="w-full overflow-hidden rounded-2xl">
        <iframe
          title="Infinity3 Technology Location"
          src="https://www.google.com/maps?q=Infinity3%20Technology%20Ahmedabad&output=embed"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
};

export default ContactUsPage;
