import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ArrowRight, Facebook, Instagram, Youtube, FileText, Grid3x3, Cloud, Users, Target, Heart, Award, Handshake, Lightbulb } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";

/**
 * About Us Page Component
 * 
 * This page displays information about NeuroVerse, including our story, mission, vision, values, and team.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function About() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
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

  const typewriterText = useTypewriter("About Us.", 150, 80, 2000);

  // About Us Sections
  const aboutSections = [
    {
      title: "Our Story",
      description: "Discover the journey of NeuroVerse from its inception to becoming a leading technology innovator.",
      image: images.projects.latestInsights,
      icon: FileText,
    },
    {
      title: "Mission & Vision",
      description: "Learn about our mission to transform businesses and our vision for the future of technology.",
      image: images.projects.hotTopicsBackground || images.projects.latestInsights,
      icon: Target,
    },
    {
      title: "Leadership Team",
      description: "Meet the visionary leaders driving NeuroVerse's innovation and strategic direction.",
      image: images.projects.insightsHero || images.projects.latestInsights,
      icon: Users,
    },
    {
      title: "Company Values",
      description: "Explore the core values that guide our decisions and shape our company culture.",
      image: images.projects.latestInsights,
      icon: Heart,
    },
    {
      title: "Our Culture",
      description: "Experience the collaborative, innovative, and inclusive culture that defines NeuroVerse.",
      image: images.projects.hotTopicsBackground || images.projects.latestInsights,
      icon: Lightbulb,
    },
    {
      title: "Partners & Alliances",
      description: "Discover our strategic partnerships and alliances that amplify our impact.",
      image: images.projects.insightsHero || images.projects.latestInsights,
      icon: Handshake,
    },
  ];

  // Company Values
  const companyValues = [
    {
      title: "Innovation",
      description: "We push boundaries and embrace cutting-edge technology to solve complex challenges.",
      icon: Lightbulb,
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering quality solutions that exceed expectations.",
      icon: Award,
    },
    {
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and ethical practices.",
      icon: Heart,
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships.",
      icon: Handshake,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden overflow-y-auto">
      {/* Hero Section with Background Image */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-4 min-h-[85vh] md:min-h-[90vh] flex items-end overflow-x-visible overflow-y-hidden"
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
        <div className="max-w-7xl mx-auto max-w-5k-content relative z-10 w-full pb-0 -mb-12 md:-mb-16 lg:-mb-20 overflow-visible">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-3/4 lg:w-2/3 xl:w-3/5 min-w-0 overflow-visible"
          >
            {/* Large "About Us" Text with Typewriter Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-gray-900 leading-[0.9] mb-6 relative z-10 whitespace-nowrap overflow-visible"
              style={{
                textShadow: '0 2px 20px rgba(255, 255, 255, 0.8), 0 4px 40px rgba(255, 255, 255, 0.5)',
                letterSpacing: '-0.02em',
                width: 'max-content',
                maxWidth: '100%',
              }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent inline-flex items-baseline" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <span className="inline-block">{typewriterText}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block w-0.5 h-[0.9em] bg-gray-900 ml-1 align-middle"
                  style={{
                    verticalAlign: 'baseline',
                    marginLeft: '0.25rem',
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
                  Who We Are
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  NeuroVerse is a leading technology company dedicated to transforming businesses through innovation, expertise, and collaboration. We combine cutting-edge technology with deep industry knowledge to deliver solutions that drive real impact.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
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
              Mission & Vision
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              <div className="mb-4">
                <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm md:text-base text-gray-600 font-medium">Our Mission</p>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                Transforming Businesses Through Innovation
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Our mission is to empower organizations worldwide by delivering innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to helping our clients navigate the digital transformation journey with confidence and success.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col"
            >
              <div className="mb-4">
                <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm md:text-base text-gray-600 font-medium">Our Vision</p>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                Shaping the Future of Technology
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                We envision a future where technology seamlessly integrates with human potential to create extraordinary outcomes. Our vision is to be the global leader in technology innovation, recognized for our transformative solutions and unwavering commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Background Image */}
            <div 
              className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${images.projects.insightsHero || images.hero.background})`,
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"></div>
              
              {/* White Overlay Box - Left Side */}
              <div className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 lg:w-2/5 flex items-center p-8 md:p-12 lg:p-16">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white rounded-xl p-8 md:p-10 lg:p-12 shadow-2xl max-w-lg w-full"
                >
                  {/* Heading */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                    Trusted by the world's largest businesses
                  </h2>
                  
                  {/* Paragraph */}
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                    We work with 85% of the 200 largest public companies on the Forbes Global 2000 list.
                  </p>
                </motion.div>
              </div>

              {/* Carousel Navigation - Bottom Right */}
              <div className="absolute bottom-6 md:bottom-8 right-6 md:right-8 flex items-center gap-3 md:gap-4">
                {/* Left Arrow */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300 cursor-pointer group"
                  aria-label="Previous"
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 rotate-180 group-hover:text-gray-900 transition-colors" />
                </motion.button>

                {/* Carousel Dots */}
                <div className="flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  {[0, 1, 2, 3].map((index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                        index === 0 
                          ? 'bg-blue-600 w-8 md:w-10' 
                          : 'bg-white border-2 border-gray-300 hover:border-gray-400'
                      }`}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white transition-colors duration-300 cursor-pointer group"
                  aria-label="Next"
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values Section */}
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
              Our Values
            </h2>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {companyValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Us Categories Section */}
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
              Explore More About Us
            </h2>
          </motion.div>

          {/* About Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {aboutSections.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
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
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* Icon overlay */}
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      {/* Category Name */}
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                        {item.description}
                      </p>
                      
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Banner Section */}
      <section className="relative w-full py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 w-full p-8 md:p-12 lg:p-16"
        >
          <div className="max-w-7xl mx-auto max-w-5k-content">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              {/* Left Side - Text */}
              <div className="flex-shrink-0">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-white">
                  Connect with us on social media
                </h2>
              </div>

              {/* Right Side - Social Media Icons */}
              <div className="flex items-center gap-4 md:gap-6 lg:gap-8 flex-wrap justify-center md:justify-end">
                {/* Facebook Icon */}
                <motion.a
                  href="https://www.facebook.com/neuroverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 cursor-pointer group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>

                {/* LinkedIn Icon */}
                <motion.a
                  href="https://www.linkedin.com/company/neuroverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 cursor-pointer group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>

                {/* SoundCloud/Cloud Icon */}
                <motion.a
                  href="https://soundcloud.com/neuroverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 cursor-pointer group"
                  aria-label="SoundCloud"
                >
                  <Cloud className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>

                {/* Instagram Icon */}
                <motion.a
                  href="https://www.instagram.com/neuroverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 cursor-pointer group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>

                {/* Grid/Portfolio Icon */}
                <motion.a
                  href="https://www.behance.net/neuroverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 cursor-pointer group"
                  aria-label="Portfolio"
                >
                  <Grid3x3 className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>

                {/* Document/File Icon */}
                <motion.a
                  href="https://www.medium.com/@neuroverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 cursor-pointer group"
                  aria-label="Blog"
                >
                  <FileText className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>

                {/* YouTube/Play Button Icon */}
                <motion.a
                  href="https://www.youtube.com/@neuroverse"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 md:w-12 md:h-12 border-2 border-white rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all duration-300 cursor-pointer group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

