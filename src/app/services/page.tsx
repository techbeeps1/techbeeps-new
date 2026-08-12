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
import ContentSwipUp from "../components/ContentSwipUp";
import Link from "next/link";
import AppDevelopmentCard from "../components/AppDevelopmentCard";

const servicesData = [
  {
    title: "UI/UX Design",
    desc: "At TechBeeps Services, we create stunning, intuitive, and user-focused designs.",
    tags: ["UI/UX", "Figma Design", "Prototyping"],
    image: "/ui_ux_card.png",
  },
  {
    title: "Mobile App Development",
    desc: "We offer full-cycle mobile app development services for iOS and Android.",
    tags: ["React Native", "Flutter", "iOS & Android"],
    image: "/mobile_app_dev_card.png",
  },
  {
    title: "Web Development",
    desc: "Get the best online presence through our customized, high-performance web development.",
    tags: ["Next.js", "React.js", "Full Stack"],
    image: "/web_dev_card.png",
  },
  {
    title: "AI Solutions",
    desc: "At TechBeeps, we are transforming the way businesses use technology through AI.",
    tags: ["AI Agents", "LLM Integration", "Automation"],
    image: "/ai_solution_card.png",
  },
  {
    title: "Shopify Development",
    desc: "Upgrade your online store presence with high-converting custom Shopify development.",
    tags: ["E-Commerce", "Shopify Plus", "Custom Themes"],
    image: "/shopify_dev_card.png",
  },
  {
    title: "Python Development",
    desc: "From web backends to AI-powered automation, we deliver tailored Python solutions.",
    tags: ["Python", "FastAPI", "Data Scraping"],
    image: "/python_dev_card.png",
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
              <GsapTextAnimation mainText={"Innovative IT Solutions for <br/> Modern Businesses "} mainClass="flex flex-wrap " />
            </h1>
            <ContentSwipUp className="md:text-[20px]" top="100">
              We help businesses grow with AI-powered solutions, scalable web development, and high-performing e-commerce platforms.
            </ContentSwipUp>
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
              >
                <AppDevelopmentCard
                  title={service.title}
                  desc={service.desc}
                  tags={service.tags}
                  image={service.image}
                  href={`/services/ui-ux-design`}
                />
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
