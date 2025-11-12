import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, TrendingUp, CheckCircle2, BarChart3, Linkedin, ChevronLeft, ChevronRight, Heart, Award, Zap, Target, Globe, Lightbulb, Coffee, Calendar, Smile, Building2, UserCircle, Briefcase, GraduationCap } from "lucide-react";
import { images } from "@/assets";
import { useRef } from "react";

/**
 * Meet Our Team Page Component
 * 
 * This page displays information about the NeuroVerse team.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function MeetOurTeam() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Team Benefits
  const benefits = [
    {
      icon: UserCircle,
      title: "Diverse Expertise",
      description: "Our team brings together professionals from diverse backgrounds, industries, and expertise areas. This diversity of thought drives innovation and creative problem-solving."
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "We believe in the power of collaboration. Our team members work together seamlessly, sharing knowledge, supporting each other, and achieving collective success."
    },
    {
      icon: Award,
      title: "Industry Leaders",
      description: "Meet industry veterans and rising stars who are recognized for their expertise, innovation, and contributions to technology and business transformation."
    },
    {
      icon: Lightbulb,
      title: "Innovation Champions",
      description: "Our team members are passionate innovators who constantly push boundaries, explore new technologies, and create solutions that make a real difference."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learners",
      description: "We invest in our team's growth through continuous learning opportunities, certifications, and professional development programs that keep skills sharp and relevant."
    },
    {
      icon: Briefcase,
      title: "Global Experience",
      description: "Our team has worked on projects across the globe, bringing international perspectives and best practices to every engagement."
    },
  ];

  // Key Aspects of Our Team
  const aspects = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Our team thrives on collaboration, working together to solve complex challenges and deliver exceptional results for our clients."
    },
    {
      icon: Zap,
      title: "Agile & Adaptive",
      description: "We adapt quickly to changing market conditions and client needs, staying ahead of trends and delivering cutting-edge solutions."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Our team is focused on delivering measurable results and creating value for our clients, partners, and stakeholders."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With team members across different regions, we bring global perspectives and local expertise to every project."
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
            backgroundImage: `url(${images.projects.latestInsights || images.hero.background})`,
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

      {/* Meet Our Team Card - Positioned outside hero section, extending from hero */}
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
                {/* Meet Our Team Text - Centered in the box */}
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
                  Meet our team
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Meet Our Team-Specific Solutions Section */}
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
                  Meet our team
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Get to know the talented individuals who make NeuroVerse what it is today. Our team is composed of passionate professionals, innovative thinkers, and dedicated experts who are committed to driving success.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  From our leadership team to our technical experts, consultants, and innovators, each member brings unique skills, perspectives, and experiences that contribute to our collective success and client satisfaction.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Member Profiles Section */}
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
              Founding Team
            </h2>
          </motion.div>

          {/* Three Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Profile 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Portrait Image */}
              <div className="relative w-full h-80 md:h-96 overflow-hidden">
                <img
                  src={images.projects.latestInsights || images.hero.background}
                  alt="Kavyasri"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Profile Information */}
              <div className="p-6 md:p-8">
                {/* Name */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2">
                  Kavyasri
                </h3>
                
                {/* Title */}
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Analyst
                </p>
                
                {/* Tags/Keywords */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    Experienced professionals
                  </span>
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    Software engineering
                  </span>
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    India
                  </span>
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    NeuroVerse
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Profile 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Portrait Image */}
              <div className="relative w-full h-80 md:h-96 overflow-hidden">
                <img
                  src={images.projects.hotTopicsBackground || images.projects.latestInsights}
                  alt="Vinay Kumar"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Profile Information */}
              <div className="p-6 md:p-8">
                {/* Name */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2">
                  Vinay Kumar
                </h3>
                
                {/* Title */}
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Analyst
                </p>
                
                {/* Tags/Keywords */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    Experienced professionals
                  </span>
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    Software engineering
                  </span>
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    India
                  </span>
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    NeuroVerse
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Profile 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Portrait Image */}
              <div className="relative w-full h-80 md:h-96 overflow-hidden">
                <img
                  src={images.projects.insightsHero || images.projects.latestInsights}
                  alt="Abhishek"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Profile Information */}
              <div className="p-6 md:p-8">
                {/* Name */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2">
                  Abhishek
                </h3>
                
                {/* Title */}
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Senior Software Engineer
                </p>
                
                {/* Tags/Keywords */}
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    Experienced professionals
                  </span>
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    Software engineering
                  </span>
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    India
                  </span>
                  <span className="px-3 py-1.5 text-xs md:text-sm font-medium bg-gray-100 text-gray-700 rounded-md">
                    NeuroVerse
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A Dynamic Environment Section */}
      <section className="relative bg-white py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden"
        >
          {/* Background Image - People working together */}
          <div 
            className="absolute inset-0 w-full"
            style={{
              backgroundImage: `url(${images.projects.latestInsights || images.hero.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10"></div>
          </div>

          {/* Content Container - White Box on Right */}
          <div className="relative z-10 h-full flex items-center justify-end">
            <div className="max-w-7xl mx-auto max-w-5k-content w-full px-4 md:px-6 lg:px-8 xl:px-12">
              <div className="flex items-center justify-end">
                {/* White Text Box - Right Side */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-2xl max-w-lg w-full"
                >
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                    A collaborative team
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                    Whether you're working with our technical experts, business consultants, or innovation leaders, every interaction is an opportunity to collaborate with industry professionals, learn from their expertise, and gain insights that shape your future.
                  </p>

                  {/* Carousel Navigation - Bottom */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className="bg-white rounded-full px-4 py-2.5 flex items-center gap-3 shadow-sm border border-gray-200 w-fit"
                    >
                      {/* Previous Button (Left Arrow) */}
                      <button
                        className="p-1.5 hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-95 text-gray-400 hover:text-gray-600"
                        aria-label="Previous"
                      >
                        <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
                      </button>

                      {/* Dots Indicator */}
                      <div className="flex items-center gap-1.5 px-2">
                        <button
                          className="bg-blue-600 w-2 h-2 rounded-full transition-all duration-300"
                          aria-label="Slide 1"
                        />
                        <button
                          className="bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400 transition-all duration-300"
                          aria-label="Slide 2"
                        />
                        <button
                          className="bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400 transition-all duration-300"
                          aria-label="Slide 3"
                        />
                        <button
                          className="bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400 transition-all duration-300"
                          aria-label="Slide 4"
                        />
                        <button
                          className="bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400 transition-all duration-300"
                          aria-label="Slide 5"
                        />
                        <button
                          className="bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400 transition-all duration-300"
                          aria-label="Slide 6"
                        />
                      </div>

                      {/* Next Button (Right Arrow) */}
                      <button
                        className="p-1.5 hover:bg-gray-100 rounded-full transition-all duration-200 active:scale-95 text-gray-400 hover:text-gray-600"
                        aria-label="Next"
                      >
                        <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Meet Our Team Banner/Carousel Section - Full Width */}
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
              backgroundImage: `url(${images.projects.latestInsights || images.hero.background})`,
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
                    Experience our team's expertise
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                    At NeuroVerse, we bring together talented professionals who are passionate about technology, innovation, and making a difference. Our team creates an environment where expertise meets collaboration, and where every member contributes to our collective success.
                  </p>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-sm"
                  >
                    <span>Explore our team</span>
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

      {/* Be a part of our team Section */}
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
              Be a part of our team
            </h2>
          </motion.div>

          {/* Three Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Leadership Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden mb-4 md:mb-6">
                <img
                  src={images.projects.latestInsights || images.hero.background}
                  alt="Leadership Team"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 md:mb-4">
                Leadership Team
              </h3>
              
              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Meet our visionary leaders who guide NeuroVerse's strategic direction, inspire innovation, and drive our mission to transform businesses through technology.
              </p>
            </motion.div>

            {/* Card 2: Technical Experts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden mb-4 md:mb-6">
                <img
                  src={images.projects.hotTopicsBackground || images.projects.latestInsights}
                  alt="Technical Experts"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 md:mb-4">
                Technical Experts
              </h3>
              
              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our technical team includes architects, engineers, and developers who are masters of their craft, passionate about technology, and committed to building exceptional solutions.
              </p>
            </motion.div>

            {/* Card 3: Business Consultants */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden mb-4 md:mb-6">
                <img
                  src={images.projects.insightsHero || images.projects.latestInsights}
                  alt="Business Consultants"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 md:mb-4">
                Business Consultants
              </h3>
              
              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our consultants bring deep industry knowledge, strategic thinking, and proven methodologies to help clients transform their businesses and achieve their goals.
              </p>
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
              We combine our team's diverse expertise with cutting-edge technologies, proven methodologies, and global resources. Our commitment to excellence and innovation means you'll work with professionals who are leaders in their fields.
            </p>

            {/* Bold Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 leading-tight">
              The team platform for your professional success
            </h2>

            {/* Dark Blue Line */}
            <div className="h-1 w-24 bg-blue-900 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid Section */}
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
              Our Team
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              Discover what makes our team exceptional
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
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
                  Join a team that's making a difference
                </h2>
                
                {/* Body Text */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  At NeuroVerse, we're not just building software – we're building a team of exceptional professionals. Join us and work alongside talented individuals who are passionate about technology, innovation, and creating lasting impact.
                </p>

                {/* Read More Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 w-fit mt-4"
                >
                  <span>Explore careers</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>

            {/* Right Section - Image (40% - 2 columns) */}
            <div className="md:col-span-2 relative h-64 md:h-80 lg:h-96 overflow-hidden">
              <img
                src={images.projects.latestInsights || images.hero.background}
                alt="NeuroVerse team"
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

