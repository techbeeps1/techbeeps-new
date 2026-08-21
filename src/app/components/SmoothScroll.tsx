"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LenisGsapSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, syncTouch: false }}>
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
}
