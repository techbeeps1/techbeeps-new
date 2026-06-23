"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { IoArrowForwardOutline } from "react-icons/io5";
import TestimonialSlider from "../components/TestimonialSlider";
import GsapTextAnimation from "../components/GsapTextAnimation";
import ContentSwipUp from "../components/ContentSwipUp";

const categories = [
  "All",
  "App Development",
  "Next.js",
  "Web Development",
  "Shopify",
  "React.js",
  "Figma",
  "WordPress",
];

const projects = [
  {
    title: "My Mind And Me",
    category: "Next.js",
    tags: ["Web Development", "Next.js"],
    image: "/my-mind.jpg",
  },
  {
    title: "Merger Lawyer",
    category: "Next.js",
    tags: ["Web Development", "Next.js"],
    image: "/merger-lawyer.jpg",
  },
  {
    title: "Ananta Mobile App Development",
    category: "App Development",
    tags: ["App Development", "iOS & Android"],
    image: "/ananta-img.jpg",
  },
  {
    title: "Techbeeps CRM",
    category: "Web Development",
    tags: ["Web Development", "CRM"],
    image: "/crm-img.jpg",
  },
  {
    title: "Staging Optimalrating",
    category: "React.js",
    tags: ["React.js", "Mean Stack"],
    image: "/optimal-img.jpg",
  },
  {
    title: "eCommerce Marketplace",
    category: "Shopify",
    tags: ["Shopify", "E-commerce"],
    image: "/indeshop-img.jpg",
  },   
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(
        (project) =>
          project.category === activeCategory ||
          project.tags.includes(activeCategory)
      );

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center pb-[90px] pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.jpg"
            alt="Services Background"
            fill
            priority
            className="object-cover object-top"
          />
          {/* Dark Overlay Gradient to blend with the rest of the site */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,rgba(0, 0, 0, 0.18)_20%,rgba(0,0,0,0)_54%,#000000_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/80 via-transparent to-[#05010f]/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Subtle Glow Gradients (Low Opacity) */}
          <div className="absolute bottom-0 lg:bottom-10 -left-20 lg:-left-40 bg-[#504CFF] blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
          <div className="absolute top-0 lg:top-20 -right-20 lg:-right-20 bg-primary blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
        </div>

        {/* Content Box */}
        <div className="container relative z-10 px-4 mt-auto">
          <div className="backdrop-blur-[25px] rounded-[30px] p-6 md:p-8 lg:p-[40px] bg-[#868686]/10 ">
            <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[97px] text-white mb-4 lg:mb-6">
              <GsapTextAnimation mainText={"Our Portfolio"}  mainClass="flex flex-wrap "/>
            </h1>            
            <ContentSwipUp className="md:text-[20px]" top="100">
              At TechBeeps Services, we create intelligent, user-focused digital experiences that blend stunning design with high performance. Using a data-driven and AI-powered approach, we design fast, intuitive, and scalable websites and apps tailored to your users. Our solutions enhance engagement, improve usability, and drive real business growth.
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
                className={`px-[15px] py-[5px] rounded-xl text-sm md:text-base lg:text-lg font-medium transition-all duration-400 cursor-pointer outline-none focus:outline-none focus:ring-0 border ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-transparent text-white border-white/20 hover:bg-primary hover:text-white hover:border-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Portfolio Grid with Framer Motion Layout Animations */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            style={{ perspective: 1500 }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((item, index) => (
                <motion.div
                  key={`${item.title}-${index}`}
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
                  {/* Background/Project Image */}
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    
                  </div>

                  {/* Translucent overlay bottom bar */}
                  <div className="absolute bottom-5 left-5 right-5 md:bottom-6 md:left-6 md:right-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-4 px-6 md:py-4.5 md:px-8 flex justify-between items-center transition-all duration-500 group-hover:bg-black/60 group-hover:border-white/20">
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-white font-semibold text-lg md:text-[22">
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Action Arrow Icon in Circle */}
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white bg-white/5 transition-all duration-400 group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 shrink-0">
                      <IoArrowForwardOutline className="h-5.5 w-5.5 -rotate-45 transition-transform duration-400 group-hover:rotate-0" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* TestimonialSlider */}
      <TestimonialSlider />

      {/* Adding CallToAction as a placeholder for the next sections */}
      <CallToAction />
      
      <Footer />
    </>
  );
}
