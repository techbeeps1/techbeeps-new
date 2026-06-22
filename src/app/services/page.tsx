"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { IoArrowForwardOutline } from "react-icons/io5";
import TestimonialSlider from "../components/TestimonialSlider";
import LogoMarquee from "../components/LogoMarquee";
import GsapTextAnimation from "../components/GsapTextAnimation";

const servicesData = [
  {
    title: "UI/UX Design",
    desc: "At TechBeeps Services, we create stunning, user-focused designs.",
    tags: ["Web Development", "App Development", "Figma Design"],
    image: "/laptop.png",
  },
  {
    title: "Mobile App Development",
    desc: "We offer full-cycle mobile app development services, which means that.",
    tags: ["Web Development", "App Development", "Figma Design"],
    image: "/laptop.png",
  },
  {
    title: "Web Development",
    desc: "Get the best online presence through our customized web development.",
    tags: ["Web Development", "App Development", "Figma Design"],
    image: "/laptop.png",
  },
  {
    title: "AI Solutions",
    desc: "At TechBeeps, we are transforming the way businesses use technology.",
    tags: ["Web Development", "App Development", "Figma Design"],
    image: "/laptop.png",
  },
  {
    title: "Shopify Development",
    desc: "Upgrade your online presence with Best Shopify development company.",
    tags: ["Web Development", "App Development", "Figma Design"],
    image: "/laptop.png",
  },
  {
    title: "Python",
    desc: "From web development to AI-powered automation, we deliver tailored.",
    tags: ["Web Development", "App Development", "Figma Design"],
    image: "/laptop.png",
  },
];

export default function ServicesPage() {
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
              <GsapTextAnimation mainText={"Innovative IT Solutions for <br/> Modern Businesses "}  mainClass="flex flex-wrap "/>
            </h1>            
            <p className="text-base md:text-lg lg:text-[20px] leading-snug lg:leading-[26px] text-white">
              We help businesses grow with AI-powered solutions, scalable web development, and high-performing e-commerce platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 lg:py-[100px] bg-[#05010f] text-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: (index % 2) * 0.2 }}
                className="relative rounded-[20px] bg-[linear-gradient(90deg,#291D58_0%,#120D25_34%)] overflow-hidden px-[20px] py-[30px] lg:px-[25px] lg:py-[20px] flex flex-col sm:flex-row justify-between gap-6 sm:gap-5 items-center group/card"
              >
                <div className="w-full sm:w-[55%] space-y-4 relative z-10">
                  <h3 className="text-[22px] lg:text-[28px] leading-snug bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm md:text-[16px] leading-[22px] lg:leading-[26px]">
                    {service.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="bg-white/10 px-[14px] py-[6px] lg:px-[18px] lg:py-[8px] rounded-[6px] text-xs lg:text-sm text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Image */}
                <div className="w-full sm:w-[40%] flex justify-center pb-8 sm:pb-0 transform-gpu transition-transform duration-700 ease-out group-hover/card:scale-105 group-hover/card:-translate-y-2">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={291} 
                    height={274} 
                    className="w-[70%] sm:w-full max-w-[200px] lg:max-w-none h-auto object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Arrow Button */}
                <button className="w-10 h-10 lg:w-12.5 lg:h-12.5 backdrop-blur-[10px] absolute bottom-4 right-4 lg:bottom-[16px] lg:right-[16px] cursor-pointer rounded-[10px] flex items-center justify-center bg-white/20 group-hover/card:bg-primary duration-400 z-20 group">
                  <IoArrowForwardOutline className="h-5 w-5 -rotate-45 group-hover/card:rotate-0 duration-400 text-white" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TestimonialSlider */}
      <TestimonialSlider />

      {/* LogoMarquee */}
      <LogoMarquee />

      {/* Adding CallToAction as a placeholder for the next sections */}
      <CallToAction />
      
      <Footer />
    </>
  );
}
