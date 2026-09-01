"use client";

import React, { useState } from "react";
import TeamCard from "./team/TeamCard";
import { teamMembers } from "@/data/team";

const departments = ["All", "CEO", "Fullstack Developer", "Web Designer", "Web Developer", "Quality Assurance"];


export default function TeamShowcase() {
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredMembers =
    selectedDept === "All"
      ? teamMembers
      : teamMembers.filter((m) => m.department === selectedDept);

  return (
    <section className="relative py-20 lg:py-28 bg-[#05010f] overflow-hidden">
      {/* Background Cosmic Lighting & Orbital Elements */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(80,76,255,0.15)_0%,rgba(133,76,255,0.05)_50%,transparent_75%)] blur-[120px]" />
        <div className="absolute bottom-10 left-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-10 right-[10%] w-[400px] h-[400px] rounded-full bg-[#854CFF]/10 blur-[120px]" />

        {/* Concentric Thin Orbital Vector Rings */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-20"
          viewBox="0 0 1200 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="600"
            cy="600"
            r="380"
            stroke="url(#teamOrbital1)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
          />
          <circle
            cx="600"
            cy="600"
            r="560"
            stroke="url(#teamOrbital2)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient
              id="teamOrbital1"
              x1="220"
              y1="220"
              x2="980"
              y2="980"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#854CFF" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="1" stopColor="#854CFF" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient
              id="teamOrbital2"
              x1="40"
              y1="40"
              x2="1160"
              y2="1160"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="1" stopColor="#504cff" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Header Title & Department Filters */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16 px-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#a78bfa] bg-[#854CFF]/10 border border-[#854CFF]/20 mb-4">
            Expert Leadership & Engineers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-white font-normal leading-[1.15] tracking-tight">
            Meet the Minds Behind <br />
            <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-[#a78bfa] to-purple-300">
              TechBeeps Solutions
            </span>
          </h2>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${selectedDept === dept
                    ? "bg-[#854CFF] text-white shadow-[0_0_20px_rgba(133,76,255,0.4)] scale-105"
                    : "bg-white/[0.05] text-white/70 hover:text-white hover:bg-white/[0.1] border border-white/5"
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Responsive Grid (No Carousel/Slider) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
          {filteredMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
