"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [openAbout, setOpenAbout] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [openAITools, setOpenAITools] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="h-10 flex items-center">
          <svg viewBox="0 0 220 60" className="h-8">
            <defs>
              <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6"/>
                <stop offset="50%" stopColor="#22D3EE"/>
                <stop offset="100%" stopColor="#3B82F6"/>
              </linearGradient>
            </defs>
            <text x="10" y="48" fontSize="48" fontWeight="700" fill="url(#flowGrad)">
              AIDEx
            </text>
          </svg>
        </div>

        {/* NAV */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300 items-center h-10">

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
            <span className="flex items-center gap-1 whitespace-nowrap leading-none h-full cursor-pointer hover:text-white">
              About Us <span className="text-xs">▾</span>
            </span>

            {openAbout && (
              <div className="absolute top-full left-0 w-64 z-50">
                <div className="absolute top-[-6px] left-0 w-full h-2"></div>

                <div className="bg-white text-black rounded shadow-xl">
                  <ul className="py-2 text-sm">
                    <li className="px-4 py-2 hover:bg-gray-100">Welcome Message</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Vision & Mission</li>
                    <li className="px-4 py-2 hover:bg-gray-100">Organisation Chart</li>

                    <li
                      className="relative px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                      onMouseEnter={() => setOpenSub(true)}
                      onMouseLeave={() => setOpenSub(false)}
                    >
                      Staff Directory <span>▸</span>

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
          <span className="flex items-center gap-1 cursor-pointer hover:text-white">
            Certifications
            <span className="text-xs text-cyan-400 animate-pulse">(Beta)</span>
          </span>

          {/* COURSES */}
          <span className="flex items-center gap-1 cursor-pointer hover:text-white">
            Courses
            <span className="text-xs text-cyan-400 animate-pulse">(Beta)</span>
          </span>

          {/* AI TOOLS */}
          <div
            className="relative"
            onMouseEnter={() => setOpenAITools(true)}
            onMouseLeave={() => setOpenAITools(false)}
          >
            <span className="flex items-center gap-1 whitespace-nowrap leading-none h-full cursor-pointer hover:text-white">
              AI Tools <span className="text-xs">▾</span>
            </span>

            {openAITools && (
              <div className="absolute top-full left-0 w-56 z-50">
                <div className="absolute top-[-6px] left-0 w-full h-2"></div>

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

          {/* CERTBOARD */}
          <a
            href="https://tinywebs.site/7bBsL3"
            target="_blank"
            className="flex items-center gap-1 hover:text-white"
          >
            CertBoard <span className="text-xs">↗</span>
          </a>

          <span className="hover:text-white cursor-pointer">Guidelines</span>
          <span className="hover:text-white cursor-pointer">Gallery</span>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What do you want to learn?"
            className="hidden md:block bg-white/5 border border-white/10 text-sm px-4 py-2 rounded-full focus:outline-none focus:border-blue-500 w-64"
          />

          <button className="flex items-center gap-1 whitespace-nowrap leading-none h-full cursor-pointer hover:text-white">
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