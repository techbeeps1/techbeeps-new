import Image from "next/image";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import FaqAccordion from "../../components/FaqAccordion";
import LogoMarquee from "../../components/LogoMarquee";
import ButtonSwipUp from "../../components/ButtonSwipUp";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import { FaCommentDots, FaRobot, FaArrowTrendUp } from "react-icons/fa6";
import GsapTextAnimation from "@/app/components/GsapTextAnimation";
const faqs = [
    {
        question: "Discovery & Requirement Analysis",
        answer: "We begin by understanding your business goals, user challenges, and system requirements to identify the best-fit AI solution."
    },
    {
        question: "Selecting the Right AI Model",
        answer: "Based on your use case, we choose the most suitable AI model or API—such as OpenAI, Claude, or Gemini—to ensure optimal performance and scalability."
    },
    {
        question: "Custom AI Solution Development",
        answer: "Our experienced developers build your solution—be it a web application, WordPress plugin, or custom integration—aligned with your business logic and user needs."
    },
    {
        question: "Testing, Tuning & Validation",
        answer: "We conduct thorough testing, validate the AI responses, and fine-tune the model integration to ensure accuracy, reliability, and security."
    },
    {
        question: "Deployment & Ongoing Support",
        answer: "Once ready, we deploy your AI-powered solution with complete documentation and offer continuous support, updates, and maintenance to keep things running smoothly."
    },

];

const AiSolutionsServices = [
    {
        title: "AutoReply AI ",
        desc: "Automatically replies to blog comments using AI.",
        icon: FaCommentDots,
    },
    {
        title: "ReplyPilot AI",
        desc: "A conversational chatbot that engages users in real-time.",
        icon: FaRobot,
    },
    {
        title: "Sales Analytics for WooCommerce",
        desc: "Predictive analytics for eCommerce sales performance.",
        icon: FaArrowTrendUp,
    },
];

