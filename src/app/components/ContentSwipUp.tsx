"use client";
import { useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContentSwipUp({ className='', top="85", children}:{ className?: string,top?:string, children: ReactNode }  ) {
  const ContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ContentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ContentRef.current, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ContentRef.current,
            start: `top ${top}%`,
            toggleActions: "play none none none",
          }
        }
      );
    }, ContentRef);

    return () => ctx.revert();
  }, [top]);

  return (
    <div ref={ContentRef}>
      <p className={`${className} hero-sub overflow-hidden text-white leading-[28px]`}>
        {children}   
      </p>
    </div>
  );
}
