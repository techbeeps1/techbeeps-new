"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import { ReactNode } from "react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ButtonSwipUp({ className='', url="/", children }:{ className?: string, url?: string, children?: ReactNode}  ) {
   const buttonRef = useRef<HTMLDivElement>(null);
     const spanRef = useRef<HTMLSpanElement>(null);

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;

    if (spanRef.current) {
      spanRef.current.style.left = `${relX}px`;
      spanRef.current.style.top = `${relY}px`;
    }
  };

 useEffect(() => {
    if (!buttonRef.current) return;

    gsap.fromTo(
      buttonRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div ref={buttonRef}>
     <Link
     href={url}
       onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      className={`${className} overflow-hidden relative hero-btn px-6 py-3.5 cursor-pointer flex justify-center items-center group hover:bg-transparent  duration-700 gap-2.5 rounded-[50px] `}>
  
      {children}
        <span
        ref={spanRef}
        className="absolute z-[-1] w-0 h-0 rounded-full bg-primary -translate-x-1/2 -translate-y-1/2 transition-all duration-600 ease-in-out group-hover:w-[200%] group-hover:h-120"
      ></span>
     </Link>

   </div>
  );
}
