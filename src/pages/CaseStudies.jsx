import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaExternalLinkAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";

const CaseStudies = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const controller = new AbortController();

    const fetchProjects = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${VITE_BASE_URL}/portfolio-projects/`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        setProjects(data.data || []);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

    return () => controller.abort();
  }, [VITE_BASE_URL]);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 pt-20">
      <PageHeader title="Portfolio" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* LOADING */}
        {loading && (
          <div className="text-center text-gray-500">Loading projects...</div>
        )}

        {/* ERROR */}
        {error && <div className="text-center text-red-500">{error}</div>}

        {/* GRID */}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {projects.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
              >
                {/* SWIPER SLIDER */}
                <div className="h-60">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={item.images?.length > 1}
                    className="h-full w-full"
                  >
                    {item.images?.map((img) => (
                      <SwiperSlide key={img.id}>
                        <img
                          src={img.image}
                          alt={item.title}
                          className="w-full h-60 object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 dark:text-white">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      to={`/case-studies/${item.id}`}
                      state={{ project: item ,projects:projects}}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange-500 hover:text-white transition"
                    >
                      <FaPlus />
                    </Link>

                    {item.deployed_url && (
                      <a
                        href={item.deployed_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white hover:scale-110 transition"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
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
