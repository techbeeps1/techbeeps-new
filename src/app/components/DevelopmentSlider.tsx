"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FiSearch,
  FiSend,
  FiUserPlus,
  FiFileText,
  FiUser,
  FiTrendingUp,
  FiUserCheck,
  FiBarChart2,
  FiActivity,
  FiGitBranch,
  FiUsers,
  FiMessageSquare,
  FiTerminal,
  FiCpu,
  FiMessageCircle,
  FiLayers,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import { BsDiagram3 } from "react-icons/bs";

const servicesData = [
  {
    id: "dev-1",
    title: "AI Development Solutions",
    image: "/dev_service_1.png",
    features: [
      { name: "Custom AI Applications", icon: FiSearch },
      { name: "Enterprise AI Models", icon: FiSend },
      { name: "Multi-Agent AI Systems", icon: FiUserPlus },
      { name: "AI Chatbot Integration", icon: FiFileText },
      { name: "AI-Based SaaS Platforms", icon: FiUser },
    ],
  },
  {
    id: "dev-2",
    title: "Intelligent AI Agents",
    image: "/dev_service_2.png",
    features: [
      { name: "AI Sales Assistants", icon: FiTrendingUp },
      { name: "Custom GPT Assistants", icon: FiFileText },
      { name: "AI Workflow Agents", icon: FiUserCheck },
      { name: "AI HR Solutions", icon: FiBarChart2 },
      { name: "Autonomous AI Systems", icon: FiActivity },
    ],
  },
  {
    id: "dev-3",
    title: "AI-Driven Digital Transformation",
    image: "/dev_service_3.png",
    features: [
      { name: "AI SEO Solutions", icon: FiGitBranch },
      { name: "Marketing Automation", icon: FiUsers },
      { name: "Smart Lead Generation", icon: FiMessageSquare },
      { name: "AI Content Solutions", icon: FiFileText },
      { name: "AI Strategy Consulting", icon: FiBarChart2 },
    ],
  },
  {
    id: "dev-4",
    title: "Business Process Automation",
    image: "/dev_service_4.png",
    features: [
      { name: "Sales Process Automation", icon: FiTerminal },
      { name: "Enterprise Automation", icon: FiCpu },
      { name: "Lead Management Systems", icon: BsDiagram3 },
      { name: "Business Analytics Solutions", icon: FiMessageCircle },
      { name: "Predictive AI Analytics", icon: FiLayers },
    ],
  },
];

