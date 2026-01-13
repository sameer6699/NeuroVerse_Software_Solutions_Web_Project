import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ChevronLeft, ChevronRight, ArrowRight, Factory, Network, Battery, TrendingUp, Leaf, ShoppingCart, Calendar, FileText, Download, CheckCircle2 } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

/**
 * Insights Page Component
 * 
 * This page displays insights, thought leadership, and research content.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function Insights() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [email, setEmail] = useState("");
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const emailInputRef = useRef<HTMLInputElement>(null);
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

  // Handle subscribe
  const handleSubscribe = () => {
    if (email.trim()) {
      // Here you can add your subscription logic
      console.log("Subscribing email:", email);
      // You can add API call here
      // Show custom success dialog
      setSubscribedEmail(email);
      setShowSuccessDialog(true);
      setEmail("");
      setIsSubscribing(false);
    }
  };

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
      indianAuthor: "Dr. Ramesh Kumar",
      image: images.projects.latestInsights, // Placeholder - can be replaced with actual headshot
      bgText: ["ewir", "ay's", "code", "cars"],
      title: "Rewiring today's factories to code tomorrow's cars",
      description: "Dr. Luc Julia, Chief Scientific Officer, Renault Group, discusses a bold initiative to revolutionize automotive innovation by integrating AI and software into every aspect of car manufacturing.",
    },
    {
      id: 2,
      personName: "Daniela Rus",
      indianAuthor: "Dr. Priya Sharma",
      image: images.projects.latestInsights, // Placeholder - can be replaced with actual headshot
      bgText: ["When", "Al", "meets", "robotics"],
      title: "When AI meets robotics",
      description: "Daniela Rus, Director, Computer Science and Artificial Intelligence Laboratory (CSAIL), MIT, talks about the future of AI, robotics, mobile computing, and data science.",
    },
    {
      id: 3,
      personName: "Jeremy Utley",
      indianAuthor: "Prof. Anil Patel",
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
            backgroundImage: `url(${images.banners.insightsHeroSection})`,
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

      {/* Insights Card - Positioned outside hero section, extending from hero */}
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
                {/* Insights Text - Centered in the box */}
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
                  Insights
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
      <section className="relative bg-white py-8 md:py-10">
        <div className="max-w-7xl mx-auto max-w-5k-content px-4">
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
        </div>

        {/* Carousel Container - Full Width Background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full"
        >
          {/* Background Banner with Image - Full Width */}
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
            {/* Background Image - Full Width */}
            <div 
              className="absolute inset-0 w-full"
              style={{
                backgroundImage: `url(${images.projects.hotTopicsBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />

              {/* White Content Card - Left Side */}
              <div className="absolute inset-0 flex items-center justify-start">
                <div className="max-w-7xl mx-auto max-w-5k-content w-full px-4 md:px-8 lg:px-12">
                  <motion.div
                    key={currentTopicIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-2xl max-w-xl md:max-w-2xl w-full group"
                  >
                  {/* Card Content */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {hotTopics[currentTopicIndex].title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6 flex-1">
                      {hotTopics[currentTopicIndex].description}
                    </p>
                    
                    {/* Footer with Border and Action Button */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">HOT TOPICS</span>
                        <motion.button
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => navigate("/insights/hot-topic")}
                          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/btn"
                        >
                          Read more
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                  </motion.div>
                </div>
              </div>

              {/* Carousel Navigation - Bottom Right */}
              <div className="absolute bottom-6 right-4 md:right-6 lg:right-8 xl:right-12 z-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2.5 flex items-center gap-3 shadow-md border border-gray-200/50"
                >
                  {/* Previous Button (Left Arrow) */}
                  <button
                    onClick={prevTopic}
                    className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
                    aria-label="Previous topic"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                  </button>

                  {/* Dots Indicator */}
                  <div className="flex items-center gap-1.5 px-1">
                    {hotTopics.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTopic(index)}
                        className={`transition-all rounded-full ${
                          index === currentTopicIndex
                            ? 'bg-blue-600 w-8 h-2'
                            : 'bg-white border-2 border-gray-300 w-2 h-2 hover:bg-gray-200'
                        }`}
                        aria-label={`Go to topic ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Next Button (Right Arrow) */}
                  <button
                    onClick={nextTopic}
                    className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
                    aria-label="Next topic"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
      </section>

      {/* Initiatives for Research and Development Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Initiatives Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 md:mb-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900">
              Initiatives for research and Development
            </h2>
          </motion.div>

          {/* Banner Container */}
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
                  backgroundImage: `url(${images.banners.researchBanner})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              />

              {/* White Content Card - Left Side */}
              <div className="absolute inset-0 flex items-center justify-start px-4 md:px-8 lg:px-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-2xl p-8 md:p-10 lg:p-12 max-w-xl md:max-w-2xl w-full shadow-2xl -ml-2 md:ml-0 lg:ml-4"
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6">
                    As a strategic partner, we engage to develop solutions to some of the world's most pressing challenges.
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
                    We work together on structured, multi-year initiatives involving private, public, and multistakeholder collaborations to address large-scale global challenges. These efforts create a space to engage, share knowledge and ideas, and address emerging issues.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/insights/research-and-development")}
                    className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    Explore initiatives
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Latest Reports Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-12 md:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title with Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <div className="mb-4">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-4"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left mb-4">
                The latest reports from NEUROVERSE RESEARCH INSTITUTE
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed">
                Comprehensive research and insights on emerging trends, industry transformations, and technological innovations shaping the future of business and society.
              </p>
            </div>
          </motion.div>

          {/* Report Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
            {/* Report Card 1: Investment trends 2025 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
            >
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={images.banners.investmentTrends2025}
                  alt="Investment trends 2025"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                    Finance & Investment
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>January 2025</span>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 leading-tight">
                  Investment trends 2025
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 flex-1">
                  Navigating uncertainty with confidence: Investment priorities for 2025. NeuroVerse's data-driven insights help organizations make informed investment decisions in AI and digital transformation.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">NEUROVERSE RESEARCH INSTITUTE</span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/btn"
                    >
                      Read Report
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Report Card 2: Sustainable Gen AI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
            >
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={images.banners.sustainableGenAi}
                  alt="Sustainable Gen AI"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                    Sustainability
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>December 2025</span>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                  Sustainable Gen AI
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 flex-1">
                  The environmental Impact of Gen AI and a roadmap for developing sustainable Gen AI practices. NeuroVerse is leading the way in creating energy-efficient AI solutions and sustainable machine learning frameworks.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">NEUROVERSE RESEARCH INSTITUTE</span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/btn"
                    >
                      Read Report
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Report Card 3: What matters to today's consumer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
            >
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <img
                  src={images.banners.whatMattersToTodaysConsumer}
                  alt="What matters to today's consumer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                    Consumer Insights
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>November 2025</span>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  What matters to today's consumer
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 flex-1">
                  Consumer preferences and purchasing behaviors are constantly evolving. NeuroVerse's AI-powered analytics provide deep insights into consumer behavior and enable personalized customer experiences.
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">NEUROVERSE RESEARCH INSTITUTE</span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/btn"
                    >
                      Read Report
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-700 transition-all duration-300 group"
            >
              <FileText className="w-5 h-5" />
              See all our reports
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 group"
            >
              <Download className="w-5 h-5" />
              Download Report Bundle
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-3">
                    {article.description}
                  </p>
                  {/* Indian Author Name */}
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-sm md:text-base text-gray-600 font-semibold">
                      <span className="text-gray-500">Indian Author:</span> {article.indianAuthor}
                    </p>
                  </div>
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

      {/* Startup Ecosystem & Innovation Initiatives Section */}
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
                Empowering the Startup Ecosystem
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 md:mb-8">
                As a fast-growing startup ourselves, NeuroVerse is committed to supporting and collaborating with innovative startups worldwide. We partner with emerging companies, accelerators, and incubators to drive technological innovation and create transformative solutions for tomorrow's challenges.
              </p>
              <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 md:mb-10">
                Through our startup initiatives, we provide mentorship, technical expertise, and AI-powered solutions to help startups scale faster and achieve their vision of transforming industries through intelligent technology.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 w-fit"
              >
                Explore our startup programs
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Right Column - Startup/Innovation Image (3/5 width) */}
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
                {/* Gradient Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-transparent"></div>
                {/* Motion Blur Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
              {/* Floating Startup Icons/Shapes Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-pulse"></div>
                <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 transform rotate-45 animate-pulse delay-300"></div>
                <div className="absolute bottom-1/3 left-1/3 w-14 h-14 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 animate-pulse delay-700"></div>
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
              onClick={() => navigate("/insights/research-library")}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={images.banners.researchLibrary}
                  alt="Research library"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
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
              <div className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={images.banners.expertPerspectives}
                  alt="Expert perspectives"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Light overlay for portrait effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
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
                <img
                  src={images.banners.analystReports}
                  alt="Analyst reports"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
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
                  Subscribe to have the latest reports from the NEUROVERSE RESEARCH INSTITUTE delivered direct to your inbox.
                </p>
              </div>

              {/* Right Side - Subscribe Button / Email Input */}
              <div className="flex-shrink-0">
                {!isSubscribing ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsSubscribing(true);
                      // Focus the input after a brief delay to allow the transition
                      setTimeout(() => {
                        emailInputRef.current?.focus();
                      }, 100);
                    }}
                    className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg"
                  >
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-stretch rounded-lg shadow-lg overflow-hidden"
                  >
                    <input
                      ref={emailInputRef}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="px-6 py-4 bg-white text-gray-900 font-medium outline-none border-none min-w-[250px] md:min-w-[300px] flex-1"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          handleSubscribe();
                        }
                      }}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSubscribe}
                      className="px-6 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center flex-shrink-0"
                      aria-label="Submit email"
                    >
                      <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Custom Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100"
            >
              <CheckCircle2 className="h-10 w-10 text-blue-600" strokeWidth={2} />
            </motion.div>
            <DialogTitle className="text-center text-2xl font-bold text-gray-900">
              Thank you for subscribing!
            </DialogTitle>
            <DialogDescription className="text-center text-base text-gray-600 pt-2">
              We'll send the latest reports from the <span className="font-semibold text-blue-600">NEUROVERSE RESEARCH INSTITUTE</span> to
              <br />
              <span className="font-medium text-gray-900">{subscribedEmail}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

