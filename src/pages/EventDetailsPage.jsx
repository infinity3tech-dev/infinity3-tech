import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { events } from "../data/events";
import bg from "./../assets/images/eventDetailsBg.jpg";
import { FiClock } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";

const EventDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) return <div className="pt-20 text-center">Event not found</div>;

  return (
    <div className="bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="bg-gray-50 py-16 px-6">
          <h1 className="text-4xl font-bold text-gray-800">Events Details</h1>
          <p className="text-gray-500 mt-2">
            Home &gt; <span className="text-orange-500">Events Details</span>
          </p>
        </div>

        {/* BANNER IMAGE */}
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <img
            src={bg}
            alt=""
            className="w-full h-[280px] object-cover rounded-lg"
          />
        </div>

        {/* EVENT INFO BAR */}
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="bg-white shadow-md rounded-lg p-5 flex flex-wrap gap-8 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <span>
                <SlCalender size={20} className="text-orange-500"/>
              </span>
              <span>{event.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <span>
                <IoLocationOutline  size={20} className="text-orange-500" />
              </span>
              <span>{event.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <span>
                <FiClock   size={20} className="text-orange-500"/>
              </span>
              <span>{event.time}</span>
            </div>
          </div>
        </div>

        {/* MAIN SECTION */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            {/* MAP */}
            <div className="w-full h-[350px] rounded-lg overflow-hidden shadow mb-8">
              <iframe
                title="map"
                width="100%"
                height="100%"
                src={`https://www.google.com/maps?q=${event.location}&output=embed`}
                className="border-0"
                allowFullScreen
              ></iframe>
            </div>

            <h2 className="text-2xl text-black font-semibold mb-4">About The Event</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{event.about}</p>

            <h2 className="text-2xl text-black font-semibold mb-4">Where the event?</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{event.where}</p>

            <h2 className="text-2xl text-black font-semibold mb-4">
              Who this event is for?
            </h2>
            <p className="text-gray-600 leading-relaxed">{event.who}</p>
          </div>

          {/* RIGHT SIDEBAR */}
          {/* <div className="bg-white shadow-xl rounded-lg p-6 h-fit sticky top-24">

          <h3 className="text-3xl font-bold text-orange-500 mb-6">
            ${event.cost}
          </h3>

          <div className="space-y-3 text-gray-600 mb-6">
            <p>Total Slot: {event.totalSlot}</p>
            <p>Booked Slot: {event.bookedSlot}</p>
            <p>
              Available Slot:{" "}
              {event.totalSlot - event.bookedSlot}
            </p>
          </div>

          <p className="text-gray-600 mb-6">
            Pay With: {event.paymentMethods.join(", ")}
          </p>

          <button className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition">
            Book Now
          </button>

        </div> */}

          {/* RIGHT SIDEBAR */}
          <div className="bg-white shadow-xl rounded-lg p-6 h-fit sticky top-24">
            <h3 className="text-3xl font-bold text-orange-500 mb-6">
              ${event.cost}
            </h3>

            <div className="space-y-3 text-gray-600 mb-6">
              <p>Total Slot: {event.totalSlot}</p>
              <p>Booked Slot: {event.bookedSlot}</p>
              <p>Available Slot: {event.totalSlot - event.bookedSlot}</p>
            </div>

            <p className="text-gray-600 mb-6">
              Pay With: {event.paymentMethods.join(", ")}
            </p>

            <button className="w-full bg-orange-500 text-white py-3 rounded-md font-medium hover:bg-orange-600 transition">
              Book Now
            </button>

            {/* LOGIN MESSAGE */}
            <p className="text-sm text-gray-500 mt-4 text-center">
              You must{" "}
              <span
                className="text-orange-500 cursor-pointer hover:underline"
                onClick={() => navigate("/contact-us")}
              >
                login
              </span>{" "}
              before register event.
            </p>

            {/* SHARE SECTION */}
            <div className="mt-6 text-center">
              <p className="text-gray-700 mb-3 font-medium">Share This Event</p>

              <div className="flex justify-center items-center gap-3 mt-6">
                {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <Icon size={14} />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
