"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [openAbout, setOpenAbout] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [openAITools, setOpenAITools] = useState(false);

  return (
    <nav className="fixed w-full z-[999] bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="h-10 flex items-center">
          <svg viewBox="0 0 220 60" className="h-8">
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6"/>
                <stop offset="50%" stopColor="#22D3EE"/>
                <stop offset="100%" stopColor="#3B82F6"/>
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <text
              x="10"
              y="48"
              fontSize="48"
              fontWeight="700"
              fill="url(#flowGrad)"
              filter="url(#glow)"
            >
              AIDEx
            </text>
          </svg>
        </div>

        {/* NAV */}
        <div className="hidden md:flex gap-5 text-sm text-gray-300 items-center h-10">

          <Link href="/" className="hover:text-white">Home</Link>

          {/* ABOUT */}
          <div
            className="relative"
            onMouseEnter={() => setOpenAbout(true)}
            onMouseLeave={() => {
              setOpenAbout(false);
              setOpenSub(false);
            }}
          >
            <span className="flex items-center gap-1 whitespace-nowrap cursor-pointer hover:text-white">
              About Us <span className="text-xs">▾</span>
            </span>

            {openAbout && (
              <div className="absolute top-full left-0 mt-2 w-64 z-[999]">
                <div className="bg-white text-black rounded-xl shadow-2xl border border-gray-200">
                  <ul className="py-2 text-sm">

                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500">Welcome Message</li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500">Vision & Mission</li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500">Organisation Chart</li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500">AIDEx Prompters</li>
                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500">OWLx Prompters</li>

                    <li
                      className="relative px-4 py-2 hover:bg-gray-100 hover:text-cyan-500 flex justify-between"
                      onMouseEnter={() => setOpenSub(true)}
                      onMouseLeave={() => setOpenSub(false)}
                    >
                      Staff Directory <span>▸</span>

                      {openSub && (
                        <div className="absolute top-0 left-full ml-1 w-56 bg-white border border-gray-200 shadow-2xl rounded-xl">
                          <ul className="py-2 text-sm">
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500">Management Staff</li>
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500">Creative Multimedia</li>
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500">Development & Technology</li>
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500">Support Staff</li>
                          </ul>
                        </div>
                      )}
                    </li>

                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* CERTIFICATIONS */}
          <span className="flex items-center gap-1 whitespace-nowrap cursor-pointer hover:text-white">
            Certifications <span className="text-xs text-cyan-400 animate-pulse">(Beta)</span>
          </span>

          {/* COURSES */}
          <span className="flex items-center gap-1 whitespace-nowrap cursor-pointer hover:text-white">
            Courses <span className="text-xs text-cyan-400 animate-pulse">(Beta)</span>
          </span>

          {/* AI TOOLS */}
          <div
            className="relative"
            onMouseEnter={() => setOpenAITools(true)}
            onMouseLeave={() => setOpenAITools(false)}
          >
            <span className="flex items-center gap-1 whitespace-nowrap cursor-pointer hover:text-white">
              AI Tools <span className="text-xs">▾</span>
            </span>

            {openAITools && (
              <div className="absolute top-full left-0 mt-2 w-56 z-[999]">
                <div className="bg-white text-black rounded-xl shadow-2xl border border-gray-200">
                  <a
                    href="https://gemini.google.com/gem/1jRl4IIIlvR1MnoVSP_3XoIrOkeFR8Dry?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-cyan-500"
                  >
                    AIDEx AppForge AI
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* CERTBOARD */}
          <a href="https://tinywebs.site/7bBsL3" target="_blank" className="flex items-center gap-1 whitespace-nowrap hover:text-white">
            CertBoard <span className="text-xs">↗</span>
          </a>

          <span className="whitespace-nowrap hover:text-white cursor-pointer">Guidelines</span>
          <span className="whitespace-nowrap hover:text-white cursor-pointer">Gallery</span>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to learn?"
            className="hidden md:block bg-white/5 border border-white/10 text-sm px-3 py-2 rounded-full w-40 focus:outline-none focus:border-blue-500"
          />

          <button className="flex items-center gap-1 whitespace-nowrap hover:text-white">
            Sign In <span className="text-xs text-cyan-400 animate-pulse">(Beta)</span>
          </button>

          <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm shadow-lg hover:scale-105 transition">
            Join Now
          </button>

        </div>

      </div>
    </nav>
  );
}