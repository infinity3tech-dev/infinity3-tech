import { Link } from "react-router-dom";
import roadmapData from "../data/roadmapData";
import  {FaArrowRight } from "react-icons/fa";
const CareerPath = () => {
  return (
    <section className="relative min-h-screen bg-gray-100 dark:bg-gray-950 overflow-hidden transition-colors">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-150px] left-[-120px] w-[450px] h-[450px] bg-orange-400/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-120px] w-[450px] h-[450px] bg-yellow-300/20 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-300/10 blur-[120px] rounded-full" />
      </div>

      {/* ================= HERO ================= */}
      <div className="relative pt-32 pb-16 px-4 text-center">
        <div className="inline-block px-5 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-500 text-sm font-semibold">
          Infinity3 Technology Career Hub
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black leading-tight bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
          Build Your Tech Career
          <br />
          With Infinity3 Technology
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Explore industry-focused roadmaps designed to help you learn modern skills,
          build real projects, and become job-ready.
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

          {roadmapData.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                to={`/roadmap/${item.slug}`}
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

                {/* TOP GLOW LINE */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400" />

                {/* ICON */}
                <div className="
                  w-16 h-16 rounded-2xl
                  bg-orange-100 dark:bg-orange-500/10
                  text-orange-500
                  flex items-center justify-center
                  text-3xl
                  mb-6
                  group-hover:scale-110 transition
                ">
                  <Icon />
                </div>

                {/* TITLE */}
                <h2 className="
                  text-2xl font-bold
                  text-gray-900 dark:text-white
                  group-hover:text-orange-500
                  transition
                ">
                  {item.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed text-sm">
                  {item.desc}
                </p>

                {/* CTA */}
                <div className="
                  mt-8 flex items-center gap-2
                  text-orange-500 font-semibold
                  group-hover:gap-3 transition-all
                ">
                  Explore Roadmap<FaArrowRight />
                </div>

                {/* HOVER GLOW */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-orange-500/5 to-yellow-500/5
                  transition
                " />
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default CareerPath;