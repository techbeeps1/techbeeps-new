import Image from "next/image";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";
import CallToAction from "../../components/CallToAction";
import FaqAccordion from "../../components/FaqAccordion";
import LogoMarquee from "../../components/LogoMarquee";
import { BsArrowRightCircle, BsCheckAll } from "react-icons/bs";
import GsapTextAnimation from "@/app/components/GsapTextAnimation";
const faqs = [
  {
    question: "What is a UI UX design agency?",
    answer: "A UI /UX app development agency is chargeable for developing consumer experiences that enhance digital merchandise, making them simpler to apply and extra enjoyable for customers. Such organizations may help corporations in building personal interfaces that can be simple to grasp via builders and might encourage customers to agree with them on various wishes, preferences, and business goals. The evaluation does not recommend any precise organization and does not assure the same consequences for every consumer. It is vital to base the selection of an employer on individual requirements, alternatives, and commercial enterprise objectives, as opposed to just focusing on personal enjoyment and consumer interface layout."
  },
  {
    question: "What services do UI/UX design agencies offer?",
    answer: "UI/UX layout businesses offer a wide range of ui ux design services aimed at creating user-pleasant, visually appealing, and intuitive virtual reviews. These offerings embody various aspects of person interface (UI) layout and consumer revel in (UX) design, catering to the needs of agencies and agencies looking to enhance their digital merchandise or create new ones. It can additionally provide services beyond virtual interfaces, which include business layout, carrier design, and designing bodily items and hardware devices. Additionally, they’ll offer expertise in mobile ux design service, virtual advertising, and usefulness, catering to a wide variety of client needs and possibilities."
  },
  {
    question: "How do I choose the right UI UX design agency for my business?",
    answer: "Choosing the right UI/UX app development agency for your enterprise is important for growing a successful virtual merchandise that meets your objectives and resonates with your audience. Take the time to check the portfolios and case studies of the shortlisted groups to evaluate the quality of their paintings and the sorts of projects they have undertaken. Pay interest on the range in their portfolio, the industries they have worked with, and the outcomes they have accomplished. The expertise and abilities of every business enterprise in terms of user research, ux design services, prototyping, usability trying out, and other applicable competencies. Consider whether they have a multidisciplinary crew with various abilities and enjoy."
  },
  {
    question: "How long does it take to complete a UI/UX design project?",
    answer: "The time required to complete ui ux development services can vary depending on the complexity of the project, the size of the group, and the scope of the work. According to the provided search outcomes, a normal UI/UX layout venture can take anywhere from three to five months. However, the timeline may be condensed or prolonged based totally on the venture’s specific requirements and constraints. The UX design technique typically consists of several stages, consisting of research, strategy, design, prototyping, and trying out. Each level can take various quantities of time, depending on the mission’s complexity and the crew’s length. For instance, studies and strategy can take up to a month, while design and prototyping can take up to two months. Testing and iteration can take a month or more, depending on the quantity of checking-out rounds required."
  },
  {
    question: "Why To Choose TechBeeps As Your ui-ux design Company?",
    answer: "Techbeeps is a custom web development company that offers UI UX Design Services. They focus on simplicity, accuracy, customization, unique design, and effective communication with their clients.. They have a team of experienced designers who follow user-centric principles and conduct extensive user research to deliver visually polished interfaces that match the product concept, industry, and target users. Techbeeps offers a complete set of UI/UX design and development services, from UX research to wireframing and prototyping, all the way to testing and implementation. They also provide ongoing design support, even after the completion of the initial mobile ui ux design services."
  }
];

const uiUxServices = [
  {
    title: "Custom Web Design & Development",
    desc: "We create UI and UX design custom websites with great attention to creativity and detail. We design websites specifically for you. Make sure the digital experience for your brand is smooth and stands out.",
    image: "/icon-1.svg",
  },
  {
    title: "Corporate Branding & Graphics Design",
    desc: "Creating a unique company image by strategic branding. Graphic design enhances the visual appeal of your brand. When messaging and logos are seamlessly integrated, it helps people recognize and trust the brand.",
    image: "/icon-2.svg",
  },
  {
    title: "Wireframing",
    desc: "Wireframing is an important part of web design, outlining a site's structure. It improves shows design and teamwork. Wireframes make sure users have a successful design and smooth experience.",
    image: "/icon-3.svg",
  },
  {
    title: "Mobile App Design",
    desc: "Creating great mobile UI UX design services. The design combines usefulness and beauty. A successful design is easy to navigate. It has appealing visuals and user-friendly interfaces. We ensure that the user experience is easy to understand and enjoyable.",
    image: "/icon-4.svg",
  },
  {
    title: "Wearables App Design",
    desc: "To make a wearables app design seamless, consider the user experience and functionality, and visually pleasing aesthetics. Elevate user experience with innovative features. Ensure a blend of style and substance for unparalleled performance.",
    image: "/icon-5.svg",
  },
  {
    title: "Product Design",
    desc: "Our innovative ui/ux design services smoothly combines function and form, prioritizing user experience. It's a creative journey. It starts with coming up with ideas and creating prototypes. This journey shapes the future of leading companies.",
    image: "/icon-6.svg",
  },
];

export default function ServicesPage() {
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
              
              <GsapTextAnimation mainText={"UI/UX Design Services"}  mainClass="flex flex-wrap"/>
            </h1>            
            <p className="text-base lg:text-[20px] leading-snug lg:leading-[30px] text-white ">
             At TechBeeps Services, we create intelligent, user-focused digital experiences that blend stunning design with high performance.Using a data-driven and AI-powered approach, we design fast, intuitive, and scalable websites and apps tailored to your users.Our solutions enhance engagement, improve usability, and drive real business growth.
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
              <GsapTextAnimation mainText={"Our Ui Ux Design Services <br/> and UX Consulting"}  mainClass="flex flex-wrap justify-center"/>
            </h2>
            <p className="text-white text-sm md:text-base leading-snug lg:leading-[28px] max-w-[1000px] mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {uiUxServices.map((item, idx) => {
              const Image = item.image;
              return (
                <div 
                  key={idx} 
                  className="group relative rounded-[15px] p-[1px] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(80,76,255,0.4)] cursor-pointer overflow-hidden"
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
                        <img 
                          src={item.image} 
                          width={32}
                          height={32}
                          alt="icon" 
                          className="w-[24px] lg:w-[32px] h-auto relative z-10 transition-transform duration-500 group-hover:scale-110" 
                        />
                      </div>
                      <div className="space-y-[16px] lg:space-y-[20px] mt-auto">
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
                      <GsapTextAnimation mainText={"What We Promise for <br/> Successful Projects"}  mainClass="flex flex-wrap"/>
                    </h2>
                    <p>
                      We have developed a streamlined software delivery process, encompassing project planning, agile methodologies.
                    </p>
                  </div>
      
                  <ul className="space-y-5">
                    <li className="flex gap-4 items-start">
                      <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                      <p>
                        TechBeeps biggest concern when choosing a technology is how it fits our customer's needs.
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                      <p>
                        Our customers' time is their money, so completing every project on time is one of company's biggest priorities.
                      </p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <BsCheckAll className="text-primary w-[40px] h-[40px] shrink-0 mt-0.5" />
                      <p>
                        We promise that we never have any commercial incentive while choosing a technology or approach, we base our decision only.
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
                      alt="promise"
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
              <GsapTextAnimation mainText={"Frequently Asked Questions"}  mainClass="flex flex-wrap"/>              
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
