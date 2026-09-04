"use client";
import Image from "next/image";
import { PiPhoneCallLight } from "react-icons/pi";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoChevronDownOutline,
  IoArrowForwardOutline
} from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useLenis } from "lenis/react";
import ButtonSwipUp from "../ButtonSwipUp";
import AiButton from "../AiButton";

const servicesList = [
  { title: "AI Solutions", href: "/services/ai-solutions" },
  { title: "UI/UX Design", href: "/services/ui-ux-design" },
  { title: "Web Development", href: "/services/web-development" },
  { title: "Mobile App Development", href: "/services/mobile-app-development" },
  { title: "Shopify Development", href: "/services/shopify-development" },
  { title: "WordPress Development", href: "/services/wordpress-development" },
  { title: "Laravel Development", href: "/services/laravel-development" },
  { title: "Python Development", href: "/services/python-development" },
  { title: "Cloud Services", href: "/services/cloud-services" },
  { title: "DevOps & QA", href: "/services/devops-qa" },
  { title: "WooCommerce Development", href: "/services/woocommerce-development" },
  { title: "Magento Development", href: "/services/magento-development" },
  { title: "Node.js Development", href: "/services/nodejs-development" },
  { title: "PHP Development", href: "/services/php-development" },
  { title: "PrestaShop Development", href: "/services/prestashop-development" },
  { title: "AngularJS Development", href: "/services/angularjs-development" },
  { title: "WhatsApp Automation", href: "/services/whatsapp-automation" },
  { title: "Accessibility Expertise", href: "/services/accessibility-expertise" },
  { title: "Landing Page Design", href: "/services/landing-page-design" },
  { title: "Ecommerce Development", href: "/services/ecommerce-development" },
  { title: "Responsive Web Design", href: "/services/responsive-web-design" },
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
  const lenis = useLenis();

  // Prevent background scroll and Lenis capture when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [isOpen, lenis]);

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
            className="w-[130px] sm:w-[245px] h-auto"
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

              {/* Premium 3-Column Animated Desktop Mega Menu */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    variants={dropdownContainerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="absolute top-full -left-52 xl:-left-72 pt-3 w-[860px] xl:w-[920px] z-50 pointer-events-auto"
                  >
                    <div className="relative rounded-2xl bg-[#0b061d]/95 backdrop-blur-2xl border border-white/10 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(133,76,255,0.25)] overflow-hidden">
                      {/* Top Glowing Beam */}
                      <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-primary/80 to-transparent pointer-events-none" />
                      {/* Ambient Background Glow */}
                      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-28 bg-primary/20 blur-3xl pointer-events-none rounded-full" />

                      {/* 3-Column Grid */}
                      <div className="grid grid-cols-3 gap-6 relative z-10">
                        {/* Column 1: Core Development */}
                        <div className="space-y-2">
                          <div className="text-[12px] font-bold uppercase tracking-wider text-primary border-b border-white/10 pb-2 mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            <span>Development & Backend</span>
                          </div>
                          <ul className="space-y-0.5">
                            {[
                              { title: "Web Development", href: "/services/web-development" },
                              { title: "Mobile App Development", href: "/services/mobile-app-development" },
                              { title: "Node.js Development", href: "/services/nodejs-development" },
                              { title: "Python Development", href: "/services/python-development" },
                              { title: "Laravel Development", href: "/services/laravel-development" },
                              { title: "PHP Development", href: "/services/php-development" },
                              { title: "AngularJS Development", href: "/services/angularjs-development" },
                            ].map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="group relative flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[13px] font-medium text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                                >
                                  <div className="flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1">
                                    <span className="w-1 h-1 rounded-full bg-white/25 group-hover:bg-primary group-hover:scale-125 transition-all"></span>
                                    <span className="truncate">{service.title}</span>
                                  </div>
                                  <IoArrowForwardOutline className="w-3 h-3 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 2: E-Commerce & CMS */}
                        <div className="space-y-2">
                          <div className="text-[12px] font-bold uppercase tracking-wider text-primary border-b border-white/10 pb-2 mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            <span>E-Commerce & CMS</span>
                          </div>
                          <ul className="space-y-0.5">
                            {[
                              { title: "Shopify Development", href: "/services/shopify-development" },
                              { title: "WooCommerce Development", href: "/services/woocommerce-development" },
                              { title: "WordPress Development", href: "/services/wordpress-development" },
                              { title: "Magento Development", href: "/services/magento-development" },
                              { title: "PrestaShop Development", href: "/services/prestashop-development" },
                              { title: "Ecommerce Development", href: "/services/ecommerce-development" },
                              { title: "Responsive Web Design", href: "/services/responsive-web-design" },
                            ].map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="group relative flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[13px] font-medium text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                                >
                                  <div className="flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1">
                                    <span className="w-1 h-1 rounded-full bg-white/25 group-hover:bg-primary group-hover:scale-125 transition-all"></span>
                                    <span className="truncate">{service.title}</span>
                                  </div>
                                  <IoArrowForwardOutline className="w-3 h-3 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3: AI, Cloud & Design */}
                        <div className="space-y-2">
                          <div className="text-[12px] font-bold uppercase tracking-wider text-primary border-b border-white/10 pb-2 mb-2 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            <span>AI, Cloud & Design</span>
                          </div>
                          <ul className="space-y-0.5">
                            {[
                              { title: "AI Solutions", href: "/services/ai-solutions" },
                              { title: "WhatsApp Automation", href: "/services/whatsapp-automation" },
                              { title: "Cloud Services & Migration", href: "/services/cloud-services" },
                              { title: "DevOps & QA Services", href: "/services/devops-qa" },
                              { title: "UI/UX Design", href: "/services/ui-ux-design" },
                              { title: "Landing Page Design", href: "/services/landing-page-design" },
                              { title: "Accessibility Expertise", href: "/services/accessibility-expertise" },
                            ].map((service) => (
                              <li key={service.href}>
                                <Link
                                  href={service.href}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className="group relative flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[13px] font-medium text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                                >
                                  <div className="flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1">
                                    <span className="w-1 h-1 rounded-full bg-white/25 group-hover:bg-primary group-hover:scale-125 transition-all"></span>
                                    <span className="truncate">{service.title}</span>
                                  </div>
                                  <IoArrowForwardOutline className="w-3 h-3 text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Mega Menu Bottom Footer Bar */}
                      <div className="border-t border-white/10 pt-4 mt-5 flex items-center justify-between text-xs text-gray-400 relative z-10">
                        <span className="hidden sm:inline">
                          Transforming businesses with scalable digital architectures.
                        </span>
                        <div className="flex items-center gap-3 ml-auto sm:ml-0">
                          <Link
                            href="/hire-developer"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 hover:bg-primary text-white text-xs font-semibold transition-all"
                          >
                            <span>Hire Developers</span>
                            <IoArrowForwardOutline className="w-3 h-3 -rotate-45 group-hover:rotate-0 transition-transform duration-200" />
                          </Link>
                          <Link
                            href="/services"
                            onClick={() => setServicesDropdownOpen(false)}
                            className="group inline-flex items-center gap-1.5 text-primary hover:text-white font-semibold transition-colors"
                          >
                            <span>Explore All 21 Services</span>
                            <IoArrowForwardOutline className="w-3.5 h-3.5 -rotate-45 group-hover:rotate-0 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>
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
              <Link href="/blog" className="group relative py-2 text-white hover:text-primary transition-colors duration-300">
                Blog
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
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="https://wa.me/+918112269797"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.2)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-105 shrink-0"
          >
            <FaWhatsapp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

            {/* Online Pulse Indicator */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366] border-2 border-[#000]"></span>
            </span>

            {/* Tooltip */}
            <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-[#0b061d]/95 backdrop-blur-md text-white text-[11px] font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-white/10 shadow-lg z-50">
              Chat on WhatsApp
            </span>
          </Link>

          <ButtonSwipUp className="bg-white text-black hover:text-white" url={"tel:+91 141 452 3119"}>
            <PiPhoneCallLight className="h-5 w-5 " />+91 141 452 3119
          </ButtonSwipUp>
        </div>

        {/* Mobile Right Controls: WhatsApp + AI Highlight Button + Menu Toggle */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <Link
            href="https://wa.me/+918112269797"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-9 h-9 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-[0_0_10px_rgba(37,211,102,0.2)]"
          >
            <FaWhatsapp className="w-4 h-4" />
          </Link>
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
              data-lenis-prevent
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 250 }}
              className="fixed inset-y-0 right-0 w-full sm:max-w-[420px] h-[100dvh] max-h-[100dvh] bg-[#0c071e]/98 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-50 flex flex-col p-6 sm:p-8 lg:hidden overflow-y-auto overscroll-contain custom-scrollbar touch-pan-y"
            >
              {/* Glow Gradients */}
              <div className="absolute top-1/4 right-0 bg-[#854CFF] blur-[120px] w-64 h-64 opacity-15 rounded-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 bg-primary blur-[120px] w-48 h-48 opacity-10 rounded-full pointer-events-none"></div>

              {/* Drawer Header */}
              <div className="flex justify-between items-center relative z-10 shrink-0 pb-4 border-b border-white/5">
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
                data-lenis-prevent
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="py-4 relative z-10 flex-1"
              >
                <ul className="flex flex-col gap-2.5 text-left">
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
                          data-lenis-prevent
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="pl-3 border-l-2 border-primary/40 my-1 space-y-1"
                        >
                          <Link
                            href="/services"
                            onClick={() => setIsOpen(false)}
                            className="block py-1.5 px-2 text-[14px] font-semibold text-primary hover:text-white transition-colors duration-200"
                          >
                            All Services →
                          </Link>

                          {servicesList.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-1.5 px-2 text-[13.5px] text-gray-300 hover:text-primary hover:bg-white/[0.04] rounded-md transition-colors duration-200"
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

                  {/* Blog */}
                  <motion.li variants={menuVariants}>
                    <Link
                      href="/blog"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center group py-2"
                    >
                      <span className="text-lg font-medium text-white group-hover:text-primary transition-all duration-300 relative tracking-wide">
                        Blog
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
              <div className="relative z-10 space-y-4 pt-4 mt-auto border-t border-white/10 shrink-0">
                {/* Mobile Call & WhatsApp CTAs */}
                <div className="flex justify-between gap-2.5">
                  <Link
                    href="https://wa.me/+918112269797"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-[42%] justify-center gap-2 py-3 px-3 rounded-[50px] bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white font-medium text-sm transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.15)]"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </Link>
                  <ButtonSwipUp
                    className="bg-white text-black hover:text-white justify-center text-xs py-3"
                    url={"tel:+91 141 452 3119"}
                  >
                    <PiPhoneCallLight className="h-4 w-4" />
                    +91 141 452 3119
                  </ButtonSwipUp>
                </div>

                {/* Social icons row */}
                <div className="flex items-center gap-3.5 justify-center">
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