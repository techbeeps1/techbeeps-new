"use client";

import Image from "next/image";
import Link from "next/link";
export default function AiButton() {  
 
  return  ( 
<div className="inline-block max-w-[100px] scale-[0.4] mr-[30px]">
  <div className="relative flex items-center justify-center w-[50px] h-[50px] mx-auto radial-wrapper">
    <Link
      href="#"
      className="relative flex items-center justify-center"
    >
      <span className="absolute z-[1] block leading-[20px]">
        <img
          src="/aiimg.png"
          alt=""
          className="max-w-[70px] h-auto object-contain"
        />
      </span>

      <span className="absolute left-[7px] top-[-4px] anistar">
        <img
          src="/staricons.png"
          alt=""
          className="max-w-[35px] object-contain"
        />
      </span>

      <span className="absolute right-[14px] top-[60px] anistar2">
        <img
          src="/staricons.png"
          alt=""
          className="max-w-[20px] object-contain"
        />
      </span>
    </Link>

  </div>
</div>
  
  );

};
