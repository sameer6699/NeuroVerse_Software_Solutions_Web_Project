import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, TrendingUp, CheckCircle2, BarChart3, Linkedin, ChevronLeft, ChevronRight, Heart, Award, Zap, Target, Globe, Lightbulb } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

/**
 * Life at NeuroVerse Page Component
 * 
 * This page displays information about life at NeuroVerse.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function LifeAtNeuroVerse() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Dynamic Environment Carousel State
  const [currentDynamicIndex, setCurrentDynamicIndex] = useState(0);

  // Dynamic Environment Carousel Data
  const dynamicEnvironmentData = [
    {
      title: "A dynamic environment",
      description: "Whether you're working from a state-of-the-art campus or a virtual workplace, every day is an opportunity to take part in game-changing projects, work alongside industry and technology experts, and gain the experiences and connections you need to shape your future."
    },
    {
      title: "Innovation at every turn",
      description: "Join a team that's constantly pushing boundaries and exploring new possibilities. From cutting-edge AI projects to transformative digital solutions, you'll work on initiatives that make a real impact on businesses and society."
    },
    {
      title: "Collaborative excellence",
      description: "Work alongside world-class professionals who bring diverse perspectives and expertise. Our collaborative culture ensures that every team member's voice is heard and valued, creating an environment where innovation thrives."
    },
    {
      title: "Continuous growth",
      description: "Access to ongoing learning opportunities, mentorship programs, and career development resources. We invest in your professional growth, providing the tools and support you need to advance your career and achieve your goals."
    },
    {
      title: "Global opportunities",
      description: "Be part of a global network of innovators working on projects that span continents. Experience different cultures, work with international teams, and contribute to solutions that have worldwide impact."
    },
    {
      title: "Work-life integration",
      description: "Enjoy flexible working arrangements that allow you to balance your professional ambitions with personal priorities. We believe in sustainable productivity and creating an environment where you can thrive both at work and in life."
    }
  ];

  const nextDynamic = () => {
    setCurrentDynamicIndex((prev) => (prev + 1) % dynamicEnvironmentData.length);
  };

  const prevDynamic = () => {
    setCurrentDynamicIndex((prev) => (prev - 1 + dynamicEnvironmentData.length) % dynamicEnvironmentData.length);
  };

  const goToDynamic = (index: number) => {
    setCurrentDynamicIndex(index);
  };

  // Key Aspects of Life at NeuroVerse
  const aspects = [
    {
      icon: Lightbulb,
      title: "Innovation Culture",
      description: "A culture that encourages experimentation, learning from failures, and celebrating successes. Your innovative ideas are welcomed and supported."
    },
    {
      icon: Zap,
      title: "Dynamic Environment",
      description: "Fast-paced, exciting work environment where no two days are the same. Work on diverse projects and constantly learn new skills."
    },
    {
      icon: Users,
      title: "Diverse Team",
      description: "Work alongside talented professionals from different backgrounds, cultures, and expertise. Diversity makes us stronger and more innovative."
    },
    {
      icon: Award,
      title: "Recognition & Growth",
      description: "Your achievements are recognized and rewarded. Clear career progression paths and opportunities to take on new challenges and responsibilities."
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
            backgroundImage: `url(${images.banners.lifeAtNvBanner})`,
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

      {/* Life at NeuroVerse Card - Positioned outside hero section, extending from hero */}
      <div className="relative -mt-24 md:-mt-32 lg:-mt-40 z-30">
        <div className="max-w-7xl mx-auto max-w-5k-content px-4 md:px-6 lg:px-8">
          <div className="flex justify-end">
            <div className="relative">
              {/* Blue Background Box - Overlay on right side */}
              <div 
                className="relative rounded-lg px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 xl:py-28 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
              >
                {/* Life at NeuroVerse Text - Centered in the box */}
                <h1
                  className="relative z-10 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight whitespace-nowrap"
                  style={{
                    fontFamily: "'Poppins', 'Montserrat', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Life at NeuroVerse
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Life at NeuroVerse-Specific Solutions Section */}
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
              <a
                href="https://www.linkedin.com/company/neuroverse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-blue-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 cursor-pointer group relative overflow-hidden"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Linkedin className="w-7 h-7 md:w-8 md:h-8 text-gray-600 group-hover:text-white transition-colors relative z-10" />
              </a>

              {/* Facebook Icon */}
              <a
                href="https://www.facebook.com/neuroverse"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 hover:border-blue-600 bg-white shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100 cursor-pointer group relative overflow-hidden"
                aria-label="Facebook"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg
                  className="w-7 h-7 md:w-8 md:h-8 text-gray-600 group-hover:text-white transition-colors relative z-10"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Description Text - Right Side */}
            <div className="flex-1">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                  Life at NeuroVerse
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Experience a vibrant work culture where collaboration, innovation, and personal growth thrive. Discover what makes NeuroVerse a unique and rewarding place to work.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  At NeuroVerse, we believe that great work comes from great people who are happy, supported, and inspired. Our culture is built on trust, respect, and a shared passion for making a difference.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Dynamic Environment Section */}
      <section className="relative bg-white py-8 md:py-12 w-full">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {/* Background Image - Static, doesn't change */}
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

          {/* Navigation Arrows - Bottom Right (Horizontal) */}
          <div className="absolute bottom-6 right-4 md:right-6 z-20">
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2.5 flex items-center gap-3 shadow-md border border-gray-200/50">
              {/* Previous Button (Left Arrow) */}
              <button
                onClick={prevDynamic}
                className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-1.5 px-1">
                {dynamicEnvironmentData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToDynamic(index)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      index === currentDynamicIndex
                        ? "bg-blue-600 w-8 h-2"
                        : "bg-white border-2 border-gray-300 w-2 h-2 hover:bg-gray-200"
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button (Right Arrow) */}
              <button
                onClick={nextDynamic}
                className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 cursor-pointer"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Content Container - White Box on Right */}
          <div className="relative z-10 h-full flex items-center justify-end">
            <div className="max-w-7xl mx-auto max-w-5k-content w-full px-4 md:px-6 lg:px-8 xl:px-12">
              <div className="flex items-center justify-end">
                {/* White Text Box - Right Side - Content Changes */}
                <div
                  key={currentDynamicIndex}
                  className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-2xl max-w-lg w-full"
                >
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                    {dynamicEnvironmentData[currentDynamicIndex].title}
                  </h3>
                  
                  {/* Body Text */}
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                    {dynamicEnvironmentData[currentDynamicIndex].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be a part of life at NeuroVerse Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left">
              Be a part of life at NeuroVerse
            </h2>
          </div>

          {/* Three Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Join our global employee networks */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={images.banners.networkingBanner}
                  alt="Global employee networks"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Join our global employee networks
                </h3>
                
                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  NeuroVerse's global employee networks connect people on topics like engagement, development, diversity, and inclusion. These networks promote these important topics and create a meaningful difference in our workplace culture and beyond.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Contribute to the community */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={images.banners.contributeCommunityBanner}
                  alt="Community contribution"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Contribute to the community
                </h3>
                
                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  NeuroVerse's volunteer programs allow employees to donate time and skills to social or environmental issues. Use your digital expertise to positively impact society and make a real difference in the communities we serve.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Live our core Values together */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={images.banners.coreValuesBanner}
                  alt="Core values"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Live our core Values together
                </h3>
                
                {/* Description */}
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  NeuroVerse's culture is defined by our shared core values: Innovation, Integrity, Collaboration, Excellence, Diversity, Growth, and Impact. These values form a core part of our DNA and guide every individual in everything we do.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What we offer Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left">
              What we offer
            </h2>
          </div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Collaborative Environment */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.collaborativeEnvironmentBanner}
                  alt="Collaborative Environment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Collaborative Environment
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Work in teams that value collaboration, open communication, and shared success. Our open workspaces and team-oriented culture make it easy to connect and work together.
                  </p>
                  <p className="text-sm md:text-base">
                    From cross-functional projects to knowledge-sharing sessions, you'll have countless opportunities to collaborate with talented colleagues and learn from each other.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Work-Life Balance */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.worklifeBalanceBanner}
                  alt="Work-Life Balance"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Work-Life Balance
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    We understand the importance of maintaining a healthy balance between work and personal life. Flexible schedules, remote work options, and generous time off help you recharge and stay productive.
                  </p>
                  <p className="text-sm md:text-base">
                    Our wellness programs and employee support initiatives ensure you have the resources you need to maintain your physical and mental well-being.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Growth & Development */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.growthDevelopmentBanner}
                  alt="Growth & Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Growth & Development
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Continuous learning and professional development are at the core of our culture. Access to training programs, conferences, certifications, and mentorship opportunities.
                  </p>
                  <p className="text-sm md:text-base">
                    We invest in your growth and provide clear career paths, regular feedback, and opportunities to take on new challenges and advance your career.
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
          <div className="space-y-6">
            {/* Paragraph */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
              We combine our vibrant culture with opportunities for growth, modern facilities, and a supportive community. Our commitment to your success extends beyond the workplace, creating an environment where you can thrive both professionally and personally.
            </p>

            {/* Bold Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 leading-tight">
              The culture platform for your personal and professional growth
            </h2>

            {/* Dark Blue Line */}
            <div className="h-1 w-24 bg-blue-900 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Leadership Recognition Banner Section - Full Width */}
      <section className="relative bg-white py-8 md:py-12 w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-5 w-full items-stretch">
            {/* Left Section - Dark Blue Text Box (60% - 3 columns) */}
            <div className="md:col-span-3 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                {/* Headline */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white leading-tight">
                  Join a culture that celebrates you
                </h2>
                
                {/* Body Text */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  At NeuroVerse, we're not just building software – we're building a community. Join us and experience a workplace culture that values your contributions, supports your growth, and celebrates your success.
                </p>

                {/* Read More Button */}
                <motion.button
                  onClick={() => navigate("/careers/login")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 w-fit mt-4 cursor-pointer"
                >
                  <span>Create career profile</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Right Section - Image (40% - 2 columns) */}
            <div className="md:col-span-2 relative overflow-hidden">
              <img
                src={images.projects.latestInsights || images.hero.background}
                alt="NeuroVerse team culture"
                className="w-full h-full object-cover object-center"
                style={{ minHeight: '100%' }}
              />
              {/* Subtle overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-transparent"></div>
            </div>
          </div>
      </section>

    </div>
  );
}

