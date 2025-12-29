import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Search, ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { images } from "@/assets";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null);
  const [dropdownTop, setDropdownTop] = useState(128); // Default: 8rem (128px) - dynamically updated based on navbar height
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or perform search
      console.log("Searching for:", searchQuery);
      // You can add your search logic here
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

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
  
  // Initial check for hero section visibility on mount and route change
  useEffect(() => {
    const checkHeroSection = () => {
      // Find hero section element - universal detection for all pages
      let heroSection = document.getElementById('home') || document.querySelector('section[id="home"]');
      
      if (!heroSection) {
        heroSection = document.querySelector('section[class*="hero"], section[class*="Hero"]');
      }
      
      if (!heroSection) {
        heroSection = document.querySelector('section:first-of-type');
      }
      
      if (heroSection) {
        const heroTop = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        const heroBottom = heroTop + heroHeight;
        const currentScrollY = window.scrollY || 0;
        const isInHeroSection = currentScrollY >= 0 && currentScrollY <= (heroBottom - 96);
        setIsVisible(isInHeroSection);
      } else {
        setIsVisible(false);
      }
    };
    
    // Check immediately
    checkHeroSection();
    
    // Also check after a short delay to ensure DOM is fully loaded
    const timeoutId = setTimeout(checkHeroSection, 100);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  // Show navbar only when user is in hero section - works across all pages
  useMotionValueEvent(scrollY, "change", (latest) => {
    const currentScrollY = latest;
    
    // Find hero section element - universal detection for all pages
    // Priority 1: Check for 'home' id (most common pattern)
    let heroSection = document.getElementById('home') || document.querySelector('section[id="home"]');
    
    // Priority 2: If not found, check for first section with hero-related classes or attributes
    if (!heroSection) {
      heroSection = document.querySelector('section[class*="hero"], section[class*="Hero"]');
    }
    
    // Priority 3: If still not found, use the first section on the page (universal fallback)
    // This works for all pages: Home, Industries, Healthcare, Finance, RetailEcommerce, 
    // Manufacturing, Insights, Services, Careers, News, About, Contact
    if (!heroSection) {
      heroSection = document.querySelector('section:first-of-type');
    }
    
    if (heroSection) {
      const heroTop = heroSection.offsetTop;
      const heroHeight = heroSection.offsetHeight;
      const heroBottom = heroTop + heroHeight;
      
      // Show navbar only if scroll position is within hero section
      // Adding navbar height (96px) to account for fixed positioning
      const isInHeroSection = currentScrollY >= 0 && currentScrollY <= (heroBottom - 96);
      setIsVisible(isInHeroSection);
    } else {
      // If hero section not found (shouldn't happen), hide navbar by default
      // This ensures navbar only shows when we can detect a hero section
      setIsVisible(false);
    }
    
    setLastScrollY(currentScrollY);
  });

  // Filter navLinks to match image (Insights, Industries, Services, About us, Products, Careers, News)
  const navLinks = [
    { 
      label: "Insights", 
      href: "/insights", 
      sectionId: "insights",
      description: "Explore our latest thought leadership, ideas, and insights on the issues that are shaping the future of business and society.",
      menuItems: [
        "Hot topics",
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
        "Software Development & Engineering"
      ],
      featuredTitle: "Our Services",
      featuredDescription: "End-to-end solutions for your business transformation"
    },
    { 
      label: "About us", 
      href: "/about", 
      sectionId: "about",
      description: "Learn about our mission, vision, values, and the team behind NeuroVerse's innovative solutions.",
      menuItems: [
        "Our Story",
        "Company Values",
        "Our Culture",
        "Management and governance",
        "Partners & Alliances"
      ],
      featuredTitle: "About NeuroVerse",
      featuredDescription: "Building the future of technology"
    },
    { 
      label: "Products", 
      href: "/products", 
      sectionId: "products",
      description: "Innovative technology products and platforms designed to accelerate your digital transformation and drive business growth.",
      menuItems: [
        "SeedLink",
        "WelthWise"
      ],
      featuredTitle: "Our Products",
      featuredDescription: "Cutting-edge technology products for modern businesses"
    },
    { 
      label: "Careers", 
      href: "/careers", 
      sectionId: "careers",
      description: "Become part of a diverse collective of free-thinkers, entrepreneurs and experts – and help us to make a difference.",
      menuItems: [
        "Why join NeuroVerse",
        "Life at NeuroVerse",
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
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 transition-all duration-300"
      style={{ 
        backgroundColor: '#ffffff',
        pointerEvents: isVisible ? 'auto' : 'none' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-5k-content">
        <div className="flex items-center justify-between h-32">
          {/* Left Section: Logo */}
          <Link to="/" className="flex items-center cursor-pointer flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <img
                src={images.logos.navbar}
                alt="NeuroVerse Logo"
                className="h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
                loading="eager"
              />
            </motion.div>
          </Link>

          {/* Center Section: Main Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 relative flex-1 justify-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || location.pathname.includes(link.sectionId);
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(link.sectionId)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link 
                    to={link.href}
                    onClick={(e) => handleSectionClick(link.href, link.sectionId, e)}
                    className="relative"
                  >
                    <span 
                      className={`text-sm font-medium transition-colors duration-200 relative group ${
                        isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-colors duration-300"></span>
                      )}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Mega Menu Dropdown - Full Width with Consistent Size */}
          <AnimatePresence>
            {hoveredMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="fixed left-0 right-0 w-screen bg-white shadow-2xl border-t border-gray-200 overflow-hidden z-50"
                style={{ 
                  backgroundColor: '#ffffff', 
                  top: `${dropdownTop}px`,
                  height: '480px', // Fixed height for consistent dropdown size
                  minHeight: '480px',
                  maxHeight: '480px'
                }}
                onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {(() => {
                  const link = navLinks.find(l => l.sectionId === hoveredMenu);
                  if (!link) return null;
                  return (
                    <div className="grid grid-cols-3 h-full" style={{ height: '100%' }}>
                      {/* Left Column - Dark Blue Background */}
                      <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-white flex flex-col justify-between" style={{ height: '100%' }}>
                        <div>
                          <h3 className="text-3xl font-bold mb-4">{link.label}</h3>
                          <p className="text-white/90 text-sm leading-relaxed mb-6">
                            {link.description}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          className="border-white bg-transparent hover:bg-transparent w-fit group"
                          style={{ color: 'white' }}
                          onClick={() => {
                            if (link.sectionId === "services") {
                              navigate("/services");
                            } else if (link.sectionId === "products") {
                              navigate("/products");
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
                          <span className="text-white" style={{ color: 'white' }}>Learn more</span>
                          <ArrowRight className="ml-2 h-4 w-4 text-white" style={{ color: 'white' }} />
                        </Button>
                      </div>

                      {/* Middle Column - Navigation Links */}
                      <div className="bg-white p-8 border-r border-gray-200 relative overflow-y-auto" style={{ height: '100%' }}>
                        <ul className="space-y-3" style={{ maxHeight: '100%', overflowY: 'auto' }}>
                          {link.menuItems.map((item, index) => {
                            // Special handling for Healthcare, Finance, Retail & E-commerce, Manufacturing, and Technology in Industries menu
                            // Special handling for Cloud Services & Infrastructure in Services menu
                            let itemHref = link.href;
                            if (link.sectionId === "insights") {
                              if (item === "Hot topics") {
                                itemHref = "/insights/hot-topic";
                              } else if (item === "Our research library") {
                                itemHref = "/insights/research-library";
                              } else if (item === "Initiatives for research and Development") {
                                itemHref = "/insights/research-and-development";
                              }
                            } else if (link.sectionId === "industries") {
                              if (item === "Healthcare") {
                                itemHref = "/industries/healthcare";
                              } else if (item === "Finance") {
                                itemHref = "/industries/finance";
                              } else if (item === "Retail & E-commerce") {
                                itemHref = "/industries/retail-ecommerce";
                              } else if (item === "Manufacturing") {
                                itemHref = "/industries/manufacturing";
                              } else if (item === "Technology") {
                                itemHref = "/industries/technology";
                              }
                            } else if (link.sectionId === "services") {
                              if (item === "Cloud Services & Infrastructure") {
                                itemHref = "/services/cloud-services-infrastructure";
                              } else if (item === "Customer Experience & Engagement") {
                                itemHref = "/services/customer-experience-engagement";
                              } else if (item === "Cybersecurity & Risk Management") {
                                itemHref = "/services/CyberSecurity-and-risk-management";
                              } else if (item === "Data Analytics & AI Solutions") {
                                itemHref = "/services/data-analytics-ai-solutions";
                              } else if (item === "Enterprise Resource Planning") {
                                itemHref = "/services/enterprise-resource-planning";
                              } else if (item === "Smart Manufacturing & Industry 4.0") {
                                itemHref = "/services/smart-manufacturing-industry-4";
                              } else if (item === "Software Development & Engineering") {
                                itemHref = "/services/software-development-engineering";
                              }
                            } else if (link.sectionId === "products") {
                              if (item === "SeedLink") {
                                itemHref = "/products/SeedLink";
                              } else if (item === "WelthWise") {
                                itemHref = "/products/WelthWise";
                              }
                            } else if (link.sectionId === "careers") {
                              if (item === "Why join NeuroVerse") {
                                itemHref = "/careers/WhyJoinNeuroVerse";
                              } else if (item === "Life at NeuroVerse") {
                                itemHref = "/careers/lifeAtNeuroVerse";
                              }
                            } else if (link.sectionId === "about") {
                              if (item === "Our Story") {
                                itemHref = "/about/our-story";
                              } else if (item === "Company Values") {
                                itemHref = "/about/company-value";
                              } else if (item === "Our Culture") {
                                itemHref = "/about/our-culture";
                              } else if (item === "Management and governance") {
                                itemHref = "/about/management-governance";
                              } else if (item === "Partners & Alliances") {
                                itemHref = "/about/partner-and-alliance";
                              }
                            }
                            
                            return (
                              <li 
                                key={index}
                                className="relative"
                              >
                                <Link
                                  to={itemHref}
                                  className="relative flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors group py-2"
                                  onClick={(e) => {
                                    if (link.sectionId === "insights" && item === "Hot topics") {
                                      e.preventDefault();
                                      navigate("/insights/hot-topic");
                                    } else if (link.sectionId === "insights" && item === "Our research library") {
                                      e.preventDefault();
                                      navigate("/insights/research-library");
                                    } else if (link.sectionId === "insights" && item === "Initiatives for research and Development") {
                                      e.preventDefault();
                                      navigate("/insights/research-and-development");
                                    } else if (link.sectionId === "industries" && item === "Healthcare") {
                                      e.preventDefault();
                                      navigate("/industries/healthcare");
                                    } else if (link.sectionId === "industries" && item === "Finance") {
                                      e.preventDefault();
                                      navigate("/industries/finance");
                                    } else if (link.sectionId === "industries" && item === "Retail & E-commerce") {
                                      e.preventDefault();
                                      navigate("/industries/retail-ecommerce");
                                    } else if (link.sectionId === "industries" && item === "Manufacturing") {
                                      e.preventDefault();
                                      navigate("/industries/manufacturing");
                                    } else if (link.sectionId === "industries" && item === "Technology") {
                                      e.preventDefault();
                                      navigate("/industries/technology");
                                    } else if (link.sectionId === "services" && item === "Cloud Services & Infrastructure") {
                                      e.preventDefault();
                                      navigate("/services/cloud-services-infrastructure");
                                    } else if (link.sectionId === "services" && item === "Customer Experience & Engagement") {
                                      e.preventDefault();
                                      navigate("/services/customer-experience-engagement");
                                    } else if (link.sectionId === "services" && item === "Cybersecurity & Risk Management") {
                                      e.preventDefault();
                                      navigate("/services/CyberSecurity-and-risk-management");
                                    } else if (link.sectionId === "services" && item === "Data Analytics & AI Solutions") {
                                      e.preventDefault();
                                      navigate("/services/data-analytics-ai-solutions");
                                    } else if (link.sectionId === "services" && item === "Enterprise Resource Planning") {
                                      e.preventDefault();
                                      navigate("/services/enterprise-resource-planning");
                                    } else if (link.sectionId === "services" && item === "Smart Manufacturing & Industry 4.0") {
                                      e.preventDefault();
                                      navigate("/services/smart-manufacturing-industry-4");
                                    } else if (link.sectionId === "services" && item === "Software Development & Engineering") {
                                      e.preventDefault();
                                      navigate("/services/software-development-engineering");
                                    } else if (link.sectionId === "products" && item === "SeedLink") {
                                      e.preventDefault();
                                      navigate("/products/SeedLink");
                                    } else if (link.sectionId === "products" && item === "WelthWise") {
                                      e.preventDefault();
                                      navigate("/products/WelthWise");
                                    } else if (link.sectionId === "careers" && item === "Why join NeuroVerse") {
                                      e.preventDefault();
                                      navigate("/careers/WhyJoinNeuroVerse");
                                    } else if (link.sectionId === "careers" && item === "Life at NeuroVerse") {
                                      e.preventDefault();
                                      navigate("/careers/lifeAtNeuroVerse");
                                    } else if (link.sectionId === "about" && item === "Our Story") {
                                      e.preventDefault();
                                      navigate("/about/our-story");
                                    } else if (link.sectionId === "about" && item === "Company Values") {
                                      e.preventDefault();
                                      navigate("/about/company-value");
                                    } else if (link.sectionId === "about" && item === "Our Culture") {
                                      e.preventDefault();
                                      navigate("/about/our-culture");
                                    } else if (link.sectionId === "about" && item === "Management and governance") {
                                      e.preventDefault();
                                      navigate("/about/management-governance");
                                    } else if (link.sectionId === "about" && item === "Partners & Alliances") {
                                      e.preventDefault();
                                      navigate("/about/partner-and-alliance");
                                    } else {
                                      handleSectionClick(link.href, link.sectionId, e);
                                    }
                                    setHoveredMenu(null);
                                  }}
                                >
                                  <span className="relative text-sm group">
                                    {item}
                                    {/* Animated Line - Same as main navigation */}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                                  </span>
                                  <ChevronRight className="h-4 w-4 transition-opacity opacity-0 group-hover:opacity-100" />
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      {/* Right Column - Featured Content */}
                      <div className="bg-white p-8 flex flex-col overflow-y-auto" style={{ height: '100%' }}>
                        {link.sectionId === "insights" ? (
                          <div className="flex flex-col flex-grow space-y-4">
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-3">
                                Stay Informed
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                Discover cutting-edge insights and thought leadership that drive innovation and shape the future of business.
                              </p>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Latest Research
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Access our comprehensive research reports and analysis on emerging technologies and business trends.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Industry Trends
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Explore the latest trends and developments across industries, from AI to sustainability.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Expert Analysis
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Gain valuable perspectives from industry leaders and subject matter experts.
                              </p>
                            </div>
                          </div>
                        ) : link.sectionId === "industries" ? (
                          <div className="flex flex-col flex-grow space-y-4">
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-3">
                                Industry Expertise
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                Tailored solutions and deep industry knowledge to help your business thrive in today's competitive landscape.
                              </p>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Sector Solutions
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Specialized technology solutions designed to address unique challenges within your industry vertical.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Industry Best Practices
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Leverage proven methodologies and industry-specific frameworks to accelerate your digital transformation.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Customized Approach
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Every industry has unique requirements. We deliver solutions that align with your sector's specific needs and regulations.
                              </p>
                            </div>
                          </div>
                        ) : link.sectionId === "services" ? (
                          <div className="flex flex-col flex-grow space-y-4">
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-3">
                                Comprehensive Solutions
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                End-to-end technology services designed to transform your business operations and drive sustainable growth.
                              </p>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Technology Expertise
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Leverage cutting-edge technologies including cloud, AI, cybersecurity, and data analytics to modernize your infrastructure.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Business Transformation
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Strategic consulting and implementation services to help you navigate digital transformation and achieve your business objectives.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Scalable Solutions
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                From startups to enterprises, we provide scalable services that grow with your business and adapt to changing market demands.
                              </p>
                            </div>
                          </div>
                        ) : link.sectionId === "about" ? (
                          <div className="flex flex-col flex-grow space-y-4">
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-3">
                                Our Journey
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                Learn about our mission, vision, and the values that drive our commitment to innovation and excellence.
                              </p>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Our Mission
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Empowering businesses through innovative technology solutions that drive growth and create lasting value.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Company Values
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Integrity, innovation, and excellence guide everything we do, from client relationships to product development.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Our Culture
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                A collaborative environment where creativity thrives, diversity is celebrated, and every team member can make an impact.
                              </p>
                            </div>
                          </div>
                        ) : link.sectionId === "products" ? (
                          <div className="flex flex-col flex-grow space-y-4">
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-3">
                                Innovative Platforms
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                Cutting-edge technology products designed to accelerate your digital transformation and drive measurable business growth.
                              </p>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Technology Solutions
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Comprehensive platforms that integrate seamlessly with your existing infrastructure to enhance productivity and efficiency.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Business Growth
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Products engineered to scale with your business, providing the tools you need to stay competitive in today's market.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Digital Transformation
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Transform your operations with our innovative products that leverage the latest technologies to solve complex business challenges.
                              </p>
                            </div>
                          </div>
                        ) : link.sectionId === "careers" ? (
                          <div className="flex flex-col flex-grow space-y-4">
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-3">
                                Join Our Team
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                Be part of a diverse collective of innovators, entrepreneurs, and experts working together to shape the future of technology.
                              </p>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Career Growth
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Opportunities for professional development, mentorship, and career advancement in a supportive and dynamic environment.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Work Culture
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                A collaborative workplace where creativity is encouraged, diversity is valued, and every voice matters in driving innovation.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Make an Impact
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Work on meaningful projects that solve real-world challenges and contribute to building transformative technology solutions.
                              </p>
                            </div>
                          </div>
                        ) : link.sectionId === "news" ? (
                          <div className="flex flex-col flex-grow space-y-4">
                            <div>
                              <h4 className="font-bold text-lg text-gray-900 mb-3">
                                Stay Updated
                              </h4>
                              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                Keep up with our latest news, announcements, and insights from the world of technology and innovation.
                              </p>
                            </div>
                            
                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Latest Updates
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Get the most recent news about our company, products, partnerships, and industry developments.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Press & Media
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Access press releases, media kits, and official announcements covering our latest initiatives and achievements.
                              </p>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                              <h5 className="font-semibold text-sm text-gray-900 mb-2">
                                Events & Blog
                              </h5>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                Explore our blog articles, event coverage, and thought leadership content on technology trends and innovations.
                              </p>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={images.logos.seedLink}
                                alt={link.featuredTitle}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex flex-col flex-grow">
                              <h4 className="font-bold text-lg text-gray-900 mb-2">
                                {link.featuredTitle}
                              </h4>
                              <p className="text-sm text-gray-600">
                                {link.featuredDescription}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right Section: Utility Links and Actions */}
          <div className="hidden lg:flex items-center gap-6 ml-auto">
            {/* Login Text */}
            <Link
              to="/auth"
              className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Login
            </Link>

            {/* Search and Theme Toggle */}
            <div className="flex items-center gap-4 border-l border-gray-200 pl-4 transition-colors duration-300">
              {/* Search Box */}
              <form onSubmit={handleSearch} className="relative">
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    placeholder="Search..."
                    className={`pl-10 pr-4 py-2 text-sm text-gray-900 bg-white border border-gray-300 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      isSearchFocused ? 'w-64' : 'w-48'
                    }`}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </form>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
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
          className="lg:hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href || location.pathname.includes(link.sectionId);
              return (
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
                    className={`w-full justify-start transition-all duration-200 ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700' 
                        : 'text-gray-900 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {link.label}
                  </Button>
                </Link>
              );
            })}
            <div className="pt-4 space-y-2">
              <Link
                to="/auth"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer py-2"
              >
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
