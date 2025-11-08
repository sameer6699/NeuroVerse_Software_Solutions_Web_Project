import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Menu, X, Globe, Search } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { images } from "@/assets";

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
    { label: "Why NeuroVerse", href: "/why-neuroverse", sectionId: "why-neuroverse" },
    { label: "Products", href: "/products", sectionId: "products" },
    { label: "Solutions", href: "/solutions", sectionId: "solutions" },
    { label: "Case Studies", href: "/case-studies", sectionId: "case-studies" },
    { label: "Careers", href: "/careers", sectionId: "careers" },
  ];

  // Handle navigation to sections
  const handleSectionClick = (href: string, sectionId: string, e?: React.MouseEvent<HTMLAnchorElement>) => {
    if (e) {
      e.preventDefault();
    }

    // Navigate to clean URL (scroll will be handled by Home component based on pathname)
    navigate(href);
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 left-4 right-4 z-50 glass-nav border-t border-b transition-all duration-300 rounded-2xl shadow-lg"
      style={{ maxWidth: 'calc(100% - 2rem)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5k-content">
        <div className="flex items-center h-16 gap-6">
          <Link to="/" className="flex items-center cursor-pointer flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-0.5"
            >
              <img
                src={images.logos.main}
                alt="NeuroVerse Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="font-sans font-semibold text-lg text-gray-900">
                NeuroVerse
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                to={link.href}
                onClick={(e) => handleSectionClick(link.href, link.sectionId, e)}
              >
                <Button 
                  variant="ghost" 
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 relative hover:bg-transparent group px-0"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4 ml-auto">
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
          className="md:hidden bg-white border-t border-gray-200 rounded-b-2xl"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                to={link.href}
                onClick={(e) => {
                  handleSectionClick(link.href, link.sectionId, e);
                  setMobileMenuOpen(false);
                }}
              >
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                >
                  {link.label}
                </Button>
              </Link>
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
