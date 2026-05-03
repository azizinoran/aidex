"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const particles = Array.from({ length: 35 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#0F172A] to-[#1E3A8A]" />

      {/* GLOW ORB 1 */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, 200, -100, 0], y: [0, -100, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* GLOW ORB 2 */}
      <motion.div
        className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px]"
        initial={{ x: 0, y: 0 }}
        animate={{ x: [0, -200, 100, 0], y: [0, 100, -100, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* PARTICLES */}
      {particles.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-blue-400"
          initial={{
            x: `${(i * 7) % 100}%`,
            y: "100%",
            opacity: 0,
          }}
          animate={{
            y: ["100%", "-20%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6 + (i % 5),
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
          style={{
            width: 6,
            height: 6,
          }}
        />
      ))}

    </div>
  );
}