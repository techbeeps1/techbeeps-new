"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GsapTextAnimation from "./components/GsapTextAnimation";
import ButtonSwipUp from "./components/ButtonSwipUp";
import ContentSwipUp from "./components/ContentSwipUp";
import Link from "next/link";
import HeroLiningBackground from "./components/HeroLiningBackground";

// Dynamic chunking for below-the-fold heavy components (SSR preserved for SEO & zero visual shift)
const DevelopmentSlider = dynamic(() => import("./components/DevelopmentSlider"), { ssr: true });
const TestimonialSlider = dynamic(() => import("./components/TestimonialSlider"), { ssr: true });
const LogoMarquee = dynamic(() => import("./components/LogoMarquee"), { ssr: true });
const CallToAction = dynamic(() => import("./components/CallToAction"), { ssr: true });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
export default function Home() {
  const cards = [
    {
      id: "ui-1",
      title: "UI/UX Design",
      desc: "At TechBeeps Services, we create stunning, user-focused designs.",
      image: "/ui_ux_card.png",
      url: "/services/ui-ux-design",
    },
    {
      id: "mobile-2",
      title: "Mobile App Development",
      desc: "We offer full-cycle mobile app development services, which means that.",
      image: "/mobile_app_dev_card.png",
      url: "/services/mobile-app-development",
    },
    {
      id: "web-3",
      title: "Web Development",
      desc: "Get the best online presence through our customized web development.",
      image: "/web_dev_card.png",
      url: "/services/web-development",
    },
    {
      id: "ai-4",
      title: "AI Solutions",
      desc: "At TechBeeps, we are transforming the way businesses use technology.",
      image: "/ai_solution_card.png",
      url: "/services/ai-solutions",
    },
    {
      id: "shopify-5",
      title: "Shopify Development",
      desc: "Upgrade your online presence with Best Shopify development company.",
      image: "/shopify_dev_card.png",
      url: "/services/shopify-development",
    },
  ];

  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  // 🔥 AUTOPLAY
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev >= cards.length - visibleCards ? 0 : prev + 1));
    }, 3000); // speed change here

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev >= cards.length - visibleCards ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  {
    /* portfolio */
  }
  const categories = [
    "All",
    "App Development",
    "Web Development",
    "Mean Stack",
    "Shopify",
    "React.js",
  ];

  const projects = [
    {
      title: "Techbeeps CRM",
      category: "Web Development",
      image: "/portfolio-img-1.jpg",
    },
    {
      title: "Empowering Legal Solutions",
      category: "Web Development",
      image: "/portfolio-img-2.jpg",
    },
    {
      title: "Ananta Mobile App Development",
      category: "App Development",
      image: "/portfolio-img-3.jpg",
    },
    {
      title: "Optimal Rating",
      category: "Mean Stack",
      image: "/portfolio-img-4.jpg",
    },
    {
      title: "eCommerce Marketplace",
      category: "Shopify",
      image: "/portfolio-img-5.jpg",
    },
    {
      title: "Passamani & Letang PLLC",
      category: "React.js",
      image: "/portfolio-img-6.jpg",
    },
  ];
  // ✅ ADD THIS
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);


  return (
    <>
      <Header />
      <section className="relative min-h-screen pt-[200px] pb-[100px] flex items-center justify-center text-center overflow-hidden bg-[#05010f] text-white">
        <HeroLiningBackground />
        <div className="container">
          <div className="space-y-6.25 relative z-1">
            <h1
              className="text-4xl hero-char md:text-6xl lg:text-[105px] leading-tight lg:leading-[120px]  
   text-white "
            >
              <GsapTextAnimation mainText={"Build AI-Powered Digital Solutions For Modern Businesses"} textHighlightIndex={[1]} mainClass="flex flex-wrap justify-center " />

            </h1>

            <ContentSwipUp className="md:text-[20px]">
              We help startups and enterprises build AI tools, Ecommerce platforms and scalable digital products.
            </ContentSwipUp >
            <div className="flex flex-row items-center justify-center gap-4 sm:gap-7.5 mt-8 lg:mt-12.5">

              <ButtonSwipUp className="bg-white sm:text-base text-[15px] text-black hover:text-white" url={"/contact-us"}>

                Get Started
                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
              </ButtonSwipUp>

              <ButtonSwipUp className="bg-transparent sm:text-base text-[15px] text-white hover:text-white border-primary border " url={"/services"}>
                Our Services
                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
              </ButtonSwipUp>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-25 relative z-1 border-t border-white/12">
        <div className=" container mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-8.75">
            <div className="space-y-3 md:space-y-5">
              <h2
                className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white "              >

                <GsapTextAnimation mainText={"Services and Solutions <br/> We Provide"} mainClass="flex flex-wrap " />
              </h2>
              <ContentSwipUp className="max-w-[500px] w-full">
                Help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </ContentSwipUp>

            </div>
            <div className="flex gap-3">
              <button
                aria-label="Go to previous service slider"
                onClick={prev}
                className="w-12.5 h-12.5  cursor-pointer rounded-[10px] flex items-center justify-center bg-white/20 hover:bg-primary duration-400"
              >
                <IoArrowForwardOutline className="h-5.5 w-5.5 -rotate-180 text-white" />
              </button>

              <button
                aria-label="Go to next service slider"
                onClick={next}
                className="w-12.5 h-12.5 cursor-pointer rounded-[10px] flex items-center justify-center bg-white/20 hover:bg-primary duration-400"
              >
                <IoArrowForwardOutline className="h-5.5 w-5.5 text-white" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -index * 320 }}             
              transition={{
                type: "tween",
                duration: 0.9,
                ease: "easeInOut",
              }}
            >
              {cards.map((card) => (
                <div
                  className="min-w-[85vw] sm:min-w-91 rounded-[15px] relative bg-[linear-gradient(180deg,#120D25_58%,#291D58_100%)] flex flex-col justify-between overflow-hidden group"
                >
                  <div className="space-y-3.75 mb-4 px-6 pt-8">
                    <h3 className="text-[25px] leading-7.5 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent">
                      {card.title}
                    </h3>
                    <p className="leading-6.25 text-white/80">{card.desc}</p>
                  </div>
                  <div className="w-full overflow-hidden">
                    <div className="w-full relative">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={340}
                        height={220}
                        loading="lazy"
                        sizes="(max-width: 640px) 85vw, 364px"
                        style={{ mixBlendMode: "screen" }}
                        className="mix-blend-screen w-full pointer-events-none drop-shadow-[0_10px_25px_rgba(151,149,255,0.3)]"
                      />
                    </div>
                  </div>
                  <Link
                    onClick={next}
                    className="w-12.5 h-12.5 backdrop-blur-[10px] group/btn absolute bottom-3.75 left-3.75 cursor-pointer rounded-[10px] flex items-center justify-center bg-white/20 hover:bg-primary duration-400 z-10"
                    href={card.url}
                  >
                    <IoArrowForwardOutline className="h-5.5 w-5.5 -rotate-45 text-white group-hover/btn:rotate-0 duration-400" />
                  </Link>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section className="relative z-1 py-25 border-t border-white/12">
        <div className=" container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-8.75">
            <div className="space-y-3 md:space-y-5 lg:w-auto md:w-[70%] w-full">
              <h2
                className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white "              >

                <GsapTextAnimation mainText={"Featured Portfolio: Design & <br/> AI Innovations"} mainClass="flex flex-wrap " />
              </h2>
              <ContentSwipUp className="max-w-[500px] w-full lg:w-auto w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </ContentSwipUp>
            </div>
            <ButtonSwipUp className=" text-black hover:text-white bg-white" url={"/portfolio"}>

              Our Portfolio
              <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
            </ButtonSwipUp>
          </div>
          <div className=" text-white ">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20.75">             
              <div className="w-full lg:w-62.5 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`shrink-0 lg:w-full flex text-sm lg:text-lg cursor-pointer group font-medium outline-none focus:outline-none focus:ring-0 justify-between items-center px-4 py-2.5 lg:p-2.5 rounded-[50px] lg:rounded-md duration-500
              ${active === cat
                        ? "bg-primary text-white"
                        : "bg-white/10 lg:bg-transparent lg:border-b lg:border-white/10 hover:bg-primary"
                      }`}
                  >
                    {cat}
                    <BsArrowRightCircle className="hidden lg:block -rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
                  </button>
                ))}
              </div>
              <motion.div layout className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9.25" style={{ perspective: 1500 }}>
                <AnimatePresence mode="popLayout">
                  {filtered.map((item, index) => (
                    <motion.div
                      key={item.title}
                      layout
                      initial={{ opacity: 0, rotateX: -15, y: 40, scale: 0.95, filter: "blur(10px)" }}
                      animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, rotateX: 15, y: -40, scale: 0.95, filter: "blur(10px)" }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.08
                      }}
                      className="transform-gpu bg-white/6 rounded-[10px]"
                      style={{ transformStyle: "preserve-3d" }}
                    >                     
                      <div className="relative group ">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={400}
                          height={260}
                          loading="lazy"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="w-full h-auto object-cover rounded-[10px]"
                        />
                        <div
                          className="absolute inset-0 flex rounded-[10px] items-center justify-center 
                bg-black/41 backdrop-blur-md opacity-0 group-hover:opacity-100 transition"
                        >
                          <ButtonSwipUp className="bg-white text-black hover:text-white" url={"/portfolio"}>
                            Explore Portfolio
                            <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover/button:rotate-0" />
                          </ButtonSwipUp>
                        </div>
                      </div>
                      <div className="mt-6.25 space-y-4 px-[20px] pb-[20px]">
                        <h3 className="font-semibold text-[20px]">
                          {item.title}
                        </h3>
                        <p>Lorem ipsum is simply dummy text of the printing...</p>

                        <div className="flex gap-2 flex-wrap">
                          <span className="text-sm bg-white/9 px-4.5 py-2 rounded-md">
                            {item.category}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* Development Service  */}
      <section className="border-t border-white/12 text-white py-25 relative z-1 overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-4 text-center mb-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white">
              <GsapTextAnimation mainText={"Custom Web & App Development Solutions <br/> Built for Success"} mainClass="flex flex-wrap justify-center" />
            </h2>
            <ContentSwipUp className="text-center mx-auto max-w-5xl">
              Empower your business with innovative web and mobile applications designed to deliver exceptional user experiences. Our expert team combines cutting-edge technology, AI integration, and modern design to help your brand scale with confidence.
            </ContentSwipUp>
          </div>
        </div>
        <div className="w-full">
          <DevelopmentSlider />
        </div>
      </section>
      <TestimonialSlider />      
      <section className="border-t border-white/12 text-white py-25 relative z-1">
        <div className="max-w-[1320px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">         
          <div className="flex-1 space-y-10">
            <div className="space-y-6">
              <h2
                className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white "              >

                <GsapTextAnimation mainText={"What We Promise for <br/> Successful Project"} mainClass="flex flex-wrap " />
              </h2>
              <ContentSwipUp>
                We have developed a streamlined software delivery process, encompassing project planning, agile methodologies.
              </ContentSwipUp>
            </div>

            <ul className="space-y-5">
              <li className="flex gap-4 items-start hero-sub ">
                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                <ContentSwipUp>
                  TechBeeps biggest concern when choosing a technology is how it fits our customer's needs.
                </ContentSwipUp>
              </li>
              <li className="flex gap-4 items-start hero-sub">
                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                <ContentSwipUp>
                  Our customers' time is their money, so completing every project on time is one of company's biggest priorities.
                </ContentSwipUp>
              </li>
              <li className="flex gap-4 items-start hero-sub">
                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                <ContentSwipUp>
                  We promise that we never have any commercial incentive while choosing a technology or approach, we base our decision only.
                </ContentSwipUp>
              </li>
            </ul>

            <div className="pt-2">
              <ButtonSwipUp className="bg-white w-fit text-black hover:text-white" url={"/contact-us"}>

                Explore More
                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
              </ButtonSwipUp>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <div className="relative shadow-2xl border border-white/5">
              <Image
                src="/promise.jpg"
                alt="TechBeeps Commitment to Quality and Client Satisfaction"
                width={621}
                height={414}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover rounded-[20px] "
              />
              <div
                className="absolute inset-0 rounded-[20px] pointer-events-none"
                style={{ background: "linear-gradient(270deg, #000000 2.88%, rgba(7, 7, 7, 0) 48.12%, #070707 98.14%)" }}
              />
            </div>
          </div>
        </div>
      </section>
      <LogoMarquee />
      <CallToAction />
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="blur-circle absolute -left-[100px] -top-[100px] rounded-full opacity-[0.50]  bg-[#504CFF] blur-[120px] md:w-[600px] md:h-[600px] w-[300px] h-[500px]"></div>
        <div className="blur-circle absolute -right-[100px] -bottom-[150px] rounded-full opacity-[0.50]  bg-primary blur-[120px] md:w-[600px] md:h-[600px] w-[300px] h-[500px]"></div>
      </div>
      <Footer />
    </>
  );
}
