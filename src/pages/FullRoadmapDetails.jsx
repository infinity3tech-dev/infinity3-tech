import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaLayerGroup, FaArrowDown } from "react-icons/fa";
import courses from "../data/coursesData";

const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
};

const FullRoadmapDetails = () => {
  const { tech, slug } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => item.tech === tech && item.slug === slug,
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Course Not Found
        </h1>
      </div>
    );
  }

  const titleSlug = createSlug(course.title);

  return (
    <div className="relative min-h-screen bg-gray-100 dark:bg-gray-950 overflow-hidden">
      {/* ================= BACKGROUND ================= */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-orange-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-yellow-100/20 blur-[140px] rounded-full" />
      </div>

      {/* ================= HERO ================= */}
      <div className="relative pt-28 pb-16 text-center px-4">
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-500 text-sm font-semibold">
          Full Career Roadmap
        </div>

        {/* TITLE */}
        <h1 className="mt-6 text-4xl md:text-6xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text leading-relaxed text-transparent">
          {course.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-5 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
          This complete roadmap is designed to take you from{" "}
          <b>beginner to job-ready developer</b> in{" "}
          <span className="text-orange-500 font-semibold">{course.title}</span>.
          You will learn step-by-step concepts, build real-world projects, and
          gain industry-level skills.
        </p>
      </div>

      {/* ================= ROADMAP FLOW ================= */}
      <div className="max-w-4xl mx-auto px-4 pb-24 relative">
        {/* vertical dotted line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-orange-600/60 -translate-x-1/2" />

        <div className="space-y-12">
          {course.curriculum.map((section, index) => (
            <StepCard
              key={index}
              section={section}
              index={index}
              titleSlug={titleSlug}
              navigate={navigate}
              isLast={index === course.curriculum.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullRoadmapDetails;

/* ================= STEP CARD ================= */
const StepCard = ({ section, index, titleSlug, navigate, isLast }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        relative flex items-start gap-6
        ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}
      `}
    >
      {/* ================= DOT ================= */}
      <div className="relative flex flex-col items-center">
        <div
          className="
          w-14 h-14 rounded-2xl
          bg-orange-100 dark:bg-orange-500/10
          flex items-center justify-center
          text-orange-500 shadow-md
          z-10
        "
        >
          <FaLayerGroup />
        </div>

        {!isLast && (
          <div className="mt-2 text-orange-400 animate-bounce">
            <FaArrowDown />
          </div>
        )}
      </div>

      {/* ================= CARD ================= */}
      <div
        onClick={() => navigate(`/course-details/${titleSlug}`)}
        className="
          group cursor-pointer
          w-full
          bg-white/80 dark:bg-gray-900/80
          backdrop-blur-xl
          rounded-3xl
          border border-orange-100 dark:border-gray-800
          p-6
          shadow-lg
          hover:-translate-y-2
          hover:shadow-orange-500/20
          transition-all duration-300
        "
      >
        {/* STEP HEADER */}
        <div className="flex justify-between items-center">
          {/* <span className="text-orange-500 font-bold text-sm">
            STEP {index + 1}
          </span> */}

          <FaCheckCircle className="text-orange-500" />
        </div>

        {/* TITLE */}
        <h2 className="text-xl font-bold mt-3 text-gray-900 dark:text-white group-hover:text-orange-500 transition">
          {section.title}
        </h2>

        {/* TOPICS */}
        <div className="mt-5 space-y-2">
          {section.content.map((topic, i) => (
            <div key={i} className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 text-sm" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {topic}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
