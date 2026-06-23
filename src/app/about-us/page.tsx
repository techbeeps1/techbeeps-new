"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import TestimonialSlider from "../components/TestimonialSlider";
import GsapTextAnimation from "../components/GsapTextAnimation";
import ContentSwipUp from "../components/ContentSwipUp";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import ButtonSwipUp from "../components/ButtonSwipUp";

const countersData = [
  {
    label: "Business Partners",
    value: 89,
    suffix: "+",
  },
  {
    label: "Finished Projects ",
    value: 130,
    suffix: "+",
  },
  {
    label: "Happy Clients ",
    value: 78 ,
    suffix: "%",
  },
  {
    label: "Awards Winning ",
    value: 24,
    suffix: "+",
  },
  {
    label: "Years Of Experience",
    value: 10,
    suffix: "+",
    isMixedCase: true,
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2000; // 2 seconds count-up duration

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function: easeOutQuad
        const easeProgress = progress * (2 - progress);
        
        setCount(Math.floor(easeProgress * value));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          setCount(value);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutUs() {
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
              <GsapTextAnimation mainText={"About Us"}  mainClass="flex flex-wrap "/>
            </h1>            
            <ContentSwipUp className="md:text-[20px]" top="100">
              Our goal is to assist businesses in swiftly embracing new technologies, unraveling intricate challenges that arise in the course of digital progress, and coordinating continuous innovation efforts. 
            </ContentSwipUp>
          </div>
        </div>
      </section>

      {/* Counters Section */}
      <section className="py-20 bg-[#05010f] text-white relative z-10">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
            {countersData.map((item, index) => (
              <div
                key={index}
                className={`bg-[#111113] border border-white/5 rounded-[20px] py-9 px-6 text-center transition-all duration-355 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${
                  index === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <span className={`text-[12px] md:text-sm font-semibold tracking-wider text-white/50 mb-3 block ${
                  item.isMixedCase ? "" : "uppercase"
                }`}>
                  {item.label}
                </span>
                <div className="text-[36px] sm:text-[42px] lg:text-[50px] font-bold text-white leading-none font-sans">
                  <AnimatedCounter value={item.value} suffix={item.suffix} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="container">
              <div className=" flex flex-col lg:flex-row items-center gap-16">
                {/* Left Content */}
                <div className="flex-1 space-y-10">
                  <div className="space-y-6">             
                    <h2
                      className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white "              >
                     
                      <GsapTextAnimation mainText={"We Focus on the Needs to <br/> Provide 100% Satisfaction"} mainClass="flex flex-wrap "/>
                    </h2>            
                     <ContentSwipUp>
                        We focus on the needs of our clients to provide 100% satisfaction. Our acceptance as a reputed web designing company lays within our core of services, i.e. Website Designing, Graphics Designing, Ecommerce Websites, PHP Web Development, CMS Systems, Laravel Development, ERP and CRM Development, API development and Integration, WordPress Templates, theme development, plugin development, etc. We combines web & native mobile applications using hybrid platform. We also offers nativemobile application development for both Android and iOS.
                     </ContentSwipUp>
                  </div>                
                </div>
      
                {/* Right Image */}
                <div className="flex-1 w-full">
                  <div className="relative shadow-2xl border border-white/5">
                    <Image
                      src="/about-img.jpg"
                      alt="About"
                      width={621}
                      height={414}
                      className="w-full h-auto object-cover rounded-[20px] "
                    />
                    <div 
                      className="absolute inset-0 rounded-[20px] pointer-events-none"
                      style={{ background: "linear-gradient(270deg, #000000 2.88%, rgba(7, 7, 7, 0) 48.12%, #070707 98.14%)" }}
                    />
                  </div>
                </div>
              </div>
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
