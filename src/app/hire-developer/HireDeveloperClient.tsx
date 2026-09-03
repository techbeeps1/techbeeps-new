"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BsCheckAll,
  BsShieldCheck,
  BsLightningCharge,
  BsClockHistory,
  BsPeople,
  BsCodeSlash,
  BsGear,
  BsHeadset,
  BsArrowRightCircle,
  BsCheckCircleFill,
  BsCpu,
  BsLayers,
  BsPhone,
  BsGlobe2,
  BsDatabase,
  BsCloudCheck,
} from "react-icons/bs";
import {
  IoMailOutline,
  IoCallOutline,
  IoLogoWhatsapp,
  IoChevronDown,
  IoPaperPlane,
} from "react-icons/io5";
import Header from "@/app/components/header/Header";
import Footer from "@/app/components/Footer";
import CallToAction from "@/app/components/CallToAction";
import FaqAccordion from "@/app/components/FaqAccordion";
import LogoMarquee from "@/app/components/LogoMarquee";
import GsapTextAnimation from "@/app/components/GsapTextAnimation";
import ButtonSwipUp from "@/app/components/ButtonSwipUp";

const countries = [
  { id: "in", code: "+91", name: "India" },
  { id: "us", code: "+1", name: "United States" },
  { id: "gb", code: "+44", name: "United Kingdom" },
  { id: "ca", code: "+1", name: "Canada" },
  { id: "au", code: "+61", name: "Australia" },
  { id: "ae", code: "+971", name: "United Arab Emirates" },
  { id: "de", code: "+49", name: "Germany" },
  { id: "fr", code: "+33", name: "France" },
  { id: "sg", code: "+65", name: "Singapore" },
  { id: "sa", code: "+966", name: "Saudi Arabia" },
  { id: "nz", code: "+64", name: "New Zealand" },
  { id: "ie", code: "+353", name: "Ireland" },
  { id: "nl", code: "+31", name: "Netherlands" },
  { id: "se", code: "+46", name: "Sweden" },
  { id: "ch", code: "+41", name: "Switzerland" },
  { id: "jp", code: "+81", name: "Japan" },
  { id: "za", code: "+27", name: "South Africa" },
  { id: "qa", code: "+974", name: "Qatar" },
  { id: "kw", code: "+965", name: "Kuwait" },
  { id: "om", code: "+968", name: "Oman" },
];

const developerRoles = [
  "AI & Machine Learning Developer",
  "Full-Stack Developer",
  "PHP & Laravel Developer",
  "React & Next.js Developer",
  "Node.js Backend Developer",
  "Mobile App Developer (iOS / Android / Flutter)",
  "WordPress & WooCommerce Specialist",
  "Python & Data Engineer",
  "UI/UX Designer & Frontend Engineer",
  "Shopify / eCommerce Specialist",
];

const engagementModels = [
  {
    title: "Dedicated Full-Time",
    hours: "160 Hours / Month",
    desc: "A full-time remote developer committed 100% to your product and sprints.",
    badge: "Most Popular",
  },
  {
    title: "Dedicated Part-Time",
    hours: "80 Hours / Month",
    desc: "Consistent 4 hours/day allocation for ongoing feature development & maintenance.",
    badge: "Flexible",
  },
  {
    title: "Hourly / On-Demand",
    hours: "Pay-as-you-go",
    desc: "Tailored for specific milestones, emergency bug fixes, or consulting needs.",
    badge: "Agile",
  },
];

