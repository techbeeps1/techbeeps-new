'use client';
import React, { useState, useEffect } from 'react';
import GsapTextAnimation from './GsapTextAnimation';

const testimonials = [
  {
    id: 1,
    quote: "\"Great to work with as we've done several times now. Always great job on our WordPress-websites. Highly recommended!\"",
    name: "Sarah Jenkins",
    handle: "sarahj_design [United States]",
    image: "/avtar.jpg",
    stars: 5
  },
  {
    id: 2,
    quote: "\"The team at TechBeeps delivered beyond our expectations. The communication was flawless and the final product is stunning.\"",
    name: "Michael Chen",
    handle: "mchen_tech [Canada]",
    image: "/avtar.jpg",
    stars: 5
  },
  {
    id: 3,
    quote: "\"Absolutely brilliant service. They transformed our outdated platform into a modern, lightning-fast application. Will hire again!\"",
    name: "Emma Thompson",
    handle: "emmat_creates [United Kingdom]",
    image: "/avtar.jpg",
    stars: 4
  },
  {
    id: 4,
    quote: "\"A truly professional experience from start to finish. They understand complex requirements and translate them into simple solutions.\"",
    name: "David Rodriguez",
    handle: "davidrod_dev [Spain]",
    image: "/avtar.jpg",
    stars: 5
  },
  {
    id: 5,
    quote: "\"Highly skilled developers with a keen eye for design. They don't just write code; they craft exceptional user experiences.\"",
    name: "Aisha Patel",
    handle: "apatel_innovates [Australia]",
    image: "/avtar.jpg",
    stars: 5
  }
];

export default function TestimonialSlider() {
  const originalLength = testimonials.length;
  // Duplicate array to allow infinite scrolling in both directions
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Start at the beginning of the middle array
  const [currentIndex, setCurrentIndex] = useState(originalLength);
  const [deviceType, setDeviceType] = useState('desktop');
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Dragging state
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Handle client-side hydration and responsive calculations
  useEffect(() => {
    setMounted(true);
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setDeviceType('mobile');
      } else if (width < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const getLayout = () => {
    if (!mounted) return { itemWidth: 684, cardWidth: 660, marginRight: 24, baseOffset: '50vw - 672px' };

    switch (deviceType) {
      case 'mobile':
        // Center 1 card (320 / 2 = 160)
        return { itemWidth: 336, cardWidth: 320, marginRight: 16, baseOffset: '50vw - 160px' };
      case 'tablet':
        // Center 1 card (520 / 2 = 260)
        return { itemWidth: 544, cardWidth: 520, marginRight: 24, baseOffset: '50vw - 260px' };
      case 'desktop':
      default:
        // Center 2 cards (660 + 12 = 672)
        return { itemWidth: 684, cardWidth: 660, marginRight: 24, baseOffset: '50vw - 672px' };
    }
  };

  const { itemWidth, cardWidth, marginRight, baseOffset } = getLayout();

  // Smooth Autoplay functionality
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      if (!isHovered && !isDragging) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 3000); // Slides every 3.5 seconds
    return () => clearInterval(timer);
  }, [mounted, isHovered, isDragging]);

  // Drag Handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setIsTransitioning(false);
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setDragStartX(clientX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    setDragOffset(clientX - dragStartX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    setIsTransitioning(true);

    const threshold = 50; // Minimum drag distance to trigger slide change
    if (dragOffset > threshold) {
      setCurrentIndex((prev) => prev - 1);
    } else if (dragOffset < -threshold) {
      setCurrentIndex((prev) => prev + 1);
    }
    setDragOffset(0);
  };

  // Infinite loop reset
  useEffect(() => {
    let timeout;
    // If we reach the end of the middle set, seamlessly jump back to the start of the middle set
    if (currentIndex >= originalLength * 2) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex - originalLength);
      }, 700); // Wait for CSS transition to finish (matches duration-700)
    }
    // If we reach the start of the first set, seamlessly jump to the end of the middle set
    else if (currentIndex <= 0) {
      timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + originalLength);
      }, 700);
    }
    return () => clearTimeout(timeout);
  }, [currentIndex, originalLength]);

  // Restore transition after instantly jumping
  useEffect(() => {
    if (!isTransitioning && !isDragging) {
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning, isDragging]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(originalLength + index);
  };

  const activeDotIndex = currentIndex % originalLength;

  return (
    <section className=" py-20 overflow-hidden relative font-sans">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-16 relative z-20">
        <h2
          className="text-3xl md:text-4xl  lg:text-[50px] leading-tight lg:leading-[60px] text-white mb-5 ">
          <GsapTextAnimation mainText={"What Our Clients Say <br/> About TechBeeps"} mainClass="flex flex-wrap justify-center " />
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
        </p>
      </div>

      {/* Slider Section */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Gradient Overlay - Creates the black fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />

        {/* Right Gradient Overlay - Creates the black fade effect */}
        <div className="absolute right-0 top-0 bottom-0 w-[15%] md:w-[25%] bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />

        {/* Track Container */}
        <div
          className="w-full flex select-none"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          <div
            className="flex ease-in-out"
            style={{
              transitionProperty: 'transform',
              transitionDuration: isTransitioning ? '700ms' : '0ms',
              transform: `translateX(calc(${baseOffset} - ${currentIndex * itemWidth}px + ${dragOffset}px))`
            }}
          >
            {/* Testimonial Cards */}
            {extendedTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="shrink-0 bg-[linear-gradient(90deg,#120D25_58%,#291D58_100%)]  rounded-[20px] p-6 flex flex-col md:flex-row gap-[38px] shadow-2xl transition-all duration-300"
                style={{
                  width: `${cardWidth}px`,
                  marginRight: `${marginRight}px`
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  height={202}
                  width={190}
                  className="rounded-[10px] shrink-0"
                  loading="lazy"
                  draggable={false}
                />
                <div className="flex flex-col justify-between py-1 flex-1">
                  <p className="text-white leading-[26px]">
                    {t.quote}
                  </p>
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="font-semibold text-white leading-[26px]">{t.name}</h4>
                      <p className="text-[#9C9C9C] text-sm leading-[26px]">{t.handle}</p>
                    </div>
                    <div className="flex gap-1 text-[#FF5C00] pb-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <svg key={i} width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12 z-20 relative">
        {mounted && Array.from({ length: originalLength }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`h-[6px] rounded-full transition-all duration-300 ${activeDotIndex === idx ? 'w-6 bg-white' : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
