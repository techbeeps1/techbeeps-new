"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsPlus, BsDash } from "react-icons/bs";


export default function FaqAccordion({faqs}: {faqs: {question: string, answer: string}[]}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (

<>
        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className="bg-[#424242]/50 rounded-[10px] overflow-hidden transition-all duration-300 hover:bg-[#424242]/40"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-4 md:px-6 md:py-5 flex items-center cursor-pointer justify-between text-left focus:outline-none"
                >
                  <span className="text-[18px] md:text-[22px] leading-snug md:leading-7.5 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent transition-all duration-500 group-hover:brightness-125 pr-4">
                    {faq.question}
                  </span>
                  <div 
                    className={`shrink-0 w-[28px] h-[28px] md:w-[30px] md:h-[30px] rounded-[6px] flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? 'bg-primary text-white' : 'bg-[#8054FF] text-white'
                    }`}
                  >
                    {isOpen ? <BsDash size={20} className="md:w-[22px] md:h-[22px]" /> : <BsPlus size={20} className="md:w-[22px] md:h-[22px]" />}
                  </div>
                </button>
                
                {/* Smooth Dropdown Animation */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-white text-sm md:text-base leading-[28px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
</>
  );
}
