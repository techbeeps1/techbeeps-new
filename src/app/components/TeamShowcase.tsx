"use client";

import React, { useState } from "react";
import TeamCard from "./team/TeamCard";
import { teamMembers } from "@/data/team";
import GsapTextAnimation from "./GsapTextAnimation";

const departments = ["All", "CEO", "Fullstack Developer", "Web Designer", "Web Developer", "Quality Assurance"];

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="shrink-0 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] xl:w-[calc((100%-72px)/4)] h-[490px] md:h-[520px] perspective-1000 select-none group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className={`relative w-full h-full duration-700 preserve-3d transition-transform cursor-pointer rounded-[24px] ${isFlipped ? "rotate-y-180" : ""
          }`}
      >
        {/* ================= FRONT SIDE (Portrait Card) ================= */}
        <div
          className={`absolute inset-0 backface-hidden rounded-[24px] overflow-hidden border border-white/10 group-hover:border-indigo-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-gradient-to-b from-[#16123a] via-[#0d0924] to-[#04020e] flex flex-col justify-end transition-all duration-300 ${isFlipped ? "pointer-events-none opacity-0" : "pointer-events-auto opacity-100"
            }`}
        >
          {/* Ambient Blue Halo Behind Subject */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(66,85,255,0.25)_0%,rgba(15,10,40,0.1)_55%,transparent_75%)] pointer-events-none" />

          {/* Portrait Image (Face stays 100% bright, sharp & clear) */}
          <div className="absolute inset-0 z-0">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* ONLY bottom gradient so text is readable while faces stay completely clear & bright */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#04020e] via-[#04020e]/80 to-transparent pointer-events-none" />
          </div>

          {/* Member Name & Role at Bottom */}
          <div className="relative z-10 p-6 pb-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-[20px] md:text-[22px] font-bold text-white tracking-tight leading-tight group-hover:text-blue-200 transition-colors drop-shadow-md">
                {member.name}
              </h3>
              <p className="text-[13px] md:text-[14px] text-blue-200/90 font-medium tracking-wide">
                {member.role}
              </p>
            </div>
          </div>
        </div>

        {/* ================= BACK SIDE (Blueprint / Grid Bio Card) ================= */}
        <div
          className={`absolute inset-0 rotate-y-180 backface-hidden rounded-[24px] overflow-hidden border border-[#504cff]/40 shadow-[0_20px_60px_rgba(80,76,255,0.25)] bg-[#0c0926] tech-grid-bg flex flex-col justify-between p-6 transition-opacity duration-300 ${isFlipped ? "pointer-events-auto opacity-100 z-20" : "pointer-events-none opacity-0 z-0"
            }`}
        >
          {/* Radial Tech Glow in Corner */}
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#854CFF]/20 blur-[60px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#3b82f6]/20 blur-[60px] pointer-events-none rounded-full" />

          {/* Blueprint Header */}
          <div className="relative z-10 flex flex-col gap-1 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#854CFF]/20 border border-[#854CFF]/40 text-blue-300 font-semibold">
                {member.department}
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <h3 className="text-[20px] md:text-[22px] font-bold text-white tracking-tight mt-2">
              {member.name}
            </h3>
            <p className="text-[13px] text-[#9b87f5] font-medium tracking-wide">
              {member.role}
            </p>
          </div>

          {/* Biography Text & Skills (Scrollable Container for perfect fit) */}
          <div className="relative z-10 my-3 flex-1 overflow-y-auto custom-scrollbar pr-1 flex flex-col justify-start">
            <p className="text-[12.5px] md:text-[13px] leading-relaxed text-gray-200/90 font-normal">
              {member.bio}
            </p>

            {/* Key Skill Badges */}
            <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-white/[0.06]">
              {member.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-[10.5px] md:text-[11px] px-2.5 py-0.5 rounded-[6px] bg-white/[0.07] border border-white/10 text-blue-100 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Social Profiles & Action Links */}
          <div className="relative z-20 pt-3 border-t border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer relative z-30 pointer-events-auto"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-3.5 h-3.5" />
                </a>
              )}
              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer relative z-30 pointer-events-auto"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="w-3.5 h-3.5" />
                </a>
              )}
              {member.socials.facebook && (
                <a
                  href={member.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer relative z-30 pointer-events-auto"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-3.5 h-3.5" />
                </a>
              )}
              {member.socials.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer relative z-30 pointer-events-auto"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-3.5 h-3.5" />
                </a>
              )}
              {member.socials.email && (
                <a
                  href={member.socials.email}
                  onPointerDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer relative z-30 pointer-events-auto"
                  aria-label="Email"
                >
                  <FiMail className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
