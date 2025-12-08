import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, ArrowRight, Stethoscope, Activity, Brain, Shield, Database, Smartphone, Users, TrendingUp, CheckCircle2, BarChart3, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState } from "react";
import { Link } from "react-router";

/**
 * Healthcare Page Component
 * 
 * This page displays healthcare-specific solutions and insights.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function Healthcare() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Carousel state for Healthcare Case Study Banner
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);

  // Carousel items data
  const carouselItems = [
    {
      title: "Healthcare organizations achieve stability and security with NeuroVerse cloud solutions",
      description: "NeuroVerse supports deployment of advanced cloud and AI-powered healthcare solutions, with scalable cloud infrastructure and intelligent capabilities unlocking operational efficiencies, productivity gains, improving patient outcomes, and providing a blueprint for healthcare digital transformation across hospitals and medical institutions.",
      backgroundImage: images.banners.healthcareBanner
    },
    {
      title: "AI-powered diagnostics transform patient care delivery",
      description: "Our cutting-edge AI and machine learning solutions enable healthcare providers to deliver faster, more accurate diagnoses. By leveraging advanced medical imaging analysis and predictive analytics, we help reduce diagnostic errors, improve treatment outcomes, and enhance the overall quality of patient care.",
      backgroundImage: images.banners.healthcareHeroBanner1
    },
    {
      title: "Telemedicine platforms connect patients with care anywhere",
      description: "NeuroVerse's comprehensive telemedicine solutions break down geographical barriers, enabling healthcare providers to reach patients remotely. Our secure, HIPAA-compliant platforms support video consultations, remote monitoring, and virtual care delivery, ensuring continuity of care regardless of location.",
      backgroundImage: images.banners.healthcareBanner
    },
    {
      title: "Electronic Health Records streamline clinical workflows",
      description: "Transform your healthcare operations with our integrated EHR systems that seamlessly connect hospitals, clinics, and healthcare providers. Our solutions improve data accessibility, reduce administrative burden, and enable better care coordination across the entire healthcare ecosystem.",
      backgroundImage: images.banners.healthcareHeroBanner1
    }
  ];

  // Carousel navigation functions
  const nextCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevCarousel = () => {
    setCurrentCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToCarouselSlide = (index: number) => {
    setCurrentCarouselIndex(index);
  };


  // Healthcare Solutions
  const healthcareSolutions = [
    {
      icon: Stethoscope,
      title: "Electronic Health Records (EHR)",
      description: "Comprehensive EHR systems that streamline patient data management, improve clinical workflows, and ensure seamless information sharing across healthcare providers.",
      features: ["Patient Data Management", "Clinical Documentation", "Interoperability", "HIPAA Compliance"]
    },
    {
      icon: Brain,
      title: "AI-Powered Diagnostics",
      description: "Advanced machine learning algorithms for medical imaging analysis, disease detection, and diagnostic support that enhance accuracy and speed up diagnosis.",
      features: ["Medical Imaging Analysis", "Disease Detection", "Predictive Analytics", "Clinical Decision Support"]
    },
    {
      icon: Smartphone,
      title: "Telemedicine Platforms",
      description: "Secure, user-friendly telemedicine solutions that enable remote consultations, virtual care delivery, and patient engagement from anywhere.",
      features: ["Video Consultations", "Remote Monitoring", "Patient Portals", "Mobile Health Apps"]
    },
    {
      icon: Activity,
      title: "Health Information Systems",
      description: "Integrated health information systems that connect hospitals, clinics, and healthcare providers for coordinated patient care.",
      features: ["Hospital Management", "Laboratory Systems", "Pharmacy Management", "Billing & Revenue"]
    },
    {
      icon: Database,
      title: "Healthcare Analytics",
      description: "Data-driven insights and analytics platforms that help healthcare organizations improve outcomes, reduce costs, and enhance operational efficiency.",
      features: ["Population Health Analytics", "Clinical Outcomes", "Cost Analysis", "Performance Metrics"]
    },
    {
      icon: Shield,
      title: "Healthcare Security & Compliance",
      description: "Robust security solutions and compliance frameworks to protect sensitive patient data and meet regulatory requirements.",
      features: ["HIPAA Compliance", "Data Encryption", "Access Controls", "Audit Trails"]
    },
  ];

  // Key Benefits
  const benefits = [
    {
      icon: TrendingUp,
      title: "Improved Patient Outcomes",
      description: "AI-powered diagnostics and personalized treatment plans lead to better health outcomes and patient satisfaction."
    },
    {
      icon: Users,
      title: "Enhanced Care Coordination",
      description: "Seamless information sharing across healthcare providers ensures coordinated and comprehensive patient care."
    },
    {
      icon: BarChart3,
      title: "Operational Efficiency",
      description: "Automated workflows and intelligent systems reduce administrative burden and improve resource utilization."
    },
    {
      icon: CheckCircle2,
      title: "Regulatory Compliance",
      description: "Built-in compliance features ensure adherence to HIPAA, HITECH, and other healthcare regulations."
    },
  ];

  // Use Cases
  const useCases = [
    {
      title: "Hospital Management System",
      description: "Comprehensive hospital information system managing patient admissions, bed allocation, staff scheduling, and resource optimization.",
      technologies: ["Cloud Computing", "AI/ML", "IoT", "Data Analytics"]
    },
    {
      title: "Telemedicine Platform",
      description: "Secure telemedicine solution enabling remote consultations, prescription management, and virtual follow-ups for patients.",
      technologies: ["Cloud Computing", "Mobile Apps", "Video Conferencing", "EHR Integration"]
    },
    {
      title: "Medical Imaging AI",
      description: "AI-powered medical imaging analysis system for radiology, pathology, and diagnostic imaging with high accuracy rates.",
      technologies: ["AI/ML", "Computer Vision", "Deep Learning", "Cloud Computing"]
    },
    {
      title: "Patient Portal & Engagement",
      description: "Comprehensive patient portal for appointment scheduling, medical records access, medication reminders, and health tracking.",
      technologies: ["Mobile Apps", "Cloud Computing", "Data Analytics", "IoT"]
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
            backgroundImage: `url(${images.banners.healthcareHeroBannerNew})`,
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

      {/* Healthcare Card - Positioned outside hero section, extending from hero */}
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
                {/* Healthcare Text - Centered in the box */}
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
                  Healthcare
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Healthcare-Specific Solutions Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
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
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-red-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 cursor-pointer group relative overflow-hidden"
                aria-label="LinkedIn"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-red-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-red-50 hover:to-red-100 cursor-pointer group relative overflow-hidden"
                aria-label="Facebook"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                  Healthcare-Specific Solutions
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Discover how NeuroVerse delivers tailored AI and software solutions across diverse industries, addressing unique challenges and driving digital transformation.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  In the healthcare sector, we understand that technology must seamlessly integrate with clinical workflows while maintaining the highest standards of security, compliance, and patient care. Our healthcare solutions are designed to enhance operational efficiency, improve patient outcomes, and enable healthcare providers to deliver exceptional care in an increasingly digital world.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  From AI-powered diagnostic tools that assist clinicians in early disease detection to comprehensive electronic health record systems that streamline patient data management, NeuroVerse combines cutting-edge technology with deep healthcare domain expertise. We work closely with hospitals, clinics, research institutions, and healthcare organizations to develop solutions that are not just innovative, but also practical, scalable, and compliant with healthcare regulations.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Healthcare Case Study Banner/Carousel Section - Full Width */}
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
            className="absolute inset-0 w-full transition-all duration-500"
            style={{
              backgroundImage: `url(${carouselItems[currentCarouselIndex].backgroundImage})`,
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
                  key={currentCarouselIndex}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-xl max-w-2xl"
                >
                  {/* Headline */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                    {carouselItems[currentCarouselIndex].title}
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                    {carouselItems[currentCarouselIndex].description}
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
                  onClick={prevCarousel}
                  className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                </button>

                {/* Dots Indicator */}
                <div className="flex items-center gap-1.5 px-1">
                  {carouselItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToCarouselSlide(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentCarouselIndex
                          ? 'bg-blue-600 w-8 h-2'
                          : 'bg-white border-2 border-gray-300 w-2 h-2 hover:bg-gray-200'
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Next Button (Right Arrow) */}
                <button
                  onClick={nextCarousel}
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
            {/* Card 1: Health payer */}
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
                  src={images.banners.healthcareTechBanner}
                  alt="Health payer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Health payer
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    AI and Gen AI solutions transform health insurance through digital innovation, predictive analytics, and enhanced cybersecurity. We deliver personalized experiences, streamline operations, and ensure regulatory compliance for competitive advantage.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Health and social care */}
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
                  src={images.banners.healthcareTech2Banner}
                  alt="Health and social care"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Health and social care
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    We partner with hospitals, clinics, and community care providers to deliver person-centered services. Our technology enables seamless coordination between home-based care and medical institutions, ensuring continuity of care across all settings.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Life sciences */}
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
                  src={images.banners.healthcareCardImg}
                  alt="Life sciences"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4">
                  Life sciences
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    We help Pharma and MedTech organizations navigate evolving healthcare challenges through AI-enhanced innovation, data-driven insights, and sustainable solutions. Our approach breaks down traditional barriers to accelerate transformation and drive the next generation of health outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
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
          className="grid grid-cols-1 md:grid-cols-5 w-full items-stretch"
        >
            {/* Left Section - Dark Blue Text Box (60% - 3 columns) */}
            <div className="md:col-span-3 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Headline */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white leading-tight">
                  Transforming healthcare through innovation
                </h2>
                
                {/* Body Text */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  At NeuroVerse, we're committed to revolutionizing healthcare delivery through cutting-edge AI and cloud technologies. Our mission is to empower healthcare organizations with intelligent solutions that improve patient outcomes, enhance operational efficiency, and drive digital transformation across the healthcare ecosystem.
                </p>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 w-fit mt-4"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Section - Image (40% - 2 columns) */}
            <div className="md:col-span-2 relative h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
              <img
                src={images.banners.healthcareImageBgImg}
                alt="NeuroVerse healthcare innovation"
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-transparent"></div>
            </div>
          </motion.div>
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
              Healthcare Use Cases
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              Real-world applications of our healthcare technology solutions
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
                      src={images.banners.healthcareBanner}
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

    </div>
  );
}

