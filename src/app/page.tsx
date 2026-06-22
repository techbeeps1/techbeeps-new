"use client";
import Image from "next/image";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import Header from "./components/header/Header";
import TestimonialSlider from "./components/TestimonialSlider";
import LogoMarquee from "./components/LogoMarquee";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import gsap from "gsap";
import GsapTextAnimation from "./components/GsapTextAnimation";
export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null); 
  const cards = [
    {id:"ui-1",
      title: "UI/UX Design",
      desc: "At TechBeeps Services, we create stunning, user-focused designs.",
    },
    {
      id:"mobile-2",
      title: "Mobile App Development",
      desc: "We offer full-cycle mobile app development services, which means that.",
    },
    {
      id:"web-3",
      title: "Web Development",
      desc: "Get the best online presence through our customized web development.",
    },
    {
      id:"ai-4",
      title: "AI Solutions",
      desc: "At TechBeeps, we are transforming the way businesses use technology.",
    },
    {
      id:"shopify-5", 
      title: "Shopify Development",
      desc: "Upgrade your online presence with Best Shopify development company.",
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      gsap.from(".hero-sub", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 1.2,
      });
      gsap.from(".hero-btn", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 1.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);


  return (
    <>
      <Header />
      <section ref={heroRef}   className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#05010f] text-white">
        <Image
          src="/bg-img.png"
          alt="BG Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-10 lg:bottom-29 -left-20 lg:-left-55 bg-[#504CFF] blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-211.25 lg:h-121.75 opacity-40 lg:opacity-100"></div>
        <div className="absolute top-10 lg:top-46.75 -right-20 lg:right-0 bg-primary blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-230.25 lg:h-103.25 opacity-40 lg:opacity-100"></div>
        <div className="container">
          <div className="space-y-6.25 relative z-1">
            <h1
              className="text-4xl hero-char md:text-6xl lg:text-[105px] leading-tight lg:leading-[120px]  bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] 
  bg-clip-text text-white "
            >
 <GsapTextAnimation mainText={"Build AI-Powered Digital Solutions For Modern Businesses"} textHighlightIndex={[1]}  mainClass="flex flex-wrap justify-center "/>

            </h1>
           
     
     
            <p className="text-base hero-sub md:text-lg lg:text-[20px] max-w-2xl mx-auto">
              We help startups and enterprises build AI tools, Ecommerce
              platforms and scalable digital products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-7.5 mt-8 lg:mt-12.5">
              <button className="w-full hero-btn sm:w-auto px-6 py-3.5 cursor-pointer flex justify-center items-center group hover:bg-primary hover:text-white duration-400 gap-2.5 bg-white text-black rounded-[50px]">
                Get Started
                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
              </button>
              <button className="w-full hero-btn sm:w-auto px-6 py-3.5 cursor-pointer flex justify-center items-center text-white group hover:bg-primary duration-400 gap-2.5 bg-transparent border border-primary  rounded-[50px]">
                Our Services
                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
              </button>
            </div>
            <div className="text-[30px] mx-auto mt-12.5 font-bold bg-primary h-15 w-15 leading-8.75 flex items-center justify-center rounded-full">
              AI
            </div>
          </div>
        </div>
      </section>     

      {/* Services */}
      <section className="py-25">
        <div className=" container mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-8.75">
            <div className="space-y-3 md:space-y-5">
              <h2
                className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white "              >
               
                <GsapTextAnimation mainText={"Services and Solutions <br/> We Provide"} mainClass="flex flex-wrap "/>
              </h2>
              <p className="text-sm md:text-base">
                help you to build website company that is modern, user friendly,
                good CEO, and Clean design
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12.5 h-12.5 cursor-pointer rounded-[10px] flex items-center justify-center bg-white/20 hover:bg-primary duration-400"
              >
                <IoArrowForwardOutline className="h-5.5 w-5.5 -rotate-180" />
              </button>

              <button
                onClick={next}
                className="w-12.5 h-12.5 cursor-pointer rounded-[10px] flex items-center justify-center bg-white/20 hover:bg-primary duration-400"
              >
                <IoArrowForwardOutline className="h-5.5 w-5.5" />
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: -index * 320 }}
              //transition={{ type: "spring", stiffness: 120, damping: 20 }}
              transition={{
                type: "tween",
                duration: 0.9,
                ease: "easeInOut",
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={card.id}
                  className="min-w-[85vw] sm:min-w-91 rounded-[15px] relative 
              bg-[linear-gradient(180deg,#120D25_58%,#291D58_100%)] 
              "
                >
                  <div className="space-y-3.75 mb-5 px-6 pt-8.5">
                    <h3
                      className="text-[25px] leading-7.5 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] 
  bg-clip-text text-transparent"
                    >
                      {card.title}
                    </h3>
                    <p className="leading-6.25">{card.desc}</p>
                  </div>
                  <Image
                    src="/laptop.png"
                    alt="Service Img"
                    width={364}
                    height={364}
                  />
                  <button
                    onClick={next}
                    className="w-12.5 h-12.5 backdrop-blur-[10px] group  absolute bottom-3.75 left-3.75 cursor-pointer rounded-[10px] flex items-center justify-center bg-white/20 hover:bg-primary duration-400"
                  >
                    <IoArrowForwardOutline className="h-5.5 w-5.5 -rotate-45 group-hover:rotate-0 duration-400" />
                  </button>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* Portfolio */}
      <section>
        <div className=" container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-8.75">
            <div className="space-y-3 md:space-y-5">              
              <h2
                className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white "              >
               
                <GsapTextAnimation mainText={"Featured Portfolio: Design & <br/> AI Innovations"} mainClass="flex flex-wrap "/>
              </h2>
              <p className="text-sm md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's.
              </p>
            </div>
            <button className="px-6 py-3.5 mt-4 md:mt-0 cursor-pointer flex items-center group hover:bg-primary hover:text-white duration-400 gap-2.5 bg-white text-black rounded-[50px]">
              Our Portfolio
              <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
            </button>
          </div>
          <div className="bg-black text-white ">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20.75">
              {/* LEFT SIDEBAR */}
              <div className="w-full lg:w-62.5 flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`shrink-0 lg:w-full flex text-sm lg:text-lg cursor-pointer group font-medium outline-none focus:outline-none focus:ring-0 justify-between items-center px-4 py-2.5 lg:p-2.5 rounded-[50px] lg:rounded-md duration-500
              ${
                active === cat
                  ? "bg-primary text-white"
                  : "bg-white/10 lg:bg-transparent lg:border-b lg:border-white/10 hover:bg-primary"
              }`}
                  >
                    {cat}
                    <BsArrowRightCircle className="hidden lg:block -rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
                  </button>
                ))}
              </div>

              {/* RIGHT GRID */}
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
                      className="transform-gpu"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* IMAGE */}
                      <div className="relative group ">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full rounded-[10px]"
                      />

                      {/* HOVER OVERLAY */}
                      <div
                        className="absolute inset-0 flex rounded-[10px] items-center justify-center 
                bg-black/41 backdrop-blur-md opacity-0 group-hover:opacity-100 transition"
                      >
                        <button className="px-6 py-3.5 cursor-pointer flex items-center group/button hover:bg-primary hover:text-white duration-400 gap-2.5 bg-white text-black rounded-[50px]">
                          Explore Portfolio
                          <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover/button:rotate-0" />
                        </button>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-6.25 space-y-4">
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
      <TestimonialSlider />

      {/* Promise Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-[1320px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 space-y-10">
            <div className="space-y-6">             
              <h2
                className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white "              >
               
                <GsapTextAnimation mainText={"What We Promise for <br/> Successful Project"} mainClass="flex flex-wrap "/>
              </h2>
              <p>
                We have developed a streamlined software delivery process, encompassing project planning, agile methodologies.
              </p>
            </div>

            <ul className="space-y-5">
              <li className="flex gap-4 items-start">
                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                <p>
                  TechBeeps biggest concern when choosing a technology is how it fits our customer's needs.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                <p>
                  Our customers' time is their money, so completing every project on time is one of company's biggest priorities.
                </p>
              </li>
              <li className="flex gap-4 items-start">
                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                <p>
                  We promise that we never have any commercial incentive while choosing a technology or approach, we base our decision only.
                </p>
              </li>
            </ul>

            <div className="pt-2">
              <button className="px-6 py-3.5 cursor-pointer flex items-center group hover:bg-primary hover:text-white duration-400 gap-2.5 bg-white text-black rounded-[50px] font-medium">
                Explore More
                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <div className="relative shadow-2xl border border-white/5">
              <Image
                src="/promise.jpg"
                alt="promise"
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
      </section>
      <LogoMarquee />      
      <CallToAction />
      <Footer />
    </>
  );
}
