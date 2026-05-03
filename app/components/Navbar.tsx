"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [openAbout, setOpenAbout] = useState(false);
  const [openSub, setOpenSub] = useState(false);

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

        <h1 className="text-white font-bold text-lg">AIDEx</h1>

        <div className="hidden md:flex gap-6 text-sm text-gray-300 items-center">

          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/courses" className="hover:text-white">Courses</Link>
          <Link href="/certifications" className="hover:text-white">Certifications</Link>
          <Link href="/aitools" className="hover:text-white">AI Tools</Link>

          <a href="https://tinywebs.site/7bBsL3" target="_blank" className="hover:text-white">
            CertBoard ↗
          </a>

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

                    <li
                      className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer"
                      onMouseEnter={() => setOpenSub(true)}
                      onMouseLeave={() => setOpenSub(false)}
                    >
                      Staff Directory ▸

                      {openSub && (
                        <div className="absolute top-1/2 -translate-y-1/2 left-full w-56 bg-white shadow-xl rounded">

                          <div className="absolute left-[-8px] top-0 h-full w-2"></div>

                          <ul className="py-2 text-sm text-black">
                            <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">Management Staff</li>
                            <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">Creative Multimedia</li>
                            <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">Development & Technology</li>
                            <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">Support Staff</li>
                          </ul>
                        </div>
                      )}
                    </li>

                    <li className="px-4 py-2 text-black hover:bg-gray-100 hover:text-cyan-500 transition cursor-pointer">
                      Our Facilities
                    </li>

                  </ul>

                </div>
              </div>
            )}

          </div>

        </div>

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

          <button className="hidden md:block text-sm text-gray-300 hover:text-white">
            Login
          </button>

          <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm shadow-lg hover:scale-105 transition">
            Join Now
          </button>

        </div>

      </div>
    </nav>
  );
}