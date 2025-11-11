import { motion, useScroll, useTransform } from "framer-motion";
import { Code, ArrowRight, Cpu, TrendingUp, Shield, Database, Smartphone, Users, CheckCircle2, BarChart3, Linkedin, ChevronLeft, ChevronRight, Cloud, Zap, Network } from "lucide-react";
import { images } from "@/assets";
import { useRef } from "react";
import { Link } from "react-router";

/**
 * Technology Page Component
 * 
 * This page displays technology-specific solutions and insights.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function Technology() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);


  // Technology Solutions
  const technologySolutions = [
    {
      icon: Cloud,
      title: "Cloud Infrastructure & Services",
      description: "Comprehensive cloud solutions that enable scalable infrastructure, multi-cloud management, and seamless migration to modern cloud platforms.",
      features: ["Cloud Migration", "Multi-Cloud Management", "Serverless Computing", "Container Orchestration"]
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning Platforms",
      description: "Advanced AI and ML solutions that enable intelligent automation, predictive analytics, and cognitive computing capabilities for businesses.",
      features: ["Machine Learning Models", "Deep Learning", "Natural Language Processing", "Computer Vision"]
    },
    {
      icon: Code,
      title: "Software Development & Engineering",
      description: "Full-stack development services and engineering solutions for building scalable, secure, and high-performance software applications.",
      features: ["Custom Software Development", "DevOps & CI/CD", "Microservices Architecture", "API Development"]
    },
    {
      icon: Database,
      title: "Data Management & Analytics",
      description: "Robust data platforms for managing, processing, and analyzing large-scale data to drive business intelligence and insights.",
      features: ["Data Warehousing", "Big Data Processing", "Real-time Analytics", "Data Governance"]
    },
    {
      icon: Shield,
      title: "Cybersecurity & Threat Protection",
      description: "Enterprise-grade security solutions and threat protection frameworks to safeguard digital assets and ensure compliance.",
      features: ["Threat Detection", "Identity & Access Management", "Security Monitoring", "Compliance Management"]
    },
    {
      icon: Network,
      title: "Digital Transformation",
      description: "Comprehensive digital transformation services that modernize legacy systems and enable digital-first business strategies.",
      features: ["Legacy Modernization", "Digital Strategy", "Process Automation", "Innovation Consulting"]
    },
  ];

  // Key Benefits
  const benefits = [
    {
      icon: TrendingUp,
      title: "Accelerated Innovation",
      description: "Cutting-edge technology solutions enable rapid innovation and faster time-to-market for new products and services."
    },
    {
      icon: Users,
      title: "Enhanced Scalability",
      description: "Cloud-native and scalable architectures ensure your technology infrastructure grows with your business needs."
    },
    {
      icon: BarChart3,
      title: "Operational Excellence",
      description: "Automated workflows and intelligent systems streamline operations, reduce costs, and optimize resource utilization."
    },
    {
      icon: CheckCircle2,
      title: "Competitive Advantage",
      description: "Advanced technology capabilities provide a competitive edge through improved efficiency, agility, and innovation."
    },
  ];

  // Use Cases
  const useCases = [
    {
      title: "Cloud-Native Platform",
      description: "Comprehensive cloud infrastructure solution enabling scalable applications, microservices architecture, and seamless cloud migration for modern enterprises.",
      technologies: ["Cloud Computing", "Kubernetes", "Microservices", "DevOps"]
    },
    {
      title: "AI-Powered Analytics Platform",
      description: "Advanced analytics solution with machine learning capabilities, real-time data processing, and predictive insights that drive data-driven decision making.",
      technologies: ["AI/ML", "Big Data", "Real-time Processing", "Data Analytics"]
    },
    {
      title: "Enterprise Software Modernization",
      description: "Digital transformation solution that modernizes legacy systems, implements cloud-native architectures, and enables agile development practices.",
      technologies: ["Cloud Computing", "Microservices", "API Integration", "DevOps"]
    },
    {
      title: "Cybersecurity Operations Center",
      description: "Comprehensive security solution including threat detection, incident response, and compliance management for enterprise-level protection.",
      technologies: ["Cybersecurity", "Threat Intelligence", "SIEM", "Compliance"]
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <section 
        id="home"
        ref={heroRef}
        className="relative pt-32 pb-20 px-4 min-h-[95vh] md:min-h-[100vh] flex items-end overflow-hidden"
      >
        {/* Background Image with Improved Positioning and Zoom Effect */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          style={{
            scale: backgroundScale,
            y: backgroundY,
            backgroundImage: `url(${images.banners.technologyHeroBanner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
        
        {/* Subtle Parallax Effect */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* Enhanced gradient overlay for better text readability - optimized for technology image */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-blue-900/10"></div>
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

      {/* Technology Card - Positioned outside hero section, extending from hero */}
      <div className="relative -mt-24 md:-mt-32 lg:-mt-40 z-30">
        <div className="max-w-7xl mx-auto max-w-5k-content px-4 md:px-6 lg:px-8">
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Blue Background Box - Overlay on right side */}
              <div 
                className="relative rounded-lg px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 xl:py-28 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
              >
                {/* Technology Text - Centered in the box */}
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
                  Technology
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Technology-Specific Solutions Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
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
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-purple-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 cursor-pointer group relative overflow-hidden"
                aria-label="LinkedIn"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-purple-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100 cursor-pointer group relative overflow-hidden"
                aria-label="Facebook"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  Technology-Specific Solutions
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Discover how NeuroVerse delivers cutting-edge technology solutions that drive digital transformation, enable innovation, and accelerate business growth across industries.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  In the technology sector, we understand that innovation must seamlessly integrate with business objectives while maintaining the highest standards of performance, security, and scalability. Our technology solutions are designed to enhance operational efficiency, enable digital transformation, and empower organizations to thrive in an increasingly digital world.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  From cloud-native platforms that enable scalable infrastructure to AI-powered analytics systems that unlock data-driven insights, NeuroVerse combines cutting-edge technology with deep domain expertise. We work closely with technology companies, enterprises, and startups to develop solutions that are not just innovative, but also practical, scalable, and optimized for performance and growth.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Case Study Banner/Carousel Section - Full Width */}
      <section className="relative bg-white py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden"
        >
          {/* Background Image with Blur - Full Width */}
          <div 
            className="absolute inset-0 w-full"
            style={{
              backgroundImage: `url(${images.banners.technologyBgBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(2px)',
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent"></div>
          </div>

          {/* Content Container - Centered with max-width */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto max-w-5k-content w-full px-4 md:px-6 lg:px-8 xl:px-12">
              <div className="flex items-center justify-start">
                {/* White Text Box - Centered */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-xl max-w-2xl"
                >
                  {/* Headline */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                    Transform your business with cutting-edge technology solutions and AI-powered innovation
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                    NeuroVerse empowers organizations to achieve digital excellence through advanced cloud infrastructure, AI and machine learning platforms, and comprehensive software engineering services. Our intelligent solutions enable rapid innovation, scalable architectures, and data-driven decision making that drives competitive advantage, operational efficiency, and business growth.
                  </p>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-sm"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
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
                  className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                </button>

                {/* Dots Indicator */}
                <div className="flex items-center gap-1.5 px-1">
                  <button
                    className="bg-blue-600 w-8 h-2 rounded-full transition-all duration-300"
                    aria-label="Slide 1"
                  />
                  <button
                    className="bg-white border-2 border-gray-300 w-2 h-2 rounded-full hover:bg-gray-200 transition-all duration-300"
                    aria-label="Slide 2"
                  />
                </div>

                {/* Next Button (Right Arrow) */}
                <button
                  className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                </button>
              </motion.div>
            </div>
        </motion.div>
      </section>

      {/* What we do Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left">
              What we do
            </h2>
          </motion.div>

          {/* Six Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Cloud & Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.aiBanner}
                  alt="Cloud & Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Cloud & Infrastructure
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    AI and cloud solutions enhance digital innovation, scalability, and operational efficiency in the technology sector. We leverage cloud-native architectures, containerization, and DevOps practices to drive rapid deployment and seamless scaling.
                  </p>
                  <p className="text-sm md:text-base">
                    Our solutions ensure high availability, enable flexible infrastructure, improve performance, and ensure security compliance for competitive agility in the evolving technology landscape.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: AI & Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.researchBanner}
                  alt="AI & Machine Learning"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  AI & Machine Learning
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Advanced AI and ML technologies improve intelligent automation and data-driven decision making. We partner with enterprises, startups, and technology companies to develop AI-powered solutions that transform business processes.
                  </p>
                  <p className="text-sm md:text-base">
                    Our solutions support both predictive analytics and real-time intelligence, ensuring seamless integration and continuity of AI capabilities across all business functions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Software Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.reportsBanner}
                  alt="Software Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Software Engineering
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Technology organizations face unique challenges and opportunities in today's digital landscape. The expansion of software capabilities and the disintegration of traditional technology boundaries require innovative approaches.
                  </p>
                  <p className="text-sm md:text-base">
                    Data and AI-enhanced innovation, cloud-native development, and agile practices are driving transformation. Organizations breaking down barriers fastest will lead the next generation of technology.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 4: Blockchain */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.aiBanner}
                  alt="Blockchain"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Blockchain
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Blockchain and distributed ledger technologies enable secure, transparent, and decentralized solutions for various business applications. We leverage smart contracts, DeFi platforms, and enterprise blockchain solutions to drive innovation and trust.
                  </p>
                  <p className="text-sm md:text-base">
                    Our solutions ensure immutability, enable transparent transactions, improve security, and ensure compliance for competitive advantage in the evolving digital economy landscape.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.researchBanner}
                  alt="Cybersecurity"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Cybersecurity
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Advanced cybersecurity solutions protect digital assets, networks, and data from evolving threats. We partner with enterprises to develop comprehensive security strategies, threat detection systems, and incident response capabilities.
                  </p>
                  <p className="text-sm md:text-base">
                    Our solutions support both proactive threat prevention and real-time security monitoring, ensuring seamless protection and continuity of security operations across all digital infrastructure.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 6: IoT & Edge Computing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.reportsBanner}
                  alt="IoT & Edge Computing"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  IoT & Edge Computing
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Internet of Things and edge computing solutions enable real-time data processing, device connectivity, and intelligent automation at the network edge. We develop IoT platforms, edge computing infrastructure, and smart device ecosystems.
                  </p>
                  <p className="text-sm md:text-base">
                    Data processing at the edge, low-latency computing, and AI-enhanced IoT capabilities are driving transformation. Organizations leveraging edge intelligence fastest will lead the next generation of connected technology.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left mb-4">
              Technology Use Cases
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              Real-world applications of our technology solutions
            </p>
          </motion.div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={images.banners.aiBanner}
                      alt={useCase.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    {/* Title */}
                    <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {useCase.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                      {useCase.description}
                    </p>
                    
                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {useCase.technologies.map((tech, techIndex) => (
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

      {/* Research and insights Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden shadow-xl"
          >
            {/* Left Side - Image with Neural Network Effect */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-black overflow-hidden">
              {/* Base image with reduced opacity */}
              <img
                src={images.banners.aiBanner}
                alt="Technology innovation research"
                className="w-full h-full object-cover opacity-40"
              />
              {/* Abstract neural network overlay effect */}
              <div className="absolute inset-0">
                {/* Glowing purple lines and dots pattern */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                  {/* Network lines */}
                  <defs>
                    <linearGradient id="lineGradientTechnology" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(147, 51, 234, 0.6)" />
                      <stop offset="50%" stopColor="rgba(124, 58, 237, 0.8)" />
                      <stop offset="100%" stopColor="rgba(168, 85, 247, 0.4)" />
                    </linearGradient>
                  </defs>
                  {/* Connecting lines */}
                  <line x1="50" y1="80" x2="150" y2="120" stroke="url(#lineGradientTechnology)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="150" y1="120" x2="250" y2="100" stroke="url(#lineGradientTechnology)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="100" y1="200" x2="200" y2="180" stroke="url(#lineGradientTechnology)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="200" y1="180" x2="300" y2="220" stroke="url(#lineGradientTechnology)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="80" y1="250" x2="180" y2="280" stroke="url(#lineGradientTechnology)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="220" y1="150" x2="320" y2="200" stroke="url(#lineGradientTechnology)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="120" y1="300" x2="250" y2="320" stroke="url(#lineGradientTechnology)" strokeWidth="1.5" opacity="0.6" />
                  {/* Network nodes (dots) */}
                  <circle cx="50" cy="80" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="150" cy="120" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="250" cy="100" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="100" cy="200" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="200" cy="180" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="300" cy="220" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="80" cy="250" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="180" cy="280" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="220" cy="150" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="320" cy="200" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="120" cy="300" r="3" fill="rgba(255, 255, 255, 0.9)" />
                  <circle cx="250" cy="320" r="3" fill="rgba(255, 255, 255, 0.9)" />
                </svg>
                {/* Additional glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-600/10"></div>
              </div>
            </div>

            {/* Right Side - Blue Box */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-10 lg:p-12 flex flex-col justify-between">
              {/* Top Text */}
              <div>
                <p className="text-sm md:text-base text-white/80 mb-4 md:mb-6 font-medium">
                  — NeuroVerse Research Institute
                </p>
                
                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-6 md:mb-8 leading-tight">
                  Technology innovation research
                </h3>
              </div>

              {/* Bottom Text */}
              <p className="text-xs md:text-sm text-white font-semibold uppercase tracking-wider">
                NEUROVERSE RESEARCH INSTITUTE
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Learn more by service Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left mb-4">
              Learn more by service
            </h2>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Software Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={images.banners.aiBanner}
                    alt="Software Development"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Software Development
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                    Custom software development services including web applications, mobile apps, microservices architecture, and API development for scalable and modern solutions.
                  </p>
                  
                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      React
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Node.js
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Microservices
                    </span>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Cloud Infrastructure */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={images.banners.researchBanner}
                    alt="Cloud Infrastructure"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Cloud Infrastructure
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                    Comprehensive cloud transformation services including migration, architecture design, DevOps implementation, and cloud-native application development.
                  </p>
                  
                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      AWS
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Azure
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      GCP
                    </span>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={images.banners.reportsBanner}
                    alt="Cybersecurity"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Cybersecurity
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                    Advanced security solutions including threat intelligence, penetration testing, security architecture, compliance management, and incident response services.
                  </p>
                  
                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      SIEM
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Zero Trust
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Encryption
                    </span>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4: AI & Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={images.banners.aiBanner}
                    alt="AI & Machine Learning"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    AI & Machine Learning
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                    AI and ML solutions including data engineering, machine learning model development, MLOps, predictive analytics, and intelligent automation platforms.
                  </p>
                  
                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Python
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      TensorFlow
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      PyTorch
                    </span>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 5: Data Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={images.banners.researchBanner}
                    alt="Data Analytics"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    Data Analytics
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                    Comprehensive data analytics solutions including business intelligence, data warehousing, real-time analytics, and data visualization for data-driven decision making.
                  </p>
                  
                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Big Data
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Analytics
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      BI Tools
                    </span>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 6: DevOps & Automation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                  <img
                    src={images.banners.reportsBanner}
                    alt="DevOps & Automation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-4 md:p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    DevOps & Automation
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                    DevOps and automation services including CI/CD pipeline implementation, infrastructure as code, containerization, and automated testing for streamlined development workflows.
                  </p>
                  
                  {/* Technologies Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      CI/CD
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Kubernetes
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300">
                      Docker
                    </span>
                  </div>
                  
                  {/* Learn More Link */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}

