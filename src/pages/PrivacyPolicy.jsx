import React from "react";
import PageHeader from "../components/PageHeader";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 pt-16 sm:pt-20 md:pt-24 overflow-hidden dark:bg-gray-900 min-h-screen">
      
      {/* HEADER */}
      <PageHeader title="Privacy Policy" />

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-5 sm:p-7 md:p-10 space-y-10">
          
          {/* Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Security and Storage
            </h2>

            <p className="text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-200 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget euismod erat, sit amet vulputate enim.
            </p>

            <ol className="list-decimal pl-5 sm:pl-6 space-y-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-200">
              <li>
                Credit Card: Visa, MasterCard, Discover, American Express,
                JCB, Visa Electron. The total will be charged to your card
                when the order is shipped.
              </li>

              <li>
                Wilo features a Fast Checkout option, allowing you to securely
                save your credit card details so that you don't have to
                re-enter them for future purchases.
              </li>

              <li>
                PayPal: Shop easily online without having to enter your credit
                card details on the website. Your account will be charged once
                the order is completed.
              </li>
            </ol>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Intellectual Property
            </h2>

            <p className="text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              eget euismod erat, sit amet vulputate enim. Etiam enim tellus,
              maximus vel augue sed.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Linking to This Site
            </h2>

            <p className="text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-200">
              Items returned within 14 days of their original shipment date in
              same as new condition will be eligible for a full refund or store
              credit.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Confidential Information
            </h2>

            <p className="text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-200 mb-4">
              Wilo accepts the following payment methods:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-200">
              <li>
                Credit Card: Visa, MasterCard, Discover, American Express,
                JCB, Visa Electron.
              </li>

              <li>
                Wilo features a Fast Checkout option, allowing you to securely
                save your credit card details.
              </li>

              <li>
                PayPal: Shop easily online without having to enter your credit
                card details on the website.
              </li>
            </ul>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              General Permission to Use and Access
            </h2>

            <p className="text-sm sm:text-base leading-7 text-gray-700 dark:text-gray-200 font-medium mb-5">
              This site is provided by Wilo. Wilo collects information in
              several ways from different parts of this site.
            </p>

            <ol className="list-decimal pl-5 sm:pl-6 space-y-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-200">
              <li>
                Complimentary ground shipping within 1 to 7 business days
              </li>

              <li>
                In-store collection available within 1 to 7 business days
              </li>

              <li>
                Next-day and Express delivery options also available
              </li>

              <li>
                Purchases are delivered in an orange box tied with a Bolduc
                ribbon.
              </li>

              <li>
                See the delivery FAQs for details on shipping methods, costs
                and delivery times.
              </li>
            </ol>
          </div>

          {/* Section */}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white mb-4">
              Overview
            </h2>

            <p className="text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-200">
              We may collect personal identification information from Users in
              a variety of ways, including, but not limited to, when Users
              visit our site, subscribe to the newsletter, fill out a form,
              and in connection with other activities, services, features or
              resources we make available on our Site.

              <br />
              <br />

              Users may be asked for, as appropriate, name, email address,
              mailing address, phone number, company name. We will collect
              personal identification information from Users only if they
              voluntarily consent such information to us.

              <br />
              <br />

              Users can always refuse to supply personally identification
              information, except that it may prevent them from engaging in
              certain Site related activities.

              <br />
              <br />

              <span className="font-semibold text-black dark:text-white">
                Last updated: January 25, 2025 at 24:00 pm
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;