function DevelopmentSliderCard({ card }: { card: any }) {
  return (
    <div
      className="p-[4px] group relative rounded-[20px] overflow-hidden shrink-0 w-full md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] 2xl:w-[calc((100%-72px)/4)] flex flex-col before:content-[''] before:absolute before:w-[250%] before:h-[250%] before:-top-[75%] before:-left-[75%] before:bg-[conic-gradient(from_0deg,transparent,#af8df5,transparent,#8b5cf6,transparent,#af8df5,transparent)] before:animate-[rotateBorder_15s_linear_infinite] before:z-0"
    >
      {/* Image Section */}
      <div className="relative w-full aspect-[4/3] rounded-t-[16px] overflow-hidden bg-black z-1">
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            width={1024}
            height={1024}
            className="object-cover h-full w-full pointer-events-none absolute top-0 left-0 bottom-0 right-0 z-1 translate-x-1/2 scale-x-[2] opacity-0 blur-[10px] group-hover:blur-[0px] transition-all duration-500 ease group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100"
            priority
            unoptimized
          />
          <Image
            src={card.image}
            alt={card.title}
            width={1024}
            height={1024}
            className="object-cover h-full w-full pointer-events-none blur-[0px] group-hover:opacity-0 group-hover:blur-[10px] group-hover:-translate-x-1/2 group-hover:scale-x-[2] transition-all duration-500 ease"
            priority
            unoptimized
          />
        </div>
      </div>
      <div className="pt-5 px-2.5 pb-2.5 rounded-b-[16px] bg-[#0d0a1b]/96 z-1 flex-1 flex flex-col justify-between">
        <div className="px-4 pt-3 pb-3">
          <h3 className="text-[18px] 2xl:text-[21px] font-bold text-white leading-tight">
            {card.title}
          </h3>
        </div>
        <div className="flex-1 flex flex-col">
          {card.features.map((feature: any, idx: number) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="w-full">
                {/* Thin divider line before every item */}
                <div className="h-[1px] w-full bg-white/[0.08]" />
                <div className="flex items-center gap-4 py-3 px-6 text-white/90">
                  <Icon className="w-4.5 h-4.5 text-white/70 shrink-0" />
                  <span className="text-[14px] md:text-[15px] font-medium leading-normal tracking-wide">
                    {feature.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function DevelopmentSlider() {
  const extendedData = [
    ...servicesData,
    ...servicesData.map((s, idx) => ({ ...s, id: `${s.id}-dup-${idx}` })),
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [maxDrag, setMaxDrag] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  // Helper to determine the number of visible cards based on screen width
  const getVisibleCount = () => {
    if (typeof window === "undefined") return 4;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const updateWidths = () => {
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
    updateWidths();
    window.addEventListener("resize", updateWidths);
    // Trigger measurement after a short timeout to ensure DOM is fully rendered
    const timer = setTimeout(updateWidths, 100);
    return () => {
      window.removeEventListener("resize", updateWidths);
      clearTimeout(timer);
    };
  }, []);

  // Update translation whenever index changes
  useEffect(() => {
    if (cardWidth > 0) {
      const targetX = -index * cardWidth;
      // Clamp targetX to make sure we don't scroll past the max drag limit
      const clampedX = Math.max(-maxDrag, targetX);
      setTranslateX(clampedX);
      controls.start({ x: clampedX });
    }
  }, [index, cardWidth, maxDrag, controls]);

  const handleNext = () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, extendedData.length - visibleCount);
    if (maxIndex === 0) return;
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, extendedData.length - visibleCount);
    if (maxIndex === 0) return;
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleDragEnd = (event: any, info: any) => {
    const dragOffset = info.offset.x;
    const dragVelocity = info.velocity.x;

    // Combine distance and velocity to predict final position
    const projectedDrag = dragOffset + dragVelocity * 0.15;

    // Snappy sensitivity threshold (40px on mobile is very comfortable)
    const threshold = Math.min(40, cardWidth / 6);

    let newIndex = index;

    if (projectedDrag < -threshold) {
      newIndex = index + 1;
    } else if (projectedDrag > threshold) {
      newIndex = index - 1;
    }

    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, extendedData.length - visibleCount);

    // Clamp the new index
    newIndex = Math.max(0, Math.min(newIndex, maxIndex));

    // Enforce sliding at most 1 card per gesture for a clean slide show
    if (newIndex > index + 1) newIndex = index + 1;
    if (newIndex < index - 1) newIndex = index - 1;

    setIndex(newIndex);
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, extendedData.length - visibleCount);

  return (
    <div className="relative w-full py-10">
      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-0 right-0 hidden md:flex items-center justify-between pointer-events-none z-10">
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 lg:left-6 w-12.5 h-12.5 md:w-14 md:h-14 rounded-[10px] flex items-center justify-center bg-white/20 hover:bg-primary duration-400 text-white pointer-events-auto cursor-pointer"
          aria-label="Previous slide"
        >
          <FiArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 lg:right-6 w-12.5 h-12.5 md:w-14 md:h-14 rounded-[10px] flex items-center justify-center bg-white/20 hover:bg-primary duration-400 text-white pointer-events-auto cursor-pointer"
          aria-label="Next slide"
        >
          <FiArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Drag Track Window */}
      <div
        ref={containerRef}
        className="mx-5 md:mx-[77px] lg:mx-[85px] overflow-hidden"
      >
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
          animate={controls}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            mass: 0.8,
          }}
          className="flex gap-6  w-full"
        >
          {extendedData.map((card) => (
            <DevelopmentSliderCard key={card.id} card={card} />
          ))}
        </motion.div>
      </div>

      {/* Indicator Dots for Mobile */}
      <div className="flex md:hidden justify-center items-center gap-2.5 mt-8 pointer-events-auto">
        {servicesData.map((_, i) => {
          const isActive = index % servicesData.length === i;
          return (
            <button
              key={i}
              onClick={() => {
                const isSecondHalf = index >= servicesData.length;
                setIndex(i + (isSecondHalf ? servicesData.length : 0));
              }}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${isActive ? "w-6 bg-primary" : "w-2 bg-white/25 hover:bg-white/40"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
