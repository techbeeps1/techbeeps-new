"use client";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import GsapTextAnimation from "./GsapTextAnimation";
import ButtonSwipUp from "./ButtonSwipUp";
import ContentSwipUp from "./ContentSwipUp";
export default function CallToAction() {
  return (
    <section className="relative py-20 lg:py-[150px] border-b border-[#362E49] text-white overflow-hidden text-center bg-[linear-gradient(180deg,#854CFF8A_0%,#05010f_100%)]">
        <div className="container relative z-10 mx-auto px-4">
         
          <h2
                          className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white mb-5 "              >
                         
                          <GsapTextAnimation mainText={"Don’t hesitate to contact us any time"} mainClass="flex flex-wrap justify-center "/>
                        </h2>
          
          <ContentSwipUp>
             We have advanced skills and ample resources to create large-scale solutions as well as guide startups from idea to profit.
          </ContentSwipUp>
          
          <div className="flex flex-row items-center justify-center gap-7.5 mt-10">          
            <ButtonSwipUp  className="bg-white w-fit text-black hover:text-white" url={"/contact"}>
                  
                         Get a Quote
                                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" /> 
                         </ButtonSwipUp>
                         <ButtonSwipUp  className="bg-transparent text-white hover:text-white border-primary border " url={"/services"}>
                                      Our Services 
                                        <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" /> 
                          </ButtonSwipUp>                       
           
          </div>
        </div>
      </section>
  );
}
