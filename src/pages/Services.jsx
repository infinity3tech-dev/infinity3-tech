import React from "react";
import CTA from "../components/CTA";
import { servicesData } from "../data/servicesData";
import ServiceCard from "../components/ServiceCard";
import PageHeader from "../components/PageHeader";

const Services = () => {
  return (
    <div className="bg-gray-100 pt-16 md:pt-20 dark:bg-gray-900 transition-colors duration-300">
      
      {/* HEADER */}
      <PageHeader title="Services" />

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((item) => (
            <ServiceCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* CTA SECTION */}
      <CTA />
    </div>
  );
};

export default Services;