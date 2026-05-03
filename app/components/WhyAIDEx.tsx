"use client";

import { motion } from "framer-motion";

export default function WhyAIDEx() {
  const data = [
    {
      title: "AI Assistant",
      desc: "Always-available assistant to help learning.",
      icon: "🤖",
    },
    {
      title: "Certification",
      desc: "Earn verified digital certificates.",
      icon: "🛡️",
    },
    {
      title: "Real Skills",
      desc: "Build portfolio-ready AI projects.",
      icon: "💻",
    },
  ];

  return (
    <section
      id="why-aidex"
      className="py-20 bg-[#020617] text-white text-center"
    >
      <h2 className="text-3xl font-bold mb-12">
        Built for PMM Students
      </h2>

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

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}