import { Link, useNavigate } from "react-router";
import { images } from "@/assets";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Youtube, Twitter, Mail, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Footer() {
  const navigate = useNavigate();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    if (isLanguageOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLanguageOpen]);

  // Navigation Links
  const navigationLinks = [
    { label: "Insights", href: "/insights" },
    { label: "Industries", href: "/industries" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "About us", href: "/about" },
  ];

  // Legal & Compliance Links
  const legalLinks = [
    { label: "Investors", href: "/investors" },
    { label: "Terms of use", href: "/terms-of-use" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Privacy notice", href: "/privacy-notice" },
    { label: "Recruitment Disclaimer", href: "/recruitment-disclaimer" },
    { label: "Candidates Privacy Notice", href: "/candidates-privacy-notice" },
    { label: "Security vulnerability notification", href: "/security-vulnerability" },
    { label: "India Shareholders", href: "/india-shareholders" },
  ];

  // Cookies & Policies Links
  const cookieLinks = [
    { label: "Cookie settings", href: "/cookie-settings" },
    { label: "Cookie policy", href: "/cookie-policy" },
  ];

  // Other Links
  const otherLinks = [
    { label: "SpeakUp", href: "/speakup" },
    { label: "Fraud alert", href: "/fraud-alert" },
  ];

  // Social Media Links
  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/neuroverse", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/neuroverse", label: "Facebook" },
    { icon: Twitter, href: "https://www.twitter.com/neuroverse", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/neuroverse", label: "Instagram" },
    { icon: Youtube, href: "https://www.youtube.com/@neuroverse", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-white text-gray-900 mt-4 md:mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 max-w-5k-content">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 mb-12">
          {/* Left Column - Company Branding */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center cursor-pointer flex-shrink-0 w-fit mb-6 group"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
                style={{ gap: '2px' }}
              >
                <img
                  src={images.logos.main}
                  alt="NeuroVerse Logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain"
                />
                <span className="font-heading font-bold text-xl md:text-2xl text-black whitespace-nowrap">
                  NeuroVerse Software Solutions
                </span>
              </motion.div>
            </Link>
            <p className="font-sans text-gray-600 text-sm md:text-base leading-relaxed max-w-md mb-6">
              Transforming the future of technology and business through innovation, expertise, and collaboration.
            </p>
            
            {/* Email Address */}
            <div className="mb-6">
              <a
                href="mailto:info@neuroversesoftwaresolutions.com"
                className="font-sans text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 inline-flex items-center gap-2 group"
              >
                <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                <span className="group-hover:underline">info@neuroversesoftwaresolutions.com</span>
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg border-2 border-gray-300 hover:border-blue-600 bg-white hover:bg-blue-600 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg md:text-xl text-gray-900 mb-4 md:mb-6">
              Navigation
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans block text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1 group"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.href);
                    }}
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg md:text-xl text-gray-900 mb-4 md:mb-6">
              Legal & Compliance
            </h3>
            <ul className="space-y-2 md:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans block text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1 group"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.href);
                    }}
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cookies & Policies Column */}
          <div>
            <h3 className="font-heading font-semibold text-lg md:text-xl text-gray-900 mb-4 md:mb-6">
              Policies
            </h3>
            <ul className="space-y-2 md:space-y-3 mb-6">
              {cookieLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-sans block text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1 group"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(link.href);
                    }}
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Other Links */}
            <div className="space-y-2 md:space-y-3">
              {otherLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-sans block text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1 group"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(link.href);
                  }}
                >
                  <span className="group-hover:translate-x-1 inline-block transition-transform duration-200">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Footer Options and Copyright */}
        <div className="border-t border-gray-200 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Left Side - Footer Options */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center md:justify-start">
              {/* NeuroVerse Logo */}
              <div className="flex items-center">
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                  className="cursor-pointer transition-opacity duration-200 hover:opacity-80"
                >
                  <img
                    src={images.logos.navbar}
                    alt="NeuroVerse Logo"
                    className="h-10 md:h-12 lg:h-14 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Privacy Link */}
              <Link
                to="/privacy"
                className="font-sans text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/privacy");
                }}
              >
                Privacy
              </Link>

              {/* Terms Link */}
              <Link
                to="/terms"
                className="font-sans text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/terms");
                }}
              >
                Terms
              </Link>

              {/* Help Link */}
              <Link
                to="/help"
                className="font-sans text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/help");
                }}
              >
                Help
              </Link>

              {/* Language Selector */}
              <div className="relative" ref={languageDropdownRef}>
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-1 font-sans text-xs md:text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  aria-label="Select language"
                  aria-expanded={isLanguageOpen}
                >
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Language Dropdown */}
                {isLanguageOpen && (
                  <div className="absolute bottom-full left-0 mb-2 bg-white border border-gray-200 rounded-md shadow-lg py-2 min-w-[120px] z-50">
                    <button
                      onClick={() => {
                        setIsLanguageOpen(false);
                        // Handle language change here
                      }}
                      className="w-full text-left px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        setIsLanguageOpen(false);
                        // Handle language change here
                      }}
                      className="w-full text-left px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      Español
                    </button>
                    <button
                      onClick={() => {
                        setIsLanguageOpen(false);
                        // Handle language change here
                      }}
                      className="w-full text-left px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                    >
                      Français
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side - Copyright */}
            <p className="font-sans text-xs md:text-sm text-gray-500 text-center md:text-right">
              © {new Date().getFullYear()} NeuroVerse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
