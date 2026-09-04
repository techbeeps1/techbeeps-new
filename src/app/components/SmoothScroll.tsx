"use client";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

function ScrollToTopOnNavigation() {
  const lenis = useLenis();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Disable browser's automatic scroll restoration so it doesn't preserve old scroll position
  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Force scroll to top on every route / query parameter change
  useEffect(() => {
    if (typeof window === "undefined") return;

    // If there's an anchor hash (e.g. #contact), scroll to that element
    const hash = window.location.hash;
    if (hash) {
      try {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          lenis?.scrollTo(targetElement as HTMLElement, { immediate: true });
          return;
        }
      } catch {
        // invalid selector fallback
      }
    }

    // Scroll to top immediately via Lenis and Native window
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Refresh ScrollTrigger so triggers on the new page calculate correct positions
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [pathname, searchParams, lenis]);

  return null;
}

function LenisGsapSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined" || !lenis) return;
    gsap.registerPlugin(ScrollTrigger);    
    lenis.on("scroll", ScrollTrigger.update);    
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);    
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
      <Suspense fallback={null}>
        <ScrollToTopOnNavigation />
      </Suspense>
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
}
