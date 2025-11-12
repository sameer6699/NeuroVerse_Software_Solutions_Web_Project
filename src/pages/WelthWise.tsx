import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, ArrowRight, Users, Shield, Zap, Globe, BarChart3, Linkedin, ChevronLeft, ChevronRight, Target, CheckCircle2, Database, Wallet, PieChart } from "lucide-react";
import { images } from "@/assets";
import { useRef } from "react";
import { useNavigate } from "react-router";

/**
 * WelthWise Product Detail Page Component
 * 
 * This page displays comprehensive information about WelthWise product.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function WelthWise() {
  const heroRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // WelthWise Features
  const welthWiseFeatures = [
    {
      icon: TrendingUp,
      title: "AI-Powered Financial Planning",
      description: "Advanced machine learning algorithms provide personalized investment recommendations tailored to your financial goals, risk tolerance, and time horizon.",
      features: ["Personalized Recommendations", "Risk Assessment", "Goal-Based Planning", "Portfolio Optimization"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Portfolio Analytics",
      description: "Comprehensive portfolio analysis and optimization tools that provide real-time insights into performance, risk metrics, and asset allocation.",
      features: ["Performance Tracking", "Risk Analysis", "Asset Allocation", "Return Optimization"]
    },
    {
      icon: Globe,
      title: "Market Intelligence & Insights",
      description: "Access real-time market data, trends, and insights to make informed investment decisions with comprehensive market intelligence.",
      features: ["Market Data", "Trend Analysis", "Economic Indicators", "Investment Insights"]
    },
    {
      icon: Shield,
      title: "Secure & Compliant Platform",
      description: "Enterprise-grade security and compliance management ensuring your financial data and investments remain protected and compliant with regulations.",
      features: ["Data Encryption", "Regulatory Compliance", "Access Control", "Audit Trails"]
    },
    {
      icon: Zap,
      title: "Automated Rebalancing",
      description: "Intelligent automated portfolio rebalancing that maintains your target asset allocation and optimizes returns while managing risk.",
      features: ["Auto Rebalancing", "Threshold Management", "Tax Optimization", "Cost Efficiency"]
    },
    {
      icon: Database,
      title: "Comprehensive Reporting",
      description: "Detailed financial reports, tax documents, and performance summaries to help you track progress and make informed decisions.",
      features: ["Performance Reports", "Tax Documents", "Custom Reports", "Export Capabilities"]
    },
  ];

  // Key Benefits
  const benefits = [
    {
      icon: TrendingUp,
      title: "Optimized Returns",
      description: "Maximize your investment returns with AI-driven portfolio optimization and intelligent asset allocation strategies."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and management tools to protect your wealth while pursuing growth opportunities."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Leverage real-time market intelligence and comprehensive analytics to make informed investment decisions."
    },
    {
      icon: CheckCircle2,
      title: "Simplified Management",
      description: "Streamline your wealth management with automated processes, intuitive dashboards, and comprehensive reporting."
    },
  ];

  // Use Cases
  const useCases = [
    {
      title: "Individual Wealth Management",
      description: "Comprehensive wealth management platform for high-net-worth individuals seeking personalized investment strategies, portfolio optimization, and financial planning services.",
      technologies: ["AI Planning", "Portfolio Management", "Risk Analysis", "Tax Optimization"]
    },
    {
      title: "Institutional Portfolio Management",
      description: "Enterprise-grade wealth management solution for institutions, family offices, and financial advisors managing multiple portfolios with advanced analytics and reporting.",
      technologies: ["Multi-Portfolio", "Institutional Tools", "Advanced Analytics", "Compliance"]
    },
    {
      title: "Retirement Planning",
      description: "Long-term retirement planning solutions with goal-based investment strategies, risk-adjusted portfolios, and comprehensive retirement income planning.",
      technologies: ["Retirement Planning", "Goal Tracking", "Income Planning", "Risk Management"]
    },
    {
      title: "Tax-Efficient Investing",
      description: "Intelligent tax-loss harvesting and tax-efficient investment strategies to minimize tax liabilities while maximizing after-tax returns.",
      technologies: ["Tax Optimization", "Loss Harvesting", "Tax Reporting", "Compliance"]
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
            backgroundImage: `url(${images.projects.insightsHero || images.hero.background})`,
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40"></div>
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

      {/* WelthWise Card - Positioned outside hero section, extending from hero */}
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
                {/* WelthWise Text - Centered in the box */}
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
                  WelthWise
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* WelthWise-Specific Solutions Section */}
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
                  WelthWise - Advanced Wealth Management Platform
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Discover how WelthWise empowers individuals and institutions with AI-driven financial planning, portfolio optimization, and real-time market intelligence for smarter investment decisions.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  In today's complex financial landscape, managing wealth effectively requires sophisticated tools and intelligent insights. WelthWise is designed to help you make informed investment decisions, optimize your portfolio, and achieve your financial goals with confidence.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WelthWise Case Study Banner/Carousel Section - Full Width */}
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
              backgroundImage: `url(${images.banners.aiBanner})`,
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
                    Transform your wealth management with AI-driven insights and intelligent planning
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                    WelthWise empowers individuals and institutions to achieve their financial goals through advanced AI-powered financial planning, real-time portfolio optimization, and comprehensive market intelligence. Our intelligent platform uses machine learning algorithms to provide personalized investment recommendations and optimize returns while managing risk effectively.
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

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: AI-Powered Planning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-blue-600 opacity-60" />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  AI-Powered Planning
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Our advanced machine learning algorithms analyze your financial situation, goals, and risk tolerance to provide personalized investment recommendations. The platform continuously learns and adapts to market conditions and your preferences.
                  </p>
                  <p className="text-sm md:text-base">
                    Get intelligent insights that help you make informed decisions, optimize your portfolio allocation, and achieve your financial objectives with confidence.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Portfolio Optimization */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                <PieChart className="w-32 h-32 text-blue-600 opacity-60" />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Portfolio Optimization
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Real-time portfolio analysis and optimization tools that help you maintain optimal asset allocation, maximize returns, and manage risk effectively. Automated rebalancing ensures your portfolio stays aligned with your investment strategy.
                  </p>
                  <p className="text-sm md:text-base">
                    Access comprehensive analytics, performance metrics, and risk assessments to make data-driven decisions and optimize your investment strategy.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Market Intelligence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
                <Globe className="w-32 h-32 text-blue-600 opacity-60" />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Market Intelligence
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Stay ahead with real-time market data, economic indicators, and investment insights. Our comprehensive market intelligence platform provides the information you need to make informed investment decisions.
                  </p>
                  <p className="text-sm md:text-base">
                    Access detailed market analysis, trend reports, and expert insights to understand market dynamics and identify opportunities that align with your investment strategy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Platform Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Paragraph */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
              We combine our end-to-end WelthWise platform with sector-specific expertise, advanced AI technologies, and global market intelligence to guide your wealth management journey every step of the way. Our strong partnerships with leading financial institutions and market data providers means you get access to the best tools and insights.
            </p>

            {/* Bold Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 leading-tight">
              The intelligent platform for your wealth management success
            </h2>

            {/* Dark Blue Line */}
            <div className="h-1 w-24 bg-blue-900 rounded-full"></div>
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
              WelthWise Use Cases
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              Real-world applications of our wealth management platform
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
                  <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <TrendingUp className="w-24 h-24 text-blue-600 opacity-40" />
                    </div>
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
            <div className="md:col-span-3 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Headline */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white leading-tight">
                  WelthWise - Transforming wealth management with AI intelligence
                </h2>
                
                {/* Body Text */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  We have been recognized as a leading platform for wealth management, helping thousands of individuals and institutions optimize their portfolios and achieve their financial goals.
                </p>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 w-fit mt-4"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Section - Image (40% - 2 columns) */}
            <div className="md:col-span-2 relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
              <TrendingUp className="w-32 h-32 text-blue-600 opacity-60" />
            </div>
          </motion.div>
      </section>

    </div>
  );
}

