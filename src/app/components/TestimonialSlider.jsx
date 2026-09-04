'use client';
import React, { useState, useEffect, useRef, useSyncExternalStore, useCallback } from 'react';
import GsapTextAnimation from './GsapTextAnimation';
import ContentSwipUp from './ContentSwipUp';
import { IoArrowBackOutline, IoArrowForwardOutline } from 'react-icons/io5';

const subscribeResize = (callback) => {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
};

const getWindowWidth = () => (typeof window !== 'undefined' ? window.innerWidth : 1200);
const getServerWidth = () => 1200;

const testimonials = [
  {
    id: 1,
    quote: "This seller is a master at his craft. I am a professional artist of 13 years and finding someone at this level is rare. I was very impressed with the communication, process, and ability to produce results to my liking. I would 1000% recommend TechBeeps to my friends, and I would buy from them again. Top of the line work!",
    name: "Evan",
    handle: "United States",
    image: "/female.avif",
    stars: 5
  },
  {
    id: 2,
    quote: "What really made TechBeeps Services stand out was how they mixed their deep technical skills with a genuine personal touch. Seamless communication and quality delivery throughout the project.",
    name: "Jane",
    handle: "South Africa",
    image: "/female.avif",
    stars: 5
  },
  {
    id: 3,
    quote: "Yaseen and the TechBeeps team exceeded our expectations. All tasks were completed on time with outstanding professionalism and efficiency. I really enjoyed the collaboration.",
    name: "Karine Pinas",
    handle: "Netherlands",
    image: "/KarinePinas.png",
    stars: 5
  },
  {
    id: 4,
    quote: "TechBeeps Services provided exceptional service! I was truly impressed with the quick turnaround time and the outstanding results. They have a professional, knowledgeable, and experienced team that goes above and beyond.",
    name: "Bedros Der Garabedian",
    handle: "Netherlands",
    image: "/male.jpg",
    stars: 5
  },
  {
    id: 5,
    quote: "Great to work with as we’ve done several times now. Always great job on our WordPress websites and digital infrastructure. Highly recommended partner for any modern business!",
    name: "Carin Elvhammar",
    handle: "Norrlandsgruppen [Sweden]",
    image: "/female.avif",
    stars: 5
  },
  {
    id: 6,
    quote: "Their communication is better than a majority of the sellers we have encountered. TechBeeps is our go-to developer team for future projects involving PHP, Javascript, React, and custom web development.",
    name: "ZPE",
    handle: "Teamzpe [United Kingdom]",
    image: "/female.avif",
    stars: 5
  }
];

