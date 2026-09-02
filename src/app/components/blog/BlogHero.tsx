import Image from "next/image";
import GsapTextAnimation from "../GsapTextAnimation";
import ContentSwipUp from "../ContentSwipUp";

interface BlogHeroProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  bgImage?: string;
}

export default function BlogHero({
  title = "Insights, Tech Trends & <br/> Digital Innovations",
  subtitle = "Explore expert articles, in-depth engineering breakdowns, AI strategies, and modern development insights from the TechBeeps team.",
  badge = "TECHBEEPS BLOG & INSIGHTS",
  bgImage = "/team-hero-bg.jpg",
}: BlogHeroProps) {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[75vh] flex items-end justify-center pb-16 pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="TechBeeps Blog Hero Background"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay Gradient to blend with the rest of the site */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0.18)_20%,rgba(0,0,0,0)_54%,#000000_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/90 via-[#05010f]/40 to-[#05010f]/90"></div>
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Subtle Glow Gradients (Low Opacity) */}
        <div className="absolute bottom-0 lg:bottom-10 -left-20 lg:-left-40 bg-[#504CFF] blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-25 lg:opacity-35 pointer-events-none rounded-full"></div>
        <div className="absolute top-0 lg:top-20 -right-20 lg:-right-20 bg-primary blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-25 lg:opacity-35 pointer-events-none rounded-full"></div>
      </div>

      {/* Content Box */}
      <div className="container relative z-10 px-4 mt-auto">
        <div className="backdrop-blur-[25px] rounded-[30px] p-6 md:p-8 lg:p-[40px] bg-[#868686]/10 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              {badge}
            </div>
          )}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[75px] leading-tight lg:leading-[90px] text-white mb-4 lg:mb-6">
            <GsapTextAnimation mainText={title} mainClass="flex flex-wrap" />
          </h1>
          <ContentSwipUp className="md:text-[18px] lg:text-[20px] text-gray-300 max-w-3xl" top="100">
            {subtitle}
          </ContentSwipUp>
        </div>
      </div>
    </section>
  );
}
