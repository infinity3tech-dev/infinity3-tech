import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaExternalLinkAlt } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

const CaseStudies = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${ VITE_BASE_URL}/portfolio-projects/`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await res.json();
        
        setProjects(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-20 transition-colors duration-300">
      <PageHeader title="Portfolio" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* LOADING STATE */}
        {loading && (
          <div className="text-center text-gray-600 dark:text-gray-300">
            Loading projects...
          </div>
        )}

        {/* ERROR STATE */}
        {error && (
          <div className="text-center text-red-500">
            {error}
          </div>
        )}

        {/* GRID */}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {projects.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                {/* IMAGE */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* MODERN OVERLAY */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-5">
                    
                    <div className="w-full flex items-center justify-between backdrop-blur-md bg-white/10 dark:bg-black/30 rounded-xl p-3">

                      {/* LEFT INFO */}
                      <div>
                        <p className="text-white text-sm opacity-80">
                          {item.category}
                        </p>
                        <h4 className="text-white font-semibold text-base">
                          {item.title}
                        </h4>
                      </div>

                      {/* RIGHT ACTIONS */}
                      <div className="flex gap-3">

                        {/* DETAILS PAGE (YOU CAN LINK LATER) */}
                        <Link
                          to={`/case-studies/${item.id}`}
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-500 hover:text-white transition"
                          title="View Details"
                        >
                          <FaPlus />
                        </Link>

                        {/* LIVE WEBSITE */}
                        {item.deployed_url && (
                          <a
                            href={item.deployed_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:scale-110 transition"
                            title="View Live Site"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <CTA />
    </div>
  );
};

export default CaseStudies;