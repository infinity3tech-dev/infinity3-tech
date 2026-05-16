import { useParams, Link } from "react-router-dom";
import courses from "../data/coursesData";
import { motion } from "framer-motion";
import { FaBook, FaArrowRight } from "react-icons/fa";

const RoadmapDetails = () => {
  const { tech } = useParams();
  const filteredCourses = courses.filter(
    (course) => course.tech === tech
  );
  
  const formatCategory = (text) => {
    return text
      ?.split("-")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
  };

  return (
    <section className="relative min-h-screen bg-gray-100 dark:bg-gray-950 overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-orange-400/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-yellow-300/20 blur-[140px] rounded-full" />
      </div>

      {/* ================= HEADER ================= */}
      <div className="relative pt-32 pb-14 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent"
        >
          {tech?.toUpperCase()} ROADMAP
        </motion.h1>

        <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm md:text-base">
          Choose a Technology and start your learning journey
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {filteredCourses.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                to={`/roadmap/${tech}/${item.slug}`}
                className="
                  group relative block overflow-hidden
                  rounded-3xl p-7
                  bg-white/80 dark:bg-gray-900/80
                  backdrop-blur-xl
                  border border-orange-100 dark:border-gray-800
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-orange-500/20
                  transition-all duration-300
                "
              >

                {/* ================= CATEGORY BADGE ================= */}
                {item.tech === "ai-tools" && item.categoryId && (
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className="
                        px-3 py-1
                        rounded-full
                        text-[11px]
                        font-semibold
                        bg-orange-100
                        dark:bg-orange-500/10
                        text-orange-600
                        border border-orange-200
                        dark:border-orange-500/20
                      "
                    >
                      {formatCategory(item.categoryId)}
                    </span>
                  </div>
                )}

                {/* TOP GLOW BAR */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400" />

                {/* ICON */}
                <div
                  className="
                    w-14 h-14 rounded-2xl
                    bg-orange-100 dark:bg-orange-500/10
                    flex items-center justify-center
                    text-orange-500 text-2xl
                    mb-5
                    group-hover:scale-110 transition
                  "
                >
                  <FaBook />
                </div>

                {/* TITLE */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                {item.description && (
                  <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm line-clamp-2">
                    {item.description}
                  </p>
                )}

                {/* CTA */}
                <div
                  className="
                    mt-6 flex items-center gap-2
                    text-orange-500 font-semibold
                    group-hover:gap-3 transition-all
                  "
                >
                  Open Roadmap
                  <FaArrowRight />
                </div>

                {/* HOVER GLOW */}
                <div
                  className="
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    bg-gradient-to-br from-orange-500/5 to-yellow-500/5
                    transition
                  "
                />
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RoadmapDetails;