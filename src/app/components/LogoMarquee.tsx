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

// Repeating the array 4 times ensures sufficient width on any monitor for seamless 50% loop
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
        </ContentSwipUp>
      </div>

      {/* Marquee Wrapper with smooth edge fades */}
      <div className="relative w-full overflow-hidden marquee-mask">
        <div className="flex animate-continuous-marquee items-center py-2">
          {repeatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 md:px-14 flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo}
                alt={`Company Logo ${(index % logos.length) + 1}`}
                width={150}
                height={60}
                className="lg:w-auto lg:h-auto w-[150px] h-[60px] object-contain brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
