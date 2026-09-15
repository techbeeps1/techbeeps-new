"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "./header/Header";
import Footer from "./Footer";
import {
  FiHome,
  FiArrowRight,
  FiCpu,
} from "react-icons/fi";

export default function NotFoundClient() {
  // Eye tracking state for left and right eyes
  const [leftPupil, setLeftPupil] = useState({ x: 0, y: 0 });
  const [rightPupil, setRightPupil] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHoveredInteractive, setIsHoveredInteractive] = useState(false);
  const [isCurious, setIsCurious] = useState(false);

  // Character body tilt / parallax
  const [charTilt, setCharTilt] = useState({ x: 0, y: 0, rot: 0 });

  // Refs for tracking target elements on screen
  const containerRef = useRef<HTMLDivElement>(null);
  const leftEyeRef = useRef<SVGGElement>(null);
  const rightEyeRef = useRef<SVGGElement>(null);

  // Animation frame and target references for smooth 60fps LERP
  const targetPos = useRef({ x: 0, y: 0, rawX: 0, rawY: 0, hasMouse: false });
  const currentLeft = useRef({ x: 0, y: 0 });
  const currentRight = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0, rot: 0 });
  const rafId = useRef<number | null>(null);

  // Update target coordinates on mouse move / touch move / scroll
  const handlePointerMove = useCallback((clientX: number, clientY: number) => {
    targetPos.current.hasMouse = true;
    targetPos.current.rawX = clientX;
    targetPos.current.rawY = clientY;
  }, []);

  // Natural Blinking Effect Loop
  useEffect(() => {
    let blinkTimeout: NodeJS.Timeout;

    const triggerBlink = () => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        // Occasionally trigger a quick double blink
        if (Math.random() > 0.65) {
          setTimeout(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 120);
          }, 140);
        }
      }, 160);

      const nextDelay = 3000 + Math.random() * 4000;
      blinkTimeout = setTimeout(triggerBlink, nextDelay);
    };

    blinkTimeout = setTimeout(triggerBlink, 3000);
    return () => clearTimeout(blinkTimeout);
  }, []);

  // Main Tracking & Animation Loop (Handles Mouse Moves + Scroll in Real-Time)
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    // When scrolling, recalculate based on last known cursor position
    const onScroll = () => {
      if (targetPos.current.hasMouse) {
        // targetPos.current.rawX and rawY remain valid in viewport coordinates
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    let idleAngle = 0;

    // Smooth 60fps / 120fps LERP Physics loop
    const animate = () => {
      let targetLeftX = 0;
      let targetLeftY = 0;
      let targetRightX = 0;
      let targetRightY = 0;
      let targetTiltX = 0;
      let targetTiltY = 0;
      let targetTiltRot = 0;

      const maxPupilRadius = isHoveredInteractive ? 15 : 13;

      if (targetPos.current.hasMouse && leftEyeRef.current && rightEyeRef.current) {
        const leftRect = leftEyeRef.current.getBoundingClientRect();
        const rightRect = rightEyeRef.current.getBoundingClientRect();

        const leftCenterX = leftRect.left + leftRect.width / 2;
        const leftCenterY = leftRect.top + leftRect.height / 2;

        const rightCenterX = rightRect.left + rightRect.width / 2;
        const rightCenterY = rightRect.top + rightRect.height / 2;

        const cursorX = targetPos.current.rawX;
        const cursorY = targetPos.current.rawY;

        // Vector for Left Eye
        const dxL = cursorX - leftCenterX;
        const dyL = cursorY - leftCenterY;
        const angleL = Math.atan2(dyL, dxL);
        const distL = Math.hypot(dxL, dyL);
        // Non-linear distance curve: responsive close by, capped gracefully at perimeter
        const factorL = Math.min(maxPupilRadius, (distL / (distL + 90)) * maxPupilRadius * 1.3);
        targetLeftX = Math.cos(angleL) * factorL;
        targetLeftY = Math.sin(angleL) * factorL;

        // Vector for Right Eye
        const dxR = cursorX - rightCenterX;
        const dyR = cursorY - rightCenterY;
        const angleR = Math.atan2(dyR, dxR);
        const distR = Math.hypot(dxR, dyR);
        const factorR = Math.min(maxPupilRadius, (distR / (distR + 90)) * maxPupilRadius * 1.3);
        targetRightX = Math.cos(angleR) * factorR;
        targetRightY = Math.sin(angleR) * factorR;

        // Mascot slight parallax tilt
        const normalizedX = (cursorX / window.innerWidth - 0.5) * 2;
        const normalizedY = (cursorY / window.innerHeight - 0.5) * 2;
        targetTiltX = normalizedX * 10;
        targetTiltY = normalizedY * 8;
        targetTiltRot = normalizedX * 3.5;

        // Check if cursor is very close to mascot
        const avgDist = (distL + distR) / 2;
        setIsCurious(avgDist < 180);
      } else {
        // Idle ambient gentle eye wandering
        idleAngle += 0.025;
        targetLeftX = Math.sin(idleAngle) * 5;
        targetLeftY = Math.cos(idleAngle * 0.7) * 4;
        targetRightX = Math.sin(idleAngle) * 5;
        targetRightY = Math.cos(idleAngle * 0.7) * 4;
        targetTiltX = Math.sin(idleAngle * 0.5) * 3;
        targetTiltY = Math.cos(idleAngle * 0.5) * 2;
      }

      // Smooth LERP interpolation (0.16 factor for natural organic glide)
      currentLeft.current.x += (targetLeftX - currentLeft.current.x) * 0.16;
      currentLeft.current.y += (targetLeftY - currentLeft.current.y) * 0.16;

      currentRight.current.x += (targetRightX - currentRight.current.x) * 0.16;
      currentRight.current.y += (targetRightY - currentRight.current.y) * 0.16;

      currentTilt.current.x += (targetTiltX - currentTilt.current.x) * 0.08;
      currentTilt.current.y += (targetTiltY - currentTilt.current.y) * 0.08;
      currentTilt.current.rot += (targetTiltRot - currentTilt.current.rot) * 0.08;

      setLeftPupil({ x: currentLeft.current.x, y: currentLeft.current.y });
      setRightPupil({ x: currentRight.current.x, y: currentRight.current.y });
      setCharTilt({
        x: currentTilt.current.x,
        y: currentTilt.current.y,
        rot: currentTilt.current.rot,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handlePointerMove, isHoveredInteractive]);

  // Quick navigation destinations
  const popularLinks = [
    { title: "AI Solutions", href: "/services/ai-solutions" },
    { title: "Web Development", href: "/services/web-development" },
    { title: "Our Portfolio", href: "/portfolio" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#04010a] text-white min-h-screen flex flex-col selection:bg-[#854CFF]/40 selection:text-white relative overflow-hidden font-sans"
    >
      {/* Dynamic Background Glows & Cyber Grids */}
      <div
        className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-[#854CFF]/20 rounded-full blur-[160px] pointer-events-none -z-0 animate-pulse"
        style={{ animationDuration: "7s" }}
      />
      <div
        className="absolute top-1/3 -right-48 w-[650px] h-[650px] bg-[#00f0ff]/15 rounded-full blur-[180px] pointer-events-none -z-0 animate-pulse"
        style={{ animationDuration: "9s" }}
      />
      <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-[#d800ff]/15 rounded-full blur-[170px] pointer-events-none -z-0" />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_45%,#000_70%,transparent_100%)] pointer-events-none -z-0" />

      {/* Header */}
      <Header />

      {/* Main 404 Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center pt-28 pb-16 lg:pt-36 lg:pb-24 relative z-10 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          {/* Main Card Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[32px] sm:rounded-[44px] bg-gradient-to-b from-[#130e2e]/95 via-[#0e0924]/90 to-[#070317]/95 border border-white/10 hover:border-[#854CFF]/40 transition-colors duration-500 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.7)] p-6 sm:p-10 lg:p-14 overflow-hidden"
          >
            {/* Top decorative gradient glow line */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#854CFF] via-[#00f0ff] to-transparent opacity-80" />

            {/* Corner Light Accents */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00f0ff]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#854CFF]/30 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Huge 404 & Content */}
              <div className="lg:col-span-6 space-y-6 z-10 text-left">
                {/* GIGANTIC PROMINENT 404 DISPLAY */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="relative select-none"
                >
                  {/* Huge glowing backdrop blur behind 404 */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#854CFF]/30 via-[#c084fc]/20 to-[#00f0ff]/30 blur-2xl opacity-70 -z-10" />

                  <div className="flex items-baseline gap-2">
                    <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[130px] font-black tracking-tighter leading-none bg-gradient-to-r from-white via-[#d8b4fe] to-[#854CFF] bg-clip-text text-transparent drop-shadow-[0_10px_25px_rgba(133,76,255,0.4)]">
                      404
                    </h1>

                  </div>

                  <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-2">
                    Oops! Page Not Found
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-base sm:text-lg text-white/70 max-w-xl leading-relaxed"
                >
                  The coordinates you followed led to uncharted digital space. Our intelligent Beep-Bot has locked eyes on you and is ready to guide you back to civilization!
                </motion.p>

                {/* Primary Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="flex flex-wrap items-center gap-4 pt-2"
                >
                  {/* Primary Return Button */}
                  <Link
                    href="/"
                    onMouseEnter={() => setIsHoveredInteractive(true)}
                    onMouseLeave={() => setIsHoveredInteractive(false)}
                    className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#854CFF] via-[#7839ee] to-[#5a1fe0] hover:from-[#9562ff] hover:to-[#7839ee] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#854CFF]/30 hover:shadow-[#854CFF]/60 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 overflow-hidden border border-white/20"
                  >
                    <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

                    <span>Back to Home</span>

                  </Link>
                </motion.div>


              </div>

              {/* Right Column: Custom Interactive Mascot with Dynamic Physics Eyes */}
              <div className="lg:col-span-6 flex items-center justify-center relative select-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full max-w-[540px] relative"
                >
                  {/* Background Ambient Glow under mascot */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#854cff]/35 via-[#a855f7]/25 to-[#00f0ff]/30 rounded-full blur-3xl -z-10 scale-95 animate-pulse" />

                  {/* SVG Illustration Container with Dynamic Mascot & Eye Physics */}
                  <svg
                    viewBox="0 0 600 520"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto drop-shadow-[0_20px_50px_rgba(133,76,255,0.28)] overflow-visible"
                  >
                    <defs>
                      {/* Gradient Definitions in Theme Colors */}
                      <linearGradient id="cyberPrimaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#9d6aff" />
                        <stop offset="100%" stopColor="#504CFF" />
                      </linearGradient>

                      <linearGradient id="cyberVioletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#c084fc" />
                        <stop offset="100%" stopColor="#854CFF" />
                      </linearGradient>

                      <linearGradient id="cyberCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f0ff" />
                        <stop offset="100%" stopColor="#0077ff" />
                      </linearGradient>

                      <linearGradient id="cyberIrisGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00f0ff" />
                        <stop offset="50%" stopColor="#854CFF" />
                        <stop offset="100%" stopColor="#d800ff" />
                      </linearGradient>

                      <linearGradient id="glassSlabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#854CFF" stopOpacity="0.05" />
                      </linearGradient>

                      <filter id="cyberGlow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>

                      <filter id="intenseGlow" x="-40%" y="-40%" width="180%" height="180%">
                        <feGaussianBlur stdDeviation="12" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Floating Tech Sparkles & Hex Orbits */}
                    <g className="animate-pulse" style={{ animationDuration: "3s" }}>
                      {/* Cyan Sparkle */}
                      <path
                        d="M 110 130 Q 110 142 98 142 Q 110 142 110 154 Q 110 142 122 142 Q 110 142 110 130 Z"
                        fill="#00f0ff"
                        filter="url(#cyberGlow)"
                      />
                      {/* Purple Sparkle */}
                      <path
                        d="M 490 100 Q 490 110 480 110 Q 490 110 490 120 Q 490 110 500 110 Q 490 110 490 100 Z"
                        fill="#c084fc"
                        filter="url(#cyberGlow)"
                      />
                      {/* Magenta Sparkle */}
                      <path
                        d="M 210 50 Q 210 58 202 58 Q 210 58 210 66 Q 210 58 218 58 Q 210 58 210 50 Z"
                        fill="#d800ff"
                      />
                    </g>

                    {/* Left Cyber Circuit Vine */}
                    <g opacity="0.85">
                      <path
                        d="M 90 420 C 70 380 60 330 90 295 C 105 275 130 285 135 315 C 140 345 120 395 90 420 Z"
                        stroke="#00f0ff"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        fill="url(#cyberCyanGrad)"
                        fillOpacity="0.1"
                      />
                      <path d="M 90 420 Q 110 360 105 305" stroke="#00f0ff" strokeWidth="2" />
                      <circle cx="105" cy="305" r="4" fill="#00f0ff" filter="url(#cyberGlow)" />
                      <circle cx="120" cy="335" r="3" fill="#854CFF" />
                    </g>

                    {/* Right Cyber Circuit Vine */}
                    <g opacity="0.85">
                      <path
                        d="M 510 420 C 530 380 540 330 510 295 C 495 275 470 285 465 315 C 460 345 480 395 510 420 Z"
                        stroke="#854CFF"
                        strokeWidth="2.5"
                        fill="url(#cyberPrimaryGrad)"
                        fillOpacity="0.12"
                      />
                      <path d="M 510 420 Q 490 360 495 305" stroke="#854CFF" strokeWidth="2" />
                      <circle cx="495" cy="305" r="4.5" fill="#c084fc" filter="url(#cyberGlow)" />
                      <circle cx="525" cy="285" r="3.5" fill="#00f0ff" />
                    </g>

                    {/* Geometric Floating Slabs & Tech Elements */}
                    {/* Shape 1: Left Angled Terminal Card */}
                    <g transform="rotate(-6 170 330)">
                      <rect
                        x="120"
                        y="260"
                        width="110"
                        height="130"
                        rx="16"
                        stroke="#854CFF"
                        strokeWidth="2.5"
                        fill="#120b2e"
                      />
                      {/* Futuristic Radar Compass */}
                      <circle cx="175" cy="315" r="26" stroke="#854CFF" strokeWidth="2" fill="none" />
                      <circle cx="175" cy="315" r="14" stroke="#00f0ff" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
                      <path d="M 175 315 L 188 302" stroke="#00f0ff" strokeWidth="2" strokeLinecap="round" />
                      <circle cx="175" cy="315" r="4" fill="#d800ff" />
                      {/* Code lines */}
                      <line x1="140" y1="360" x2="210" y2="360" stroke="#854CFF" strokeWidth="2" strokeDasharray="6 4" />
                      <line x1="140" y1="372" x2="190" y2="372" stroke="#00f0ff" strokeWidth="2" strokeDasharray="8 4" opacity="0.8" />
                    </g>

                    {/* Shape 2: Diamond Glass Orb */}
                    <g transform="rotate(45 270 280)">
                      <rect
                        x="225"
                        y="235"
                        width="90"
                        height="90"
                        rx="16"
                        stroke="#00f0ff"
                        strokeWidth="2.5"
                        fill="url(#glassSlabGrad)"
                      />
                      <path d="M 225 280 C 255 280 270 240 315 240" stroke="#00f0ff" strokeWidth="2" />
                    </g>

                    {/* Shape 3: Upper Left Tilted Slab */}
                    <g transform="rotate(-20 220 200)">
                      <rect
                        x="170"
                        y="150"
                        width="100"
                        height="100"
                        rx="14"
                        stroke="#ffffff"
                        strokeOpacity="0.85"
                        strokeWidth="2.5"
                        fill="#140d33"
                      />
                      <path d="M 220 150 A 50 50 0 0 1 270 200" stroke="#00f0ff" strokeWidth="2.5" fill="none" />
                      <circle cx="245" cy="175" r="4" fill="#854CFF" />
                    </g>

                    {/* Shape 4: Top Glowing Tech Ramp with Perched Mini Drone */}
                    <g transform="rotate(-16 340 160)">
                      <rect
                        x="230"
                        y="135"
                        width="220"
                        height="65"
                        rx="16"
                        stroke="#ffffff"
                        strokeOpacity="0.9"
                        strokeWidth="2.5"
                        fill="#18103d"
                      />
                      <line x1="250" y1="168" x2="430" y2="168" stroke="#854CFF" strokeWidth="2.5" strokeDasharray="6 6" />

                      {/* Mini Cyber Drone on ramp */}
                      <g transform="translate(420, 95)">
                        <circle cx="0" cy="20" r="11" stroke="#00f0ff" strokeWidth="2" fill="#110a2a" />
                        <path d="M 7 18 L 15 16 L 7 22 Z" fill="#00f0ff" />
                        <circle cx="2" cy="18" r="3" fill="#854CFF" />
                        <path d="M -4 20 Q -14 11 -4 7" stroke="#00f0ff" strokeWidth="2" fill="none" />
                        <line x1="-2" y1="31" x2="-2" y2="45" stroke="#854CFF" strokeWidth="2" />
                        <line x1="3" y1="31" x2="5" y2="45" stroke="#854CFF" strokeWidth="2" />
                      </g>
                    </g>

                    {/* Shape 5: Center Solid Theme Glowing Orb */}
                    <circle cx="295" cy="225" r="26" fill="url(#cyberPrimaryGrad)" filter="url(#intenseGlow)" />
                    <circle cx="295" cy="225" r="26" stroke="#00f0ff" strokeWidth="2" fill="none" />

                    {/* Shape 6: Right Tech Contour Sphere */}
                    <g transform="translate(415, 275)">
                      <circle cx="0" cy="0" r="48" stroke="#ffffff" strokeOpacity="0.85" strokeWidth="2.5" fill="#120b2e" />
                      <path d="M -32 -25 C -15 -10 -5 10 -15 35" stroke="#00f0ff" strokeWidth="2" fill="none" />
                      <path d="M 5 -45 C 20 -20 15 15 -5 45" stroke="#854CFF" strokeWidth="2" fill="none" />
                      <path d="M 25 -30 C 42 -10 38 15 22 35" stroke="#d800ff" strokeWidth="1.8" fill="none" />
                    </g>

                    {/* Shape 7: Right Solid Neon Triangle */}
                    <path d="M 450 385 L 495 305 L 540 385 Z" fill="url(#cyberVioletGrad)" stroke="#ffffff" strokeWidth="2.5" />

                    {/* ========================================================================= */}
                    {/* THE INTERACTIVE BEEP-BOT MASCOT WITH DYNAMIC EYE & SCROLL TRACKING */}
                    {/* ========================================================================= */}
                    <g
                      id="interactive-mascot"
                      style={{
                        transform: `translate(${charTilt.x}px, ${charTilt.y}px) rotate(${charTilt.rot}deg)`,
                        transformOrigin: "340px 400px",
                        transition: "transform 0.1s ease-out",
                      }}
                    >
                      {/* Shadow Beneath */}
                      <ellipse cx="340" cy="450" rx="140" ry="16" fill="#020006" opacity="0.9" />

                      {/* Mascot Arms Hugging the Platform */}
                      {/* Left Cyber Arm */}
                      <path
                        d="M 235 390 C 230 425 265 440 310 435 C 335 430 350 415 355 390"
                        stroke="#854CFF"
                        strokeWidth="3.5"
                        fill="#1b113d"
                      />
                      {/* Right Cyber Arm */}
                      <path
                        d="M 445 390 C 450 425 415 440 370 435 C 345 430 330 415 325 390"
                        stroke="#854CFF"
                        strokeWidth="3.5"
                        fill="#1b113d"
                      />

                      {/* Cyber Claws / Hands Resting */}
                      <g stroke="#854CFF" strokeWidth="3" fill="#130c2e">
                        <path d="M 310 415 C 310 440 324 446 334 434" />
                        <path d="M 324 415 C 324 444 340 448 346 432" />
                        <path d="M 338 415 C 340 444 354 446 360 430" />
                        <path d="M 352 415 C 356 440 370 440 374 425" />
                      </g>

                      {/* Head Dome & Antenna */}
                      <g id="mascot-head">
                        {/* Antenna Pole & Glowing Beacon */}
                        <line x1="340" y1="310" x2="340" y2="270" stroke="#854CFF" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="340" cy="265" r="7" fill="#00f0ff" filter="url(#cyberGlow)" />
                        <circle cx="340" cy="265" r="3" fill="#ffffff" />
                        {/* Antenna signal pulses */}
                        <path d="M 328 255 A 14 14 0 0 1 352 255" stroke="#00f0ff" strokeWidth="2" fill="none" opacity="0.7" className="animate-pulse" />

                        {/* Head Visor Base Dome */}
                        <path
                          d="M 285 385 C 285 300 395 300 395 385 Z"
                          fill="#150d36"
                          stroke="#854CFF"
                          strokeWidth="3.5"
                        />
                        {/* Inner Visor Shadow */}
                        <path
                          d="M 292 380 C 292 312 388 312 388 380 Z"
                          fill="#0d0722"
                        />

                        {/* Cute Cyber Cheeks / Blush */}
                        <ellipse cx="304" cy="370" rx="9" ry="5" fill="#ff0077" opacity={isCurious ? "0.6" : "0.25"} filter="url(#cyberGlow)" />
                        <ellipse cx="376" cy="370" rx="9" ry="5" fill="#ff0077" opacity={isCurious ? "0.6" : "0.25"} filter="url(#cyberGlow)" />

                        {/* ========================================================= */}
                        {/* LEFT EYE (Interactive Physics Tracking + Smooth Gliding) */}
                        {/* ========================================================= */}
                        <g id="left-eye-socket" ref={leftEyeRef} transform="translate(322, 345)">
                          {/* Sclera (White Eye Orb) */}
                          <circle
                            cx="0"
                            cy="0"
                            r="22"
                            fill="#ffffff"
                            stroke="#854CFF"
                            strokeWidth="3.5"
                            className="drop-shadow-md"
                          />

                          {/* Outer Eye Glow Ring */}
                          <circle
                            cx="0"
                            cy="0"
                            r="21"
                            fill="none"
                            stroke="#00f0ff"
                            strokeWidth="1.2"
                            opacity="0.6"
                          />

                          {/* Dynamic Pupil / Iris Group Tracking Mouse */}
                          <g transform={`translate(${leftPupil.x}, ${leftPupil.y})`}>
                            {/* Iris Ring */}
                            <circle
                              cx="0"
                              cy="0"
                              r={isHoveredInteractive ? "12.5" : isCurious ? "11.5" : "10"}
                              fill="url(#cyberIrisGrad)"
                              filter="url(#cyberGlow)"
                            />
                            {/* Deep Pupil */}
                            <circle
                              cx="0"
                              cy="0"
                              r={isHoveredInteractive ? "7.5" : isCurious ? "6.8" : "5.5"}
                              fill="#0a0518"
                            />
                            {/* Primary Specular Light Reflection (Top Left) */}
                            <circle cx="-3.5" cy="-3.5" r="3.2" fill="#ffffff" />
                            {/* Secondary Specular Glint (Bottom Right) */}
                            <circle cx="2.5" cy="2.5" r="1.4" fill="#ffffff" opacity="0.9" />
                          </g>

                          {/* Eyelid Blink Overlay (Top & Bottom) */}
                          <path
                            d="M -23 0 Q 0 -24 23 0 Q 0 0 -23 0 Z"
                            fill="#150d36"
                            stroke="#854CFF"
                            strokeWidth="2"
                            style={{
                              transform: isBlinking ? "scaleY(1)" : "scaleY(0)",
                              transformOrigin: "0 0",
                              transition: "transform 0.12s ease-in-out",
                            }}
                          />
                          <path
                            d="M -23 0 Q 0 24 23 0 Q 0 0 -23 0 Z"
                            fill="#150d36"
                            stroke="#854CFF"
                            strokeWidth="2"
                            style={{
                              transform: isBlinking ? "scaleY(1)" : "scaleY(0)",
                              transformOrigin: "0 0",
                              transition: "transform 0.12s ease-in-out",
                            }}
                          />
                        </g>

                        {/* ========================================================== */}
                        {/* RIGHT EYE (Interactive Physics Tracking + Smooth Gliding) */}
                        {/* ========================================================== */}
                        <g id="right-eye-socket" ref={rightEyeRef} transform="translate(358, 345)">
                          {/* Sclera (White Eye Orb) */}
                          <circle
                            cx="0"
                            cy="0"
                            r="20"
                            fill="#ffffff"
                            stroke="#854CFF"
                            strokeWidth="3.5"
                            className="drop-shadow-md"
                          />

                          {/* Outer Eye Glow Ring */}
                          <circle
                            cx="0"
                            cy="0"
                            r="19"
                            fill="none"
                            stroke="#00f0ff"
                            strokeWidth="1.2"
                            opacity="0.6"
                          />

                          {/* Dynamic Pupil / Iris Group Tracking Mouse */}
                          <g transform={`translate(${rightPupil.x}, ${rightPupil.y})`}>
                            {/* Iris Ring */}
                            <circle
                              cx="0"
                              cy="0"
                              r={isHoveredInteractive ? "11.5" : isCurious ? "10.5" : "9.2"}
                              fill="url(#cyberIrisGrad)"
                              filter="url(#cyberGlow)"
                            />
                            {/* Deep Pupil */}
                            <circle
                              cx="0"
                              cy="0"
                              r={isHoveredInteractive ? "7" : isCurious ? "6.2" : "5"}
                              fill="#0a0518"
                            />
                            {/* Primary Specular Light Reflection (Top Left) */}
                            <circle cx="-3" cy="-3" r="2.8" fill="#ffffff" />
                            {/* Secondary Specular Glint (Bottom Right) */}
                            <circle cx="2.2" cy="2.2" r="1.2" fill="#ffffff" opacity="0.9" />
                          </g>

                          {/* Eyelid Blink Overlay (Top & Bottom) */}
                          <path
                            d="M -21 0 Q 0 -22 21 0 Q 0 0 -21 0 Z"
                            fill="#150d36"
                            stroke="#854CFF"
                            strokeWidth="2"
                            style={{
                              transform: isBlinking ? "scaleY(1)" : "scaleY(0)",
                              transformOrigin: "0 0",
                              transition: "transform 0.12s ease-in-out",
                            }}
                          />
                          <path
                            d="M -21 0 Q 0 22 21 0 Q 0 0 -21 0 Z"
                            fill="#150d36"
                            stroke="#854CFF"
                            strokeWidth="2"
                            style={{
                              transform: isBlinking ? "scaleY(1)" : "scaleY(0)",
                              transformOrigin: "0 0",
                              transition: "transform 0.12s ease-in-out",
                            }}
                          />
                        </g>

                        {/* Cute Cyber Mouth / Smile */}
                        <path
                          d={
                            isHoveredInteractive
                              ? "M 330 376 Q 340 386 350 376"
                              : isCurious
                                ? "M 334 377 Q 340 383 346 377"
                                : "M 334 376 Q 340 380 346 376"
                          }
                          stroke="#00f0ff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          fill="none"
                          style={{ transition: "d 0.2s ease" }}
                        />
                      </g>
                    </g>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
