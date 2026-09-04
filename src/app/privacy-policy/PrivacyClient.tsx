"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import GsapTextAnimation from "../components/GsapTextAnimation";
import ContentSwipUp from "../components/ContentSwipUp";
import { 
  FiCheckCircle, 
  FiChevronRight,
  FiMail,
  FiPhone,
  FiGlobe
} from "react-icons/fi";

interface PolicySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function PrivacyClient() {
  const [activeTab, setActiveTab] = useState<string>("summary");

  const sections: PolicySection[] = [
    {
      id: "summary",
      title: "1. Summary of our Privacy Policy",
      content: (
        <div className="space-y-4">
          <p>
            This Privacy Policy explains how <strong className="text-white">TechBeeps Services</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, processes, stores, and protects personal data obtained through our website, client portals, communication channels, and customized technology solutions.
          </p>
          <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 space-y-2">
            <h4 className="text-white font-semibold text-sm sm:text-base">Our Fundamental Privacy Commitment:</h4>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-white/80">
              <li>We only collect the data necessary to provide and elevate our services.</li>
              <li>We do not sell, rent, or trade your personal or project data to third-party advertisers.</li>
              <li>Enterprise-grade encryption and access controls protect your data at rest and in transit.</li>
              <li>You retain full rights to request data access, rectification, export, or erasure.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: "part-1-collection",
      title: "2. Part I – Information We Collect & Control",
      content: (
        <div className="space-y-5">
          <div>
            <h4 className="text-white font-semibold text-base mb-2">A. Information You Provide Directly:</h4>
            <p className="mb-2">We collect information that you proactively provide when contacting us, requesting consultations, or acquiring our services:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-white/80">
              <li><strong>Contact Details:</strong> First Name, Last Name, Email address, Phone number with country code, Company name, and Job title.</li>
              <li><strong>Project Inquiries:</strong> Technical specifications, design mockups, business requirements, and budget expectations.</li>
              <li><strong>Payment Information:</strong> Billing addresses, transaction identifiers, and invoicing details (credit card information is processed securely by PCI-compliant payment gateways).</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-base mb-2">B. Information Collected Automatically:</h4>
            <ul className="list-disc pl-6 space-y-1.5 text-white/80">
              <li><strong>Device & Telemetry Data:</strong> IP address, browser type, operating system, device identifiers, and language preferences.</li>
              <li><strong>Usage Analytics:</strong> Pages visited, time spent per page, clickstream data, referral sources, and interaction logs.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-base mb-2">C. Cookies & Tracking Technologies:</h4>
            <p>
              We use necessary and analytical cookies to ensure site functionality, enhance performance, remember your preferences, and optimize user experience. You can manage or disable non-essential cookies via your browser settings.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "purposes-legal-basis",
      title: "3. Purposes & Legal Bases for Processing",
      content: (
        <div className="space-y-4">
          <p>We process your personal information under the following legitimate and legal bases:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <h5 className="text-white font-semibold text-sm">Contractual Necessity</h5>
              <p className="text-xs text-white/70">To deliver requested design, web development, cloud architectures, and software engineering services.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <h5 className="text-white font-semibold text-sm">Legitimate Business Interests</h5>
              <p className="text-xs text-white/70">To secure our systems, prevent fraud, optimize performance, and enhance customer support.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <h5 className="text-white font-semibold text-sm">Consent</h5>
              <p className="text-xs text-white/70">When you opt in to receive newsletters, updates, or technical case studies.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
              <h5 className="text-white font-semibold text-sm">Legal Compliance</h5>
              <p className="text-xs text-white/70">To comply with taxation, corporate reporting, and statutory regulatory requirements.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "part-2-service-data",
      title: "4. Part II – Client Service Data (Processor Role)",
      content: (
        <div className="space-y-4">
          <p>
            When delivering software engineering, migration, database integration, or mobile app development, you may entrust TechBeeps with your proprietary business data or your customers&rsquo; data (&ldquo;Service Data&rdquo;).
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li><strong>Complete Client Ownership:</strong> You retain 100% ownership and intellectual property rights over all Service Data.</li>
            <li><strong>Purpose Limitation:</strong> We only access, host, or process Service Data strictly in accordance with your explicit instructions and Statement of Work (SOW).</li>
            <li><strong>Confidentiality Agreements:</strong> All team members and technical consultants operate under strict Non-Disclosure Agreements (NDAs).</li>
          </ul>
        </div>
      ),
    },
    {
      id: "data-sharing",
      title: "5. Information Sharing & Third-Party Vendors",
      content: (
        <div className="space-y-4">
          <p>We do not sell or monetize your personal information. We only share data with vetted sub-processors essential to our operations:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li><strong>Cloud Hosting & Infrastructure:</strong> Enterprise cloud hosts (e.g. AWS, Google Cloud, DigitalOcean) under SOC2/ISO compliant terms.</li>
            <li><strong>Communication & CRM:</strong> Transactional email dispatchers and support management systems.</li>
            <li><strong>Legal & Regulatory Authorities:</strong> When strictly mandated by valid legal subpoenas, court orders, or law enforcement warrants.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "your-rights",
      title: "6. Your Data Protection Rights",
      content: (
        <div className="space-y-4">
          <p>Regardless of your geographic location, we respect your comprehensive data rights:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-white/80">
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5">
              <FiCheckCircle className="text-primary w-4 h-4 shrink-0" />
              <span>Right to Access & Copy</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5">
              <FiCheckCircle className="text-primary w-4 h-4 shrink-0" />
              <span>Right to Rectification</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5">
              <FiCheckCircle className="text-primary w-4 h-4 shrink-0" />
              <span>Right to Erasure (&ldquo;To be Forgotten&rdquo;)</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5">
              <FiCheckCircle className="text-primary w-4 h-4 shrink-0" />
              <span>Right to Data Portability</span>
            </div>
          </div>
          <p className="text-xs text-white/60">
            To exercise any of these rights, please email us at <Link href="mailto:info@techbeeps.co.in" className="text-primary hover:underline">info@techbeeps.co.in</Link>. We respond to all verified requests within 30 days.
          </p>
        </div>
      ),
    },
    {
      id: "security-retention",
      title: "7. Security & Retention Policies",
      content: (
        <div className="space-y-4">
          <p>
            We implement industry-standard technical, physical, and administrative measures—including TLS 1.3 encryption, cryptographic hashing, least-privilege role-based access, and continuous automated audits—to prevent data loss, unauthorized alteration, or disclosure.
          </p>
          <p>
            We retain your personal contact information only for as long as needed to fulfill the business purposes outlined in this policy or to satisfy statutory legal obligations. Upon termination of contractual engagements, client service data is securely purged or handed over per agreement terms.
          </p>
        </div>
      ),
    },
    {
      id: "refund-cancellation",
      title: "8. Refund, Cancellation & Delivery Policies",
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
            <h5 className="text-white font-semibold text-sm sm:text-base">Service Delivery:</h5>
            <p className="text-xs sm:text-sm text-white/70">
              Custom software, web engineering, and design milestones are delivered electronically via private Git repositories, staging servers, and asset archives according to the agreed project timeline.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
            <h5 className="text-white font-semibold text-sm sm:text-base">Cancellation Policy:</h5>
            <p className="text-xs sm:text-sm text-white/70">
              Clients may request project cancellation with written notice prior to milestone completion. Billing will only be prorated for work completed up to the date of notice.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
            <h5 className="text-white font-semibold text-sm sm:text-base">Refund Policy:</h5>
            <p className="text-xs sm:text-sm text-white/70">
              Payments for completed and approved milestone deliverables are non-refundable. Advance deposits for uninitiated milestones are eligible for prompt refund upon mutual review.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "contact-policy",
      title: "9. Contact Us & Privacy Inquiries",
      content: (
        <div className="space-y-4">
          <p>
            If you have questions, feedback, or concerns regarding our Privacy Policy or data handling practices, please contact our Data Protection Officer:
          </p>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-sm">
              <FiMail className="text-primary w-4 h-4" />
              <strong className="text-white">Email:</strong>
              <Link href="mailto:info@techbeeps.co.in" className="text-primary hover:underline">info@techbeeps.co.in</Link> / <Link href="mailto:asif@techbeeps.com" className="text-primary hover:underline">asif@techbeeps.com</Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FiPhone className="text-primary w-4 h-4" />
              <strong className="text-white">Phone:</strong>
              <Link href="tel:+911414523119" className="text-primary hover:underline">+91 141 452 3119</Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FiGlobe className="text-primary w-4 h-4" />
              <strong className="text-white">Website:</strong>
              <Link href="https://techbeeps.co.in" className="text-primary hover:underline">https://techbeeps.co.in</Link>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#05010f] text-white min-h-screen">
      <Header />     
      <section className="relative min-h-screen flex items-end justify-center pb-[90px] pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">        
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.jpg"
            alt="TechBeeps Privacy Policy Hero Background"
            fill
            priority
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#000000_0%,rgba(0, 0, 0, 0.18)_20%,rgba(0,0,0,0)_54%,#000000_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#05010f]/80 via-transparent to-[#05010f]/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-0 lg:bottom-10 -left-20 lg:-left-40 bg-[#504CFF] blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
          <div className="absolute top-0 lg:top-20 -right-20 lg:-right-20 bg-primary blur-[120px] lg:blur-[190px] w-[300px] h-[300px] lg:w-[700px] lg:h-[500px] opacity-20 lg:opacity-30 pointer-events-none rounded-full"></div>
        </div>        
        <div className="container relative z-10 px-4 mt-auto">
          <div className="backdrop-blur-[25px] rounded-[30px] p-6 md:p-8 lg:p-[40px] bg-[#868686]/10 ">
            <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[97px] text-white mb-4 lg:mb-6">
              <GsapTextAnimation mainText={"Privacy Policy"} mainClass="flex flex-wrap " />
            </h1>
            <ContentSwipUp className="md:text-[20px]" top="100">
              Your trust is our utmost priority. Learn how TechBeeps collects, protects, processes, and respects your personal and business data.
            </ContentSwipUp>
          </div>
        </div>
      </section>      
      <section className="py-12 md:py-20 bg-[#05010f] relative z-10">
        <div className="container px-4 max-w-6xl mx-auto">          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="p-4 rounded-2xl bg-[#111113] border border-white/5 flex items-center gap-3">
              <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm text-white/80">Zero Unauthorized Data Sharing</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#111113] border border-white/5 flex items-center gap-3">
              <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm text-white/80">Enterprise-Grade Encryption</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#111113] border border-white/5 flex items-center gap-3">
              <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm text-white/80">GDPR & Global Standards Compliant</span>
            </div>
          </div>         
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-28 bg-[#111113]/90 border border-white/10 rounded-[24px] p-5 backdrop-blur-xl shadow-xl space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-3 px-3">
                Table of Contents
              </h3>
              <div className="space-y-1 max-h-[65vh] overflow-y-auto custom-scrollbar pr-1">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={() => setActiveTab(sec.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs sm:text-sm transition-all duration-200 ${
                      activeTab === sec.id
                        ? "bg-primary text-white font-semibold shadow-md shadow-primary/20"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    <FiChevronRight className="w-3.5 h-3.5 opacity-60 shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              {sections.map((sec) => (
                <div
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-28 bg-[#111113]/90 border border-white/10 rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 shadow-xl backdrop-blur-md"
                >
                  <h2 className="text-xl sm:text-2xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-primary bg-clip-text text-transparent">
                    {sec.title}
                  </h2>
                  <div className="text-white/75 text-sm sm:text-base leading-relaxed">
                    {sec.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </div>
  );
}
