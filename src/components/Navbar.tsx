import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Menu, X, Globe, Search } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // Check if we're on the contact page
  const isOnContactPage = location.pathname === "/contact";
  

  // Track scroll direction and hide/show navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    const scrollDifference = currentScrollY - lastScrollY;

    // Show navbar at the top of the page
    if (currentScrollY < 10) {
      setIsVisible(true);
    } 
    // Hide navbar when scrolling down
    else if (scrollDifference > 0 && currentScrollY > 100) {
      setIsVisible(false);
    } 
    // Show navbar when scrolling up
    else if (scrollDifference < 0) {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  });

  const navLinks = [
    { label: "Why NeuroVerse", href: "#why-neuroverse" },
    { label: "Products", href: "#products" },
    { label: "Solutions", href: "#solutions" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Careers", href: "#careers" },
  ];

  // Handle navigation to sections
  const handleSectionClick = (href: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) {
      e.preventDefault();
    }

    const sectionId = href.replace("#", "");

    // If we're on the contact page, navigate to home with hash
    if (isOnContactPage) {
      navigate(`/${href}`);
      // The Home component's useEffect will handle scrolling when location.hash changes
    } else {
      // If already on home page, update URL hash and scroll to section
      window.history.pushState(null, "", href);
      const element = document.querySelector(`#${sectionId}`);
      if (element) {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(element, {
            offset: -80,
            duration: 1.5,
          });
        } else {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.scrollBy(0, -80);
        }
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav border-t border-b transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5k-content">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-sans font-semibold text-lg text-gray-900">
                NeuroVerse
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => handleSectionClick(link.href, e)}
              >
                <Button 
                  variant="ghost" 
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 relative hover:bg-transparent group px-0"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Button>
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Globe Icon */}
            <button
              onClick={() => {
                // Handle language/region selection
                console.log("Language selector clicked");
              }}
              className="text-slate-600 hover:text-slate-800 transition-colors cursor-pointer p-2 rounded-md hover:bg-gray-100"
              aria-label="Select language"
            >
              <Globe className="w-5 h-5" />
            </button>

            {/* Search Icon */}
            <button
              onClick={() => {
                // Handle search
                console.log("Search clicked");
              }}
              className="text-slate-600 hover:text-slate-800 transition-colors cursor-pointer p-2 rounded-md hover:bg-gray-100"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Us Text */}
            <Link
              to="/contact"
              className="text-slate-600 hover:text-slate-800 transition-colors text-sm font-medium relative group px-0 py-2"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {isAuthenticated ? (
              <Button
                onClick={() => navigate("/dashboard")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
              >
                Dashboard
              </Button>
            ) : (
              <>
                <Button
                  variant="ghost"
                  onClick={() => navigate("/auth")}
                  className="relative hover:bg-transparent text-slate-600 hover:text-slate-800 group px-0"
                >
                  Login
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-800 transition-all duration-300 group-hover:w-full"></span>
                </Button>
                <Button
                  onClick={() => navigate("/contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
                >
                  Request Callback
                </Button>
              </>
            )}
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => {
                  handleSectionClick(link.href, e);
                  setMobileMenuOpen(false);
                }}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                >
                  {link.label}
                </Button>
              </a>
            ))}
            <div className="pt-4 space-y-2">
              {isAuthenticated ? (
                <Button
                  onClick={() => {
                    navigate("/dashboard");
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                >
                  Dashboard
                </Button>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={() => {
                      navigate("/auth");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => {
                      navigate("/contact");
                      setMobileMenuOpen(false);
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Request Callback
                  </Button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
