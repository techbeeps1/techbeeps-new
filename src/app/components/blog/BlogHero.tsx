import Image from "next/image";
import GsapTextAnimation from "../GsapTextAnimation";
import ContentSwipUp from "../ContentSwipUp";

interface BlogHeroProps {
  title?: string;
  subtitle?: string;
  bgImage?: string;
}

export default function BlogHero({
  title = "Insights, Tech Trends & <br/> Digital Innovations",
  subtitle = "Explore expert articles, in-depth engineering breakdowns, AI strategies, and modern development insights from the TechBeeps team.",
  bgImage = "/team-hero-bg.jpg",
}: BlogHeroProps) {
  return (
    <section className="relative min-h-screen flex items-end justify-center pb-[90px] pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,rgba(0, 0, 0, 0.18)_20%,rgba(0,0,0,0)_54%,#000000_100%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/80 via-transparent to-[#05010f]/80"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Subtle Glow Gradients (Low Opacity) */}
        <div className="absolute bottom-0 lg:bottom-10 -left-20 lg:-left-40 bg-[#504CFF] blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
        <div className="absolute top-0 lg:top-20 -right-20 lg:-right-20 bg-primary blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
      </div>

      {/* Content Box */}
      <div className="container relative z-10 px-4 mt-auto">
        <div className="backdrop-blur-[25px] rounded-[30px] p-6 md:p-8 lg:p-[40px] bg-[#868686]/10 ">
          <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[97px] text-white mb-4 lg:mb-6">
            <GsapTextAnimation mainText={title} mainClass="flex flex-wrap " />
          </h1>
          <ContentSwipUp className="md:text-[20px]" top="100">
            {subtitle}
          </ContentSwipUp>
        </div>
      </div>
    </section>
  );
}
