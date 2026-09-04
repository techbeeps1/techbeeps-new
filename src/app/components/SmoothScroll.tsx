"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

function LenisGsapSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined" || !lenis) return;

    gsap.registerPlugin(ScrollTrigger);

    // Synchronize Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis RAF from GSAP's ticker to ensure single source of truth for frames
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger after initial mount and layout calculations
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    // Automatically recalculate ScrollTrigger positions when page height changes (e.g., tab filters, accordion toggles)
    let resizeTimer: NodeJS.Timeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      clearTimeout(refreshTimer);
      clearTimeout(resizeTimer);
      resizeObserver.disconnect();
      gsap.ticker.remove(updateTicker);
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      autoRaf={false}
      options={{
        autoRaf: false,
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
}
