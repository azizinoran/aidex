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
        <stop offset="0%" stopColor="#993bf6">
          <animate attributeName="offset" values="0;1;0" dur="5s" repeatCount="indefinite"/>
        </stop>
        <stop offset="50%" stopColor="#22ee88">
          <animate attributeName="offset" values="0.5;1.5;0.5" dur="5s" repeatCount="indefinite"/>
        </stop>
        <stop offset="100%" stopColor="#3bf0f6">
          <animate attributeName="offset" values="1;2;1" dur="5s" repeatCount="indefinite"/>
        </stop>
      </linearGradient>

      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="blur">
          <animate attributeName="stdDeviation" values="2;4;2" dur="2.5s" repeatCount="indefinite"/>
        </feGaussianBlur>
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
            <span className="cursor-pointer hover:text-white">
              About Us ▾
            </span>

            {openAbout && (
              <div className="absolute top-full left-0 w-64 z-50">

                <div className="h-2"></div>

                <div className="bg-white text-black rounded shadow-xl">

                  <ul className="py-2 text-sm">

                    <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      Welcome Message
                    </li>

                    <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      Vision & Mission
                    </li>

                    <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      Organisation Chart
                    </li>

                    <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      Our Facilities
                    </li>

                    <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      AIDEx Prompters
                    </li>

                    <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      OWLx Prompters
                    </li>

                    {/* SUBMENU */}
                    <li
                      className="relative px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer flex items-center"
                      onMouseEnter={() => setOpenSub(true)}
                      onMouseLeave={() => setOpenSub(false)}
                    >
                      Staff Directory <span>▸</span>

                      {openSub && (
                        <div className="absolute top-0 left-full w-56 bg-white shadow-xl rounded">

                          <div className="absolute left-[-6px] top-0 h-full w-2"></div>

                          <ul className="py-2 text-sm text-black">
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">Management Staff</li>
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">Creative Multimedia</li>
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">Development & Technology</li>
                            <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">Support Staff</li>
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
            className="relative pb-2"
            onMouseEnter={() => setOpenAITools(true)}
            onMouseLeave={() => setOpenAITools(false)}
          >
            <span className="cursor-pointer hover:text-white">
              AI Tools ▾
            </span>

            {openAITools && (
              <div className="absolute top-full left-0 w-56 z-50">

                {/* invisible hover bridge */}
                <div className="absolute top-[-8px] left-0 w-full h-2"></div>

                <div className="bg-white text-black rounded shadow-xl">

                
                  <a
                    href="https://gemini.google.com/gem/1jRl4IIIlvR1MnoVSP_3XoIrOkeFR8Dry?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer"
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