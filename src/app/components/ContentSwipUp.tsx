"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContentSwipUp({ className = '', top = "85", children }: { className?: string, top?: string, children: ReactNode }) {
  const ContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ContentRef.current) return;

    let ctx: gsap.Context | undefined;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        gsap.from(ContentRef.current, {
          y: 25,
          opacity: 0.2,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ContentRef.current,
            start: `top ${top}%`,
            toggleActions: "play none none none",
            once: true,
            invalidateOnRefresh: true,
          },
        });
      }, ContentRef);
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, [top]);

  return (
    <div ref={ContentRef}>
      <p className={`${className} hero-sub overflow-hidden text-white leading-[28px]`}>
        {children}
      </p>
    </div>
  );
}
