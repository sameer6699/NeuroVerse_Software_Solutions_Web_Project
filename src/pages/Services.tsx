import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ChevronLeft, ChevronRight, ArrowRight, Cloud, Users, Shield, Database, Building2, Factory, Leaf } from "lucide-react";
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

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Typewriter effect hook with infinite loop
  const useTypewriter = (text: string, speed: number = 100, deleteSpeed: number = 50, pauseTime: number = 2000) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      let timeout: NodeJS.Timeout;

      if (!isDeleting && displayedText.length < text.length) {
        // Typing forward
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, speed);
      } else if (!isDeleting && displayedText.length === text.length) {
        // Finished typing, wait then start deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else if (isDeleting && displayedText.length > 0) {
        // Deleting backward
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deleteSpeed);
      } else if (isDeleting && displayedText.length === 0) {
        // Finished deleting, start typing again
        setIsDeleting(false);
      }

      return () => clearTimeout(timeout);
    }, [displayedText, text, speed, deleteSpeed, pauseTime, isDeleting]);

    return displayedText;
  };

  const typewriterText = useTypewriter("Services", 150, 80, 2000);

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
      title: "Cloud Services",
      description: "Transform your infrastructure with scalable cloud solutions. From migration to optimization, we help you leverage the full power of cloud computing for agility, cost-efficiency, and innovation.",
      icon: Cloud,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Customer First",
      description: "Deliver exceptional customer experiences through AI-powered personalization, omnichannel engagement, and data-driven insights that build lasting relationships and drive loyalty.",
      icon: Users,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security solutions. Our comprehensive approach includes threat detection, vulnerability assessment, and proactive defense strategies.",
      icon: Shield,
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Data and AI",
      description: "Unlock the power of your data with artificial intelligence and machine learning. From predictive analytics to intelligent automation, we turn data into actionable insights.",
      icon: Database,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Enterprise Management",
      description: "Streamline operations and drive efficiency with enterprise-grade solutions. We help you optimize processes, integrate systems, and scale your business operations seamlessly.",
      icon: Building2,
      color: "from-indigo-500 to-blue-600"
    },
    {
      title: "Intelligent Industry",
      description: "Drive Industry 4.0 transformation with smart manufacturing, IoT integration, and predictive maintenance solutions that optimize production and reduce downtime.",
      icon: Factory,
      color: "from-orange-500 to-amber-600"
    },
    {
      title: "Sustainability",
      description: "Build sustainable technology solutions that reduce environmental impact while driving business value. From green IT to carbon footprint optimization, we help you achieve your sustainability goals.",
      icon: Leaf,
      color: "from-teal-500 to-green-600"
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
      name: "Cloud Services",
      description: "Comprehensive cloud transformation services including migration, architecture design, DevOps implementation, and cloud-native application development. Multi-cloud strategies and hybrid solutions.",
      technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"]
    },
    {
      name: "Customer First Solutions",
      description: "End-to-end customer experience transformation through CRM implementation, customer analytics, personalization engines, and omnichannel engagement platforms.",
      technologies: ["CRM", "AI/ML", "Analytics", "Personalization"]
    },
    {
      name: "Cybersecurity Services",
      description: "Advanced security solutions including threat intelligence, penetration testing, security architecture, compliance management, and incident response services.",
      technologies: ["SIEM", "Zero Trust", "Encryption", "Compliance"]
    },
    {
      name: "Data and Artificial Intelligence",
      description: "AI and ML solutions including data engineering, machine learning model development, MLOps, predictive analytics, and intelligent automation platforms.",
      technologies: ["Python", "TensorFlow", "PyTorch", "Data Engineering"]
    },
    {
      name: "Enterprise Management",
      description: "Enterprise resource planning, business process optimization, system integration, and digital transformation consulting services.",
      technologies: ["ERP", "Integration", "Process Automation", "Digital Transformation"]
    },
    {
      name: "Intelligent Industry",
      description: "Industry 4.0 solutions including IoT implementation, smart manufacturing, predictive maintenance, and industrial automation systems.",
      technologies: ["IoT", "Edge Computing", "Predictive Analytics", "Automation"]
    },
    {
      name: "Sustainability Solutions",
      description: "Green IT services, carbon footprint reduction, sustainable technology implementation, and ESG reporting solutions for environmentally conscious organizations.",
      technologies: ["Green IT", "ESG", "Carbon Analytics", "Sustainable Tech"]
    },
    {
      name: "Digital Transformation",
      description: "Comprehensive digital transformation consulting including strategy development, technology roadmap planning, and change management services.",
      technologies: ["Strategy", "Change Management", "Digital Roadmap", "Innovation"]
    },
    {
      name: "Application Development",
      description: "Custom software development services including web applications, mobile apps, microservices architecture, and API development.",
      technologies: ["React", "Node.js", "Microservices", "API Development"]
    },
    {
      name: "Managed Services",
      description: "24/7 managed IT services including infrastructure management, application support, monitoring, and maintenance services.",
      technologies: ["ITIL", "Monitoring", "Support", "Maintenance"]
    },
    {
      name: "Consulting Services",
      description: "Strategic consulting services including technology assessment, architecture review, process improvement, and innovation workshops.",
      technologies: ["Strategy", "Architecture", "Process Improvement", "Innovation"]
    },
    {
      name: "Training and Enablement",
      description: "Comprehensive training programs including technology upskilling, certification programs, and knowledge transfer services.",
      technologies: ["Training", "Certification", "Upskilling", "Knowledge Transfer"]
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-4 min-h-[85vh] md:min-h-[90vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: `url(${images.projects.insightsHero || images.hero.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Subtle Parallax Effect - No Overlay */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* Very subtle gradient for slight depth - almost transparent */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5"></div>
        </motion.div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto max-w-5k-content relative z-10 w-full pb-0 -mb-12 md:-mb-16 lg:-mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-2/3 lg:w-1/2"
          >
            {/* Large "Services" Text with Typewriter Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] leading-[0.9] mb-6 relative z-10 whitespace-nowrap"
              style={{
                fontFamily: "'Poppins', 'Montserrat', sans-serif",
                fontWeight: 700,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap',
                mixBlendMode: 'normal',
              }}
            >
              <span 
                className="whitespace-nowrap inline-block"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.75) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 4px 30px rgba(0, 0, 0, 0.4), 0 8px 60px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(0, 0, 0, 0.08)',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15))',
                }}
              >
                {typewriterText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block w-0.5 h-[0.9em] ml-1 align-middle"
                  style={{
                    verticalAlign: 'middle',
                    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.75) 100%)',
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.6)',
                  }}
                />
              </span>
            </motion.h1>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-5 md:gap-6 flex-shrink-0"
            >
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
            </motion.div>

            {/* Description Text - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className="flex-1"
            >
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
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Our Services
            </h2>
          </motion.div>

          {/* Carousel Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Banner with Image */}
            <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] rounded-2xl overflow-hidden">
              {/* Background Image */}
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${images.projects.hotTopicsBackground || images.projects.latestInsights})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              {/* White Content Card - Left Side */}
              <div className="absolute inset-0 flex items-center justify-start px-4 md:px-8 lg:px-12">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 max-w-xl md:max-w-2xl w-full shadow-2xl -ml-2 md:ml-0 lg:ml-4"
                >
                  <div className="flex items-center gap-4 mb-4 md:mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${servicesData[currentServiceIndex].color} text-white`}>
                      {(() => {
                        const Icon = servicesData[currentServiceIndex].icon;
                        return <Icon className="w-8 h-8 md:w-10 md:h-10" />;
                      })()}
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900">
                      {servicesData[currentServiceIndex].title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                    {servicesData[currentServiceIndex].description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    Learn more
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Navigation Carousel Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 flex items-center gap-4 shadow-lg border border-gray-200">
                  {/* Previous Button */}
                  <button
                    onClick={prevService}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Previous service"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-2">
                    {servicesData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToService(index)}
                        className={`transition-all rounded-full ${
                          index === currentServiceIndex
                            ? 'bg-blue-600 w-8 h-2.5'
                            : 'bg-white border-2 border-white w-2.5 h-2.5 hover:bg-gray-200'
                        }`}
                        aria-label={`Go to service ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={nextService}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Next service"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learn more by service Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left">
              Learn more by service
            </h2>
          </motion.div>

          {/* Service Grid - 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {serviceCards.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={images.projects.latestInsights}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose NeuroVerse for Services Section */}
      <section className="relative py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-5 rounded-2xl overflow-hidden shadow-2xl">
            {/* Left Column - Blue Background (2/5 width) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6 md:mb-8">
                Why Choose NeuroVerse
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 md:mb-10">
                With deep expertise and cutting-edge technology, we deliver comprehensive services that transform businesses. Our end-to-end approach ensures you get solutions tailored to your unique challenges and opportunities.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 w-fit"
              >
                Get started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Right Column - Image (3/5 width) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 relative h-64 md:h-80 lg:h-full min-h-[400px] overflow-hidden"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Full Width */}
      <section className="relative pt-8 md:pt-10 pb-4 md:pb-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 w-full p-8 md:p-12 lg:p-16"
        >
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
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

