"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiMail,
} from "react-icons/fi";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  image: string;
  bio: string;
  skills: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "Yaseen Ahmad",
    role: "Chief Executive Officer",
    department: "CEO",
    image: "/yaseen1.png",
    bio: "We offer solutions with modern technology for applications we can run on the internet. I first analyze the scope and provide a comprehensive business approach to design and develop web applications. I focus on delivering key outcomes, building amazing teams and quickly adapting to new learnings.",
    skills: ["Business Development Manager", "Technical Specialist", "IT Project Manager"],
    socials: {
      twitter: "https://x.com/techbeepss",
      linkedin: "https://www.linkedin.com/in/yaseenahmad/",
      facebook: "https://www.facebook.com/techbeepss/",
      instagram: "http://instagram.com/techbeeps/",
      email: "mailto:contact@techbeeps.com",
    },
  },
  {
    id: "team-2",
    name: "Mizbahuddin Qasim",
    role: "Senior Fullstack Developer",
    department: "Fullstack Developer",
    image: "/mizbah.png",
    bio: "Senior Web Developer at TechBeeps Services with 8+ years of experience building modern, responsive, and high-performance websites. Skilled in HTML, CSS, JavaScript, PHP, WordPress, PrestaShop, Shopify, and Laravel. Passionate about clean code, creative solutions, and delivering seamless digital experiences across all devices. Focused on building smart, reliable web solutions that help businesses grow and succeed online.",
    skills: ["PHP", "WordPress", "Shopify", "Laravel", "PrestaShop", "JavaScript", "HTML", "CSS"],
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:contact@techbeeps.com",
    },
  },
  {
    id: "team-3",
    name: "Gurjeet Singh",
    role: "Fullstack Developer",
    department: "Fullstack Developer",
    image: "/gurjeet.png",
    bio: "Hi, I'm Gurjeet Singh, a Web Developer and Python enthusiast with 2+ years of experience. I specialize in HTML, CSS, JavaScript, PHP, Python, and WordPress development. I create modern, responsive, and user-friendly websites, applications, and automation solutions. Passionate about new technologies, I build reliable digital solutions that help businesses grow online.",
    skills: ["PHP", "Python", "WordPress", "AWS", "JavaScript", "HTML", "CSS"],
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:contact@techbeeps.com",
    },
  },
  {
    id: "team-4",
    name: "Mohd Iliyas Joya",
    role: "Senior UI/UX Desiner",
    department: "Web Designer",
    image: "/mohd-iliyas-joya.jpeg",
    bio: "A skilled UI/UX Designer with 12 years of strong experience in crafting design solutions for small to enterprise businesses. With 12 years of expertise in graphics and UI/UX designing with tools such as Figma, Adobe Photoshop, Adobe Illustrator, Sketchs and Jenkins Builder, I have built a strong foundation in creating modern, visually appealing designs for both all sorts of digital needs like web apps, mobile apps, dashboards, flyres, posts, banners, logos etc.",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Sketchs and Jenkins Builder"],
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:contact@techbeeps.com",
    },
  },
  {
    id: "team-5",
    name: "Asif Ansar",
    role: "Frontend Developer",
    department: "Web Developer",
    image: "/asif.png",
    bio: "A skilled Web Designer with 2 years of hands-on experience in HTML, CSS, Bootstrap, and Shopify, specializing in WordPress development. With 1.5 years of expertise in page builders such as Elementor, WPBakery, and Divi Builder, I have built a strong foundation in creating responsive, visually appealing websites and Shopify stores.",
    skills: ["HTML", "CSS", "Bootstrap", "Shopify", "WordPress", "Elementor", "WPBakery", "Divi Builder"],
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:contact@techbeeps.com",
    },
  },
  {
    id: "team-6",
    name: "Karmjeet Singh",
    role: "Web Developer",
    department: "Web Developer",
    image: "/karmjeet.png",
    bio: "I’m a passionate Web Developer experienced in building responsive, user-friendly websites and web applications. Skilled in HTML, CSS, JavaScript, jQuery, PHP, and WordPress, with a focus on clean and efficient code. I turn creative design ideas into fast, accessible, and optimized digital experiences. I enjoy collaborating with teams to deliver high-quality web solutions that meet client expectations.",
    skills: ["WordPress", "CSS", "JavaScript", "jQuery", "PHP", "HTML"],
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:contact@techbeeps.com",
    },
  },
  {
    id: "team-7",
    name: "Jigyasa Verma",
    role: "QA",
    department: "Quality Assurance",
    image: "/jigyasa.png",
    bio: "Manual QA Tester with 1+ years of experience testing web and mobile applications with a strong focus on quality. Skilled in functional, UI, cross-browser/device testing, test case execution, and accurate bug reporting. Experienced in Agile environments, collaborating with development and product teams to validate fixes and improve releases. Detail-oriented and committed to delivering reliable, stable, and user-friendly digital experiences.",
    skills: ["Testing", "UI", "Cross-browser/Device Testing", "Test Case Execution", "Bug Reporting", "Agile"],
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:contact@techbeeps.com",
    },
  },
];

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

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  // Determine how many cards fit on screen
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const updateMeasurements = () => {
    if (containerRef.current && trackRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const trackWidth = trackRef.current.scrollWidth;

      const firstCard = trackRef.current.children[0] as HTMLElement;
      if (firstCard) {
        const style = window.getComputedStyle(trackRef.current);
        const gap = parseFloat(style.columnGap || style.gap || "24");
        const w = firstCard.offsetWidth + gap;
        setCardWidth(w);
      }

      setMaxDrag(Math.max(0, trackWidth - containerWidth));
    }
  };

  useEffect(() => {
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    const timer = setTimeout(updateMeasurements, 150);
    return () => {
      window.removeEventListener("resize", updateMeasurements);
      clearTimeout(timer);
    };
  }, [filteredMembers, selectedDept]);

  // Sync animation with index
  useEffect(() => {
    if (cardWidth > 0) {
      const targetX = -index * cardWidth;
      const clampedX = Math.max(-maxDrag, targetX);
      controls.start({
        x: clampedX,
        transition: { type: "spring", stiffness: 120, damping: 20 },
      });
    }
  }, [index, cardWidth, maxDrag, controls]);

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, filteredMembers.length - visibleCount);

  const handleNext = () => {
    if (maxIndex === 0) return;
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (maxIndex === 0) return;
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleDragEnd = (_: any, info: any) => {
    const dragOffset = info.offset.x;
    const dragVelocity = info.velocity.x;
    const projected = dragOffset + dragVelocity * 0.15;
    const threshold = Math.min(40, cardWidth / 6);

    let newIndex = index;
    if (projected < -threshold) {
      newIndex = index + 1;
    } else if (projected > threshold) {
      newIndex = index - 1;
    }

    newIndex = Math.max(0, Math.min(newIndex, maxIndex));
    setIndex(newIndex);
  };

  // Calculate progress percentage for bottom indicator
  const progressPercent =
    maxIndex > 0 ? (index / maxIndex) * 100 : 0;

  return (
    <section className="relative py-24 lg:py-32 bg-[#05010f] overflow-hidden">
      {/* ================= BACKGROUND COSMIC LIGHTING & ORBITAL RINGS ================= */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Subtle Ambient Radial Spotlights */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(80,76,255,0.18)_0%,rgba(133,76,255,0.06)_50%,transparent_75%)] blur-[100px]" />
        <div className="absolute bottom-10 left-[10%] w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-10 right-[10%] w-[400px] h-[400px] rounded-full bg-[#854CFF]/10 blur-[120px]" />

        {/* Concentric Thin Orbital Vector Rings (Exact Reference Look) */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] opacity-25"
          viewBox="0 0 1200 1200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="600"
            cy="600"
            r="380"
            stroke="url(#orbitalGradient1)"
            strokeWidth="1.2"
            strokeDasharray="4 8"
          />
          <circle
            cx="600"
            cy="600"
            r="560"
            stroke="url(#orbitalGradient2)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient
              id="orbitalGradient1"
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
              id="orbitalGradient2"
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
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20 px-4">

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white font-normal leading-[1.15] tracking-tight">
            Partnered with most of the <br />
            <span className="italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-[#a78bfa] to-purple-300">
              top people at each industry
            </span>
          </h2>


          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => {
                  setSelectedDept(dept);
                  setIndex(0);
                }}
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

        {/* ================= CAROUSEL / SLIDER WRAPPER ================= */}
        <div className="relative w-full">
          {/* Navigation Arrow Left */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 sm:left-0 md:left-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-[#854CFF] hover:border-[#854CFF] transition-all duration-300 shadow-lg cursor-pointer hover:scale-105"
            aria-label="Previous Team Member"
          >
            <FiArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            onClick={handleNext}
            className="absolute -right-2 sm:right-0 md:right-2 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-[#854CFF] hover:border-[#854CFF] transition-all duration-300 shadow-lg cursor-pointer hover:scale-105"
            aria-label="Next Team Member"
          >
            <FiArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Drag & Slide Viewport */}
          <div
            ref={containerRef}
            className="mx-3 sm:mx-8 md:mx-14 lg:mx-18 overflow-hidden py-4 px-1"
          >
            <motion.div
              ref={trackRef}
              drag="x"
              dragConstraints={{ left: -maxDrag, right: 0 }}
              dragElastic={0.15}
              onDragEnd={handleDragEnd}
              animate={controls}
              className="flex gap-6 w-full"
            >
              {filteredMembers.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </motion.div>
          </div>

          {/* ================= BOTTOM PROGRESS BAR & INDICATOR ================= */}
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            {/* Smooth Track Bar */}
            <div className="w-48 md:w-64 h-[3px] bg-white/10 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-blue-400 via-[#854CFF] to-purple-400 rounded-full transition-all duration-300"
                style={{
                  width: `${maxIndex > 0 ? 100 / (maxIndex + 1) : 100}%`,
                  transform: `translateX(${index * 100}%)`,
                }}
              />
            </div>

            {/* Mobile swipe hint */}
            <span className="text-[12px] text-white/40 md:hidden flex items-center gap-1.5">
              <span>Swipe or click arrows to explore</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
