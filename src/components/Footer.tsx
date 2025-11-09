import { Link, useNavigate } from "react-router";
import { images } from "@/assets";

export default function Footer() {
  const navigate = useNavigate();

  // Middle Column Links (Group 1)
  const middleColumnLinks = [
    { label: "Insights", href: "/insights" },
    { label: "Industries", href: "/industries" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "News", href: "/news" },
    { label: "About us", href: "/about-us" },
    { label: "Contact us", href: "/contact" },
    { label: "Investors", href: "/investors" },
    { label: "Terms of use", href: "/terms-of-use" },
    { label: "Accessibility", href: "/accessibility" },
  ];

  // Right Column Links (Group 2)
  const rightColumnLinks = [
    { label: "Privacy notice", href: "/privacy-notice" },
    { label: "Recruitment Disclaimer", href: "/recruitment-disclaimer" },
    { label: "Candidates Privacy Notice", href: "/candidates-privacy-notice" },
    { label: "Security vulnerability notification", href: "/security-vulnerability" },
    { label: "India Shareholders", href: "/india-shareholders" },
    { label: "Cookie settings", href: "/cookie-settings" },
    { label: "Cookie policy", href: "/cookie-policy" },
    { label: "SpeakUp", href: "/speakup" },
    { label: "Fraud alert", href: "/fraud-alert" },
  ];

  return (
    <footer className="relative bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-5k-content">
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Company Branding */}
          <div>
            {/* Main Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-all duration-300 hover:opacity-80 w-fit"
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
            >
              <img
                src={images.logos.main || images.logos.primary}
                alt="NeuroVerse Logo"
                className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-heading font-bold text-2xl md:text-3xl text-blue-600">
                NeuroVerse
              </span>
            </Link>
          </div>

          {/* Middle Column - Navigation Links Group 1 */}
          <div className="space-y-1">
            {middleColumnLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-1"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.href);
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Column - Navigation Links Group 2 */}
          <div className="space-y-1">
            {rightColumnLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="block text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 py-1"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(link.href);
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} NeuroVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
