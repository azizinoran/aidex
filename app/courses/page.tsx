"use client";

import { motion } from "framer-motion";

const courses = [
  {
    title: "Introduction to AI",
    desc: "Learn basic concepts of Artificial Intelligence",
    level: "Beginner",
  },
  {
    title: "Prompt Engineering",
    desc: "Master ChatGPT & AI prompts",
    level: "Intermediate",
  },
  {
    title: "AI for Business",
    desc: "Apply AI in real-world business cases",
    level: "Advanced",
  },
  {
    title: "No-Code AI Tools",
    desc: "Build AI apps without coding",
    level: "Beginner",
  },
];

export default function Courses() {
  return (
    <main className="bg-[#0B0F1A] text-white min-h-screen px-6 py-20">

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Explore AIDEx Courses
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 p-6 rounded-xl border border-white/10 hover:scale-105 hover:bg-white/10 transition cursor-pointer"
          >
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-400 text-sm mb-4">{course.desc}</p>

            <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
              {course.level}
            </span>
          </motion.div>
        ))}

      </div>

    </main>
  );
}