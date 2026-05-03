"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearningPath from "./components/LearningPath";
import WhyAIDEx from "./components/WhyAIDEx";
import PopularCourses from "./components/PopularCourses";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

export default function Home() {
  return (
       <PageTransition>
      <main className="bg-[#0B0F1A] text-white">
        <Navbar />
        <Hero />
        <LearningPath />
        <WhyAIDEx />
        <PopularCourses />
        <CTA />
        <Footer />
      </main>
    </PageTransition>
  );
}