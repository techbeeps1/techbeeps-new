"use client";
import { useRef } from "react";

export default function AnimatedButton() {
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

  return (
    <a
      href="#"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      className="relative block overflow-hidden h-20 max-w-62.5 mx-auto my-4 uppercase border border-gray-800 text-gray-800 text-center leading-20 cursor-pointer group"
    >
      Click Me

      <span
        ref={spanRef}
        className="absolute w-0 h-0 rounded-full bg-gray-800 -translate-x-1/2 -translate-y-1/2 transition-all duration-600 ease-in-out group-hover:w-[225%] group-hover:h-125"
      ></span>
    </a>
  );
}