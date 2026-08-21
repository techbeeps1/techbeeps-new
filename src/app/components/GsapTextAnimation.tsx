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

    let ctx: gsap.Context | undefined;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const chars = heroRef.current?.querySelectorAll(".hero-char");
        if (chars && chars.length > 0) {
          gsap.from(chars, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          });
        }
      }, heroRef);
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx?.revert();
    };
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
