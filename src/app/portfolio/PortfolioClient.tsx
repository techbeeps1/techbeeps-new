"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import TestimonialSlider from "../components/TestimonialSlider";
import GsapTextAnimation from "../components/GsapTextAnimation";
import ContentSwipUp from "../components/ContentSwipUp";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import { portfolioCategories as categories, portfolioProjects as projects, isProjectInCategory, Project } from "@/data/portfolio";
export type { Project };

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    if (typeof window !== "undefined") {
      ScrollTrigger.refresh();
      const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
      const t2 = setTimeout(() => ScrollTrigger.refresh(), 400);
      const t3 = setTimeout(() => ScrollTrigger.refresh(), 850);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [activeCategory]);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => isProjectInCategory(project, activeCategory));

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center pb-[90px] pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio-banner1.jpg"
            alt="TechBeeps Portfolio Hero Background"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,rgba(0, 0, 0, 0.18)_20%,rgba(0,0,0,0)_54%,#000000_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/80 via-transparent to-[#05010f]/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute bottom-0 lg:bottom-10 -left-20 lg:-left-40 bg-[#504CFF] blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
          <div className="absolute top-0 lg:top-20 -right-20 lg:-right-20 bg-primary blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
        </div>

        {/* Content Box */}
        <div className="container relative z-10 px-4 mt-auto">
          <div className="backdrop-blur-[25px] rounded-[30px] p-6 md:p-8 lg:p-[40px] bg-[#868686]/10 ">
            <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[97px] text-white mb-4 lg:mb-6">
              <GsapTextAnimation mainText={"Our Portfolio"} mainClass="flex flex-wrap " />
            </h1>
            <ContentSwipUp className="md:text-[20px]" top="100">
              At TechBeeps Services, we create intelligent, user-focused digital experiences that blend stunning design with high performance. Using a data-driven and AI-powered approach, we design fast, intuitive, and scalable websites and apps tailored to your users.
            </ContentSwipUp>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 bg-[#05010f] text-white relative z-10">
        <div className="container px-4">
          {/* Categories Tab Bar */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3.5 mb-12 sm:mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-[15px] py-[5px] rounded-xl text-sm md:text-base lg:text-lg font-medium transition-all duration-400 cursor-pointer outline-none focus:outline-none focus:ring-0 border ${activeCategory === cat
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                  : "bg-transparent text-white border-white/20 hover:bg-primary hover:text-white hover:border-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid with Framer Motion Layout Animations */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 p-8">
              <p className="text-lg text-white/70">
                No projects found under <span className="text-primary font-semibold">{activeCategory}</span> yet.
              </p>
              <button
                onClick={() => setActiveCategory("All")}
                className="mt-4 px-6 py-2.5 rounded-full bg-primary text-white text-sm hover:opacity-90 transition-opacity cursor-pointer"
              >
                View All Projects
              </button>
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
              style={{ perspective: 1500 }}
            >
              <AnimatePresence mode="popLayout" onExitComplete={() => { if (typeof window !== "undefined") ScrollTrigger.refresh(); }}>
                {filteredProjects.map((item, index) => {
                  const hasLink = Boolean(item.link && item.link.trim());

                  return (
                    <motion.div
                      key={item.title}
                      layout
                      initial={{ opacity: 0, rotateX: -10, y: 50, scale: 0.95 }}
                      animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                      exit={{ opacity: 0, rotateX: 10, y: -50, scale: 0.95 }}
                      transition={{
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.05
                      }}
                      className="w-full aspect-[4/3] relative rounded-[32px] overflow-hidden group border border-white/5 bg-[#120D25]"
                    >
                      <div className="absolute inset-0 w-full h-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-4 px-6 md:py-4.5 md:px-8 flex justify-between items-center transition-all duration-500 group-hover:bg-black/60 group-hover:border-white/20">
                        <div className="flex flex-col gap-0.5">
                          <h3 className="text-white font-semibold text-lg md:text-[22px]">
                            {hasLink ? (
                              <Link
                                href={item.link!}
                                target={item.link!.startsWith("http") ? "_blank" : undefined}
                                rel={item.link!.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="hover:text-primary transition-colors duration-300"
                              >
                                {item.title}
                              </Link>
                            ) : (
                              item.title
                            )}
                          </h3>
                        </div>

                        {hasLink && (
                          <Link
                            href={item.link!}
                            target={item.link!.startsWith("http") ? "_blank" : undefined}
                            rel={item.link!.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-all duration-300 shrink-0 ml-3"
                            aria-label={`Visit ${item.title}`}
                          >
                            <FiArrowUpRight className="text-base md:text-xl" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      <TestimonialSlider />
      <CallToAction />
      <Footer />
    </>
  );
}
