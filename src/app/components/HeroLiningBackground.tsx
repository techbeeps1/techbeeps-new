import React from "react";

export default function HeroLiningBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 1. Deep Space Black Base Background */}
      <div className="absolute inset-0 bg-[#030008]" />

      {/* 2. Atmospheric Purple & Indigo Glows (Left & Right) */}
      {/* Left Vibrant Indigo/Purple Glow */}
      <div
        className="absolute -left-20 top-[25%] -translate-y-1/2 w-[550px] md:w-[700px] h-[550px] md:h-[750px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(92, 33, 230, 0.55) 0%, rgba(76, 29, 149, 0.35) 45%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Right Vibrant Violet/Purple Glow */}
      <div
        className="absolute -right-20 top-[60%] -translate-y-1/2 w-[550px] md:w-[750px] h-[550px] md:h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(126, 34, 206, 0.55) 0%, rgba(88, 28, 135, 0.35) 45%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* 3. Subtle 3D Fluted Columns & Soft Vertical Lines Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-55"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Left-to-right soft gradient across each column */}
          <linearGradient id="flutedColumn3D" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
            <stop offset="25%" stopColor="#ffffff" stopOpacity="0.02" />
            <stop offset="65%" stopColor="#000000" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.45" />
          </linearGradient>

          {/* 64px repeating vertical column pattern */}
          <pattern
            id="flutedColumnPattern"
            width="64"
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            {/* Column 3D Surface */}
            <rect x="0" y="0" width="64" height="100%" fill="url(#flutedColumn3D)" />

            {/* Subtle Vertical Highlight Divider Line */}
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
              stroke="#ffffff"
              strokeOpacity="0.14"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#flutedColumnPattern)" />
      </svg>

      {/* 4. Subtle Center Text Vignette for Headline Readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, rgba(3, 0, 8, 0.45) 0%, transparent 75%)",
        }}
      />

      {/* 5. Top Header & Bottom Seamless Dark Blend */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#030008] via-[#030008]/80 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#05010f] via-[#05010f]/80 to-transparent" />
    </div>
  );
}
