import { Link, useNavigate } from "react-router";
import { images } from "@/assets";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  // Navigation Links
  const navigationLinks = [
    { label: "Insights", href: "/insights" },
    { label: "Industries", href: "/industries" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" },
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
                <span className="font-bold text-xl md:text-2xl text-black whitespace-nowrap" style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}>
                  NeuroVerse Software Solutions
                </span>
              </motion.div>
            </Link>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md mb-6">
              Transforming the future of technology and business through innovation, expertise, and collaboration.
            </p>
            
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
                    className="block text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1 group"
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
                    className="block text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1 group"
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
                    className="block text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1 group"
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
                  className="block text-sm md:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200 py-1 group"
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

        {/* Bottom Section - Copyright and Additional Info */}
        <div className="border-t border-gray-200 pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row items-center justify-end gap-4 md:gap-6">
            <p className="text-xs md:text-sm text-gray-500 text-center md:text-right">
              © {new Date().getFullYear()} NeuroVerse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
