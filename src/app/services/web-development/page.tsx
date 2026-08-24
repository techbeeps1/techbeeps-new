import Image from "next/image";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import FaqAccordion from "../../components/FaqAccordion";
import LogoMarquee from "../../components/LogoMarquee";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import { FaPhp, FaLaravel, FaNodeJs } from "react-icons/fa6";
import GsapTextAnimation from "@/app/components/GsapTextAnimation";
const faqs = [
    {
        question: "What does a website design & development consultant do?",
        answer: "A website design and development consultant combines technical and creative expertise. They optimize online presence. They analyze what the clients need. They create strategies that are customized for each client & small business website development. We will oversee the implementation of websites that are easy to use. We play a crucial role in making sure everything runs smoothly. We create an attractive design to help you succeed online."
    },
    {
        question: "How do I become a developer consultant?",
        answer: "To become a developer consultant, you need to learn coding languages. To gain a deep understanding of the industry, and to develop strong communication skills. Stay updated on emerging technologies. Build a strong portfolio. Network within the developer community. We provide specialized problem-solving abilities and client-focused solutions. To succeed in this exciting and fulfilling web development solutions."
    },
    {
        question: "How to prepare before partnering with a web development company?",
        answer: "Before you partner with a best web development company usa, make sure you know your project goals, budget, and timeline. Research potential firms. Review portfolios. Check client testimonials. Tell them what you expect. Ask how they will develop it. Make sure they communicate clearly. Make sure they are experts. Check what technology they use. Talk about ongoing support. Being well-prepared guarantees a successful collaboration."
    },
    {
        question: "How long does it take to complete a UI/UX design project?",
        answer: "The time required to complete ui ux development services can vary depending on the complexity of the project, the size of the group, and the scope of the work. According to the provided search outcomes, a normal UI/UX layout venture can take anywhere from three to five months. However, the timeline may be condensed or prolonged based totally on the venture’s specific requirements and constraints. The UX design technique typically consists of several stages, consisting of research, strategy, design, prototyping, and trying out. Each level can take various quantities of time, depending on the mission’s complexity and the crew’s length. For instance, studies and strategy can take up to a month, while design and prototyping can take up to two months. Testing and iteration can take a month or more, depending on the quantity of checking-out rounds required."
    },
    {
        question: "How long does a web development project take to complete from start to finish?",
        answer: "The timeline for a web development project varies based on complexity and features. Simple websites may take a few weeks, while complex applications could span several months. Factors like client feedback, scope changes, and team efficiency influence the duration. Clear communication and meticulous planning expedite the process."
    },
    {
        question: "What are the 5 benefits of custom website design and development?",
        answer: "Custom website design and development offer a tailored online presence, ensuring unique brand representation. This enhances user experience, boosts SEO, and enables efficient navigation. Tailored functionalities cater to specific business needs, fostering scalability. Ultimately, a custom website sets businesses apart, instills credibility, and maximizes online potential."
    }
];

const WebDevelopmentServices = [
    {
        title: "PHP",
        desc: "PHP is a powerful scripting language that creates dynamic web content. PHP is a flexible and simple programming language that is widely used in PHP Development Services . It can adapt to diverse needs. The community support is extensive. We make sure websites work well for many different uses.",
        icon: FaPhp,
    },
    {
        title: "Laravel",
        desc: "Laravel, a prominent PHP web application framework, prioritizes elegance and simplicity. It has streamlined features for routing, caching, and authentication. This facilitates efficient and expressive web development. Laravel Development Services is a sophisticated choice. It seamlessly meets modern demands. It ensures a smooth development experience with its comprehensive tools and features.",
        icon: FaLaravel,
    },
    {
        title: "NodeJs",
        desc: "Node.js, leveraging the V8 JavaScript engine, revolutionizes server-side JavaScript execution. Its event-driven, non-blocking architecture enhances scalability and real-time application performance. Our Node.js Development services is ideal for building efficient and responsive web applications. It drives innovation in modern web development, ensuring optimal performance and responsiveness.",
        icon: FaNodeJs,
    },
];

export default function WebDevelopmentPage() {
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

                            <GsapTextAnimation mainText={"Web Development"} mainClass="flex flex-wrap" />
                        </h1>
                        <p className="text-base lg:text-[20px] leading-snug lg:leading-[30px] text-white ">
                            Boost your online presence with our customized web development solutions. Our experts use the latest technology to create user-friendly, responsive, and high-performing websites. With innovative designs and smooth functionality, we help attract more users and drive business growth.
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
                            <GsapTextAnimation mainText={"Custom Web Development Services"} mainClass="flex flex-wrap justify-center" />
                        </h2>
                        <p className="text-white text-sm md:text-base leading-snug lg:leading-[28px] max-w-[1000px] mx-auto">
                            Start your digital journey with TechBeeps through our professional **custom website development services**. We create dynamic, responsive, and user-friendly websites tailored to your brand. With innovative ideas and the latest technologies, we deliver powerful functionality and engaging designs that enhance user experiences, attract audiences, and strengthen your online presence.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {WebDevelopmentServices.map((item, idx) => {
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
                                <GsapTextAnimation mainText={"Leading Web Development Company in the USA"} mainClass="flex flex-wrap" />
                            </h2>
                            <p>
                                At Techbeeps we offer every custom website development service you need to build a full-blown web-based product, such as:
                            </p>
                        </div>

                        <ul className="space-y-5">
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    Website Development
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    Web Application Development
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    E-commerce Solutions Development
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    Dedicated Content Management System Development
                                </p>
                            </li>
                            <li className="flex gap-4 items-center">
                                <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                                <p>
                                    No-code Development & Low-code Development
                                </p>
                            </li>
                        </ul>

                        <div className="pt-2">
                            <button className="px-6 py-3.5 cursor-pointer flex items-center group hover:bg-primary hover:text-white duration-400 gap-2.5 bg-white text-black rounded-[50px] font-medium">
                                Explore More
                                <BsArrowRightCircle className="-rotate-45 h-5 w-5 duration-400 group-hover:rotate-0" />
                            </button>
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