const hiringBenefits = [
  {
    icon: BsLightningCharge,
    title: "Dedicated Team for Optimization & Scaling",
    desc: "Get dedicated specialists who optimize your codebase, database queries, web speed, and search visibility for high performance.",
  },
  {
    icon: BsShieldCheck,
    title: "100% Confidentiality & Strict NDA",
    desc: "Your source code and proprietary trade secrets remain 100% safe with our stringent NDA contracts and strict security protocols.",
  },
  {
    icon: BsHeadset,
    title: "24/7 Ongoing Technical Support",
    desc: "Round-the-clock developer availability with zero downtime, instant issue escalation, and continuous server monitoring.",
  },
  {
    icon: BsCpu,
    title: "Deep Tech & Framework Mastery",
    desc: "Comprehensive expertise in cutting-edge tech stacks: AI/LLMs, Next.js, Node.js, PHP, Laravel, Python, Flutter, and cloud services.",
  },
  {
    icon: BsCodeSlash,
    title: "Zero Setup Cost & Transparent Pricing",
    desc: "No hidden recruitment charges, infrastructure fees, or hardware expenses. Pay straightforward transparent monthly or hourly rates.",
  },
  {
    icon: BsCloudCheck,
    title: "Enterprise Infrastructure & Backups",
    desc: "High-speed redundant internet, automated data backups, continuous integration, and disaster recovery preparations built-in.",
  },
  {
    icon: BsGear,
    title: "Crystal-Clear Deployment & Reporting",
    desc: "Daily scrum standups, transparent Jira/Trello/GitHub tracking, weekly milestone reviews, and automated CI/CD pipeline deployments.",
  },
  {
    icon: BsPeople,
    title: "Omnichannel Direct Communication",
    desc: "Direct daily collaboration with your developers via Zoom, Google Meet, Slack, Microsoft Teams, WhatsApp, or email.",
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Share Your Tech Requirements",
    desc: "Tell us about your project goals, required tech stack, team size, and timeline through our quick form.",
  },
  {
    step: "02",
    title: "Screen & Match Top 1% Profiles",
    desc: "Within 24-48 hours, our talent acquisition team shortlists pre-vetted senior developers that perfectly match your criteria.",
  },
  {
    step: "03",
    title: "Interview & Risk-Free Alignment",
    desc: "Conduct technical interviews, review code portfolios, or run a trial assignment to ensure cultural and technical fit.",
  },
  {
    step: "04",
    title: "Kickoff & Scale Sprints",
    desc: "Seamless onboarding into your communication channels and tools. Start building features from Day 1 with dedicated support.",
  },
];

const techStackMatrix = [
  {
    category: "AI & Intelligent Automation",
    icon: BsCpu,
    skills: ["Generative AI", "OpenAI / Gemini APIs", "LangChain", "RAG Systems", "Python", "NLP / PyTorch", "Chatbots"],
  },
  {
    category: "Frontend & Full-Stack",
    icon: BsLayers,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Angular", "HTML5/CSS3"],
  },
  {
    category: "Backend & Cloud",
    icon: BsDatabase,
    skills: ["Node.js", "PHP", "Laravel", "Python / Django", "Express.js", "AWS", "Google Cloud", "REST & GraphQL"],
  },
  {
    category: "Mobile App Development",
    icon: BsPhone,
    skills: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)", "PWA", "Cross-Platform"],
  },
  {
    category: "CMS & E-Commerce",
    icon: BsGlobe2,
    skills: ["WordPress", "WooCommerce", "Shopify", "Magento", "PrestaShop", "Custom Plugins", "Headless CMS"],
  },
];

