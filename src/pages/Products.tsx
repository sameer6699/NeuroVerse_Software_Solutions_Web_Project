import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ChevronLeft, ChevronRight, ArrowRight, Sparkles, TrendingUp, Shield, Database, Zap, Globe, BarChart3 } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

/**
 * Products Page Component
 * 
 * This page displays comprehensive products offered by NeuroVerse.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function Products() {
  const heroRef = useRef<HTMLElement>(null);
  const productsSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);


  // Handle navigation to products section
  useEffect(() => {
    if (location.pathname === "/products" && location.hash === "#products") {
      setTimeout(() => {
        const element = productsSectionRef.current;
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

  // Products Carousel State
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  const productsData = [
    {
      title: "SeedLink",
      description: "A revolutionary platform that connects startups with investors, providing seamless matchmaking, comprehensive analytics, and intelligent insights to accelerate funding and growth opportunities.",
      icon: Sparkles,
      color: "from-purple-500 to-pink-600",
      features: ["Investor Matching", "Analytics Dashboard", "Smart Insights", "Growth Tracking"]
    },
    {
      title: "WealthWise",
      description: "An advanced wealth management platform that empowers individuals and institutions with AI-driven financial planning, portfolio optimization, and real-time market intelligence for smarter investment decisions.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600",
      features: ["AI-Powered Planning", "Portfolio Optimization", "Market Intelligence", "Risk Management"]
    },
  ];

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % productsData.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + productsData.length) % productsData.length);
  };

  const goToProduct = (index: number) => {
    setCurrentProductIndex(index);
  };

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
            backgroundImage: `url(${images.banners.productHeroBanner})`,
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

      {/* Products Card - Positioned outside hero section, extending from hero */}
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
                {/* Products Text - Centered in the box */}
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
                  Products
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
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  Innovative Technology Products
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Discover how NeuroVerse delivers cutting-edge technology products that transform businesses, drive innovation, and accelerate digital transformation across industries.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section - This is the target section for navigation */}
      <section 
        id="products"
        ref={productsSectionRef}
        className="relative bg-white py-8 md:py-10 px-4"
      >
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Products Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Our Products
            </h2>
          </motion.div>
        </div>

        {/* Carousel Container - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Background Banner with Image - Full Width */}
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-xl">
            {/* Background Image - Full Width */}
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${images.projects.hotTopicsBackground || images.projects.latestInsights})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                left: '50%',
                marginLeft: '-50vw',
              }}
            >
              {/* Enhanced Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-blue-900/20 to-transparent"></div>
            </div>

            {/* Content Container - Centered with max-width */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto max-w-5k-content w-full px-4 md:px-6 lg:px-8 xl:px-12">
                <div className="flex items-center justify-start">
                  {/* White Content Card - Left Side */}
                  <motion.div
                    key={currentProductIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 max-w-xl md:max-w-2xl w-full shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${productsData[currentProductIndex].color} text-white`}>
                        {(() => {
                          const Icon = productsData[currentProductIndex].icon;
                          return <Icon className="w-8 h-8 md:w-10 md:h-10" />;
                        })()}
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900">
                        {productsData[currentProductIndex].title}
                      </h3>
                    </div>
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                      {productsData[currentProductIndex].description}
                    </p>
                    
                    {/* Features List */}
                    <div className="mb-6 md:mb-8">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {productsData[currentProductIndex].features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${productsData[currentProductIndex].color}`}></div>
                            <span className="text-sm md:text-base text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

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
              </div>
            </div>

            {/* Navigation Carousel Indicator - Right Side */}
            <div className="absolute bottom-6 right-4 md:right-6 z-20">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2.5 flex items-center gap-3 shadow-md border border-gray-200/50">
                {/* Previous Button (Left Arrow) */}
                <button
                  onClick={prevProduct}
                  className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                </button>

                {/* Dots Indicator */}
                <div className="flex items-center gap-1.5 px-1">
                  {productsData.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToProduct(index)}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        index === currentProductIndex
                          ? "bg-blue-600 w-8 h-2"
                          : "bg-white border-2 border-gray-300 w-2 h-2 hover:bg-gray-200"
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button (Right Arrow) */}
                <button
                  onClick={nextProduct}
                  className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Detailed Product Information Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left mb-4">
              Product Details
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              Explore our comprehensive product offerings designed to transform your business operations.
            </p>
          </motion.div>

          {/* SeedLink Detailed Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[500px] md:min-h-[600px] lg:min-h-[650px]">
              {/* Left Side - Video (Full Width, No Card Styling) */}
              <div className="relative w-full h-full overflow-hidden">
                <video
                  src={images.projects.seedLinkVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                  aria-label="SeedLink Platform Demo"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Right Side - Content Card */}
              <div className="bg-white rounded-r-2xl lg:rounded-l-none rounded-l-2xl shadow-xl border border-gray-200 border-l-0 lg:border-l lg:border-r-0 p-8 md:p-10 lg:p-12 flex flex-col justify-center h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">SeedLink</h3>
                </div>
                
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  SeedLink is a revolutionary platform that connects startups with investors, providing seamless matchmaking, comprehensive analytics, and intelligent insights to accelerate funding and growth opportunities.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Intelligent Matching</h4>
                      <p className="text-sm text-gray-600">AI-powered algorithms match startups with the most suitable investors based on industry, stage, and investment criteria.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart3 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Analytics Dashboard</h4>
                      <p className="text-sm text-gray-600">Comprehensive analytics and insights to track performance, investor engagement, and funding progress.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Secure Platform</h4>
                      <p className="text-sm text-gray-600">Enterprise-grade security ensures your data and communications remain protected throughout the funding process.</p>
                    </div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-purple-500 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300 w-fit"
                >
                  Explore SeedLink
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* WealthWise Detailed Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Left Side - Content */}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">WealthWise</h3>
                  </div>
                  
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                    WealthWise is an advanced wealth management platform that empowers individuals and institutions with AI-driven financial planning, portfolio optimization, and real-time market intelligence for smarter investment decisions.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">AI-Powered Planning</h4>
                        <p className="text-sm text-gray-600">Advanced machine learning algorithms provide personalized investment recommendations tailored to your financial goals.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Portfolio Optimization</h4>
                        <p className="text-sm text-gray-600">Real-time portfolio analysis and optimization to maximize returns while managing risk effectively.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Market Intelligence</h4>
                        <p className="text-sm text-gray-600">Stay ahead with real-time market data, trends, and insights to make informed investment decisions.</p>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 w-fit"
                  >
                    Explore WealthWise
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Right Side - Image */}
                <div className="relative h-64 md:h-80 lg:h-full min-h-[400px] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-8 order-1 lg:order-2">
                  <TrendingUp className="w-32 h-32 text-blue-600 opacity-60" />
                </div>
              </div>
            </div>
          </motion.div>
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
                  Let's discuss how NeuroVerse products can help you leverage innovative technology to drive growth and digital transformation.
                </p>
              </div>

              {/* Right Side - Contact Button */}
              <div className="flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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

