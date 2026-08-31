"use client";
import Image from "next/image";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import GsapTextAnimation from "../components/GsapTextAnimation";
import ContentSwipUp from "../components/ContentSwipUp";
import TeamShowcase from "../components/TeamShowcase";

export default function OurTeam() {
  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center pb-[90px] pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.jpg"
            alt="TechBeeps About Us Hero Background"
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
              <GsapTextAnimation mainText={"Our Team"} mainClass="flex flex-wrap " />
            </h1>
            <ContentSwipUp className="md:text-[20px]" top="100">
              At TechBeeps, we promise more than just IT services—we promise growth, innovation, and long-term success. Our goal is to empower businesses with the latest digital solutions that streamline operations, enhance customer engagement, and drive measurable results.

              We don’t just deliver projects; we build partnerships based on trust, transparency, and excellence. From web development to digital transformation, we ensure every solution is tailored to meet your unique business needs.
            </ContentSwipUp>
          </div>
        </div>
      </section>

      {/* Interactive Team Showcase Section with 3D Flip Effects & Blueprint Bio */}
      <TeamShowcase />

      {/* Adding CallToAction */}
      <CallToAction />

      <Footer />
    </>
  );
}
