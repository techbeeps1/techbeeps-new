"use client";
import { useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContentSwipUp({ className='', children}:{ className?: string, children: ReactNode }  ) {
   const ContentRef = useRef<HTMLDivElement>(null);
 useEffect(() => {
    if (!ContentRef.current) return;

    gsap.utils.toArray<HTMLElement>(".hero-sub").forEach((elem, index) => {
            gsap.fromTo(elem, 
              { y: 40, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power4.out",
                delay: index === 0 ? 1.2 : 0,
                scrollTrigger: {
                  trigger: elem,
                  start: "top 85%",
                  toggleActions: "play none none none",
                }
              }
            );
          });
  }, []);

  return (
    <div ref={ContentRef}>
    <p className={`${className} hero-sub overflow-hidden text-white`}>
      {children}   
      </p>

   </div>
  );
}
