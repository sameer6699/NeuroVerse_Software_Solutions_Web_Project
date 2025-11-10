import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState, useEffect } from "react";

/**
 * Insights Page Component
 * 
 * This page displays insights, thought leadership, and research content.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function Insights() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

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

  const typewriterText = useTypewriter("Insights", 150, 80, 2000);

  // Hot Topics Carousel State
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  const hotTopics = [
    {
      title: "Reshape your future with AI",
      description: "Artificial intelligence (AI) is ushering in a new era of unprecedented transformation, unleashing waves of opportunity across industries and within society.",
    },
    {
      title: "The future of sustainable technology",
      description: "Discover how sustainable technology solutions are reshaping industries and creating new opportunities for growth and environmental stewardship.",
    },
    {
      title: "Digital transformation in the modern era",
      description: "Explore how digital transformation is revolutionizing business models and creating competitive advantages in today's fast-paced market.",
    },
    {
      title: "Innovation through collaboration",
      description: "Learn how strategic partnerships and collaborative innovation are driving breakthrough solutions and accelerating business success.",
    },
  ];

  const nextTopic = () => {
    setCurrentTopicIndex((prev) => (prev + 1) % hotTopics.length);
  };

  const prevTopic = () => {
    setCurrentTopicIndex((prev) => (prev - 1 + hotTopics.length) % hotTopics.length);
  };

  const goToTopic = (index: number) => {
    setCurrentTopicIndex(index);
  };

  // Articles for Conversations for Tomorrow
  const articles = [
    {
      id: 1,
      personName: "Dr. Luc Julia",
      image: images.projects.latestInsights, // Placeholder - can be replaced with actual headshot
      bgText: ["ewir", "ay's", "code", "cars"],
      title: "Rewiring today's factories to code tomorrow's cars",
      description: "Dr. Luc Julia, Chief Scientific Officer, Renault Group, discusses a bold initiative to revolutionize automotive innovation by integrating AI and software into every aspect of car manufacturing.",
    },
    {
      id: 2,
      personName: "Daniela Rus",
      image: images.projects.latestInsights, // Placeholder - can be replaced with actual headshot
      bgText: ["When", "Al", "meets", "robotics"],
      title: "When AI meets robotics",
      description: "Daniela Rus, Director, Computer Science and Artificial Intelligence Laboratory (CSAIL), MIT, talks about the future of AI, robotics, mobile computing, and data science.",
    },
    {
      id: 3,
      personName: "Jeremy Utley",
      image: images.projects.latestInsights, // Placeholder - can be replaced with actual headshot
      bgText: ["Creativity", "in the", "age of", "Al"],
      title: "Creativity in the age of AI",
      description: "Jeremy Utley, Professor of AI and Design Thinking, Stanford University talks about creativity in the age of AI.",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-4 min-h-[85vh] md:min-h-[90vh] flex items-end overflow-hidden"
        style={{
          backgroundImage: `url(${images.projects.insightsHero})`,
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
            {/* Large "Insights" Text with Typewriter Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] text-gray-900 leading-[0.9] mb-6 relative z-10"
              style={{
                textShadow: '0 2px 20px rgba(255, 255, 255, 0.8), 0 4px 40px rgba(255, 255, 255, 0.5)',
                letterSpacing: '-0.02em',
              }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent" style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {typewriterText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="inline-block w-0.5 h-[0.9em] bg-gray-900 ml-1 align-middle"
                  style={{
                    verticalAlign: 'middle',
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
                {/* Hover effect background */}
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
                {/* Hover effect background */}
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
                  Stay Connected
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Explore our latest thought leadership, insights and initiatives around the issues that are shaping the future of business and society.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hot Topics Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Hot Topics Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Hot topics
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
                  backgroundImage: `url(${images.projects.hotTopicsBackground})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              {/* White Content Card - Left Side */}
              <div className="absolute inset-0 flex items-center justify-start px-4 md:px-8 lg:px-12">
                <motion.div
                  key={currentTopicIndex}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 max-w-xl md:max-w-2xl w-full shadow-2xl -ml-2 md:ml-0 lg:ml-4"
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6">
                    {hotTopics[currentTopicIndex].title}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                    {hotTopics[currentTopicIndex].description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    Read more
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>

              {/* Navigation Carousel Indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 flex items-center gap-4 shadow-lg border border-gray-200">
                  {/* Previous Button */}
                  <button
                    onClick={prevTopic}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Previous topic"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-2">
                    {hotTopics.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTopic(index)}
                        className={`transition-all rounded-full ${
                          index === currentTopicIndex
                            ? 'bg-blue-600 w-8 h-2.5'
                            : 'bg-white border-2 border-white w-2.5 h-2.5 hover:bg-gray-200'
                        }`}
                        aria-label={`Go to topic ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={nextTopic}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Next topic"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Latest Reports Section */}
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
              The latest reports from NeuroVerse Research Institute
            </h2>
          </motion.div>

          {/* Report Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
            {/* Report Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
                <div className="absolute inset-0 opacity-80">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                  }}></div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Reindustrialization of Europe and US
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The resurgence of manufacturing: Reindustrialization strategies in Europe and the US - 2025. NeuroVerse's AI-driven solutions are transforming manufacturing operations and enabling smart industrial ecosystems.
                </p>
              </div>
            </motion.div>

            {/* Report Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-green-400 via-blue-500 to-teal-600">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border-4 border-white/30"></div>
                    <div className="absolute w-24 h-24 rounded-full border-4 border-white/20"></div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  The B2B Pulse
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Top six expectations of telecom's business customers. NeuroVerse's intelligent automation and AI solutions are reshaping B2B telecommunications and customer engagement strategies.
                </p>
              </div>
            </motion.div>

            {/* Report Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 border-2 border-blue-400/50 rounded-lg transform rotate-45"></div>
                  <div className="absolute w-32 h-32 border-2 border-blue-300/30 rounded-lg transform rotate-45"></div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  The battery revolution
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Exploring the future of energy storage and sustainable power solutions. NeuroVerse's predictive analytics and AI optimization are driving innovation in energy management and sustainable technology.
                </p>
              </div>
            </motion.div>

            {/* Report Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
                <div className="absolute inset-0">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                     radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15) 0%, transparent 50%)`,
                  }}></div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Investment trends 2025
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Navigating uncertainty with confidence: Investment priorities for 2025. NeuroVerse's data-driven insights help organizations make informed investment decisions in AI and digital transformation.
                </p>
              </div>
            </motion.div>

            {/* Report Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-orange-400 via-yellow-500 to-amber-600">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[10, 20, 30, 40, 50, 60, 70, 80, 15, 25, 35, 45, 55, 65, 75, 85, 12, 22, 32, 42].map((pos, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/40 rounded-full"
                        style={{
                          left: `${pos}%`,
                          top: `${(pos * 1.3) % 100}%`,
                          transform: `scale(${0.5 + (i % 3) * 0.2})`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Sustainable Gen AI
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The environmental Impact of Gen AI and a roadmap for developing sustainable Gen AI practices. NeuroVerse is leading the way in creating energy-efficient AI solutions and sustainable machine learning frameworks.
                </p>
              </div>
            </motion.div>

            {/* Report Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden bg-gradient-to-br from-red-400 via-orange-500 via-yellow-400 via-blue-500 to-green-500">
                <div className="absolute inset-0">
                  <div className="absolute inset-0" style={{
                    background: `conic-gradient(from 0deg, rgba(255,0,0,0.3), rgba(255,165,0,0.3), rgba(255,255,0,0.3), rgba(0,255,0,0.3), rgba(0,0,255,0.3), rgba(255,0,0,0.3))`,
                    filter: 'blur(20px)',
                  }}></div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  What matters to today's consumer
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Consumer preferences and purchasing behaviors are constantly evolving. NeuroVerse's AI-powered analytics provide deep insights into consumer behavior and enable personalized customer experiences.
                </p>
              </div>
            </motion.div>
          </div>

          {/* See All Reports Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300"
            >
              See all our reports
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Conversations for Tomorrow Section - Full Width */}
      <section className="relative py-8 md:py-10 w-full">
        {/* Dark Concrete Background with Circular Light Sources - Full Width */}
        <div className="relative w-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px] overflow-hidden">
          {/* Dark Concrete Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            {/* Concrete Texture Pattern */}
            <div 
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px),
                  repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)
                `,
              }}
            ></div>
          </div>

          {/* Circular Light Sources (Skylights) */}
          <div className="absolute inset-0">
            {/* Large circular light 1 */}
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute top-20 left-1/4 w-48 h-48 bg-white/30 rounded-full blur-2xl"></div>
            <div className="absolute top-20 left-1/4 w-32 h-32 bg-white/40 rounded-full blur-xl"></div>
            
            {/* Large circular light 2 */}
            <div className="absolute top-32 right-1/3 w-72 h-72 bg-white/15 rounded-full blur-3xl"></div>
            <div className="absolute top-32 right-1/3 w-56 h-56 bg-white/25 rounded-full blur-2xl"></div>
            <div className="absolute top-32 right-1/3 w-40 h-40 bg-white/35 rounded-full blur-xl"></div>
            
            {/* Large circular light 3 */}
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-white/12 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-white/30 rounded-full blur-xl"></div>

            {/* Light pools on floor */}
            <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-1/3 w-72 h-36 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-40 bg-white/8 rounded-full blur-2xl"></div>
          </div>

          {/* White Content Card - Upper Left */}
          <div className="relative z-10 p-6 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto max-w-5k-content">
              <motion.div
                initial={{ opacity: 0, x: -50, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 max-w-xl md:max-w-2xl shadow-2xl"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6 md:mb-8">
                  Conversations for Tomorrow
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 md:mb-10">
                  Our flagship quarterly review showcases diverse perspectives from best-in-class global brands, leading public figures, academics, and influencers on a chosen theme. NeuroVerse brings together thought leaders to explore the future of AI, technology, and innovation.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Explore all editions
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Latest Articles from Conversations for Tomorrow Section */}
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
              The latest articles from our Top Leaders
            </h2>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Area with Dark Background and Large Text */}
                <div className="relative w-full h-64 md:h-72 bg-gray-900 overflow-hidden flex items-center justify-center">
                  {/* Background Text - Large, Fragmented, White */}
                  <div className="absolute inset-0 flex flex-col justify-center items-start text-white/10 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none p-4 md:p-6">
                    {article.bgText.map((text, i) => (
                      <span 
                        key={i} 
                        className={`block ${i % 2 === 0 ? '-translate-x-1/4' : 'translate-x-1/4'} transform`}
                        style={{
                          fontSize: 'clamp(3rem, 8vw, 6rem)',
                        }}
                      >
                        {text}
                      </span>
                    ))}
                  </div>
                  
                  {/* Person's Headshot - Circular */}
                  <div className="relative z-10">
                    <img
                      src={article.image}
                      alt={article.personName}
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-center border-4 border-white shadow-2xl"
                    />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Read More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-start"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-full hover:border-gray-400 hover:bg-gray-50 transition-colors duration-300 shadow-sm"
            >
              Read more here
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Initiatives with the World Economic Forum Section */}
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
                Initiatives with the World Economic Forum
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 md:mb-10">
                As a strategic partner of the World Economic Forum, we engage with the Forum to develop solutions to the world's most pressing challenges. NeuroVerse collaborates with global leaders to drive innovation and create sustainable impact.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 w-fit"
              >
                Discover our joint initiatives
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Right Column - Cityscape Image (3/5 width) */}
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
                {/* Motion Blur Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discover More Section */}
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
              Discover more
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Card 1: Research library */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${images.projects.latestInsights})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Dark overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Research library
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Browse research and insights from across the business.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Expert perspectives */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${images.projects.latestInsights})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Light overlay for portrait effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Expert perspectives
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Review the archive of blogs from NeuroVerse's experts.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Analyst reports */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage: `url(${images.projects.latestInsights})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Analyst reports
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Access our archive of analyst citations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stay Informed Section - Full Width */}
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
                  Stay informed
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Subscribe to have the latest reports from the NeuroVerse Research Institute delivered direct to your inbox.
                </p>
              </div>

              {/* Right Side - Subscribe Button */}
              <div className="flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
                >
                  Subscribe
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