const faqs = [
  {
    question: "How quickly can I hire and onboard a developer from TechBeeps?",
    answer:
      "Depending on your technical requirements, we can share shortlisted, pre-vetted developer profiles within 24 to 48 hours. Once you interview and select your preferred engineer, onboarding can be completed in just 1–2 business days.",
  },
  {
    question: "What hiring engagement models do you offer?",
    answer:
      "We offer flexible hiring models including Dedicated Full-Time (160 hours/month), Dedicated Part-Time (80 hours/month), and Hourly / Milestone-based on-demand hiring. You can seamlessly switch between models as your project evolves.",
  },
  {
    question: "How do we communicate and track the developer's daily progress?",
    answer:
      "Your dedicated developer works directly with you and your team using your preferred tools—such as Slack, Microsoft Teams, Zoom, Jira, GitHub, or Trello. We also provide daily timesheets, weekly sprint updates, and regular progress reports.",
  },
  {
    question: "What if the developer does not meet our expectations?",
    answer:
      "We offer a 100% satisfaction guarantee. If at any point during the initial period you feel the developer is not the right fit, we will provide an immediate replacement with no disruption to your project timeline.",
  },
  {
    question: "Who owns the intellectual property (IP) and source code?",
    answer:
      "You retain 100% complete ownership of the intellectual property, code repositories, architecture designs, and digital assets. We sign comprehensive Non-Disclosure Agreements (NDAs) and IP transfer agreements prior to project kickoff.",
  },
  {
    question: "Can TechBeeps developers work in our specific time zone?",
    answer:
      "Yes. Our developers are flexible and experienced in working with global clients across US (EST, CST, PST), UK (GMT/BST), European (CET), Australian (AEST), and Middle Eastern time zones with guaranteed daily overlapping hours.",
  },
];

