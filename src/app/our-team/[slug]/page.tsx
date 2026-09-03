import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/Footer";
import CallToAction from "@/app/components/CallToAction";
import TeamCard from "@/app/components/team/TeamCard";
import { getAllTeamMembers, getTeamMemberBySlug, getAllTeamMemberSlugs } from "@/lib/team";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaArrowLeft,
  FaBriefcase,
  FaGraduationCap,
  FaCircleCheck,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { FiMail } from "react-icons/fi";

interface TeamMemberPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllTeamMemberSlugs();
  return slugs.map((slug) => ({ slug }));
}

import {
  SITE_URL,
  createPersonSchema,
  createBreadcrumbsSchema,
} from "@/lib/seo-config";

export async function generateMetadata({
  params,
}: TeamMemberPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    return {
      title: "Team Member Not Found | TechBeeps",
    };
  }

  const title = `${member.name} - ${member.role} | TechBeeps Team`;
  const description = `${member.name} is a ${member.role} at TechBeeps. ${member.bio}`;
  const canonicalUrl = `${SITE_URL}/our-team/${slug}`;
  const ogImage = member.image.startsWith("http")
    ? member.image
    : `${SITE_URL}${member.image}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "profile",
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: member.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function TeamMemberDetailsPage({
  params,
}: TeamMemberPageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  const allMembers = getAllTeamMembers();
  const otherMembers = allMembers
    .filter((m) => m.slug !== member.slug)
    .slice(0, 3);

  const personSchema = createPersonSchema({
    name: member.name,
    jobTitle: member.role,
    slug: member.slug,
    bio: member.bio,
    image: member.image,
  });

  const breadcrumbsSchema = createBreadcrumbsSchema([
    { name: "Home", item: "/" },
    { name: "Our Team", item: "/our-team" },
    { name: member.name, item: `/our-team/${member.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbsSchema),
        }}
      />
      <Header />

      <main className="bg-[#05010f] text-white min-h-screen pt-32 pb-24 overflow-hidden relative">
        {/* Background Ambient Spotlights */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] lg:w-[900px] h-[500px] bg-[#854CFF]/15 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 -left-40 w-[400px] h-[400px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="container relative z-10 px-4 mx-auto">
          {/* Breadcrumbs & Back Navigation */}
          <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
            <Link
              href="/our-team"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-white/80 hover:text-white hover:bg-white/[0.12] hover:border-[#854CFF]/40 text-sm font-medium transition-all duration-300 group"
            >
              <FaArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Team</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs md:text-sm text-white/50">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/our-team" className="hover:text-white transition-colors">
                Our Team
              </Link>
              <span>/</span>
              <span className="text-[#a78bfa] font-medium">{member.name}</span>
            </div>
          </div>

          {/* Profile Overview Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
            {/* Left Column: Member Card & Quick Specs */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="rounded-[28px] bg-[#0c081e]/90 border border-white/10 p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl sticky top-28">
                {/* Portrait Image */}
                <div className="relative w-full aspect-[4/4.5] rounded-[22px] overflow-hidden bg-[#130f2e] mb-6 shadow-inner">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c081e]/90 via-transparent to-transparent" />

                  {/* Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-[#854CFF]/90 text-white shadow-lg backdrop-blur-md">
                      {member.department}
                    </span>
                    {member.experience && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/70 border border-white/10 text-blue-200">
                        {member.experience}
                      </span>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="space-y-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {member.name}
                    </h1>
                    <p className="text-base text-[#a78bfa] font-medium mt-1">
                      {member.role}
                    </p>
                  </div>

                  {/* Contact Info List */}
                  <div className="pt-4 border-t border-white/10 space-y-3 text-sm text-white/80">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-3 hover:text-white transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#854CFF] group-hover:bg-[#854CFF] group-hover:text-white transition-all shrink-0">
                          <FaEnvelope className="w-3.5 h-3.5" />
                        </div>
                        <span className="truncate">{member.email}</span>
                      </a>
                    )}
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-3 hover:text-white transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#854CFF] group-hover:bg-[#854CFF] group-hover:text-white transition-all shrink-0">
                          <FaPhone className="w-3.5 h-3.5" />
                        </div>
                        <span>{member.phone}</span>
                      </a>
                    )}
                    {member.location && (
                      <div className="flex items-center gap-3 text-white/70">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#854CFF] shrink-0">
                          <FaLocationDot className="w-3.5 h-3.5" />
                        </div>
                        <span>{member.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Social Profiles */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-3 font-semibold">
                      Connect on Social
                    </p>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedinIn className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.twitter && (
                        <a
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                          aria-label="Twitter"
                        >
                          <FaXTwitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                          aria-label="Instagram"
                        >
                          <FaInstagram className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.facebook && (
                        <a
                          href={member.socials.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                          aria-label="Facebook"
                        >
                          <FaFacebookF className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                          aria-label="GitHub"
                        >
                          <FaGithub className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a
                          href={member.socials.email}
                          className="w-9 h-9 rounded-full bg-white/[0.08] hover:bg-[#854CFF] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10"
                          aria-label="Email"
                        >
                          <FiMail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Get in Touch CTA button */}
                  <div className="pt-4">
                    <Link
                      href="/contact-us"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#854CFF] to-[#6332ea] text-white font-semibold text-sm hover:shadow-[0_0_25px_rgba(133,76,255,0.5)] hover:scale-[1.02] transition-all duration-300"
                    >
                      <span>Get in Touch</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Detailed Biography, Expertise, Experience */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-8">
              {/* Biography Section */}
              <div className="rounded-[28px] bg-[#0c081e]/70 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="w-2 h-6 rounded-full bg-[#854CFF]" />
                  About {member.name}
                </h2>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light mb-6">
                  {member.details?.overview || member.bio}
                </p>
                {member.details?.overview && member.bio && member.details.overview !== member.bio && (
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                    {member.bio}
                  </p>
                )}

                {/* Quick Stats Grid */}
                {(member.details?.experienceYears || member.details?.completedProjects) && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
                    {member.details?.experienceYears && (
                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-white">
                          {member.details.experienceYears}
                        </span>
                        <p className="text-xs sm:text-sm text-white/60 mt-1">
                          Industry Experience
                        </p>
                      </div>
                    )}
                    {member.details?.completedProjects && (
                      <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-[#a78bfa]">
                          {member.details.completedProjects}
                        </span>
                        <p className="text-xs sm:text-sm text-white/60 mt-1">
                          Projects Delivered
                        </p>
                      </div>
                    )}
                    <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 col-span-2 sm:col-span-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                        100%
                      </span>
                      <p className="text-xs sm:text-sm text-white/60 mt-1">
                        Client Satisfaction
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Core Skills & Expertise */}
              <div className="rounded-[28px] bg-[#0c081e]/70 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-6 rounded-full bg-[#854CFF]" />
                  Skills & Expertise
                </h2>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl bg-white/[0.06] border border-white/10 text-white/90 text-sm font-medium hover:border-[#854CFF]/50 hover:bg-[#854CFF]/15 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Responsibilities (if available) */}
              {member.details?.keyResponsibilities && member.details.keyResponsibilities.length > 0 && (
                <div className="rounded-[28px] bg-[#0c081e]/70 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-6 rounded-full bg-[#854CFF]" />
                    Key Responsibilities & Role Focus
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {member.details.keyResponsibilities.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5"
                      >
                        <FaCircleCheck className="w-5 h-5 text-[#854CFF] shrink-0 mt-0.5" />
                        <p className="text-sm text-white/80 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Timeline (if available) */}
              {member.details?.experiences && member.details.experiences.length > 0 && (
                <div className="rounded-[28px] bg-[#0c081e]/70 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-6 rounded-full bg-[#854CFF]" />
                    Education & Credentials
                  </h2>
                  <div className="relative pl-6 sm:pl-8 space-y-8 border-l border-white/10">
                    {member.details.experiences.map((exp, idx) => (
                      <div key={idx} className="relative group">
                        {/* Timeline Bullet */}
                        <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#854CFF] border-4 border-[#0c081e] group-hover:scale-125 transition-transform" />

                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h3 className="text-lg font-bold text-white">
                            {exp.role}
                          </h3>
                          <span className="text-xs px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 text-[#a78bfa]">
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-sm text-[#854CFF] font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {exp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education (if available) */}
              {member.details?.education && member.details.education.length > 0 && (
                <div className="rounded-[28px] bg-[#0c081e]/70 border border-white/10 p-6 sm:p-8 lg:p-10 backdrop-blur-xl">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <span className="w-2 h-6 rounded-full bg-[#854CFF]" />
                    Professional Experience
                  </h2>
                  <div className="space-y-3">
                    {member.details.education.map((edu, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 text-sm sm:text-base text-white/80"
                      >
                        <FaGraduationCap className="w-5 h-5 text-[#a78bfa] shrink-0" />
                        <span>{edu}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Meet Other Team Members Section */}
          {otherMembers.length > 0 && (
            <div className="mt-20 pt-16 border-t border-white/10">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs uppercase tracking-wider text-[#a78bfa] font-semibold">
                  Collaborative Minds
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">
                  Meet Other Team Members
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
                {otherMembers.map((other) => (
                  <TeamCard key={other.id} member={other} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <CallToAction />
      <Footer />
    </>
  );
}
