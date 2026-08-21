"use client";
import Image from "next/image";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonSwipUp from "../ButtonSwipUp";
import AiButton from "../AiButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const menuVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { 
      type: "spring" as const,
      stiffness: 160,
      damping: 22
    } 
  }
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
          <ul className="flex items-center gap-6 text-white">
            <li><AiButton /></li>
            <li><Link href="/" className="hover:text-primary duration-400">Home</Link></li>
            <li><Link href="/about-us" className="hover:text-primary duration-400">About</Link></li>
            <li><Link href="/services" className="hover:text-primary duration-400">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary duration-400">Portfolio</Link></li>
            <li><Link href="/contact-us" className="hover:text-primary duration-400">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">          
          <ButtonSwipUp className="bg-white text-black hover:text-white" url={"tel:+91 141 452 3119"}>
            <PiPhoneCallLight className="h-5 w-5 "/>+91 141 452 3119                        
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
              className="fixed top-0 right-0 bottom-0 w-full sm:max-w-[450px] bg-[#0c071e]/98 backdrop-blur-2xl border-l border-white/5 shadow-2xl z-50 flex flex-col p-6 sm:p-10 justify-between lg:hidden overflow-y-auto"
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
                className="my-auto py-8 relative z-10"
              >
                <ul className="flex flex-col gap-4 text-left">
                  {/* AI Solutions Highlight in Drawer */}
                  <motion.li variants={menuVariants}>
                    <Link
                      href="/services"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 group py-2.5 px-3 -mx-2 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/30 hover:border-primary/60 transition-all duration-300"
                    >
                      <div className="w-7 h-7 flex items-center justify-center relative">
                        <AiButton className="scale-[0.35] mr-0" />
                      </div>
                      <span className="text-lg font-medium text-white group-hover:text-primary transition-all duration-300 tracking-wide flex items-center gap-2">
                        AI Solutions
                        <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-primary/25 text-[#d8c2ff] border border-primary/40">
                          Highlight
                        </span>
                      </span>
                    </Link>
                  </motion.li>

                  {[
                    { href: "/", label: "Home" },
                    { href: "/about-us", label: "About" },
                    { href: "/services", label: "Services" },
                    { href: "/portfolio", label: "Portfolio" },
                    { href: "/contact-us", label: "Contact Us" },
                  ].map((link) => (
                    <motion.li key={link.href} variants={menuVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center group py-2"
                      >
                        <span className="text-lg font-medium text-white group-hover:text-primary transition-all duration-300 relative tracking-wide">
                          {link.label}
                          <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>

              {/* Drawer Footer Socials */}
              <div className="relative z-10 space-y-6">
                {/* Mobile Call CTA */}
                <div>
                  <ButtonSwipUp className="w-full bg-white text-black hover:text-white justify-center" url={"tel:+91 141 452 3119"}>
                    <PiPhoneCallLight className="h-5 w-5 "/>+91 141 452 3119                        
                  </ButtonSwipUp>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5"></div>

                {/* Social icons row */}
                <div className="flex items-center gap-3.5">
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