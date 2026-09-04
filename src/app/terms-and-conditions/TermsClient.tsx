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
  FiChevronRight
} from "react-icons/fi";

interface TermSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

export default function TermsClient() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const sections: TermSection[] = [
    {
      id: "overview",
      title: "1. Overview",
      content: (
        <div className="space-y-4">
          <p>
            This website is operated by <strong className="text-white">TechBeeps</strong>. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to TechBeeps. TechBeeps offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.
          </p>
          <p>
            By visiting our site and/or purchasing services from us, you engage in our &ldquo;Service&rdquo; and agree to be bound by the following terms and conditions (&ldquo;Terms and Conditions&rdquo;, &ldquo;Terms&rdquo;), including those additional terms and conditions and policies referenced herein and/or available by hyperlink.
          </p>
          <p>
            Please read these Terms and Conditions carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms. If you do not agree to all terms and conditions of this agreement, then you may not access the website or use any services.
          </p>
        </div>
      ),
    },
    {
      id: "online-store-terms",
      title: "2. Online Store & Service Terms",
      content: (
        <div className="space-y-4">
          <p>
            By agreeing to these Terms and Conditions, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority and have given us your consent to allow any of your minor dependents to use this site.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>You may not use our services or products for any illegal or unauthorized purpose.</li>
            <li>You must not, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright and IP laws).</li>
            <li>You must not transmit any worms, viruses, malicious scripts, or destructive code.</li>
          </ul>
          <p className="text-red-300 bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
            A breach or violation of any of the Terms will result in an immediate termination of your Services.
          </p>
        </div>
      ),
    },
    {
      id: "general-conditions",
      title: "3. General Conditions",
      content: (
        <div className="space-y-4">
          <p>We reserve the right to refuse service to anyone for any legitimate business reason at any time.</p>
          <p>
            You understand that your content (not including sensitive payment credentials) may be transferred unencrypted and involve transmissions over various networks and conformance to technical requirements. Payment and credit card data are always encrypted during transmission over secure TLS/SSL networks.
          </p>
          <p>
            You agree not to reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service, use of the Service, or access to the Service without express written permission by TechBeeps.
          </p>
        </div>
      ),
    },
    {
      id: "accuracy-timeliness",
      title: "4. Accuracy, Completeness & Timeliness",
      content: (
        <div className="space-y-4">
          <p>
            We are not responsible if information made available on this site is not completely accurate, comprehensive, or current. The material on this site is provided for general information only and should not be relied upon as the sole basis for making decisions without consulting primary, more authoritative sources.
          </p>
          <p>
            This site may contain historical references which are provided for your reference only. We reserve the right to modify the contents of this site at any time without prior obligation to notify past visitors.
          </p>
        </div>
      ),
    },
    {
      id: "modifications-pricing",
      title: "5. Modifications to Services & Prices",
      content: (
        <div className="space-y-4">
          <p>Prices for our custom development, design, and consultancy services are subject to change without prior notice.</p>
          <p>
            We reserve the right at any time to modify, pause, or discontinue the Service (or any part thereof) with reasonable notice. We shall not be liable to you or to any third-party for any modification, price adjustment, suspension, or discontinuance.
          </p>
        </div>
      ),
    },
    {
      id: "products-services",
      title: "6. Deliverables & Services",
      content: (
        <div className="space-y-4">
          <p>
            Certain software solutions, licenses, or packages may be available exclusively online through our website or client portal. These solutions are subject to our project scopes and statement of work agreements.
          </p>
          <p>
            We make every effort to display high-fidelity project demos and previews. We reserve the right to limit the sales or provisioning of our services to any individual, business entity, or geographic region on a case-by-case basis.
          </p>
        </div>
      ),
    },
    {
      id: "billing-account",
      title: "7. Accuracy of Billing & Account Information",
      content: (
        <div className="space-y-4">
          <p>
            You agree to provide current, complete, and accurate purchase and contact information for all service retainers or transactions made with TechBeeps.
          </p>
          <p>
            You agree to promptly update your account, contact details, email address, and billing information so that we can complete your transactions and contact you as required.
          </p>
        </div>
      ),
    },
    {
      id: "third-party-tools",
      title: "8. Optional Third-Party Tools & Links",
      content: (
        <div className="space-y-4">
          <p>
            We may provide you with access to third-party tools, integrations, APIs, and plugins (e.g., payment gateways, CRM integrations, analytics tools) over which we neither monitor nor have direct operational control.
          </p>
          <p>
            You acknowledge and agree that access to such tools is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties or endorsements of any kind. Any use of third-party tools is entirely at your own discretion.
          </p>
        </div>
      ),
    },
    {
      id: "prohibited-uses",
      title: "9. Prohibited Uses",
      content: (
        <div className="space-y-4">
          <p>In addition to other prohibitions established in these Terms, you are prohibited from using the site or its content:</p>
          <ul className="list-disc pl-6 space-y-2 text-white/80">
            <li>For any unlawful, fraudulent, or malicious purpose.</li>
            <li>To solicit others to perform or participate in unlawful acts.</li>
            <li>To violate any international, federal, state, or local regulations, laws, or ordinances.</li>
            <li>To infringe upon or violate our intellectual property rights or the rights of others.</li>
            <li>To upload or transmit viruses, malware, trojans, or destructive code.</li>
            <li>To collect or track the personal information of others without explicit consent.</li>
            <li>To interfere with or circumvent the security features of the Service.</li>
          </ul>
        </div>
      ),
    },
    {
      id: "disclaimer-liability",
      title: "10. Disclaimer of Warranties & Limitation of Liability",
      content: (
        <div className="space-y-4">
          <p>
            We do not guarantee or warrant that your use of our service will be uninterrupted, completely error-free, or exempt from unforeseen server downtime.
          </p>
          <p>
            In no case shall TechBeeps, our directors, officers, employees, affiliates, contractors, or service providers be liable for any indirect, incidental, punitive, special, or consequential damages of any kind, including lost profits, lost revenue, lost savings, loss of data, or replacement costs.
          </p>
        </div>
      ),
    },
    {
      id: "indemnification",
      title: "11. Indemnification",
      content: (
        <div className="space-y-4">
          <p>
            You agree to indemnify, defend, and hold harmless TechBeeps, our affiliates, partners, officers, directors, contractors, and employees from any claim or demand, including reasonable attorneys&rsquo; fees, made by any third-party due to or arising out of your breach of these Terms or your violation of any law.
          </p>
        </div>
      ),
    },
    {
      id: "governing-law",
      title: "12. Governing Law & Dispute Resolution",
      content: (
        <div className="space-y-4">
          <p>
            These Terms and Conditions and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the applicable laws of India and internationally recognized jurisdiction standards.
          </p>
        </div>
      ),
    },
    {
      id: "contact-info",
      title: "13. Contact Information",
      content: (
        <div className="space-y-4">
          <p>
            Questions or inquiries about the Terms and Conditions should be directed to our legal and support team at:
          </p>
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <p><strong className="text-white">Email:</strong> <Link href="mailto:info@techbeeps.co.in" className="text-primary hover:underline">info@techbeeps.co.in</Link> / <Link href="mailto:asif@techbeeps.com" className="text-primary hover:underline">asif@techbeeps.com</Link></p>
            <p><strong className="text-white">Website:</strong> <Link href="https://techbeeps.co.in" className="text-primary hover:underline">https://techbeeps.co.in</Link></p>
            <p><strong className="text-white">Phone:</strong> <Link href="tel:+911414523119" className="text-primary hover:underline">+91 141 452 3119</Link></p>
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
            alt="TechBeeps Terms and Conditions Hero Background"
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
              <GsapTextAnimation mainText={"Terms & Conditions"} mainClass="flex flex-wrap " />
            </h1>
            <ContentSwipUp className="md:text-[20px]" top="100">
              Please review these terms and conditions carefully. By accessing or using TechBeeps services and website, you agree to be bound by these provisions and policies.
            </ContentSwipUp>
          </div>
        </div>
      </section>     
      <section className="py-12 md:py-20 bg-[#05010f] relative z-10">
        <div className="container px-4 max-w-6xl mx-auto">       
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="p-4 rounded-2xl bg-[#111113] border border-white/5 flex items-center gap-3">
              <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm text-white/80">Transparent Service Terms</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#111113] border border-white/5 flex items-center gap-3">
              <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm text-white/80">Clear Intellectual Property Rights</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#111113] border border-white/5 flex items-center gap-3">
              <FiCheckCircle className="w-5 h-5 text-primary shrink-0" />
              <span className="text-xs sm:text-sm text-white/80">Fair Billing & Support Practices</span>
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
