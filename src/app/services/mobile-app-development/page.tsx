import Image from "next/image";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import FaqAccordion from "../../components/FaqAccordion";
import LogoMarquee from "../../components/LogoMarquee";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import {
    TbDeviceMobileCode,
    TbPalette,
    TbDeviceMobileUp,
    TbDeviceMobileCheck,
    TbDeviceMobileMessage,
    TbDeviceMobileBolt,
} from "react-icons/tb";
import GsapTextAnimation from "@/app/components/GsapTextAnimation";
const faqs = [
    {
        question: "What is included in your app development services?",
        answer: "We provide end-to-end app development solutions, including strategy, UI/UX design, coding, testing, deployment, and ongoing maintenance."
    },
    {
        question: "Do you build apps for both iOS and Android?",
        answer: "Yes, we develop native apps for iOS and Android, as well as cross-platform apps that work seamlessly on both."
    },
    {
        question: "How long does it take to develop a mobile app?",
        answer: "The timeline depends on the complexity and features of the app. Simple apps may take 6–8 weeks, while more advanced applications can take several months."
    },
    {
        question: "How much does app development cost?",
        answer: "Costs vary depending on the app’s features, platform, design, and complexity. After discussing your requirements, we provide a clear and transparent quote."
    },
    {
        question: "Do you help with publishing the app on the App Store and Google Play?",
        answer: "Yes, we handle the submission process and ensure your app meets all guidelines for publishing on the App Store and Google Play."
    },
];

const MobileAppDevelopmentServices = [
    {
        title: "Custom Mobile App Development",
        desc: "If you need a custom mobile app development solution that is tailored to your specific business needs, we can help. Our team of developers is skilled in creating customized solutions using a wide range of technologies. We can create custom mobile app features, integrations, and workflows that are unique to your business.",
        icon: TbDeviceMobileCode,
    },
    {
        title: "Mobile App Design",
        desc: "We believe that a great mobile app starts with great design. Our team of designers is skilled in creating beautiful and intuitive mobile app designs that are tailored to your brand and business needs.",
        icon: TbPalette,
    },
    {
        title: "Scalable Mobile Apps",
        desc: "Our mobile apps are designed to grow with your business. We use the latest technologies and development practices to ensure that your app is scalable and can handle any increase in traffic or functionality. This means that you won’t have to worry about rebuilding your app from scratch as your business grows.",
        icon: TbDeviceMobileUp,
    },
    {
        title: "Mobile App Testing ",
        desc: "Before launching your mobile app, we conduct extensive testing to ensure that everything is functioning as it should be. We test for performance, security, and functionality to make sure that your mobile app is ready to go live and provide your users with an exceptional experience.",
        icon: TbDeviceMobileCheck,
    },
    {
        title: "Interactive Mobile Apps",
        desc: "We believe that a great mobile app should be more than just a static tool. Our team of developers is skilled in creating interactive mobile apps that engage your audience and keep them coming back for more. Whether you need a chatbot, a booking system, or a social media integration, we have the expertise to make it happen.",
        icon: TbDeviceMobileMessage,
    },
    {
        title: "High-Performing Mobile Apps",
        desc: "We understand that your mobile app is a crucial part of your business, and that’s why we focus on creating mobile apps that are optimized for speed and performance. Our mobile apps are designed to load quickly, which not only improves the user experience but also helps with search engine optimization (SEO).",
        icon: TbDeviceMobileBolt,
    },
];

export default function MobileAppDevelopmentPage() {
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

                            <GsapTextAnimation mainText={"Mobile App Development"} mainClass="flex flex-wrap" />
                        </h1>
                        <p className="text-base lg:text-[20px] leading-snug lg:leading-[30px] text-white ">
                            We specialize in building high-performing, scalable mobile apps using Android, iOS, Flutter, React Native, Java, and Kotlin. Our experienced team delivers customized solutions designed to meet your business goals, from simple apps to complex enterprise platforms. At TechBeeps Services, we focus on seamless functionality, modern design, and exceptional user experiences.
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
                            <GsapTextAnimation mainText={"Our Services"} mainClass="flex flex-wrap justify-center" />
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {MobileAppDevelopmentServices.map((item, idx) => {
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
            <section className="py-[100px] bg-[#05010f] text-white">
                <div className="container">
                    {/* Section Heading */}
                    <div className="mb-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
                        <div className="w-full lg:w-[40%]">
                            <h2 className="text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] text-white ">
                                <GsapTextAnimation mainText={"Frequently Asked Questions"} mainClass="flex flex-wrap" />
                            </h2>
                        </div>
                        <div className="w-full lg:w-[60%]">
                            <FaqAccordion faqs={faqs} />
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