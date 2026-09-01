"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaXTwitter, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { TeamMember } from "@/types/team";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group relative rounded-[24px] p-3.5 sm:p-4 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden">


      {/* Image Container with Development Solutions Hover Sweep Animation */}
      <div className="relative w-full aspect-[4/4.3] rounded-[18px] sm:rounded-[20px] overflow-hidden bg-[#130f2e]">
        {/* Animated Image Layer 1 (Sliding in during hover transition) */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover h-full w-full pointer-events-none absolute top-0 left-0 bottom-0 right-0 z-1 translate-x-1/2 scale-x-[2] opacity-0 blur-[10px] group-hover:blur-[0px] transition-all duration-500 ease group-hover:translate-x-0 group-hover:scale-x-100 group-hover:opacity-100"
        />

        {/* Animated Image Layer 2 (Sliding out during hover transition) */}
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top h-full w-full pointer-events-none blur-[0px] group-hover:opacity-0 group-hover:blur-[6px] group-hover:-translate-x-1/2 group-hover:scale-x-[1.4] transition-all duration-500 ease"
        />
        {/* Hover Center Social Icons Overlay (Visible only on card hover) */}
        <div className="absolute inset-0 flex items-center justify-center gap-2.5 sm:gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
          {member.socials.linkedin && (
            <a
              href={member.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] hover:scale-115 transition-all duration-200 shadow-xl cursor-pointer"
              aria-label={`${member.name} LinkedIn`}
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
          )}
          {member.socials.twitter && (
            <a
              href={member.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] hover:scale-115 transition-all duration-200 shadow-xl cursor-pointer"
              aria-label={`${member.name} Twitter / X`}
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
          )}
          {member.socials.instagram && (
            <a
              href={member.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] hover:scale-115 transition-all duration-200 shadow-xl cursor-pointer"
              aria-label={`${member.name} Instagram`}
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          )}
          {member.socials.facebook && (
            <a
              href={member.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] hover:scale-115 transition-all duration-200 shadow-xl cursor-pointer"
              aria-label={`${member.name} Facebook`}
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
          )}
          {member.socials.github && (
            <a
              href={member.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] hover:scale-115 transition-all duration-200 shadow-xl cursor-pointer"
              aria-label={`${member.name} GitHub`}
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {member.socials.email && (
            <a
              href={member.socials.email}
              className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] hover:scale-115 transition-all duration-200 shadow-xl cursor-pointer"
              aria-label={`${member.name} Email`}
            >
              <FiMail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Member Info Footer (Clickable link only on Name) */}
      <div className="pt-4 pb-1 px-1 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <Link
            href={`/our-team/${member.slug}`}
            className="inline-block text-[19px] sm:text-[21px] lg:text-[22px] font-bold text-white tracking-tight truncate hover:text-[#9b87f5] transition-colors duration-300 cursor-pointer"
          >
            {member.name}
          </Link>
          <p className="text-[13px] sm:text-[14px] text-white/60 font-normal truncate mt-0.5">
            {member.role}
          </p>
        </div>

        {/* LinkedIn icon badge matching reference image */}
        {member.socials.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-[#854CFF] hover:text-white transition-all duration-300 shrink-0 cursor-pointer"
            aria-label={`${member.name} LinkedIn Profile`}
          >
            <FaLinkedinIn className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