export default function TestimonialSlider() {
  const originalLength = testimonials.length;
  // Triplicate array to allow seamless infinite scrolling in both directions
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Start in the middle set (index = originalLength)
  const [currentIndex, setCurrentIndex] = useState(originalLength);
  const windowWidth = useSyncExternalStore(subscribeResize, getWindowWidth, getServerWidth);
  const [isHovered, setIsHovered] = useState(false);
  const [isInstant, setIsInstant] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const dragStartXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isTransitioningRef = useRef(false);
  const trackRef = useRef(null);

  const getLayout = () => {
    if (windowWidth < 768) {
      const cardWidth = Math.min(340, Math.max(280, windowWidth - 32));
      const marginRight = 16;
      const itemWidth = cardWidth + marginRight;
      const baseOffset = (windowWidth - cardWidth) / 2;
      return { itemWidth, cardWidth, marginRight, baseOffset };
    }
    if (windowWidth < 1024) {
      const cardWidth = Math.min(500, windowWidth - 64);
      const marginRight = 20;
      const itemWidth = cardWidth + marginRight;
      const baseOffset = (windowWidth - cardWidth) / 2;
      return { itemWidth, cardWidth, marginRight, baseOffset };
    }
    // Desktop: Two cards centered in viewport
    const cardWidth = 540;
    const marginRight = 24;
    const itemWidth = cardWidth + marginRight;
    const baseOffset = windowWidth / 2 - cardWidth - marginRight / 2;
    return { itemWidth, cardWidth, marginRight, baseOffset };
  };

  const { itemWidth, cardWidth, marginRight, baseOffset } = getLayout();
  const currentX = baseOffset - currentIndex * itemWidth;
  const activeX = currentX + dragOffset;

  const handleNext = useCallback(() => {
    setIsInstant(false);
    isTransitioningRef.current = true;
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsInstant(false);
    isTransitioningRef.current = true;
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Smooth Autoplay: triggers next slide after delay only when not interacting
  useEffect(() => {
    if (isHovered || isDragging) return;
    const timer = setInterval(() => {
      if (!isTransitioningRef.current) {
        handleNext();
      }
    }, 5500);
    return () => clearInterval(timer);
  }, [isHovered, isDragging, handleNext]);

  // Handle transition completion for seamless infinite loop reset
  const handleTransitionEnd = (e) => {
    // Only handle transform transitions from the track itself
    if (e.target !== trackRef.current || e.propertyName !== 'transform') return;

    isTransitioningRef.current = false;

    if (currentIndex >= originalLength * 2) {
      // Reached the end duplicated set, silently snap to corresponding card in middle set
      setIsInstant(true);
      setCurrentIndex((prev) => ((prev % originalLength) + originalLength));
    } else if (currentIndex < originalLength) {
      // Reached the start duplicated set, silently snap to corresponding card in middle set
      setIsInstant(true);
      setCurrentIndex((prev) => ((prev % originalLength) + originalLength));
    }
  };

  // Re-enable transition on the next animation frame after instant snap
  useEffect(() => {
    if (isInstant) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsInstant(false);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isInstant]);

  // Smooth Pointer Drag Handlers
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    setIsDragging(true);
    setDragOffset(0);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const delta = e.clientX - dragStartXRef.current;
    setDragOffset(delta);
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    const delta = dragOffset;
    setDragOffset(0);
    const threshold = 45;
    if (delta < -threshold) {
      handleNext();
    } else if (delta > threshold) {
      handlePrev();
    }
  };

  const handlePointerCancel = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleDotClick = (index) => {
    setIsInstant(false);
    isTransitioningRef.current = true;
    setCurrentIndex(originalLength + index);
  };

  const activeDotIndex = ((currentIndex % originalLength) + originalLength) % originalLength;

  return (
    <section className="border-t border-white/12 py-25 overflow-hidden relative z-1 font-sans">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-16 relative z-20">
        <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white mb-5">
          <GsapTextAnimation mainText={"What Our Clients Say <br/> About TechBeeps"} mainClass="flex flex-wrap justify-center" />
        </h2>

        <ContentSwipUp className="max-w-[850px] mx-auto w-full">
          Hear directly from our global clients about how TechBeeps delivers scalable technology solutions, intuitive designs, and high-impact digital experiences that drive growth.
        </ContentSwipUp>
      </div>

      {/* Slider Section */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Track Container */}
        <div className="w-full select-none py-4 overflow-visible touch-pan-y">
          <div
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translate3d(${activeX}px, 0px, 0px)`,
              transition: isInstant || isDragging ? 'none' : 'transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
              willChange: 'transform'
            }}
            className="flex items-stretch cursor-grab active:cursor-grabbing select-none"
          >
            {/* Testimonial Cards */}
            {extendedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="shrink-0 group relative overflow-hidden bg-[linear-gradient(145deg,rgba(22,15,48,0.92)_0%,rgba(10,7,24,0.96)_100%)] hover:bg-[linear-gradient(145deg,rgba(30,20,64,0.95)_0%,rgba(14,9,32,0.98)_100%)] border border-white/[0.08] hover:border-primary/50 rounded-[26px] p-7 md:p-8.5 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_50px_rgba(133,76,255,0.22)] transition-all duration-500 hover:-translate-y-1.5"
                style={{
                  width: `${cardWidth}px`,
                  minHeight: '330px',
                  marginRight: `${marginRight}px`
                }}
              >
                {/* Top Shimmer Ambient Line */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Ambient Radial Spotlight inside card */}
                <div className="absolute -top-20 -left-20 w-44 h-44 bg-primary/20 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/35 transition-all duration-500" />
                <div className="absolute -bottom-20 -right-20 w-44 h-44 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Header: Author on left, 5 Glowing Stars on right */}
                <div className="relative z-10 flex items-center justify-between gap-4 pb-5 border-b border-white/[0.07]">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 md:w-13 md:h-13 rounded-full p-[2px] bg-gradient-to-tr from-primary via-purple-400 to-indigo-500 shrink-0 shadow-[0_0_15px_rgba(133,76,255,0.35)]">
                      <img
                        src={t.image}
                        alt={`Client - ${t.name}`}
                        className="w-full h-full object-cover object-top rounded-full bg-[#1b1236]"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-[16px] md:text-[17px] tracking-tight">
                        {t.name}
                      </h3>
                      <p className="text-[#a59ebf] text-xs md:text-sm mt-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>{t.handle}</span>
                      </p>
                    </div>
                  </div>

                  {/* 5 Luminous Stars */}
                  <div className="flex gap-1 text-[#FFB800] drop-shadow-[0_2px_8px_rgba(255,184,0,0.45)] shrink-0">
                    {[...Array(t.stars)].map((_, i) => (
                      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Middle: Quote Body with comfortable typography */}
                <div className="relative z-10 pt-5 flex-1 flex items-start">
                  <p className="text-[#E2DEEE] group-hover:text-white text-[15px] md:text-[16px] leading-[27px] font-normal transition-colors duration-300">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Background Decorative Large Quote Watermark */}
                <div className="absolute right-6 bottom-4 select-none pointer-events-none text-white/[0.03] group-hover:text-primary/[0.08] transition-colors duration-500">
                  <svg width="65" height="65" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Controls: Prev/Next Buttons + Dots */}
      <div className="flex items-center justify-center gap-5 mt-10 z-20 relative">
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-primary text-white duration-300 transition-all border border-white/10 hover:border-primary cursor-pointer shadow-lg active:scale-95"
        >
          <IoArrowBackOutline className="w-4.5 h-4.5" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: originalLength }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer ${activeDotIndex === idx ? 'w-7 bg-primary' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-primary text-white duration-300 transition-all border border-white/10 hover:border-primary cursor-pointer shadow-lg active:scale-95"
        >
          <IoArrowForwardOutline className="w-4.5 h-4.5" />
        </button>
      </div>
    </section>
  );
}

