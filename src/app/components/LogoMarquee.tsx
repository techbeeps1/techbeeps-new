"use client";

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

const repeatedLogos = [...logos, ...logos, ...logos, ...logos];
export default function LogoMarquee() {
  return (
    <section className="py-25 border-y-1 border-white/12 text-white overflow-hidden relative z-1">
      <div className="container mx-auto text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white">
          <GsapTextAnimation
            mainText={"Trusted by Companies"}
            mainClass="flex flex-wrap justify-center"
          />
        </h2>
        <ContentSwipUp className="max-w-4xl mx-auto w-full">
          We partner with forward-thinking enterprises, high-growth startups, and visionary brands across the globe to build high-performance digital products and scalable solutions.
        </ContentSwipUp>
      </div>
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="flex animate-continuous-marquee items-center py-2">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-6 sm:px-10 md:px-14 flex items-center justify-center"
            >
              <div className="h-10 sm:h-12 md:h-14 lg:h-16 flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Company Logo ${(index % logos.length) + 1}`}
                  width={220}
                  height={80}
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto max-w-[140px] sm:max-w-[180px] md:max-w-[220px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
