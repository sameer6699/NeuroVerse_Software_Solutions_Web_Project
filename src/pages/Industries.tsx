import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ChevronLeft, ChevronRight, ArrowRight, Heart, DollarSign, ShoppingCart, Factory, Cpu } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";

/**
 * Industries Page Component
 * 
 * This page displays industry-specific solutions and insights.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function Industries() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

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

  // Function to get route for industry name
  const getIndustryRoute = (industryName: string): string | null => {
    const routeMap: { [key: string]: string } = {
      "Healthcare": "/industries/healthcare",
      "Finance": "/industries/finance",
      "Manufacturing": "/industries/manufacturing",
      "Technology": "/industries/technology",
      "Education Technology": "/industries/education-technology", // Add route if page exists
      // Map carousel titles to routes
      "Healthcare & Life Sciences": "/industries/healthcare",
      "Financial Services": "/industries/finance",
      "Retail & E-commerce": "/industries/retail-ecommerce",
      "Manufacturing & Industrial": "/industries/manufacturing",
      "Technology & Software": "/industries/technology",
    };
    return routeMap[industryName] || null;
  };

  // Function to handle navigation
  const handleLearnMore = (industryName: string) => {
    const route = getIndustryRoute(industryName);
    if (route) {
      navigate(route);
    }
  };

  // Industries Carousel State
  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);

  const industries = [
    {
      title: "Healthcare & Life Sciences",
      description: "Transforming patient care through AI-powered diagnostics, personalized medicine, and intelligent healthcare systems that improve outcomes and reduce costs.",
      icon: Heart,
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Financial Services",
      description: "Revolutionizing banking, insurance, and fintech with advanced analytics, fraud detection, and automated trading systems that drive financial innovation.",
      icon: DollarSign,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Retail & E-commerce",
      description: "Enhancing customer experiences with AI-driven personalization, inventory optimization, and seamless omnichannel solutions that boost sales and loyalty.",
      icon: ShoppingCart,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Manufacturing & Industrial",
      description: "Driving Industry 4.0 with smart factories, predictive maintenance, and IoT integration that optimize production and reduce downtime.",
      icon: Factory,
      color: "from-orange-500 to-amber-600"
    },
    {
      title: "Technology & Software",
      description: "Empowering tech companies with cloud-native solutions, DevOps automation, and scalable architectures that accelerate innovation cycles.",
      icon: Cpu,
      color: "from-purple-500 to-indigo-600"
    },
  ];

  const nextIndustry = () => {
    setCurrentIndustryIndex((prev) => (prev + 1) % industries.length);
  };

  const prevIndustry = () => {
    setCurrentIndustryIndex((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const goToIndustry = (index: number) => {
    setCurrentIndustryIndex(index);
  };

  // Industry cards data with software technology content
  const industryCards = [
    {
      name: "Healthcare",
      description: "Electronic health records (EHR), telemedicine platforms, and AI-powered diagnostics. Patient management systems, medical imaging software, and healthcare analytics solutions.",
      technologies: ["AI/ML", "Cloud Computing", "IoT"],
      image: images.banners.healthcareIndustry
    },
    {
      name: "Finance",
      description: "Digital banking platforms, fraud detection systems, and algorithmic trading solutions. Real-time transaction processing, risk management software, and regulatory compliance automation.",
      technologies: ["AI/ML", "Blockchain", "Cloud Computing"],
      image: images.banners.financeIndustry
    },
    {
      name: "Retail & E-commerce",
      description: "E-commerce platforms, supply chain optimization, and customer engagement solutions. Personalization engines, inventory management systems, and omnichannel retail technology.",
      technologies: ["AI/ML", "Cloud Computing", "Mobile Apps"],
      image: images.banners.ecommerceIndustry
    },
    /* {
      name: "Manufacturing",
      description: "Industrial IoT solutions, smart factory systems, and production optimization software. Predictive maintenance, quality control systems, and supply chain management platforms.",
      technologies: ["IoT", "AI/ML", "Cloud Computing"],
      image: images.banners.manufacturingIndustry
    }, */
    {
      name: "Technology",
      description: "Software development tools, cloud infrastructure, and enterprise technology solutions. DevOps platforms, microservices architecture, and scalable cloud-native applications.",
      technologies: ["Cloud Computing", "DevOps", "AI/ML"],
      image: images.banners.technologyIndustry
    },
    {
      name: "Education Technology",
      description: "Learning management systems, online education platforms, and AI-powered personalized learning solutions. Student information systems, virtual classrooms, and educational analytics tools.",
      technologies: ["AI/ML", "Cloud Computing", "Mobile Apps"],
      image: images.banners.educationTechnologyIndustry
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
            backgroundImage: `url(${images.banners.industriesHeroSection})`,
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

      {/* Industries Card - Positioned outside hero section, extending from hero */}
      <div className="relative -mt-24 md:-mt-32 lg:-mt-40 z-30">
        <div className="max-w-7xl mx-auto max-w-5k-content px-4 md:px-6 lg:px-8">
          <div className="flex justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Blue Background Box - Overlay on left side */}
              <div
                className="relative rounded-lg px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 xl:py-28 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
              >
                {/* Industries Text - Centered in the box */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="relative z-10 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight whitespace-nowrap"
                  style={{
                    fontFamily: "'Poppins', 'Montserrat', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Industries
                </motion.h1>
              </div>
            </motion.div>
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
                  Industry-Specific Solutions
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Discover how NeuroVerse delivers tailored AI and software solutions across diverse industries, addressing unique challenges and driving digital transformation.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Carousel Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Industries Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Our Industries
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
                  key={currentIndustryIndex}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-2xl max-w-xl md:max-w-2xl w-full -ml-2 md:ml-0 lg:ml-4 group"
                >
                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {industries[currentIndustryIndex].title}
                    </h3>

                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 flex-1">
                      {industries[currentIndustryIndex].description}
                    </p>

                    {/* Footer with Border and Action Button */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">OUR INDUSTRIES</span>
                        <motion.button
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleLearnMore(industries[currentIndustryIndex].title)}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/btn"
                        >
                          Learn more
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Carousel Navigation - Bottom Right */}
              <div className="absolute bottom-6 right-4 md:right-6 z-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2.5 flex items-center gap-3 shadow-md border border-gray-200/50"
                >
                  {/* Previous Button (Left Arrow) */}
                  <button
                    onClick={prevIndustry}
                    className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
                    aria-label="Previous industry"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-1.5 px-1">
                    {industries.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToIndustry(index)}
                        className={`transition-all rounded-full ${index === currentIndustryIndex
                            ? 'bg-blue-600 w-8 h-2'
                            : 'bg-white border-2 border-gray-300 w-2 h-2 hover:bg-gray-200'
                          }`}
                        aria-label={`Go to industry ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button (Right Arrow) */}
                  <button
                    onClick={nextIndustry}
                    className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
                    aria-label="Next industry"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learn more by industry Section */}
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
              Learn more by industry
            </h2>
          </motion.div>

          {/* Industry Grid - 5 rows x 3 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {industryCards.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => handleLearnMore(industry.name)}
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={industry.image || images.projects.latestInsights}
                      alt={industry.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    {/* Industry Name */}
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {industry.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {industry.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {industry.technologies.slice(0, 3).map((tech, techIndex) => (
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

      {/* Why Choose NeuroVerse for Your Industry Section */}
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
                With deep industry expertise and cutting-edge AI technology, we deliver solutions that transform businesses across sectors. Our industry-specific approach ensures you get solutions tailored to your unique challenges and opportunities.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                  Ready to transform your industry?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Let's discuss how NeuroVerse can help you leverage AI and cutting-edge technology to drive innovation in your industry.
                </p>
              </div>

              {/* Right Side - Contact Button */}
              <div className="flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg cursor-pointer"
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

