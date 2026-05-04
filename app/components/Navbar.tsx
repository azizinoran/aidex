"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [openAbout, setOpenAbout] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [openAITools, setOpenAITools] = useState(false);

  const courses = [
    "Introduction to AI",
    "Prompt Engineering",
    "AI Automation",
    "Machine Learning Basics",
    "No-Code AI Tools",
  ];

  const filtered = courses.filter((c) =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="h-10 flex items-center">
          <svg viewBox="0 0 220 60" className="h-8">
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6">
                  <animate attributeName="offset" values="0;1;0" dur="5s" repeatCount="indefinite"/>
                </stop>
                <stop offset="50%" stopColor="#22D3EE">
                  <animate attributeName="offset" values="0.5;1.5;0.5" dur="5s" repeatCount="indefinite"/>
                </stop>
                <stop offset="100%" stopColor="#3B82F6">
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

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300 items-center">

          <Link href="/" className="hover:text-white">Home</Link>

          {/* ABOUT */}
          <div
            className="relative pb-2"
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
                <div className="absolute top-[-8px] left-0 w-full h-2"></div>

                <div className="bg-white text-black rounded shadow-xl">
                  <ul className="py-2 text-sm">

                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      Welcome Message
                    </li>

                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      Vision & Mission
                    </li>

                    <li className="px-4 py-2 hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      Organisation Chart
                    </li>

                    <li
                      className="relative px-4 py-2 hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer"
                      onMouseEnter={() => setOpenSub(true)}
                      onMouseLeave={() => setOpenSub(false)}
                    >
                      Staff Directory ▸

                      {openSub && (
                        <div className="absolute top-0 left-full w-56 bg-white shadow-xl rounded">
                          <div className="absolute left-[-6px] top-0 h-full w-2"></div>

                          <ul className="py-2 text-sm">
                            <li className="px-4 py-2 hover:bg-gray-100">Management Staff</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Creative Multimedia</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Development & Technology</li>
                            <li className="px-4 py-2 hover:bg-gray-100">Support Staff</li>
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
          <span className="hover:text-white cursor-pointer">
            Certifications <span className="text-xs text-cyan-400">(Beta)</span>
          </span>

          {/* COURSES */}
          <span className="hover:text-white cursor-pointer">
            Courses <span className="text-xs text-cyan-400">(Beta)</span>
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
                <div className="absolute top-[-8px] left-0 w-full h-2"></div>

                <div className="bg-white text-black rounded shadow-xl">
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

          <a href="https://tinywebs.site/7bBsL3" target="_blank" className="hover:text-white">
            CertBoard ↗
          </a>

          <span className="hover:text-white cursor-pointer">Guidelines</span>
          <span className="hover:text-white cursor-pointer">Gallery</span>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          <div className="relative hidden md:block">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you want to learn?"
              className="bg-white/5 border border-white/10 text-sm px-4 py-2 rounded-full focus:outline-none focus:border-blue-500 w-64"
            />

            {query && (
              <div className="absolute top-12 w-full bg-[#0F172A] border border-white/10 rounded-xl shadow-lg z-50">
                {filtered.length > 0 ? (
                  filtered.map((item, i) => (
                    <div key={i} className="px-4 py-2 hover:bg-white/10 cursor-pointer text-sm">
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-400 text-sm">No results</div>
                )}
              </div>
            )}
          </div>

          <button className="hidden md:block text-sm text-gray-300 hover:text-white transition">
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