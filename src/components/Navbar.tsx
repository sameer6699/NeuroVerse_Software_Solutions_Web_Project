import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Menu, X, Globe, Search, ArrowRight, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { images } from "@/assets";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [dropdownTop, setDropdownTop] = useState(80); // Default: 1rem (16px) + 4rem (64px) = 80px
  const navbarRef = useRef<HTMLElement>(null);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  
  // Check if we're on the contact page
  const isOnContactPage = location.pathname === "/contact";

  // Calculate dropdown position based on navbar bottom
  useEffect(() => {
    const updateDropdownPosition = () => {
      if (navbarRef.current) {
        const navbarRect = navbarRef.current.getBoundingClientRect();
        setDropdownTop(navbarRect.bottom);
      }
    };

    // Initial calculation
    updateDropdownPosition();
    
    // Update on resize
    window.addEventListener('resize', updateDropdownPosition);
    
    // Update on scroll (navbar position might change)
    const handleScroll = () => {
      requestAnimationFrame(updateDropdownPosition);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Update when navbar visibility changes
    const timeoutId = setTimeout(updateDropdownPosition, 100);

    return () => {
      window.removeEventListener('resize', updateDropdownPosition);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [isVisible]);
  

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
    { 
      label: "Insights", 
      href: "/insights", 
      sectionId: "insights",
      description: "Explore our latest thought leadership, ideas, and insights on the issues that are shaping the future of business and society.",
      menuItems: [
        "Hot topics",
        "Industry Reports",
        "Initiatives for research and Development",
        "Our research library",
        "Expert perspectives"
      ],
      featuredTitle: "Capgemini Research Institute",
      featuredDescription: "Our number one ranked think-tank"
    },
    { 
      label: "Industries", 
      href: "/industries", 
      sectionId: "industries",
      description: "Discover industry-specific solutions and insights tailored to your sector.",
      menuItems: [
        "Healthcare",
        "Finance",
        "Retail & E-commerce",
        "Manufacturing",
        "Technology"
      ],
      featuredTitle: "Industry Solutions",
      featuredDescription: "Tailored solutions for every industry"
    },
    { 
      label: "Services", 
      href: "/services", 
      sectionId: "services",
      description: "Comprehensive services to help you achieve your business goals through innovative technology solutions.",
      menuItems: [
        "Cloud Services & Infrastructure",
        "Customer Experience & Engagement",
        "Cybersecurity & Risk Management",
        "Data Analytics & AI Solutions",
        "Enterprise Resource Planning",
        "Smart Manufacturing & Industry 4.0",
        "Sustainability & Green Technology"
      ],
      featuredTitle: "Our Services",
      featuredDescription: "End-to-end solutions for your business transformation"
    },
    { 
      label: "Products", 
      href: "/products", 
      sectionId: "products",
      description: "Explore our innovative products and platforms.",
      menuItems: [
        "SeedLink",
        "WelthWise",
        "AI Platform",
        "ML Solutions",
        "Data Analytics"
      ],
      featuredTitle: "Our Products",
      featuredDescription: "Innovative solutions for modern businesses"
    },
    { 
      label: "Careers", 
      href: "/careers", 
      sectionId: "careers",
      description: "Become part of a diverse collective of free-thinkers, entrepreneurs and experts – and help us to make a difference.",
      menuItems: [
        "Why join NeuroVerse",
        "Life at NeuroVerse",
        "Meet our people",
        "Career paths",
        "Let's connect",
        "Join us"
      ],
      featuredTitle: "Join Our Team",
      featuredDescription: "Build the future with us"
    },
    { 
      label: "News", 
      href: "/news", 
      sectionId: "news",
      description: "Stay updated with our latest news and announcements.",
      menuItems: [
        "Latest News",
        "Press Releases",
        "Blog",
        "Events",
        "Media Kit"
      ],
      featuredTitle: "Latest Updates",
      featuredDescription: "Stay informed with our news"
    },
    { 
      label: "About us", 
      href: "/about", 
      sectionId: "about",
      description: "Learn about our mission, vision, values, and the team behind NeuroVerse's innovative solutions.",
      menuItems: [
        "Our Story",
        "Mission & Vision",
        "Leadership Team",
        "Company Values",
        "Our Culture",
        "Partners & Alliances"
      ],
      featuredTitle: "About NeuroVerse",
      featuredDescription: "Building the future of technology"
    },
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
      ref={navbarRef}
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-4 left-4 right-4 z-50 glass-nav border-t border-b transition-all duration-300 rounded-2xl shadow-lg"
      style={{ maxWidth: 'calc(100% - 2rem)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5k-content relative">
        <div className="flex items-center h-16 gap-6">
          {/* Logo and NeuroVerse Text - At the start of navbar */}
          <Link to="/" className="flex items-center cursor-pointer flex-shrink-0 mr-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2"
            >
              <img
                src={images.logos.main}
                alt="NeuroVerse Logo"
                className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain"
              />
              <span className="font-sans font-semibold text-base md:text-lg lg:text-xl text-gray-900 whitespace-nowrap">
                NeuroVerse
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center gap-4 relative">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setHoveredMenu(link.sectionId)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link 
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
              </div>
            ))}
          </div>

          {/* Mega Menu Dropdown - Full Width */}
          <AnimatePresence>
            {hoveredMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="fixed left-0 right-0 w-screen bg-white shadow-2xl border-t border-gray-200 overflow-hidden z-50"
                style={{ top: `${dropdownTop}px` }}
                onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {(() => {
                  const link = navLinks.find(l => l.sectionId === hoveredMenu);
                  if (!link) return null;
                  return (
                    <div className="grid grid-cols-3 h-full">
                      {/* Left Column - Dark Blue Background */}
                      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white flex flex-col justify-between">
                        <div>
                          <h3 className="text-3xl font-bold mb-4">{link.label}</h3>
                          <p className="text-white/90 text-sm leading-relaxed mb-6">
                            {link.description}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="border-white bg-transparent hover:bg-white w-fit transition-all duration-300 group"
                          style={{ color: 'white' }}
                          onClick={() => {
                            if (link.sectionId === "services") {
                              navigate("/services#services");
                            } else if (link.sectionId === "careers") {
                              navigate("/careers");
                            } else if (link.sectionId === "news") {
                              navigate("/news");
                            } else if (link.sectionId === "about") {
                              navigate("/about");
                            } else {
                              navigate(link.href);
                            }
                            setHoveredMenu(null);
                          }}
                        >
                          <span className="text-white group-hover:text-blue-800 transition-colors duration-300" style={{ color: 'white' }}>Learn more</span>
                          <ArrowRight className="ml-2 h-4 w-4 text-white group-hover:text-blue-800 transition-colors duration-300" style={{ color: 'white' }} />
                        </Button>
                      </div>

                      {/* Middle Column - Navigation Links */}
                      <div className="bg-white p-8 border-r border-gray-200">
                        <ul className="space-y-3">
                          {link.menuItems.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={link.href}
                                className="flex items-center justify-between text-gray-700 hover:text-primary transition-colors group"
                                onClick={(e) => {
                                  handleSectionClick(link.href, link.sectionId, e);
                                  setHoveredMenu(null);
                                }}
                              >
                                <span className="text-sm">{item}</span>
                                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column - Featured Content */}
                      <div className="bg-white p-8">
                        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                          <img
                            src={images.logos.seedLink}
                            alt={link.featuredTitle}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2">
                          {link.featuredTitle}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {link.featuredDescription}
                        </p>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>

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
