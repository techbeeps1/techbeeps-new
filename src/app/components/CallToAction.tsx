"use client";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import GsapTextAnimation from "./GsapTextAnimation";
export default function CallToAction() {
  return (
    <section className="relative py-20 lg:py-[150px] border-b border-[#362E49] text-white overflow-hidden text-center bg-[linear-gradient(180deg,#854CFF8A_0%,#05010f_100%)]">
        <div className="container relative z-10 mx-auto px-4">
         
          <h2
                          className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white mb-5 "              >
                         
                          <GsapTextAnimation mainText={"Don’t hesitate to contact us any time"} mainClass="flex flex-wrap justify-center "/>
                        </h2>
          <p className="text-gray-300 max-w-4xl mx-auto text-sm md:text-[16px] leading-relaxed mb-10">
            We have advanced skills and ample resources to create large-scale solutions as well as guide startups from idea to profit.
          </p>
          
          <div className="flex flex-row items-center justify-center gap-7.5">
            <button className="px-6 py-3.5 cursor-pointer flex items-center group hover:bg-primary hover:text-white duration-400 gap-2.5 bg-white text-black rounded-[50px] font-medium">
              Get a Quote
              <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
            </button>
            <button className="px-6 py-3.5 cursor-pointer flex items-center text-white group hover:bg-primary duration-400 gap-2.5 bg-transparent border border-primary rounded-[50px] font-medium">
              Our Services
              <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
            </button>
          </div>
        </div>
      </section>
  );
}
