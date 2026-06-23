import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#05010f_0%,#854CFF8A_100%)] text-white pt-12 lg:pt-20 relative z-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
          
          {/* Logo & Description */}
          <div className="space-y-6">
            <Image
              src="/techbeepsLogo.svg"
              alt="Techbeeps Logo"
              width={200}
              height={32}
              className="mb-4"
            />
            <p className="text-white text-[15px] leading-[24px] font-normal">
              Techbeeps Services provides IT solutions. Such as Web development, Website design, application design and many more. We create an exclusive website for digital success and growth.
            </p>
            <div className="flex items-center gap-3">
              <Link href="https://www.facebook.com/techbeepss/" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary duration-300">
                <FaFacebookF className="w-4 h-4" />
              </Link>
              <Link href="https://x.com/techbeepss" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary duration-300">
                <FaXTwitter className="w-4 h-4" />
              </Link>
              <Link href="https://www.instagram.com/techbeeps/" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary duration-300">
                <FaInstagram className="w-4 h-4" />
              </Link>
              <Link href="https://www.youtube.com/@techbeepss" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary duration-300">
                <FaYoutube className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/company/techbeeps/posts/?feedView=all" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary hover:border-primary duration-300">
                <FaLinkedinIn className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] 
  bg-clip-text text-transparent text-[22px] font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">AI Solutions</Link></li>
              <li><Link href="#" className="text-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">Python</Link></li>
              <li><Link href="#" className="ttext-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">Shopify Development</Link></li>
              <li><Link href="#" className="text-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">Mobile App development</Link></li>
              <li><Link href="#" className="text-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">Web Development</Link></li>
              <li><Link href="/services/ui-ux-design" className="text-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">UI/UX Design</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] 
  bg-clip-text text-transparent text-[22px] font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">About Us</Link></li>
              <li><Link href="/portfolio" className="text-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">Portfolio</Link></li>
              <li><Link href="#" className="text-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">Team</Link></li>
              <li><Link href="/contact-us" className="text-white hover:text-primary text-[15px] leading-[24px] font-normal duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] 
  bg-clip-text text-transparent text-[22px] font-medium mb-6">Connect</h3>
            <ul className="space-y-4">
              <li className="grid grid-cols-[80px_1fr] text-[15px] leading-[24px] font-normal text-white">
                <span>Phone</span>
                <span>: +91 141 452 3119</span>
              </li>
              <li className="grid grid-cols-[80px_1fr] text-[15px] leading-[24px] font-normal text-white">
                <span>Whatsapp</span>
                <span>: +91 811 226 9797</span>
              </li>
              <li className="grid grid-cols-[80px_1fr] text-[15px] leading-[24px] font-normal text-white hover:text-primary duration-300">
                <span>Email</span>
                <Link href="mailto:tech.beeps@outlook.com">: tech.beeps@outlook.com</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-16 py-5  border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-[13px]">
            2026 © Techbeeps Services. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-white hover:text-primary text-[13px] duration-300">Privacy Policy</Link>
            <Link href="#" className="text-white hover:text-primary text-[13px] duration-300">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
