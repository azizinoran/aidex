"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [openAbout, setOpenAbout] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const pathname = usePathname();

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

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Certifications", path: "/certifications" },
    { name: "AI Tools", path: "/aitools" },

    // ✅ FIXED HERE
    {
      name: "CertBoard",
      path: "https://tinywebs.site/7bBsL3",
      external: true,
    },

    { name: "About Us", path: "/about Us" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-white font-bold text-lg">AIDEx</h1>

        {/* NAV LINKS */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300">
          <div className="hidden md:flex gap-6 text-sm text-gray-300">

  {/* LOOP LINK BIASA */}
  {links.map((link) => {

    // ❌ SKIP About Us (kita handle custom)
    if (link.name === "About Us") return null;

    const isActive = pathname === link.path;

    // EXTERNAL
    if (link.external) {
      return (
        <a
          key={link.name}
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <span className="hover:text-white flex items-center gap-1">
            {link.name}
            <span className="text-xs opacity-60">↗</span>
          </span>
          <span className="absolute left-0 -bottom-1 h-[2px] bg-blue-400 w-0 group-hover:w-full transition-all duration-300" />
        </a>
      );
    }

    // INTERNAL
    return (
      <Link key={link.name} href={link.path} className="relative group">
        <span className={`transition ${isActive ? "text-white" : "hover:text-white"}`}>
          {link.name}
        </span>
        <span className={`absolute left-0 -bottom-1 h-[2px] bg-blue-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
      </Link>
    );
  })}

  {/* 🔥 ABOUT US DROPDOWN */}
  <div
    className="relative"
    onMouseEnter={() => setOpenAbout(true)}
    onMouseLeave={() => {
      setOpenAbout(false);
      setOpenSub(false);
    }}
  >
    <span className="cursor-pointer hover:text-white">About Us ▾</span>

    {openAbout && (
      <div className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded shadow-lg">

        <ul className="py-2 text-sm">

          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Welcome Message
          </li>

          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Vision & Mission
          </li>

          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Organisation Chart
          </li>

          {/* SUBMENU */}
          <li
            className="relative px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onMouseEnter={() => setOpenSub(true)}
            onMouseLeave={() => setOpenSub(false)}
          >
            Staff Directory ▸

            {openSub && (
              <div className="absolute top-0 left-full ml-1 w-56 bg-white shadow-lg rounded">
                <ul className="py-2 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100">Management Staff</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Creative Multimedia</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Development & Technology</li>
                  <li className="px-4 py-2 hover:bg-gray-100">Supportive Staff</li>
                </ul>
              </div>
            )}
          </li>

          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            Our Facilities
          </li>

        </ul>
      </div>
    )}
  </div>

</div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* SEARCH */}
          <div className="relative hidden md:block">

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you want to learn?"
              className="bg-white/5 border border-white/10 text-sm px-4 py-2 rounded-full focus:outline-none focus:border-blue-500 w-64"
            />

            {/* DROPDOWN */}
            {query && (
              <div className="absolute top-12 w-full bg-[#0F172A] border border-white/10 rounded-xl shadow-lg z-50">
                {filtered.length > 0 ? (
                  filtered.map((item, i) => (
                    <div
                      key={i}
                      className="px-4 py-2 hover:bg-white/10 cursor-pointer text-sm"
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-400 text-sm">
                    No results
                  </div>
                )}
              </div>
            )}

          </div>

          {/* LOGIN */}
          <button className="hidden md:block text-sm text-gray-300 hover:text-white">
            Login
          </button>

          {/* JOIN */}
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm shadow-lg hover:scale-105 transition">
            Join Now
          </button>

        </div>

      </div>
    </nav>
  );
}