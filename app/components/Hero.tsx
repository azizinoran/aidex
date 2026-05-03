"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("why-aidex");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* 🎬 VIDEO BACKGROUND (FIXED AUTOPLAY) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={(e) => {
          const video = e.currentTarget;
          video.play().catch(() => {});
        }}
        className="absolute inset-0 w-full h-full object-cover brightness-90 contrast-90 saturate-90"
      >
        <source src="/Hero.mp4" type="video/mp4" />
      </video>

      {/* 🌑 OVERLAY (lebih smooth + gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-black/90" />

      
      

      {/* CONTENT */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* SMALL LABEL */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur"
        >
          WELCOME TO AIDEx - ARTIFICIAL INTELLIGENCE AND DIGITAL EXCELLENCE HUB - POLITEKNIK MERLIMAU MELAKA
        </motion.p>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl"
        >
          Empowering PMM With{" "}
          <span className="text-blue-400">AI Skills</span> for the Future
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-6 max-w-2xl"
        >
          Learn AI, build real-world skills, and get certified through AIDEx at Politeknik Merlimau Melaka.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mt-8 flex-wrap justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-3 rounded-xl text-white font-medium overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-[gradientMove_4s_linear_infinite]" />

            <span className="absolute inset-0 opacity-0 hover:opacity-100 transition">
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 blur-xl animate-[shine_1.5s_linear]" />
            </span>

            <span className="relative z-10">
              Start Learning →
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToSection}
            className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition backdrop-blur"
          >
            Get Certified
          </motion.button>
        </motion.div>

        {/* EXTRA TEXT */}
        <div className="mt-16 max-w-3xl mx-auto text-center space-y-8 text-gray-300">

          <p className="text-sm tracking-wide text-gray-400">
            Official AI Learning Initiative by AIDEx Politeknik Merlimau Melaka
          </p>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-widest bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              OUR VISION
            </h3>
            <p className="text-xl leading-relaxed">
              Leading TVET education innovation by becoming a reference hub
              for AI and digital technology.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold tracking-widest bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              OUR MISSION
            </h3>
            <p className="text-xl leading-relaxed">
              Producing highly skilled and competitive graduates through the
              integration of AI in education, talent development, and
              industry collaboration.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}