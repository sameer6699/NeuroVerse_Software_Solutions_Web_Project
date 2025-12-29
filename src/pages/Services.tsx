import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ChevronLeft, ChevronRight, ArrowRight, Cloud, Users, Shield, Database, Building2, Factory, Leaf, Code } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

/**
 * Services Page Component
 * 
 * This page displays comprehensive services offered by NeuroVerse.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function Services() {
  const heroRef = useRef<HTMLElement>(null);
  const servicesSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top instantly when component mounts (when navigating to this page)
  useEffect(() => {
    // Instant scroll to top (no animation)
    window.scrollTo(0, 0);
    
    // Also ensure scroll after a small delay to handle any async rendering
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    
    return () => clearTimeout(timeoutId);
  }, []);

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Handle navigation to services section
  useEffect(() => {
    if (location.pathname === "/services" && location.hash === "#services") {
      setTimeout(() => {
        const element = servicesSectionRef.current;
        if (element) {
          const lenis = (window as any).lenis;
          if (lenis) {
            setTimeout(() => {
              lenis.scrollTo(element, {
                offset: -80,
                duration: 1.5,
              });
            }, 100);
          } else {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
              window.scrollBy(0, -80);
            }, 150);
          }
        }
      }, 100);
    }
  }, [location]);

  // Services Carousel State
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const servicesData = [
    {
      title: "Cloud Services & Infrastructure",
      description: "Transform your infrastructure with scalable cloud solutions. From migration to optimization, we help you leverage the full power of cloud computing for agility, cost-efficiency, and innovation.",
      icon: Cloud,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Customer Experience & Engagement",
      description: "Deliver exceptional customer experiences through AI-powered personalization, omnichannel engagement, and data-driven insights that build lasting relationships and drive loyalty.",
      icon: Users,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Cybersecurity & Risk Management",
      description: "Protect your digital assets with advanced security solutions. Our comprehensive approach includes threat detection, vulnerability assessment, and proactive defense strategies.",
      icon: Shield,
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Data Analytics & AI Solutions",
      description: "Unlock the power of your data with artificial intelligence and machine learning. From predictive analytics to intelligent automation, we turn data into actionable insights.",
      icon: Database,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Enterprise Resource Planning",
      description: "Streamline operations and drive efficiency with enterprise-grade solutions. We help you optimize processes, integrate systems, and scale your business operations seamlessly.",
      icon: Building2,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Smart Manufacturing & Industry 4.0",
      description: "Drive Industry 4.0 transformation with smart manufacturing, IoT integration, and predictive maintenance solutions that optimize production and reduce downtime.",
      icon: Factory,
      color: "from-orange-500 to-amber-600"
    },
    {
      title: "Software Development & Engineering",
      description: "Custom software development services including web applications, mobile apps, microservices architecture, and API development for scalable and modern solutions.",
      icon: Code,
      color: "from-violet-500 to-purple-600"
    },
  ];

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % servicesData.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const goToService = (index: number) => {
    setCurrentServiceIndex(index);
  };

  // Service cards data
  const serviceCards = [
    {
      name: "Cloud Services & Infrastructure",
      description: "Comprehensive cloud transformation services including migration, architecture design, DevOps implementation, and cloud-native application development. Multi-cloud strategies and hybrid solutions.",
      technologies: ["AWS", "Azure", "GCP"],
      image: images.banners.cloudInfraCardImg || images.banners.cloudInfraImg || images.banners.cloudNativeBannerImg
    },
    {
      name: "Customer Experience & Engagement",
      description: "End-to-end customer experience transformation through CRM implementation, customer analytics, personalization engines, and omnichannel engagement platforms.",
      technologies: ["CRM", "AI/ML", "Analytics"],
      image: images.banners.customerExperience || images.banners.userExperience || images.banners.customerSatisfaction
    },
    {
      name: "Cybersecurity & Risk Management",
      description: "Advanced security solutions including threat intelligence, penetration testing, security architecture, compliance management, and incident response services.",
      technologies: ["SIEM", "Zero Trust", "Encryption"],
      image: images.banners.cybersecurityCardImgNew || images.banners.cybersecurityCardImg || images.banners.cyberSecurityCardImg
    },
    {
      name: "Data Analytics & AI Solutions",
      description: "AI and ML solutions including data engineering, machine learning model development, MLOps, predictive analytics, and intelligent automation platforms.",
      technologies: ["Python", "TensorFlow", "PyTorch"],
      image: images.banners.aiAndMlImg || images.banners.aiMlBannerImg || images.banners.aiPoweredAnalytics || images.banners.dataAnalyticsBannerImg
    },
    {
      name: "Enterprise Resource Planning",
      description: "Enterprise resource planning, business process optimization, system integration, and digital transformation consulting services.",
      technologies: ["ERP", "Integration", "Process Automation"],
      image: images.banners.erpCardImg || images.banners.erpBannerCardImg || images.banners.enterpriseSoftwareDevelopmentBannerImg
    },
    {
      name: "Smart Manufacturing & Industry 4.0",
      description: "Industry 4.0 solutions including IoT implementation, smart manufacturing, predictive maintenance, and industrial automation systems.",
      technologies: ["IoT", "Edge Computing", "Predictive Analytics"],
      image: images.banners.smartFactoryImg || images.banners.industry40Img || images.banners.factoryAutomation || images.banners.iotEdgeComputing
    },
    {
      name: "Software Development & Engineering",
      description: "Custom software development services including web applications, mobile apps, microservices architecture, and API development for scalable and modern solutions.",
      technologies: ["React", "Node.js", "Microservices"],
      image: images.banners.swDevelopmentCardImg || images.banners.swEngineeringImg || images.banners.customSoftwareDevelopment || images.banners.fullStackDevelopmentBannerImg
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <section 
        id="home"
        ref={heroRef}
        className="relative pt-44 md:pt-52 lg:pt-60 xl:pt-64 pb-20 px-4 min-h-[95vh] md:min-h-[100vh] flex items-end overflow-hidden"
      >
        {/* Background Image with Improved Positioning and Zoom Effect */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{
            scale: backgroundScale,
            y: backgroundY,
            backgroundImage: `url(${images.banners.servicesHeroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Subtle Parallax Effect */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* Enhanced gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent"></div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400/70 rounded-full flex items-start justify-center p-2 bg-white/80 backdrop-blur-sm shadow-md"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Card - Positioned outside hero section, extending from hero */}
      <div className="relative -mt-24 md:-mt-32 lg:-mt-40 z-30">
        <div className="max-w-7xl mx-auto max-w-5k-content px-4 md:px-6 lg:px-8">
          <div className="flex justify-start">
            <div className="relative">
              {/* Blue Background Box - Overlay on left side */}
              <div 
                className="relative rounded-lg px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 xl:py-28 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
              >
                {/* Services Text - Centered in the box */}
                <h1
                  className="relative z-10 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight whitespace-nowrap"
                  style={{
                    fontFamily: "'Poppins', 'Montserrat', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Services
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section Below Hero */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto max-w-5k-content relative z-10">
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 lg:gap-8">
            {/* Social Media Icons - Left Side */}
            <div className="flex flex-col gap-5 md:gap-6 flex-shrink-0">
              {/* LinkedIn Icon */}
              <motion.a
                href="https://www.linkedin.com/company/neuroverse"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-blue-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 cursor-pointer group relative overflow-hidden"
                aria-label="LinkedIn"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <Linkedin className="w-7 h-7 md:w-8 md:h-8 text-gray-600 group-hover:text-white transition-colors relative z-10" />
              </motion.a>

              {/* Facebook Icon */}
              <motion.a
                href="https://www.facebook.com/neuroverse"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-blue-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 cursor-pointer group relative overflow-hidden"
                aria-label="Facebook"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-gray-600 group-hover:text-white transition-colors relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>
            </div>

            {/* Description Text - Right Side */}
            <div className="flex-1">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                  Comprehensive Technology Services
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Discover how NeuroVerse delivers end-to-end technology services that transform businesses, drive innovation, and accelerate digital transformation across industries.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - This is the target section for navigation */}
      <section 
        id="services"
        ref={servicesSectionRef}
        className="relative bg-white py-8 md:py-10 px-4"
      >
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Services Heading */}
          <div className="mb-4 md:mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Our Services
            </h2>
          </div>
        </div>
      </section>

      {/* Services Case Study Banner/Carousel Section - Full Width */}
      <section className="relative bg-white py-8 md:py-12 w-full">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-xl">
            {/* Background Image - Full Width - Extends entire screen width */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${images.banners.servicesHeroBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                left: '50%',
                marginLeft: '-50vw',
              }}
            >
              {/* Enhanced Overlay for better text readability with blue tint */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/20 to-transparent"></div>
            </div>

            {/* Content Container - Centered with max-width */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto max-w-5k-content w-full px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="flex items-center justify-start">
                  {/* White Text Box with Enhanced Styling - Dynamic Content */}
                  <div
                    key={currentServiceIndex}
                    className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10 shadow-2xl max-w-2xl border border-white/20 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 group"
                  >
                      {/* Headline */}
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6 leading-tight group-hover:text-blue-900 transition-colors duration-300">
                        {servicesData[currentServiceIndex].title}
                      </h3>
                      
                      {/* Body Text */}
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                        {servicesData[currentServiceIndex].description}
                      </p>

                      {/* Learn More Button */}
                      <button
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-700 transition-all duration-300 shadow-sm group/btn"
                      >
                        <span className="group-hover/btn:translate-x-1 transition-transform duration-300">Learn more</span>
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation - Bottom Right */}
            <div className="absolute bottom-6 right-4 md:right-6 z-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2.5 flex items-center gap-3 shadow-md border border-gray-200/50">
                {/* Previous Button (Left Arrow) */}
                <button
                  onClick={prevService}
                  className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                </button>

                {/* Dots Indicator */}
                <div className="flex items-center gap-1.5 px-1">
                  {servicesData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToService(index)}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        index === currentServiceIndex
                          ? "bg-blue-600 w-8 h-2"
                          : "bg-white border-2 border-gray-300 w-2 h-2 hover:bg-gray-200"
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button (Right Arrow) */}
                <button
                  onClick={nextService}
                  className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                </button>
              </div>
            </div>
        </div>
      </section>

      {/* Learn more by service Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left">
              Learn more by service
            </h2>
          </div>

          {/* Service Grid - 3 columns for 8 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {serviceCards.map((service, index) => (
              <div
                key={service.name}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={service.image || images.projects.latestInsights}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    {/* Service Name */}
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {service.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Learn More Link */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NeuroVerse for Services Section */}
      <section className="relative py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl overflow-hidden shadow-2xl">
            {/* Left Column - Blue Background (2/5 width) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6 md:mb-8">
                Why Choose NeuroVerse
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 md:mb-10">
                With deep expertise and cutting-edge technology, we deliver comprehensive services that transform businesses. Our end-to-end approach ensures you get solutions tailored to your unique challenges and opportunities.
              </p>
              <button
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 w-fit"
              >
                Get started
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Right Column - Image (3/5 width) */}
            <div className="lg:col-span-3 relative h-64 md:h-80 lg:h-full min-h-[400px] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images.projects.latestInsights})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(0.5px)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Full Width */}
      <section className="relative pt-8 md:pt-10 pb-4 md:pb-6 w-full">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 w-full p-8 md:p-12 lg:p-16">
          <div className="max-w-7xl mx-auto max-w-5k-content">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
              {/* Left Side - Text Content */}
              <div className="flex-1">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4 md:mb-6">
                  Ready to transform your business?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Let's discuss how NeuroVerse can help you leverage our comprehensive services to drive innovation and digital transformation.
                </p>
              </div>

              {/* Right Side - Contact Button */}
              <div className="flex-shrink-0">
                <button
                  className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

