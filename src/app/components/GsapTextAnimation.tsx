"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GsapTextAnimation({mainText, mainClass='', textHighlightIndex=[]}: {mainText: string, textHighlightIndex?: number[], mainClass?: string}  ) {
  const heroRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-char", 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: "power4.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 85%", // Triggers when the top of the element hits 85% down the viewport
          }
        }
      );
      
    }, heroRef);

    return () => ctx.revert();
  }, []);
  return (
     <span  ref={heroRef}  className={`${mainClass}`} >

             {mainText.split(" ").map((word, wordIdx) => (
              word == '<br/>'?
               <span  key={word+wordIdx} className="w-full"></span>
              :    <span key={word+wordIdx} className={`mr-2 flex overflow-hidden ${textHighlightIndex.includes(wordIdx)? 'text-primary': ""}`}>
              {word.split("").map((char, charIdx) => (
                <span key={charIdx+word} className="hero-char inline-block ">
                  {char}
                </span>
                 ))}
               </span>



              ))}
            </span>
   
  );
}
