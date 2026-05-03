"use client";

import { motion } from "framer-motion";

export default function PopularCourses() {
  const data = [
    {
      title: "Introduction to AI",
      desc: "Understand ML and AI fundamentals.",
      level: "Beginner",
    },
    {
      title: "Prompt Engineering",
      desc: "Master prompts for AI tools.",
      level: "Intermediate",
    },
    {
      title: "AI Automation",
      desc: "Build autonomous AI workflows.",
      level: "Advanced",
    },
  ];

  return (
    <section className="py-20 bg-[#020617] text-white text-center">
      <h2 className="text-3xl font-bold mb-12">
        Popular Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.03 }}
            className="card-premium rounded-2xl overflow-hidden"
          >
            {/* TOP AREA */}
            <div className="h-32 bg-gradient-to-r from-blue-500/30 to-purple-500/30 flex items-center justify-center">
              <div className="icon-glow text-3xl">✨</div>
            </div>

            {/* CONTENT */}
            <div className="p-6 bg-[#020617] text-left">
              <span className="text-xs text-blue-400">
                {item.level}
              </span>

              <h3 className="text-lg font-semibold mt-2 mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {item.desc}
              </p>

              <span className="text-blue-400 text-sm">
                Enroll now →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}