import Image from "next/image";
import Header from "../header/Header";
import Footer from "../Footer";
import CallToAction from "../CallToAction";
import FaqAccordion from "../FaqAccordion";
import LogoMarquee from "../LogoMarquee";
import ButtonSwipUp from "../ButtonSwipUp";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import GsapTextAnimation from "@/app/components/GsapTextAnimation";
import ServiceIcon from "./ServiceIcon";
import { ServiceData } from "@/types/service";

export interface ServiceTemplateProps {
  service: ServiceData;
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  const { hero, offeringsSection, promiseSection, faqSection, hireDeveloperSection } = service;

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center pb-[90px] pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={hero.bgImage || "/services-bg.jpg"}
            alt={hero.bgImageAlt || `${hero.title} Background`}
            fill
            priority
            className="object-cover object-top"
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
              <GsapTextAnimation mainText={hero.title} mainClass="flex flex-wrap" />
            </h1>
            <p className="text-base lg:text-[20px] leading-snug lg:leading-[30px] text-white ">
              {hero.desc}
            </p>
          </div>
        </div>
      </section>

      {/* LogoMarquee */}
      <LogoMarquee />

      {/* Offerings / Services Details Section */}
      <section className="py-[100px] text-white">
        <div className="container px-4 mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white">
              <GsapTextAnimation mainText={offeringsSection.title} mainClass="flex flex-wrap justify-center" />
            </h2>
            {offeringsSection.desc && (
              <p className="text-white text-sm md:text-base leading-snug lg:leading-[28px] max-w-[1000px] mx-auto">
                {offeringsSection.desc}
              </p>
            )}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {offeringsSection.items.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-[15px] p-[1px] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(80,76,255,0.4)] cursor-pointer overflow-hidden"
              >
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#504CFF]/0 via-[#9795FF]/80 to-[#504CFF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Shimmer sweep effect on the border */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                {/* Inner Card content */}
                <div className="relative h-full z-10 bg-[linear-gradient(180deg,#120D25_58%,#291D58_100%)] group-hover:bg-[linear-gradient(180deg,#1A1138_40%,#352075_100%)] py-8 px-6 lg:py-[50px] lg:px-[30px] rounded-[14px] transition-colors duration-500 border border-white/5 overflow-hidden">
                  {/* Floating glow blob inside card */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9795FF] blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#504CFF] blur-[80px] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative z-20 flex flex-col h-full">
                    <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-[#9795FF]/60 group-hover:shadow-[0_0_30px_rgba(151,149,255,0.6)] relative overflow-hidden mb-[30px] lg:mb-[40px]">
                      {/* Shimmer sweep effect on the icon box */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                      <ServiceIcon
                        iconName={item.icon}
                        imageSrc={item.image}
                        title={item.title}
                      />
                    </div>
                    <div className="space-y-[16px] lg:space-y-[20px] mt-auto">
                      <h3 className="text-[20px] lg:text-[22px] leading-7.5 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent transition-all duration-500 group-hover:brightness-125">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base leading-[28px] text-gray-400 group-hover:text-white transition-colors duration-500">
                        {item.desc}
                      </p>

                      {item.points && item.points.length > 0 && (
                        <ul className="space-y-2.5 pt-4 border-t border-white/10 mt-4">
                          {item.points.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-center gap-2.5 text-xs lg:text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise / Why Choose Us Section (Optional) */}
      {promiseSection && (
        <section className=" py-25 border-y-1 border-white/12 text-white">
          <div className="container flex flex-col lg:flex-row items-center gap-16">
            {/* Left Content */}
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white">
                  <br className="hidden md:block" />
                  <GsapTextAnimation mainText={promiseSection.title} mainClass="flex flex-wrap" />
                </h2>
                {promiseSection.desc && <p>{promiseSection.desc}</p>}
              </div>

              {promiseSection.bullets && promiseSection.bullets.length > 0 && (
                <ul className="space-y-5">
                  {promiseSection.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex gap-4 items-start">
                      <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                      <p>{bullet}</p>
                    </li>
                  ))}
                </ul>
              )}

              <div className="pt-2"></div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full">
              <div className="relative shadow-2xl border border-white/5">
                <Image
                  src={promiseSection.image || "/promise.jpg"}
                  alt={promiseSection.imageAlt || "TechBeeps Commitment to Quality and Client Satisfaction"}
                  width={621}
                  height={414}
                  className="w-full h-auto object-cover rounded-[20px]"
                />
                <div
                  className="absolute inset-0 rounded-[20px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(270deg, #000000 2.88%, rgba(7, 7, 7, 0) 48.12%, #070707 98.14%)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-[100px] bg-[#05010f] text-white">
        <div className="container">
          <div className="mb-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="w-full lg:w-[40%]">
              <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white">
                <GsapTextAnimation
                  mainText={faqSection.title || "Frequently Asked Questions"}
                  mainClass="flex flex-wrap"
                />
              </h2>
            </div>
            <div className="w-full lg:w-[60%]">
              <FaqAccordion faqs={faqSection.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Hire Developer Section (Optional) */}
      {hireDeveloperSection && (
        <section className="bg-black text-white py-10">
          <div className="max-w-[1320px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            {/* Left Image */}
            <div className="flex-1 w-full">
              <div className="relative shadow-2xl border border-white/5">
                <Image
                  src={hireDeveloperSection.image || "/Migration.jpg"}
                  alt={hireDeveloperSection.imageAlt || "TechBeeps Developer"}
                  width={621}
                  height={414}
                  className="w-full h-auto object-cover rounded-[20px]"
                />
                <div
                  className="absolute inset-0 rounded-[20px] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(270deg, #000000 2.88%, rgba(7, 7, 7, 0) 48.12%, #070707 98.14%)",
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-10">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white">
                  <br className="hidden md:block" />
                  <GsapTextAnimation mainText={hireDeveloperSection.title} mainClass="flex flex-wrap" />
                </h2>
                {hireDeveloperSection.subtitle && (
                  <h3 className="text-[22px] leading-[30px]">{hireDeveloperSection.subtitle}</h3>
                )}
                <p>{hireDeveloperSection.desc}</p>
              </div>

              <div className="pt-2">
                <ButtonSwipUp
                  className="text-black hover:text-white bg-white w-50"
                  url={hireDeveloperSection.buttonUrl || "/contact-us"}
                >
                  {hireDeveloperSection.buttonText}
                  <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
                </ButtonSwipUp>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call To Action */}
      <CallToAction />

      <Footer />
    </>
  );
}
