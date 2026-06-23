"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoMailOutline, IoCallOutline, IoLocationOutline, IoPaperPlane, IoChevronDown } from "react-icons/io5";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import GsapTextAnimation from "../components/GsapTextAnimation";
import ContentSwipUp from "../components/ContentSwipUp";

const countries = [
  { id: "af", code: "+93", name: "Afghanistan" },
  { id: "al", code: "+355", name: "Albania" },
  { id: "dz", code: "+213", name: "Algeria" },
  { id: "ad", code: "+376", name: "Andorra" },
  { id: "ao", code: "+244", name: "Angola" },
  { id: "ar", code: "+54", name: "Argentina" },
  { id: "am", code: "+374", name: "Armenia" },
  { id: "au", code: "+61", name: "Australia" },
  { id: "at", code: "+43", name: "Austria" },
  { id: "az", code: "+994", name: "Azerbaijan" },
  { id: "bs", code: "+242", name: "Bahamas" },
  { id: "bh", code: "+973", name: "Bahrain" },
  { id: "bd", code: "+880", name: "Bangladesh" },
  { id: "by", code: "+375", name: "Belarus" },
  { id: "be", code: "+32", name: "Belgium" },
  { id: "bz", code: "+501", name: "Belize" },
  { id: "bj", code: "+229", name: "Benin" },
  { id: "bt", code: "+975", name: "Bhutan" },
  { id: "bo", code: "+591", name: "Bolivia" },
  { id: "ba", code: "+387", name: "Bosnia & Herzegovina" },
  { id: "bw", code: "+267", name: "Botswana" },
  { id: "br", code: "+55", name: "Brazil" },
  { id: "bn", code: "+673", name: "Brunei" },
  { id: "bg", code: "+359", name: "Bulgaria" },
  { id: "bf", code: "+226", name: "Burkina Faso" },
  { id: "bi", code: "+257", name: "Burundi" },
  { id: "kh", code: "+855", name: "Cambodia" },
  { id: "cm", code: "+237", name: "Cameroon" },
  { id: "ca", code: "+1", name: "Canada" },
  { id: "cf", code: "+236", name: "Central African Republic" },
  { id: "td", code: "+235", name: "Chad" },
  { id: "cl", code: "+56", name: "Chile" },
  { id: "cn", code: "+86", name: "China" },
  { id: "co", code: "+57", name: "Colombia" },
  { id: "km", code: "+269", name: "Comoros" },
  { id: "cg", code: "+242", name: "Congo" },
  { id: "cr", code: "+506", name: "Costa Rica" },
  { id: "hr", code: "+385", name: "Croatia" },
  { id: "cu", code: "+53", name: "Cuba" },
  { id: "cy", code: "+357", name: "Cyprus" },
  { id: "cz", code: "+420", name: "Czech Republic" },
  { id: "dk", code: "+45", name: "Denmark" },
  { id: "dj", code: "+253", name: "Djibouti" },
  { id: "dm", code: "+1767", name: "Dominica" },
  { id: "do", code: "+1", name: "Dominican Republic" },
  { id: "ec", code: "+593", name: "Ecuador" },
  { id: "eg", code: "+20", name: "Egypt" },
  { id: "sv", code: "+503", name: "El Salvador" },
  { id: "gq", code: "+240", name: "Equatorial Guinea" },
  { id: "er", code: "+291", name: "Eritrea" },
  { id: "ee", code: "+372", name: "Estonia" },
  { id: "sz", code: "+268", name: "Eswatini" },
  { id: "et", code: "+251", name: "Ethiopia" },
  { id: "fj", code: "+679", name: "Fiji" },
  { id: "fi", code: "+358", name: "Finland" },
  { id: "fr", code: "+33", name: "France" },
  { id: "ga", code: "+241", name: "Gabon" },
  { id: "gm", code: "+220", name: "Gambia" },
  { id: "ge", code: "+995", name: "Georgia" },
  { id: "de", code: "+49", name: "Germany" },
  { id: "gh", code: "+233", name: "Ghana" },
  { id: "gr", code: "+30", name: "Greece" },
  { id: "gd", code: "+1473", name: "Grenada" },
  { id: "gt", code: "+502", name: "Guatemala" },
  { id: "gn", code: "+224", name: "Guinea" },
  { id: "gw", code: "+245", name: "Guinea-Bissau" },
  { id: "gy", code: "+592", name: "Guyana" },
  { id: "ht", code: "+509", name: "Haiti" },
  { id: "hn", code: "+504", name: "Honduras" },
  { id: "hu", code: "+36", name: "Hungary" },
  { id: "is", code: "+354", name: "Iceland" },
  { id: "in", code: "+91", name: "India" },
  { id: "id", code: "+62", name: "Indonesia" },
  { id: "ir", code: "+98", name: "Iran" },
  { id: "iq", code: "+964", name: "Iraq" },
  { id: "ie", code: "+353", name: "Ireland" },
  { id: "il", code: "+972", name: "Israel" },
  { id: "it", code: "+39", name: "Italy" },
  { id: "jm", code: "+1", name: "Jamaica" },
  { id: "jp", code: "+81", name: "Japan" },
  { id: "jo", code: "+962", name: "Jordan" },
  { id: "kz", code: "+7", name: "Kazakhstan" },
  { id: "ke", code: "+254", name: "Kenya" },
  { id: "ki", code: "+686", name: "Kiribati" },
  { id: "kp", code: "+850", name: "North Korea" },
  { id: "kr", code: "+82", name: "South Korea" },
  { id: "kw", code: "+965", name: "Kuwait" },
  { id: "kg", code: "+996", name: "Kyrgyzstan" },
  { id: "la", code: "+856", name: "Laos" },
  { id: "lv", code: "+371", name: "Latvia" },
  { id: "lb", code: "+961", name: "Lebanon" },
  { id: "ls", code: "+266", name: "Lesotho" },
  { id: "lr", code: "+231", name: "Liberia" },
  { id: "ly", code: "+218", name: "Libya" },
  { id: "li", code: "+423", name: "Liechtenstein" },
  { id: "lt", code: "+370", name: "Lithuania" },
  { id: "lu", code: "+352", name: "Luxembourg" },
  { id: "mg", code: "+261", name: "Madagascar" },
  { id: "mw", code: "+265", name: "Malawi" },
  { id: "my", code: "+60", name: "Malaysia" },
  { id: "mv", code: "+960", name: "Maldives" },
  { id: "ml", code: "+223", name: "Mali" },
  { id: "mt", code: "+356", name: "Malta" },
  { id: "mr", code: "+222", name: "Mauritania" },
  { id: "mu", code: "+230", name: "Mauritius" },
  { id: "mx", code: "+52", name: "Mexico" },
  { id: "fm", code: "+691", name: "Micronesia" },
  { id: "md", code: "+373", name: "Moldova" },
  { id: "mc", code: "+377", name: "Monaco" },
  { id: "mn", code: "+976", name: "Mongolia" },
  { id: "me", code: "+382", name: "Montenegro" },
  { id: "ma", code: "+212", name: "Morocco" },
  { id: "mz", code: "+258", name: "Mozambique" },
  { id: "mm", code: "+95", name: "Myanmar" },
  { id: "na", code: "+264", name: "Namibia" },
  { id: "np", code: "+977", name: "Nepal" },
  { id: "nl", code: "+31", name: "Netherlands" },
  { id: "nz", code: "+64", name: "New Zealand" },
  { id: "ni", code: "+505", name: "Nicaragua" },
  { id: "ne", code: "+227", name: "Niger" },
  { id: "ng", code: "+234", name: "Nigeria" },
  { id: "no", code: "+47", name: "Norway" },
  { id: "om", code: "+968", name: "Oman" },
  { id: "pk", code: "+92", name: "Pakistan" },
  { id: "pw", code: "+680", name: "Palau" },
  { id: "pa", code: "+507", name: "Panama" },
  { id: "pg", code: "+675", name: "Papua New Guinea" },
  { id: "py", code: "+595", name: "Paraguay" },
  { id: "pe", code: "+51", name: "Peru" },
  { id: "ph", code: "+63", name: "Philippines" },
  { id: "pl", code: "+48", name: "Poland" },
  { id: "pt", code: "+351", name: "Portugal" },
  { id: "qa", code: "+974", name: "Qatar" },
  { id: "ro", code: "+40", name: "Romania" },
  { id: "ru", code: "+7", name: "Russia" },
  { id: "rw", code: "+250", name: "Rwanda" },
  { id: "kn", code: "+1869", name: "Saint Kitts & Nevis" },
  { id: "lc", code: "+1758", name: "Saint Lucia" },
  { id: "vc", code: "+1784", name: "Saint Vincent" },
  { id: "ws", code: "+685", name: "Samoa" },
  { id: "sm", code: "+378", name: "San Marino" },
  { id: "st", code: "+239", name: "Sao Tome & Principe" },
  { id: "sa", code: "+966", name: "Saudi Arabia" },
  { id: "sn", code: "+221", name: "Senegal" },
  { id: "rs", code: "+381", name: "Serbia" },
  { id: "sc", code: "+248", name: "Seychelles" },
  { id: "sl", code: "+232", name: "Sierra Leone" },
  { id: "sg", code: "+65", name: "Singapore" },
  { id: "sk", code: "+421", name: "Slovakia" },
  { id: "si", code: "+386", name: "Slovenia" },
  { id: "sb", code: "+677", name: "Solomon Islands" },
  { id: "so", code: "+252", name: "Somalia" },
  { id: "za", code: "+27", name: "South Africa" },
  { id: "es", code: "+34", name: "Spain" },
  { id: "lk", code: "+94", name: "Sri Lanka" },
  { id: "sd", code: "+249", name: "Sudan" },
  { id: "sr", code: "+597", name: "Suriname" },
  { id: "se", code: "+46", name: "Sweden" },
  { id: "ch", code: "+41", name: "Switzerland" },
  { id: "sy", code: "+963", name: "Syria" },
  { id: "tw", code: "+886", name: "Taiwan" },
  { id: "tj", code: "+992", name: "Tajikistan" },
  { id: "tz", code: "+255", name: "Tanzania" },
  { id: "th", code: "+66", name: "Thailand" },
  { id: "tl", code: "+670", name: "Timor-Leste" },
  { id: "tg", code: "+228", name: "Togo" },
  { id: "to", code: "+676", name: "Tonga" },
  { id: "tt", code: "+1868", name: "Trinidad & Tobago" },
  { id: "tn", code: "+216", name: "Tunisia" },
  { id: "tr", code: "+90", name: "Turkey" },
  { id: "tm", code: "+993", name: "Turkmenistan" },
  { id: "tv", code: "+688", name: "Tuvalu" },
  { id: "ug", code: "+256", name: "Uganda" },
  { id: "ua", code: "+380", name: "Ukraine" },
  { id: "ae", code: "+971", name: "United Arab Emirates" },
  { id: "gb", code: "+44", name: "United Kingdom" },
  { id: "us", code: "+1", name: "United States" },
  { id: "uy", code: "+598", name: "Uruguay" },
  { id: "uz", code: "+998", name: "Uzbekistan" },
  { id: "vu", code: "+678", name: "Vanuatu" },
  { id: "ve", code: "+58", name: "Venezuela" },
  { id: "vn", code: "+84", name: "Vietnam" },
  { id: "ye", code: "+967", name: "Yemen" },
  { id: "zm", code: "+260", name: "Zambia" },
  { id: "zw", code: "+263", name: "Zimbabwe" }
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.id === "us") || countries[0]);
  const [showFlagDropdown, setShowFlagDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close country dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowFlagDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!showFlagDropdown) {
      setSearchQuery("");
    }
  }, [showFlagDropdown]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API submit call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center pb-[90px] pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/services-bg.jpg"
            alt="Services Background"
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
              <GsapTextAnimation mainText={"Contact Us"}  mainClass="flex flex-wrap "/>
            </h1>            
            <ContentSwipUp className="md:text-[20px]" top="100">
              Thank you for reaching out to TechBeeps Services! Please fill the form. Our team will contact you shortly.
            </ContentSwipUp>
          </div>
        </div>
      </section>      

      {/* Form & Info Section */}
      <section className="py-12 md:py-20 lg:py-28 bg-[#05010f] text-white relative z-10">
        {/* Glow Gradients */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#854CFF] blur-[150px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] opacity-10 pointer-events-none rounded-full"></div>

        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left Card: Send Us a Message */}
            <div className="lg:col-span-7 bg-[#111113] border border-white/5 rounded-[24px] md:rounded-[30px] p-5 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between lg:min-h-[580px] min-h-0">
              <AnimatePresence mode="wait">
                {submitStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4 h-full my-auto"
                  >
                    <div className="w-20 h-20 bg-primary/10 border border-primary/20 rounded-full flex items-center justify-center text-primary mb-6 shadow-[0_0_20px_rgba(133,76,255,0.15)]">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      Message Sent!
                    </h3>
                    <p className="text-white/60 text-sm md:text-base max-w-md mb-8">
                      Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitStatus("idle")}
                      className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-medium rounded-[12px] transition-all duration-300 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col h-full justify-between"
                  >
                    <div>
                      <h3 className="text-[24px] font-bold text-white mb-8">
                        Send Us a Message
                      </h3>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          {/* First Name */}
                          <div>
                            <input
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="First Name"
                              className={`w-full bg-[#1c1c1e] text-white placeholder-white/30 border ${
                                errors.firstName ? "border-red-500/50" : "border-white/5 focus:border-primary/50"
                              } rounded-[12px] py-3.5 px-5 outline-none transition-all duration-300 text-sm`}
                            />
                            {errors.firstName && (
                              <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.firstName}</p>
                            )}
                          </div>

                          {/* Last Name */}
                          <div>
                            <input
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Last Name"
                              className={`w-full bg-[#1c1c1e] text-white placeholder-white/30 border ${
                                errors.lastName ? "border-red-500/50" : "border-white/5 focus:border-primary/50"
                              } rounded-[12px] py-3.5 px-5 outline-none transition-all duration-300 text-sm`}
                            />
                            {errors.lastName && (
                              <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.lastName}</p>
                            )}
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className={`w-full bg-[#1c1c1e] text-white placeholder-white/30 border ${
                              errors.email ? "border-red-500/50" : "border-white/5 focus:border-primary/50"
                            } rounded-[12px] py-3.5 px-5 outline-none transition-all duration-300 text-sm`}
                          />
                          {errors.email && (
                            <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.email}</p>
                          )}
                        </div>

                        {/* Company */}
                        <div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company"
                            className="w-full bg-[#1c1c1e] text-white placeholder-white/30 border border-white/5 focus:border-primary/50 rounded-[12px] py-3.5 px-5 outline-none transition-all duration-300 text-sm"
                          />
                        </div>

                        {/* Phone with Custom Flag Selector */}
                        <div className="relative" ref={dropdownRef}>
                          <div className={`flex items-center bg-[#1c1c1e] border rounded-[12px] transition-all duration-300 overflow-hidden ${
                            showFlagDropdown ? "border-primary shadow-[0_0_15px_rgba(133,76,255,0.15)] bg-[#222225]" : "border-white/5 focus-within:border-primary/50"
                          }`}>
                            <button
                              type="button"
                              onClick={() => setShowFlagDropdown(!showFlagDropdown)}
                              className={`flex items-center gap-1.5 sm:gap-2.5 px-3 py-3 sm:px-4.5 sm:py-3.5 text-white border-r border-white/10 transition-all duration-300 cursor-pointer select-none ${
                                showFlagDropdown ? "bg-primary/10 text-primary" : "hover:bg-white/5"
                              }`}
                            >
                              <div className="w-5.5 h-5.5 rounded-full overflow-hidden border border-white/10 shrink-0 relative flex items-center justify-center bg-white/5">
                                <img
                                  src={`https://flagcdn.com/w40/${selectedCountry.id}.png`}
                                  alt={selectedCountry.name}
                                  className="w-full h-full object-cover scale-[1.1]"
                                />
                              </div>
                              <span className={`text-sm font-semibold transition-colors duration-300 ${
                                showFlagDropdown ? "text-primary" : "text-white"
                              }`}>{selectedCountry.code}</span>
                              <IoChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 text-white/40 group-hover:text-white ${
                                showFlagDropdown ? "rotate-180 text-primary" : ""
                              }`} />
                            </button>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Phone Number"
                              className="flex-1 bg-transparent text-white placeholder-white/30 py-3 px-3 sm:py-3.5 sm:px-4 outline-none text-sm font-medium"
                              onFocus={() => setShowFlagDropdown(false)}
                            />
                          </div>

                          {showFlagDropdown && (
                            <div data-lenis-prevent className="custom-scrollbar absolute top-full left-0 mt-2 bg-[#1c1c1e] border border-white/10 rounded-[12px] py-2 w-64 shadow-2xl z-50 max-h-60 overflow-y-auto">
                              {/* Sticky Search Input */}
                              <div className="px-3 pb-2 mb-2 border-b border-white/10 sticky top-0 bg-[#1c1c1e] z-10">
                                <input
                                  type="text"
                                  placeholder="Search country or code..."
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  className="w-full bg-[#18181b] text-white text-xs placeholder-white/30 border border-white/5 focus:border-primary/50 rounded-lg py-2 px-3 outline-none transition-colors"
                                  autoFocus
                                />
                              </div>
                              {countries.filter(c => 
                                c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                c.code.includes(searchQuery)
                              ).length > 0 ? (
                                countries.filter(c => 
                                  c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  c.code.includes(searchQuery)
                                ).map((country) => (
                                  <button
                                    key={`${country.code}-${country.id}`}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setShowFlagDropdown(false);
                                    }}
                                    className={`flex items-center gap-3.5 w-full px-4 py-2 hover:bg-white/5 text-left text-sm transition-all duration-300 cursor-pointer ${
                                      selectedCountry.id === country.id ? "bg-primary/5 text-primary font-semibold" : "text-white/80"
                                    }`}
                                  >
                                    <div className="w-5.5 h-5.5 rounded-full overflow-hidden border border-white/10 shrink-0 relative flex items-center justify-center bg-white/5">
                                      <img
                                        src={`https://flagcdn.com/w40/${country.id}.png`}
                                        alt={country.name}
                                        className="w-full h-full object-cover scale-[1.1]"
                                        loading="lazy"
                                      />
                                    </div>
                                    <span className="text-sm">{country.code}</span>
                                    <span className="text-white/40 text-xs truncate flex-1 text-right">{country.name}</span>
                                  </button>
                                ))
                              ) : (
                                <div className="px-4 py-3 text-xs text-white/40 text-center">No countries found</div>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Message */}
                        <div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            rows={4}
                            className={`w-full bg-[#1c1c1e] text-white placeholder-white/30 border ${
                              errors.message ? "border-red-500/50" : "border-white/5 focus:border-primary/50"
                            } rounded-[12px] py-3.5 px-5 outline-none transition-all duration-300 text-sm resize-none`}
                          />
                          {errors.message && (
                            <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.message}</p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-[12px] flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed select-none"
                        >
                          {isSubmitting ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <>
                              <span>Send</span>
                              <IoPaperPlane className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Card: Contact Information */}
            <div className="lg:col-span-5 bg-[#111113] border border-white/5 rounded-[24px] md:rounded-[30px] p-5 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-start space-y-8 md:space-y-10 lg:min-h-[580px] min-h-0">
              <div>
                <h3 className="text-[24px] font-bold text-white mb-8 md:mb-10">
                  Contact Information
                </h3>

                <div className="space-y-10">
                  {/* Email row */}
                  <div className="flex gap-4.5 items-start group">
                    <div className="text-primary w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center">
                      <IoMailOutline className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white text-[17px] font-semibold mb-1">Email</h4>
                      <Link
                        href="mailto:tech.beeps@outlook.com"
                        className="text-white/60 hover:text-primary transition-colors text-[15px] leading-relaxed block break-all font-normal"
                      >
                        tech.beeps@outlook.com
                      </Link>
                    </div>
                  </div>

                  {/* Phone row */}
                  <div className="flex gap-4.5 items-start group">
                    <div className="text-primary w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center">
                      <IoCallOutline className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white text-[17px] font-semibold mb-1">Phone</h4>
                      <div className="space-y-1 font-normal">
                        <Link
                          href="tel:+911414523119"
                          className="text-white/60 hover:text-primary transition-colors text-[15px] leading-relaxed block"
                        >
                          +91 141 452 3119 (Office)
                        </Link>
                        <Link
                          href="tel:+918112269797"
                          className="text-white/60 hover:text-primary transition-colors text-[15px] leading-relaxed block"
                        >
                          +91 811 226 9797 (Mobile & WhatsApp)
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Office row */}
                  <div className="flex gap-4.5 items-start">
                    <div className="text-primary w-6 h-6 shrink-0 mt-0.5 flex items-center justify-center">
                      <IoLocationOutline className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white text-[17px] font-semibold mb-1">Office</h4>
                      <p className="text-white/60 text-[15px] leading-relaxed font-normal">
                        207, Pinkcity-2, Main Kalwar Rd, Jhotwara, Jaipur
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}
