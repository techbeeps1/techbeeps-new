"use client";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-7.5 absolute top-0 z-50">
      <div className="container flex justify-between items-center relative z-50">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/techbeepsLogo.svg"
            alt="techbeeps logo"          
            width={245}
            height={40}
            className="w-[180px] sm:w-[245px] h-auto"                  
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-6 text-white">
            <li><Link href="#" className="hover:text-primary duration-400">Home</Link></li>
            <li><Link href="#" className="hover:text-primary duration-400">About</Link></li>
            <li><Link href="#" className="hover:text-primary duration-400">Services</Link></li>
            <li><Link href="#" className="hover:text-primary duration-400">Portfolio</Link></li>
            <li><Link href="#" className="hover:text-primary duration-400">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link href={"tel:+91 141 452 3119"} className="px-6 py-3.5 cursor-pointer flex items-center group hover:bg-primary hover:text-white duration-400 gap-2.5 bg-white text-black rounded-[50px]"><PiPhoneCallLight className="h-5 w-5 "/>+91 141 452 3119</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-white flex items-center justify-center w-10 h-10"
        >
          {isOpen ? <IoCloseOutline className="w-8 h-8" /> : <IoMenuOutline className="w-8 h-8" />}
        </button>
      </div>

      {/* Offcanvas Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#05010f]/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center lg:hidden"
          >
            <nav>
              <ul className="flex flex-col items-center gap-8 text-2xl font-medium text-white">
                <li><Link href="#" onClick={() => setIsOpen(false)} className="hover:text-primary duration-400">Home</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)} className="hover:text-primary duration-400">About</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)} className="hover:text-primary duration-400">Services</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)} className="hover:text-primary duration-400">Portfolio</Link></li>
                <li><Link href="#" onClick={() => setIsOpen(false)} className="hover:text-primary duration-400">Contact Us</Link></li>
              </ul>
            </nav>
            <Link href={"tel:+91 141 452 3119"} className="mt-10 px-6 py-3.5 cursor-pointer flex items-center group hover:bg-primary hover:text-white duration-400 gap-2.5 bg-white text-black rounded-[50px]"><PiPhoneCallLight className="h-5 w-5 "/>+91 141 452 3119</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}