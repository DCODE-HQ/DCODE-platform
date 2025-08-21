import { Mail, Phone, MapPin } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { SlSocialLinkedin } from 'react-icons/sl';
import Logo from '../../ui/Logo/Logo';

const Footer = () => {
  const scrollToSection = id => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt-8 pb-6">
      {/* Top Line */}
      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 xl:-mx-32">
        <hr className="w-full border-t border-[#D5D5D54D]" />
      </div>

      {/* Footer Main Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pt-8 text-sm">
        {/* Column 1: Logo and Description */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="/bg-[#B4FF06] w-30 h-10 sm:w-30 sm:h-10 flex items-center justify-center rounded-md text-black font-bold">
              <Logo />
            </div>
          </div>
          <p className="text-[#D5D5D5B3] leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm">
            Empowering the next generation of developers through structured
            open-source contributions and community-driven learning experiences.
          </p>
          <div className="flex gap-3 sm:gap-4 pt-1 sm:pt-2.5 text-white">
            <a
              href="https://github.com/DCODE-HQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/dcode-headquarters/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialLinkedin className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-start sm:items-center lg:items-start justify-self-start sm:justify-self-center">
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Quick Links
          </h3>
          <ul className="space-y-1 sm:space-y-2 text-[#D5D5D5B3] text-xs sm:text-sm">
            <li>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-white transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('#About');
                }}
                className="hover:text-white transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  scrollToSection('#timeline');
                }}
                className="hover:text-white transition-colors"
              >
                Timeline
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
            Contact Info
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-[#D5D5D5] text-xs sm:text-sm">
            <li className="flex items-start gap-2">
              <Mail className="text-[#65770D] flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 mt-0.5" />
              <span className="text-[#D5D5D5B3]">dcode.codes@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="text-[#65770D] flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 mt-0.5" />
              <span className="text-[#D5D5D5B3]">
                +91 92500 21256 <span>(Rohan Singh)</span>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="text-[#65770D] flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 mt-0.5" />
              <span className="text-[#D5D5D5B3]">
                Rishihood University, NH44, Chowk, Bahalgarh, Sonipat,
                <br className="hidden sm:block" />
                Kishora, Haryana 131001
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <hr className="border-t border-[#D5D5D54D] my-6 sm:my-8" />

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-[#D5D5D5]">
        <div className="flex gap-4 sm:gap-6">
          <a
            href="/privacy"
            className="hover:underline hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="hover:underline hover:text-white transition-colors"
          >
            Terms & Conditions
          </a>
        </div>
        <div>© 2025 DCODE. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
