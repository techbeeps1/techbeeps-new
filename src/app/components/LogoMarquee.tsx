"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import GsapTextAnimation from "./GsapTextAnimation";
import ContentSwipUp from "./ContentSwipUp";

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
    <section className="py-25 border-t border-white/12  text-white overflow-hidden relative z-1">
      <div className="container mx-auto text-center mb-16 space-y-4">        
        
          <h2
                className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white "              >
               
                <GsapTextAnimation mainText={"Trusted by Companies"} mainClass="flex flex-wrap justify-center "/>
              </h2>
              <ContentSwipUp className="max-w-4xl mx-auto w-full">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is
                  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
              </ContentSwipUp>

      </div>

      <div className="relative w-full flex">
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
