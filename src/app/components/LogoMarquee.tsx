"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import GsapTextAnimation from "./GsapTextAnimation";

const logos = [
  "/logo-1.png",
  "/logo-2.png",
  "/logo-3.png",
  "/logo-4.png",
  "/logo-5.png",
  "/logo-6.png",
  "/logo-7.png",
  "/logo-8.png",
  "/logo-9.png",
];

export default function LogoMarquee() {
  return (
    <section className="py-20 bg-[#05010f] text-white overflow-hidden relative">
      <div className="container mx-auto text-center mb-16 space-y-4">        
        
          <h2
                className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white "              >
               
                <GsapTextAnimation mainText={"Trusted by Companies"} mainClass="flex flex-wrap justify-center "/>
              </h2>
        <p className="text-gray-300 max-w-4xl mx-auto text-sm md:text-[16px] leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
        </p>
      </div>

      <div className="relative w-full flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[150px] before:bg-gradient-to-r before:from-[#05010f] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[150px] after:bg-gradient-to-l after:from-[#05010f] after:to-transparent">
        <motion.div
          className="flex whitespace-nowrap items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 7, repeat: Infinity }}
        >
          {/* We map the logos array multiple times to ensure enough items for seamless infinite scroll */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 pr-16 md:pr-24">
              <Image
                src={logo}
                alt={`Company Logo ${index + 1}`}
                width={150}
                height={60}
                className="w-auto h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
