"use client";
import Image from "next/image";
import { PiPhoneCallLight } from "react-icons/pi";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoChevronDownOutline,
  IoArrowForwardOutline
} from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import ButtonSwipUp from "../ButtonSwipUp";
import AiButton from "../AiButton";

const servicesList = [
  { title: "UI/UX Design", href: "/services/ui-ux-design" },
  { title: "Mobile App Development", href: "/services/mobile-app-development" },
  { title: "Web Development", href: "/services/web-development" },
  { title: "AI Solutions", href: "/services/ai-solutions" },
  { title: "Shopify Development", href: "/services/shopify-development" },
  { title: "Python Development", href: "/services/python-development" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const menuVariants: Variants = {
  hidden: { opacity: 0, x: 25 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 160,
      damping: 22,
    },
  },
};

const dropdownContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
    scale: 0.95,
    filter: "blur(4px)",
    transition: {
      duration: 0.18,
      ease: "easeInOut" as const,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.28,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.035,
      delayChildren: 0.04,
    },
  },
};

const dropdownItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.22,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    };
  }, []);

  return (
    <header className="w-full py-7.5 absolute top-0 z-50">
      <div className="container flex justify-between items-center relative z-50">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/techbeepsLogo.svg"
            alt="TechBeeps Logo"
            width={245}
            height={40}
            priority
            className="w-[180px] sm:w-[245px] h-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 text-white text-[15px]">
            <li><AiButton /></li>
            <li>
              <Link href="/" className="group relative py-2 text-white hover:text-primary transition-colors duration-300">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="group relative py-2 text-white hover:text-primary transition-colors duration-300">
                About
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/our-team" className="group relative py-2 text-white hover:text-primary transition-colors duration-300">
                Our Team
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>

            {/* Services Premium Dropdown */}
            <li
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex items-center gap-1.5 py-2 cursor-pointer group">
                <Link
                  href="/services"
                  className={`transition-colors duration-300 relative ${servicesDropdownOpen ? "text-primary" : "text-white group-hover:text-primary"}`}
                >
                  Services
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-primary rounded-full transition-all duration-300 ${servicesDropdownOpen ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setServicesDropdownOpen((prev) => !prev);
                  }}
                  className="p-0.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
                  aria-label="Toggle Services Dropdown"
                >
                  <IoChevronDownOutline
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180 text-primary scale-110" : "text-white/70 group-hover:text-primary"}`}
                  />
                </button>
              </div>

              {/* Premium Animated Desktop Dropdown Menu */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    variants={dropdownContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full left-0 pt-2.5 w-68 z-50 pointer-events-auto"
                  >
                    <div className="relative rounded-2xl bg-[#0b061d]/95 backdrop-blur-2xl border border-white/10 p-2 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(133,76,255,0.2)] overflow-hidden">
                      {/* Top Glowing Beam */}
                      <div className="absolute top-0 left-4 right-4 h-[1.5px] bg-gradient-to-r from-transparent via-primary/70 to-transparent pointer-events-none" />
                      {/* Ambient Glow */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-36 h-20 bg-primary/25 blur-2xl pointer-events-none rounded-full" />

                      <ul className="flex flex-col gap-1 relative z-10">
                        {servicesList.map((service) => (
                          <motion.li key={service.href} variants={dropdownItemVariants}>
                            <Link
                              href={service.href}
                              onClick={() => setServicesDropdownOpen(false)}
                              className="group relative flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[14px] font-medium text-gray-300 hover:text-white transition-all duration-200 overflow-hidden"
                            >
                              {/* Hover Background Gradient */}
                              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                              {/* Left Glowing Accent Indicator */}
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-primary group-hover:h-3/5 transition-all duration-300 rounded-r shadow-[0_0_8px_#854CFF]" />

                              {/* Title with Dot */}
                              <div className="flex items-center gap-2.5 relative z-10 transition-transform duration-200 group-hover:translate-x-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary group-hover:scale-125 group-hover:shadow-[0_0_8px_#854CFF] transition-all duration-200 shrink-0"></span>
                                <span className="tracking-wide">{service.title}</span>
                              </div>

                              {/* Right Slide-in Arrow */}
                              <IoArrowForwardOutline className="w-3.5 h-3.5 text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 relative z-10 shrink-0" />
                            </Link>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link href="/portfolio" className="group relative py-2 text-white hover:text-primary transition-colors duration-300">
                Portfolio
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="group relative py-2 text-white hover:text-primary transition-colors duration-300">
                Contact Us
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <ButtonSwipUp className="bg-white text-black hover:text-white" url={"tel:+91 141 452 3119"}>
            <PiPhoneCallLight className="h-5 w-5 " />+91 141 452 3119
          </ButtonSwipUp>
        </div>

        {/* Mobile Right Controls: AI Highlight Button + Menu Toggle */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <div className="flex items-center justify-center w-10 h-10 overflow-visible">
            <AiButton className="scale-[0.38] mr-0" />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white flex items-center justify-center w-10 h-10 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <IoCloseOutline className="w-8 h-8" /> : <IoMenuOutline className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Offcanvas Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden cursor-pointer"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="fixed top-0 right-0 bottom-0 w-full sm:max-w-[450px] bg-[#0c071e]/98 backdrop-blur-2xl border-l border-white/5 shadow-2xl z-50 flex flex-col p-6 sm:p-8 justify-between lg:hidden overflow-y-auto custom-scrollbar"
            >
              {/* Glow Gradients */}
              <div className="absolute top-1/4 right-0 bg-[#854CFF] blur-[120px] w-64 h-64 opacity-15 rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 bg-primary blur-[120px] w-48 h-48 opacity-10 rounded-full pointer-events-none"></div>

              {/* Drawer Header */}
              <div className="flex justify-between items-center relative z-10">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/techbeepsLogo.svg"
                    alt="TechBeeps Logo"
                    width={180}
                    height={30}
                    className="w-[140px] sm:w-[160px] h-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(133,76,255,0.25)] transition-all duration-300 cursor-pointer"
                  aria-label="Close Menu"
                >
                  <IoCloseOutline className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Navigation Links */}
              <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="my-auto py-6 relative z-10"
              >
                <ul className="flex flex-col gap-3 text-left">
                  {/* AI Solutions Highlight in Drawer */}
                  <motion.li variants={menuVariants}>
                    <Link
                      href="/services/ai-solutions"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 group py-2.5 px-3 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 hover:border-primary/60 transition-all duration-300"
                    >
                      <div className="w-7 h-7 flex items-center justify-center relative">
                        <AiButton className="scale-[0.35] mr-0" />
                      </div>
                      <span className="text-base sm:text-lg font-medium text-white group-hover:text-primary transition-all duration-300 tracking-wide flex items-center gap-2">
                        AI Solutions
                      </span>
                    </Link>
                  </motion.li>

                  {/* Home */}
                  <motion.li variants={menuVariants}>
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center group py-2"
                    >
                      <span className="text-lg font-medium text-white group-hover:text-primary transition-all duration-300 relative tracking-wide">
                        Home
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </motion.li>

                  {/* About */}
                  <motion.li variants={menuVariants}>
                    <Link
                      href="/about-us"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center group py-2"
                    >
                      <span className="text-lg font-medium text-white group-hover:text-primary transition-all duration-300 relative tracking-wide">
                        About
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </motion.li>

                  {/* Services Accordion Item */}
                  <motion.li variants={menuVariants} className="flex flex-col">
                    <div className="flex items-center justify-between py-2 group">
                      <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium text-white group-hover:text-primary transition-all duration-300 tracking-wide"
                      >
                        Services
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Expand Services"
                      >
                        <IoChevronDownOutline
                          className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-primary" : ""
                            }`}
                        />
                      </button>
                    </div>

                    {/* Mobile Services Submenu */}
                    <AnimatePresence initial={false}>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden pl-3 border-l-2 border-primary/40 my-1 space-y-1"
                        >
                          <Link
                            href="/services"
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 px-2 text-[14px] font-medium text-primary hover:text-white transition-colors duration-200"
                          >
                            All Services
                          </Link>

                          {servicesList.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-1.5 px-2 text-[14px] text-gray-300 hover:text-primary transition-colors duration-200"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>

                  {/* Portfolio */}
                  <motion.li variants={menuVariants}>
                    <Link
                      href="/portfolio"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center group py-2"
                    >
                      <span className="text-lg font-medium text-white group-hover:text-primary transition-all duration-300 relative tracking-wide">
                        Portfolio
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </motion.li>

                  {/* Contact Us */}
                  <motion.li variants={menuVariants}>
                    <Link
                      href="/contact-us"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center group py-2"
                    >
                      <span className="text-lg font-medium text-white group-hover:text-primary transition-all duration-300 relative tracking-wide">
                        Contact Us
                        <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </Link>
                  </motion.li>
                </ul>
              </motion.nav>

              {/* Drawer Footer Socials */}
              <div className="relative z-10 space-y-5 pt-4">
                {/* Mobile Call CTA */}
                <div>
                  <ButtonSwipUp className="w-full bg-white text-black hover:text-white justify-center" url={"tel:+91 141 452 3119"}>
                    <PiPhoneCallLight className="h-5 w-5 " />+91 141 452 3119
                  </ButtonSwipUp>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5"></div>

                {/* Social icons row */}
                <div className="flex items-center gap-3.5 justify-center sm:justify-start">
                  {[
                    { href: "https://www.facebook.com/techbeepss/", icon: <FaFacebookF className="w-4 h-4" /> },
                    { href: "https://x.com/techbeepss", icon: <FaXTwitter className="w-4 h-4" /> },
                    { href: "https://www.instagram.com/techbeeps/", icon: <FaInstagram className="w-4 h-4" /> },
                    { href: "https://www.youtube.com/@techbeepss", icon: <FaYoutube className="w-4 h-4" /> },
                    { href: "https://www.linkedin.com/company/techbeeps/posts/?feedView=all", icon: <FaLinkedinIn className="w-4 h-4" /> },
                  ].map((soc, i) => (
                    <Link
                      key={i}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                    >
                      {soc.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}