export default function AiSolutionsPage() {
    return (
        <>
            <Header />
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-end justify-center pb-[90px] pt-32 lg:pb-20 bg-[#05010f] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/services-bg.jpg"
                        alt="TechBeeps UI/UX Design Services Background"
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

                            <GsapTextAnimation mainText={"AI Solutions"} mainClass="flex flex-wrap" />
                        </h1>
                        <p className="text-base lg:text-[20px] leading-snug lg:leading-[30px] text-white ">
                            At TechBeeps, we are transforming the way businesses use technology by delivering innovative and intelligent AI development solutions across a wide range of platforms. In today’s fast-paced digital world, automation, personalization, and smart decision-making are essential. That’s why we specialize in building custom AI-powered tools that integrate seamlessly into your existing systems—whether they are web platforms, SaaS applications, or eCommerce stores
                        </p>
                    </div>
                </div>
            </section>

            {/* LogoMarquee */}

            <LogoMarquee />

            {/* UI/UX Services Details Section */}
            <section className="py-[100px] bg-[#05010f] text-white">
                <div className="container px-4 mx-auto">
                    {/* Section Heading */}
                    <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white">
                            <GsapTextAnimation mainText={"We’ve already launched three powerful AI-based WordPress plugins:"} mainClass="flex flex-wrap justify-center" />
                        </h2>
                        <p className="text-white text-sm md:text-base leading-snug lg:leading-[28px] max-w-[1000px] mx-auto">
                            Our development expertise spans across PHP, Node.js, Laravel, Python, Shopify, and WordPress. From advanced web applications to custom plugins, we create solutions that are scalable, efficient, and tailored to your unique goals.
                            Whether you’re looking to automate customer support through chatbots, auto-respond to user inputs, or gain deeper insights with AI-enhanced analytics, we’ve got the tools and experience to deliver.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {AiSolutionsServices.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={idx}
                                    className="group relative rounded-[15px] p-[1px] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(80,76,255,0.4)] overflow-hidden"
                                >
                                    {/* Glowing border effect: A gradient that appears behind the inner div on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#504CFF]/0 via-[#9795FF]/80 to-[#504CFF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    {/* Shimmer sweep effect on the border */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                                    {/* Inner Card content */}
                                    <div className="relative h-full z-10 bg-[linear-gradient(180deg,#120D25_58%,#291D58_100%)] group-hover:bg-[linear-gradient(180deg,#1A1138_40%,#352075_100%)] py-8 px-6 lg:py-[50px] lg:px-[30px] rounded-[14px] transition-colors duration-500 border border-white/5 overflow-hidden">

                                        {/* Floating glow blob inside card */}
                                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9795FF] blur-[80px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#504CFF] blur-[80px] rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>

                                        <div className="relative z-20 flex flex-col h-full">
                                            <div className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-[#9795FF]/60 group-hover:shadow-[0_0_30px_rgba(151,149,255,0.6)] relative overflow-hidden mb-[30px] lg:mb-[40px]">
                                                {/* Shimmer sweep effect on the icon box */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                                                <Icon className="w-[24px] lg:w-[32px] h-[24px] lg:h-[32px] text-white/90 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#9795FF]" />
                                            </div>
                                            <div className="space-y-[16px] lg:space-y-[20px]">
                                                <h3 className="text-[20px] lg:text-[22px] leading-7.5 bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text text-transparent transition-all duration-500 group-hover:brightness-125">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm md:text-base leading-[28px] text-gray-400 group-hover:text-white transition-colors duration-500">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Promise Section */}
            <section className="bg-black text-white">
                <div className="max-w-[1320px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="flex-1 space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white ">
                                <br className="hidden md:block" />
                                <GsapTextAnimation mainText={"Why Choose TechBeeps for AI Development?"} mainClass="flex flex-wrap" />
                            </h2>

                        </div>

                        <ul className="space-y-5">
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    Custom, scalable, and secure solutions
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    Deep understanding of modern LLMs and APIs
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    Post-deployment support and updates
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    In-house experience with real AI WordPress plugins
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    Affordable pricing with enterprise-grade quality
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    Affordable pricing with enterprise-grade quality
                                </p>
                            </li>
                        </ul>

                        <div className="pt-2">
                            {/* <button className="px-6 py-3.5 cursor-pointer flex items-center group hover:bg-primary hover:text-white duration-400 gap-2.5 bg-white text-black rounded-[50px] font-medium">
                                Explore More
                                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
                            </button> */}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full">
                        <div className="relative shadow-2xl border border-white/5">
                            <Image
                                src="/promise.jpg"
                                alt="TechBeeps Commitment to Quality and Client Satisfaction"
                                width={621}
                                height={414}
                                className="w-full h-auto object-cover rounded-[20px] "
                            />
                            <div
                                className="absolute inset-0 rounded-[20px] pointer-events-none"
                                style={{ background: "linear-gradient(270deg, #000000 2.88%, rgba(7, 7, 7, 0) 48.12%, #070707 98.14%)" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[100px] bg-[#05010f] text-white">
                <div className="container">
                    {/* Section Heading */}
                    <div className="mb-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
                        <div className="w-full lg:w-[40%]">
                            <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white ">
                                <GsapTextAnimation mainText={"Our AI Development Process"} mainClass="flex flex-wrap" />
                            </h2>
                        </div>
                        <div className="w-full lg:w-[60%]">
                            <FaqAccordion faqs={faqs} />
                        </div>
                    </div>

                </div>
            </section>
            {/* Promise Section */}
            <section className="bg-black text-white py-10">
                <div className="max-w-[1320px] mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                    {/* Right content */}
                    <div className="flex-1 w-full">
                        <div className="relative shadow-2xl border border-white/5">
                            <Image
                                src="/Migration.jpg"
                                alt="TechBeeps Commitment to Quality and Client Satisfaction"
                                width={621}
                                height={414}
                                className="w-full h-auto object-cover rounded-[20px] "
                            />
                            <div
                                className="absolute inset-0 rounded-[20px] pointer-events-none"
                                style={{ background: "linear-gradient(270deg, #000000 2.88%, rgba(7, 7, 7, 0) 48.12%, #070707 98.14%)" }}
                            />
                        </div>
                    </div>
                    {/* Left Image */}
                    <div className="flex-1 space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white ">
                                <br className="hidden md:block" />
                                <GsapTextAnimation mainText={"Hire Our Developer"} mainClass="flex flex-wrap" />
                            </h2>
                            <h3 className="text-[22px] leading-[30px]">Are You Looking for Experienced AI Developer Experts?</h3>
                            <p>
                                our skilled AI developers bring deep expertise in building intelligent, custom solutions tailored to your needs. From smart automation to seamless AI integrations, we ensure clean code, reliable performance, and on-time delivery. Partner with us to future-proof your digital journey with AI at its core.
                            </p>

                        </div>

                        <div className="pt-2">
                            <ButtonSwipUp className=" text-black hover:text-white bg-white w-50" url={"/contact-us"}>

                                Hire Developer
                                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
                            </ButtonSwipUp>

                        </div>

                    </div>
                </div>
            </section>
            {/* Adding CallToAction as a placeholder for the next sections */}
            <CallToAction />

            <Footer />
        </>
    );
}