export default function HireDeveloperClient() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactMethod: "Email" as "Email" | "WhatsApp" | "Call",
    email: "",
    phone: "",
    developerType: "AI & Machine Learning Developer",
    engagementModel: "Dedicated Full-Time",
    projectLink: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.contactMethod !== "Email") {
      if (!formData.phone.trim()) {
        newErrors.phone = `Phone/WhatsApp number is required for ${formData.contactMethod}`;
      } else if (formData.phone.trim().length < 6) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please share a brief summary of your requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const rawPhone = formData.phone.trim();
      let fullPhone = "N/A";
      if (rawPhone) {
        const countryCode = selectedCountry.code.trim();
        const cleanCode = countryCode.replace(/^\+/, "");
        if (rawPhone.startsWith("+")) {
          fullPhone = rawPhone;
        } else if (rawPhone.startsWith(cleanCode)) {
          fullPhone = `+${rawPhone}`;
        } else {
          fullPhone = `${countryCode} ${rawPhone}`;
        }
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "hire-developer",
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim(),
          company: "",
          phone: fullPhone,
          developerType: formData.developerType,
          engagementModel: formData.engagementModel,
          contactMethod: formData.contactMethod,
          projectLink: formData.projectLink.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          contactMethod: "Email",
          email: "",
          phone: "",
          developerType: "AI & Machine Learning Developer",
          engagementModel: "Dedicated Full-Time",
          projectLink: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.message || "Failed to submit request. Please try again or email info@techbeeps.co.in.");
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setSubmitStatus("error");
      setErrorMessage("Something went wrong while sending your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-end justify-center pb-[90px] pt-36 lg:pb-24 bg-[#05010f] overflow-hidden">
        {/* Background Image & Ambient Lighting */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.jpg"
            alt="Hire Dedicated Developers Background"
            fill
            priority
            className="object-cover object-top opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,rgba(0,0,0,0.4)_30%,rgba(0,0,0,0)_60%,#000000_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#05010f] via-transparent to-[#05010f]/80"></div>

          {/* Ambient Glows */}
          <div className="absolute top-10 left-1/4 w-[400px] lg:w-[650px] h-[350px] bg-[#854CFF] blur-[150px] opacity-25 pointer-events-none rounded-full" />
          <div className="absolute bottom-10 right-10 w-[350px] lg:w-[500px] h-[300px] bg-blue-600 blur-[150px] opacity-20 pointer-events-none rounded-full" />
        </div>

        {/* Hero Content Box */}
        <div className="container relative z-10 px-4 mt-auto">
          <div className="backdrop-blur-[25px] rounded-[30px] p-6 md:p-10 lg:p-[48px] bg-white/[0.04] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#a78bfa] bg-[#854CFF]/15 border border-[#854CFF]/30">
                <span className="w-2 h-2 rounded-full bg-[#854CFF] animate-pulse"></span>
                Top 1% Dedicated Tech Talent
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-[70px] font-bold leading-tight lg:leading-[82px] text-white mb-6">
              <GsapTextAnimation
                mainText="Hire Dedicated Developers To Build & Scale Your Next Big Idea"
                mainClass="flex flex-wrap"
              />
            </h1>
            <p className="text-base lg:text-[20px] leading-relaxed text-gray-300 max-w-4xl">
              Partner with experienced software engineers, AI specialists, and full-stack creators from TechBeeps.
              From agile MVPs to enterprise ecosystems, hire dedicated talent with flexible engagement and zero overheads.
            </p>

            {/* Quick Trust Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 mt-8 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-[#a78bfa] bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-xs lg:text-sm text-gray-400">Vetted Engineers</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-[#a78bfa] bg-clip-text text-transparent">
                  48 Hrs
                </div>
                <div className="text-xs lg:text-sm text-gray-400">Rapid Onboarding</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-[#a78bfa] bg-clip-text text-transparent">
                  99%
                </div>
                <div className="text-xs lg:text-sm text-gray-400">Client Retention</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-[#a78bfa] bg-clip-text text-transparent">
                  100%
                </div>
                <div className="text-xs lg:text-sm text-gray-400">NDA & IP Protected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Main Split Section: Value Proposition & Interactive Hiring Form */}
      <section className="py-20 lg:py-28 bg-[#05010f] text-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Left Column: Why Hire Developers */}
            <div className="w-full lg:w-[48%] space-y-8">
              <div className="space-y-4">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#a78bfa] bg-[#854CFF]/10 border border-[#854CFF]/20">
                  Accelerate Your Development
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight lg:leading-[56px] text-white">
                  Empower Your Vision With Virtual Dedicated Professionals
                </h2>
                <p className="text-gray-300 leading-relaxed text-base lg:text-[17px]">
                  TechBeeps is a premier software development powerhouse with a passionate, battle-tested team of
                  engineers. Hiring dedicated developers from TechBeeps means plugging virtual, dedicated experts directly
                  into your workflow to solve complex business logic with unmatched precision and speed.
                </p>
                <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
                  Whether you need custom PHP architectures, high-speed Next.js web applications, cutting-edge AI & LLM
                  integrations, cross-platform mobile apps, or enterprise WordPress solutions, our developers possess
                  deep mastery over modern best practices, clean code standards, and agile delivery.
                </p>
              </div>

              {/* Feature Highlights with Checkmarks */}
              <div className="space-y-3.5 pt-2">
                {[
                  "Dedicated senior developers aligned with your preferred timezone",
                  "Direct task allocation and daily scrums via Slack, Teams & Jira",
                  "Guaranteed work quality with transparent, flexible pricing",
                  "Turnkey infrastructure, continuous testing, and data security",
                  "Zero recruitment overhead, zero long-term lock-in risks",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#854CFF]/20 border border-[#854CFF]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <BsCheckAll className="text-[#a78bfa] w-4 h-4" />
                    </div>
                    <span className="text-sm lg:text-[15px] text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              {/* Engagement Models Cards */}
              <div className="pt-4 space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <BsClockHistory className="text-[#854CFF]" />
                  Flexible Engagement Models
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {engagementModels.map((model, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#854CFF]/50 transition-all duration-300 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#854CFF]/20 text-[#a78bfa] font-medium">
                          {model.badge}
                        </span>
                      </div>
                      <div className="font-semibold text-white text-sm">{model.title}</div>
                      <div className="text-xs text-[#a78bfa] font-medium mt-1">{model.hours}</div>
                      <p className="text-xs text-gray-400 mt-2 leading-relaxed">{model.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl pt-2">
                <Image
                  src="/Migration.jpg"
                  alt="TechBeeps Developer Workstation"
                  width={650}
                  height={380}
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-gray-300 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  💡 <strong className="text-white">Pro Tip:</strong> You can test developer fit through a 1-week risk-free trial sprint.
                </div>
              </div>
            </div>

            {/* Right Column: "Build Your Team" Form */}
            <div className="w-full lg:w-[52%] sticky top-28">
              <div className="relative rounded-[24px] p-6 sm:p-8 lg:p-10 bg-[linear-gradient(180deg,#120D25_0%,#1B1339_100%)] border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden">
                {/* Glow effects inside card */}
                <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#854CFF] blur-[90px] rounded-full opacity-30 pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-52 h-52 bg-blue-600 blur-[90px] rounded-full opacity-20 pointer-events-none" />

                {/* Form Header */}
                <div className="relative z-10 mb-8 border-b border-white/10 pb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#a78bfa] bg-[#854CFF]/20 border border-[#854CFF]/30 mb-2">
                    <BsPeople className="w-3.5 h-3.5" />
                    Build Your Team
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Hire Skilled & Vetted Developers</h3>
                  <p className="text-gray-400 text-sm mt-1.5">
                    Share your requirements and get customized CVs of senior developers within 24 hours.
                  </p>
                </div>

                {submitStatus === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 py-12 text-center space-y-5"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-3xl">
                      <BsCheckCircleFill />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Inquiry Received Successfully!</h4>
                    <p className="text-gray-300 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you for reaching out. Our engineering lead will review your requirements and reach out via your
                      preferred contact channel within <strong>24 business hours</strong> with developer profiles.
                    </p>
                    <button
                      onClick={() => setSubmitStatus("idle")}
                      className="mt-4 px-6 py-2.5 rounded-full text-sm font-semibold bg-[#854CFF] text-white hover:bg-[#723df0] transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                          First Name <span className="text-[#854CFF]">*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="e.g. John"
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border ${
                            errors.firstName ? "border-red-500" : "border-white/10"
                          } text-white placeholder-gray-500 focus:outline-none focus:border-[#854CFF] transition-colors text-sm`}
                        />
                        {errors.firstName && <p className="text-xs text-red-400 mt-1">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="e.g. Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#854CFF] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
                        How should we contact you? <span className="text-[#854CFF]">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {(["Email", "WhatsApp", "Call"] as const).map((method) => (
                          <button
                            type="button"
                            key={method}
                            onClick={() => setFormData((prev) => ({ ...prev, contactMethod: method }))}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer ${
                              formData.contactMethod === method
                                ? "bg-[#854CFF] text-white shadow-[0_0_20px_rgba(133,76,255,0.4)]"
                                : "bg-white/[0.05] text-gray-300 hover:text-white hover:bg-white/[0.09] border border-white/10"
                            }`}
                          >
                            {method === "Email" && <IoMailOutline className="w-4 h-4" />}
                            {method === "WhatsApp" && <IoLogoWhatsapp className="w-4 h-4 text-emerald-400" />}
                            {method === "Call" && <IoCallOutline className="w-4 h-4" />}
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                          Email Address <span className="text-[#854CFF]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border ${
                            errors.email ? "border-red-500" : "border-white/10"
                          } text-white placeholder-gray-500 focus:outline-none focus:border-[#854CFF] transition-colors text-sm`}
                        />
                        {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                          {formData.contactMethod === "WhatsApp"
                            ? "WhatsApp Number"
                            : formData.contactMethod === "Call"
                            ? "Phone Number"
                            : "Phone (Optional)"}{" "}
                          {formData.contactMethod !== "Email" && <span className="text-[#854CFF]">*</span>}
                        </label>
                        <div className="flex gap-2 relative" ref={dropdownRef}>
                          {/* Country Selector */}
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                              className="h-full px-2.5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white flex items-center gap-1 text-xs hover:border-[#854CFF] transition-colors"
                            >
                              <span>{selectedCountry.code}</span>
                              <IoChevronDown className="w-3 h-3 text-gray-400" />
                            </button>

                            {showCountryDropdown && (
                              <div className="absolute left-0 top-full mt-1.5 w-52 max-h-48 overflow-y-auto rounded-xl bg-[#1a1236] border border-white/15 shadow-2xl z-50 p-1 custom-scrollbar">
                                {countries.map((c) => (
                                  <button
                                    key={c.id}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(c);
                                      setShowCountryDropdown(false);
                                    }}
                                    className="w-full text-left px-3 py-1.5 text-xs rounded-lg hover:bg-[#854CFF]/30 text-white flex items-center justify-between"
                                  >
                                    <span className="truncate">{c.name}</span>
                                    <span className="text-gray-400 text-[10px] shrink-0">{c.code}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>

                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="9876543210"
                            className={`flex-1 px-4 py-3 rounded-xl bg-white/[0.05] border ${
                              errors.phone ? "border-red-500" : "border-white/10"
                            } text-white placeholder-gray-500 focus:outline-none focus:border-[#854CFF] transition-colors text-sm`}
                          />
                        </div>
                        {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Developer Role / Tech Stack Selection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                          Required Developer Role <span className="text-[#854CFF]">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="developerType"
                            value={formData.developerType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[#191135] border border-white/15 text-white focus:outline-none focus:border-[#854CFF] transition-colors text-sm appearance-none cursor-pointer"
                          >
                            {developerRoles.map((role, idx) => (
                              <option key={idx} value={role} className="bg-[#120D25] text-white">
                                {role}
                              </option>
                            ))}
                          </select>
                          <IoChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                          Engagement Model
                        </label>
                        <div className="relative">
                          <select
                            name="engagementModel"
                            value={formData.engagementModel}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl bg-[#191135] border border-white/15 text-white focus:outline-none focus:border-[#854CFF] transition-colors text-sm appearance-none cursor-pointer"
                          >
                            <option value="Dedicated Full-Time" className="bg-[#120D25] text-white">
                              Dedicated Full-Time (160h/mo)
                            </option>
                            <option value="Dedicated Part-Time" className="bg-[#120D25] text-white">
                              Dedicated Part-Time (80h/mo)
                            </option>
                            <option value="Hourly / On-Demand" className="bg-[#120D25] text-white">
                              Hourly / On-Demand
                            </option>
                            <option value="Fixed Project Milestone" className="bg-[#120D25] text-white">
                              Fixed Project Milestone
                            </option>
                          </select>
                          <IoChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>
                    </div>

                    {/* Project Link (Optional) */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Existing Website / Figma / Repo Link <span className="text-gray-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        name="projectLink"
                        value={formData.projectLink}
                        onChange={handleChange}
                        placeholder="https://example.com or Figma URL"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#854CFF] transition-colors text-sm"
                      />
                    </div>

                    {/* Message / Project Requirements */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1.5 uppercase tracking-wider">
                        Project Scope & Requirements <span className="text-[#854CFF]">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Briefly describe what you're building, key technical requirements, expected duration, and any specific experience needed..."
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border ${
                          errors.message ? "border-red-500" : "border-white/10"
                        } text-white placeholder-gray-500 focus:outline-none focus:border-[#854CFF] transition-colors text-sm resize-none`}
                      />
                      {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                    </div>

                    {/* Error Banner */}
                    {submitStatus === "error" && (
                      <div className="p-3.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs">
                        ⚠️ {errorMessage}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#854CFF] to-[#6035d8] hover:from-[#9760ff] hover:to-[#7042e8] text-white font-semibold text-base transition-all duration-300 shadow-[0_10px_30px_rgba(133,76,255,0.4)] hover:shadow-[0_15px_40px_rgba(133,76,255,0.6)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Dedicated Developer Profiles</span>
                            <IoPaperPlane className="w-4 h-4" />
                          </>
                        )}
                      </button>
                      <p className="text-[11px] text-gray-400 text-center mt-3">
                        🔒 Strict NDA protected. We respect your privacy and never share your details.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Benefits Section */}
      <section className="py-20 lg:py-28 bg-[#03000a] text-white border-t border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#a78bfa] bg-[#854CFF]/10 border border-[#854CFF]/20">
              TechBeeps Advantage
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58px] text-white">
              Why Global Brands Hire Dedicated Developers From Us
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Eliminate recruitment friction, overhead expenses, and retention hassles. Tap into vetted engineering
              excellence with guaranteed project momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringBenefits.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(133,76,255,0.35)] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#854CFF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative h-full bg-[linear-gradient(180deg,#0e091f_0%,#181033_100%)] p-6 lg:p-7 rounded-[19px] border border-white/5 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#854CFF]/15 border border-[#854CFF]/30 flex items-center justify-center text-[#a78bfa] mb-5 group-hover:scale-110 group-hover:bg-[#854CFF] group-hover:text-white transition-all duration-300">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-[#a78bfa] transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Hiring Process Section */}
      <section className="py-20 lg:py-28 bg-[#05010f] text-white relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#854CFF]/10 blur-[140px] pointer-events-none rounded-full" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#a78bfa] bg-[#854CFF]/10 border border-[#854CFF]/20">
              Simple & Transparent
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58px] text-white">
              How To Hire Dedicated Developers in 4 Steps
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We streamline developer acquisition into an effortless, fast, and risk-free onboarding experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative p-6 lg:p-7 rounded-[22px] bg-white/[0.03] border border-white/10 hover:border-[#854CFF]/50 transition-all duration-300 hover:bg-white/[0.06] flex flex-col justify-between group"
              >
                <div>
                  <div className="text-4xl font-extrabold bg-gradient-to-r from-[#854CFF] to-[#c4a8ff] bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2.5">{step.title}</h3>
                  <p className="text-xs lg:text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix Section */}
      <section className="py-20 lg:py-28 bg-[#03000a] text-white border-t border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#a78bfa] bg-[#854CFF]/10 border border-[#854CFF]/20">
              Domain Expertise
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58px] text-white">
              Technologies & Frameworks We Excel In
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              From battle-tested enterprise architectures to the newest AI stacks, our developers bring multi-faceted
              skills to elevate your codebase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStackMatrix.map((matrix, idx) => {
              const IconComp = matrix.icon;
              return (
                <div
                  key={idx}
                  className="p-6 lg:p-8 rounded-[20px] bg-[linear-gradient(180deg,#0f0924_0%,#191035_100%)] border border-white/10 hover:border-[#854CFF]/60 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#854CFF]/20 border border-[#854CFF]/40 flex items-center justify-center text-[#a78bfa]">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{matrix.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {matrix.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-gray-300 border border-white/10 hover:border-[#854CFF]/50 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase Banner */}
      <section className="py-12 bg-[#05010f] text-white">
        <div className="container mx-auto px-4">
          <div className="relative rounded-[28px] p-8 lg:p-12 overflow-hidden bg-gradient-to-r from-[#170e33] via-[#24134e] to-[#120829] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#a78bfa]">Verified Track Record</span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Discover Digital Products Built By Our Dedicated Developers
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Explore real-world web apps, AI systems, SaaS platforms, and enterprise solutions developed for global
                clients.
              </p>
            </div>

            <ButtonSwipUp className="text-black hover:text-white bg-white w-52 shrink-0" url="/portfolio">
              Explore Portfolio
              <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
            </ButtonSwipUp>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-[#05010f] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="w-full lg:w-[40%] space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase text-[#a78bfa] bg-[#854CFF]/10 border border-[#854CFF]/20">
                Got Questions?
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[48px] font-bold leading-tight lg:leading-[58px] text-white">
                Frequently Asked Questions About Hiring Developers
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Need more information about contracts, trial periods, security, or payment terms? We’ve answered the
                most common questions here.
              </p>
            </div>
            <div className="w-full lg:w-[60%]">
              <FaqAccordion faqs={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <CallToAction />

      {/* Global Footer */}
      <Footer />
    </>
  );
}
