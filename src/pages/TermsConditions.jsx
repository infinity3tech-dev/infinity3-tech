import React, { useState } from "react";

const TermsConditions = () => {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200 min-h-screen pt-16 sm:pt-20 md:pt-24">
      {/* HERO */}
      <div className="text-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          Privacy Policy & Terms
        </h1>

        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mt-2">
          Infinity3 Technology
        </p>

        {/* TOGGLE BUTTONS */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => setActiveTab("privacy")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
              activeTab === "privacy"
                ? "bg-orange-500 text-white"
                : "text-orange-500 border border-orange-500 dark:text-orange-400 dark:border-orange-400"
            }`}
          >
            Privacy Policy
          </button>

          <button
            onClick={() => setActiveTab("terms")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition cursor-pointer ${
              activeTab === "terms"
                ? "bg-orange-500 text-white"
                : "text-orange-500 border border-orange-500 dark:text-orange-400 dark:border-orange-400"
            }`}
          >
            Terms & Conditions
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm dark:shadow-lg p-6 sm:p-8 md:p-10 transition-all">
          {/* PRIVACY */}
          {activeTab === "privacy" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Privacy Policy
              </h2>

              <p className="mb-2 text-gray-600 dark:text-gray-300">
                <strong>Effective Date:</strong> 23 March 2026
              </p>

              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Infinity3technology values your privacy and is committed to
                protecting your personal information while you use our website
                and services.
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                1. Information We Collect
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Website usage information</li>
              </ul>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                2. How We Use Information
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Provide and improve website services</li>
                <li>Respond to inquiries</li>
                <li>Improve security and performance</li>
                <li>Send important updates</li>
              </ul>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                3. Cookies
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Our website may use cookies to improve user experience and
                analyze traffic.
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                4. Data Security
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We implement security measures to protect your information.
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                5. Third-Party Services
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>Google Analytics</li>
                <li>Hosting and security services</li>
              </ul>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                6. Policy Updates
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy anytime.
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                7. Official Verification
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Published at:{" "}
                <a
                  href="https://infinity3technology.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  https://infinity3technology.com/
                </a>
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                8. Contact
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Email: infinity3tech@gmail.com <br />
                Address: Emerald Complex, 205, Chimanlal Girdharlal Rd,
                Mithakhali, Ahmedabad, Gujarat 380009
              </p>
            </div>
          )}

          {/* TERMS */}
          {activeTab === "terms" && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                Terms & Conditions
              </h2>

              <p className="mb-2 text-gray-600 dark:text-gray-300">
                <strong>Effective Date:</strong> 23 March 2026
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                1. Acceptance of Terms
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                By accessing this website, you agree to these terms.
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                2. Website Use
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                You agree to use this website lawfully and responsibly.
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                3. Intellectual Property
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                All website content belongs to Infinite Soft Tech.
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                4. User Restrictions
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                <li>No unlawful use</li>
                <li>No hacking attempts</li>
                <li>No copying without permission</li>
              </ul>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                5. Limitation of Liability
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Infinity3technology is not responsible for technical
                interruptions or damages resulting from website use.
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                6. Changes to Terms
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                We may modify these terms at any time.
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                7. Official Website
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Published at:{" "}
                <a
                  href="https://infinity3technology.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  https://infinity3technology.com/
                </a>
              </p>

              <h3 className="font-semibold mt-6 text-gray-800 dark:text-white">
                8. Contact
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Email: infinity3tech@gmail.com <br />
                Address: Emerald Complex, 205, Chimanlal Girdharlal Rd,
                Mithakhali, Ahmedabad, Gujarat 380009
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
