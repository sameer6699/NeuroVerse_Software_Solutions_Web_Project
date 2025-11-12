import { motion, useScroll, useTransform } from "framer-motion";
import { Database, ArrowRight, Brain, TrendingUp, BarChart3, Sparkles, CheckCircle2, Linkedin, ChevronLeft, ChevronRight, Target, Zap, Cpu, FileCode, Layers } from "lucide-react";
import { images } from "@/assets";
import { useRef } from "react";
import { Link } from "react-router";

/**
 * Data Analytics & AI Solutions Page Component
 * 
 * This page displays data analytics and AI-specific solutions.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function DataAnalyticsAISolutions() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Data Analytics & AI Solutions
  const analyticsSolutions = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Advanced machine learning and artificial intelligence solutions that enable intelligent automation, predictive analytics, and data-driven decision making.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Deep Learning"]
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Comprehensive big data analytics platforms that process, analyze, and derive insights from large volumes of structured and unstructured data.",
      features: ["Data Warehousing", "Real-time Analytics", "Data Lake Solutions", "Stream Processing"]
    },
    {
      icon: BarChart3,
      title: "Business Intelligence & Reporting",
      description: "Powerful business intelligence solutions that transform raw data into actionable insights through interactive dashboards and comprehensive reporting.",
      features: ["Interactive Dashboards", "Custom Reports", "Data Visualization", "Self-Service Analytics"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Advanced predictive analytics solutions that forecast trends, identify patterns, and enable proactive decision-making based on historical data.",
      features: ["Forecasting Models", "Risk Analysis", "Demand Planning", "Customer Analytics"]
    },
    {
      icon: Sparkles,
      title: "AI-Powered Automation",
      description: "Intelligent automation solutions that leverage AI to streamline processes, reduce manual effort, and improve operational efficiency.",
      features: ["Process Automation", "Intelligent Document Processing", "Chatbots & Virtual Assistants", "Workflow Automation"]
    },
    {
      icon: Cpu,
      title: "Data Science & Engineering",
      description: "Comprehensive data science and engineering services that help organizations build, deploy, and maintain scalable data solutions.",
      features: ["Data Pipeline Development", "Model Development", "MLOps", "Data Governance"]
    },
  ];

  // Key Benefits
  const benefits = [
    {
      icon: Brain,
      title: "Intelligent Decision Making",
      description: "AI-powered analytics enable data-driven decisions that improve business outcomes and drive competitive advantage."
    },
    {
      icon: TrendingUp,
      title: "Enhanced Business Performance",
      description: "Advanced analytics and AI solutions optimize operations, reduce costs, and increase revenue through intelligent insights."
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Real-time data processing and analytics provide instant insights for faster decision-making and improved responsiveness."
    },
    {
      icon: Target,
      title: "Personalized Experiences",
      description: "AI-driven personalization delivers tailored customer experiences that increase engagement and satisfaction."
    },
  ];

  // Use Cases
  const useCases = [
    {
      title: "Enterprise AI Platform",
      description: "Comprehensive AI platform with machine learning, natural language processing, and computer vision capabilities for enterprise-wide AI adoption and innovation.",
      technologies: ["Machine Learning", "NLP", "Computer Vision", "Cloud Computing"]
    },
    {
      title: "Predictive Analytics & Forecasting",
      description: "Advanced predictive analytics solution with forecasting models, risk analysis, and demand planning capabilities for proactive business decision-making.",
      technologies: ["Predictive Modeling", "Time Series Analysis", "Risk Analytics", "Data Science"]
    },
    {
      title: "Business Intelligence & Data Visualization",
      description: "Enterprise business intelligence platform with interactive dashboards, custom reports, and self-service analytics for data-driven insights and reporting.",
      technologies: ["BI Tools", "Data Visualization", "Dashboard Design", "Reporting"]
    },
    {
      title: "AI-Powered Automation Platform",
      description: "Intelligent automation platform with AI-driven process automation, document processing, and workflow optimization for operational efficiency.",
      technologies: ["RPA", "AI Automation", "Document Processing", "Workflow Management"]
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
            backgroundImage: `url(${images.banners.aiBanner})`,
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
          {/* Enhanced gradient overlay for better text readability with blue tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-blue-900/20 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent"></div>
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
            className="w-6 h-10 border-2 border-blue-400/70 rounded-full flex items-start justify-center p-2 bg-white/80 backdrop-blur-sm shadow-md hover:border-blue-500 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-blue-600 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Data Analytics & AI Card - Positioned outside hero section, extending from hero */}
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
                className="relative rounded-lg px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 xl:py-28 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 hover:from-blue-800 hover:via-blue-700 hover:to-blue-800 transition-all duration-500 group"
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
                  <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
                </div>
                
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Data Analytics & AI Text - Centered in the box */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="relative z-10 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight whitespace-nowrap group-hover:text-blue-100 transition-colors duration-300"
                  style={{
                    fontFamily: "'Poppins', 'Montserrat', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Data Analytics & AI Solutions
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Data Analytics & AI-Specific Solutions Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-50/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
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
                  Data Analytics & AI Solutions
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Discover how NeuroVerse delivers comprehensive data analytics and AI solutions that transform your data into actionable insights, enable intelligent automation, and drive data-driven decision making.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Analytics Case Study Banner/Carousel Section - Full Width */}
      <section className="relative bg-white py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-xl"
        >
          {/* Background Image - Full Width with AI Theme */}
          <div 
            className="absolute inset-0 w-full"
            style={{
              backgroundImage: `url(${images.banners.aiBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
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
                {/* White Text Box with Enhanced Styling */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10 shadow-2xl max-w-2xl border border-white/20 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 group"
                >
                  {/* Decorative blue accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-t-xl"></div>
                  
                  {/* Headline */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6 leading-tight group-hover:text-blue-900 transition-colors duration-300">
                    Unlock the power of your data with AI and analytics
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                    NeuroVerse empowers organizations to transform their data into actionable insights through comprehensive analytics solutions, advanced AI capabilities, and intelligent automation. Our expertise enables data-driven decision making, predictive analytics, and operational efficiency.
                  </p>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white hover:border-blue-700 transition-all duration-300 shadow-sm group/btn"
                  >
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">Read more</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
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

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Machine Learning & AI */}
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
                  src={images.features.ai}
                  alt="Machine Learning & AI"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Machine Learning & AI
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Advanced machine learning and artificial intelligence solutions that enable intelligent automation, predictive analytics, and data-driven decision making. We leverage cutting-edge AI technologies to transform business processes.
                  </p>
                  <p className="text-sm md:text-base">
                    Our solutions include natural language processing, computer vision, deep learning, and predictive analytics for comprehensive AI capabilities.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Big Data Analytics */}
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
                  src={images.banners.cloudDataCenter}
                  alt="Big Data Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Big Data Analytics
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Comprehensive big data analytics platforms that process, analyze, and derive insights from large volumes of structured and unstructured data. We help organizations harness the power of big data.
                  </p>
                  <p className="text-sm md:text-base">
                    Our solutions support data warehousing, real-time analytics, data lake architectures, and stream processing for scalable data analytics.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Business Intelligence */}
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
                  src={images.banners.softwareServices}
                  alt="Business Intelligence"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Business Intelligence
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Powerful business intelligence solutions that transform raw data into actionable insights through interactive dashboards and comprehensive reporting. The expansion of data sources and analytics demands comprehensive BI approaches.
                  </p>
                  <p className="text-sm md:text-base">
                    Self-service analytics, interactive dashboards, and custom reporting are driving transformation. Organizations implementing comprehensive BI fastest will lead the next generation of data-driven decision making.
                  </p>
                </div>
              </div>
            </motion.div>
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
            className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 group"
          >
            {/* Left Side - Image with AI Network Effect */}
            <div className="relative w-full h-64 md:h-80 lg:h-96 bg-black overflow-hidden group-hover:scale-105 transition-transform duration-700">
              {/* Base image with reduced opacity */}
              <img
                src={images.banners.cloudDataCenter}
                alt="Data Analytics research"
                className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
              />
              {/* Abstract AI network overlay effect */}
              <div className="absolute inset-0">
                {/* Glowing blue lines and dots pattern */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
                  {/* Network lines */}
                  <defs>
                    <linearGradient id="lineGradientBlueAI" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
                      <stop offset="50%" stopColor="rgba(37, 99, 235, 0.8)" />
                      <stop offset="100%" stopColor="rgba(96, 165, 250, 0.4)" />
                    </linearGradient>
                  </defs>
                  {/* Connecting lines */}
                  <line x1="50" y1="80" x2="150" y2="120" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="150" y1="120" x2="250" y2="100" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="100" y1="200" x2="200" y2="180" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="200" y1="180" x2="300" y2="220" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="80" y1="250" x2="180" y2="280" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="220" y1="150" x2="320" y2="200" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
                  <line x1="120" y1="300" x2="250" y2="320" stroke="url(#lineGradientBlueAI)" strokeWidth="1.5" opacity="0.6" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-600/10"></div>
              </div>
            </div>

            {/* Right Side - Blue Box */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group-hover:from-blue-800 group-hover:via-blue-700 group-hover:to-blue-800 transition-all duration-500">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
              </div>
              
              {/* Top Text */}
              <div className="relative z-10">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-sm md:text-base text-white/80 mb-4 md:mb-6 font-medium"
                >
                  — NeuroVerse Research Institute
                </motion.p>
                
                {/* Title */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-6 md:mb-8 leading-tight group-hover:text-blue-100 transition-colors duration-300"
                >
                  Data Analytics & AI innovation research
                </motion.h3>
              </div>

              {/* Bottom Text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xs md:text-sm text-white/90 font-semibold uppercase tracking-wider relative z-10"
              >
                NEUROVERSE RESEARCH INSTITUTE
              </motion.p>
            </div>
          </motion.div>
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
              Data Analytics & AI Use Cases
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              Real-world applications of our data analytics and AI solutions
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
                      src={images.banners.researchBanner}
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

      {/* Leadership Recognition Banner Section - Full Width */}
      <section className="relative bg-white py-8 md:py-12 w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-5 w-full"
        >
            {/* Left Section - Dark Blue Text Box (60% - 3 columns) */}
            <div className="md:col-span-3 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden group hover:from-blue-800 hover:via-blue-700 hover:to-blue-800 transition-all duration-500">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2 group-hover:scale-125 transition-transform duration-1000"></div>
              </div>
              
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6 relative z-10"
              >
                {/* Headline */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white leading-tight group-hover:text-blue-100 transition-colors duration-300">
                  NeuroVerse Software Solutions recognized as a leader in Data Analytics & AI
                </h2>
                
                {/* Body Text */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl group-hover:text-white transition-colors duration-300">
                  We have been recognized as a leader in Data Analytics & AI Solutions by leading industry analysts for our innovative approaches to machine learning, predictive analytics, and intelligent automation.
                </p>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 hover:border-blue-300 transition-all duration-300 w-fit mt-4 group/btn"
                >
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-300">Read more</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Section - Image (40% - 2 columns) */}
            <div className="md:col-span-2 relative h-64 md:h-80 lg:h-96 overflow-hidden">
              <img
                src={images.banners.researchBanner}
                alt="NeuroVerse data analytics leadership recognition"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-transparent"></div>
            </div>
          </motion.div>
      </section>

    </div>
  );
}

