"use client";

import { motion } from "framer-motion";

export default function LearningPath() {
  const data = [
    {
      title: "Beginner AI",
      desc: "Introduction to AI concepts and fundamentals.",
      icon: "🎓",
    },
    {
      title: "Automation",
      desc: "Apply AI to automate tasks and workflows.",
      icon: "⚡",
    },
    {
      title: "Advanced AI",
      desc: "Explore LLMs, generative AI and real projects.",
      icon: "🧠",
    },
  ];

  return (
    <section className="py-20 bg-[#020617] text-white text-center">
      <h2 className="text-3xl font-bold mb-12">Learning Path</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10, scale: 1.03 }}
            className="card-premium bg-white/5 p-6 rounded-2xl text-left"
          >
            <div className="icon-glow w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4 text-xl">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {item.desc}
            </p>

            <span className="text-blue-400 text-sm">
              Explore path →
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}