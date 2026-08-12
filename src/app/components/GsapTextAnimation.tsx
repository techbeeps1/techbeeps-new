"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapTextAnimation({ mainText, mainClass = '', textHighlightIndex = [] }: { mainText: string, textHighlightIndex?: number[], mainClass?: string }) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const chars = heroRef.current?.querySelectorAll(".hero-char");
      if (chars && chars.length > 0) {
        gsap.fromTo(
          chars,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.03,
            ease: "power4.out",
            delay: 0.1,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            }
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
    <span ref={heroRef} className={`${mainClass}`} >

      {mainText.split(" ").map((word, wordIdx) => (
        word == '<br/>' ?
          <span key={word + wordIdx} className="w-full"></span>
          : <span key={word + wordIdx} className={`mr-2 flex overflow-hidden ${textHighlightIndex.includes(wordIdx) ? 'text-primary' : ""}`}>
            {word.split("").map((char, charIdx) => (
              <span key={charIdx + word} className="hero-char inline-block ">
                {char}
              </span>
            ))}
          </span>

      ))}
    </span>

  );
}
