import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ArrowRight, Facebook, Instagram, Youtube, FileText, Grid3x3, Cloud } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";

/**
 * News Page Component
 * 
 * This page displays latest news, press releases, and announcements from NeuroVerse.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function News() {
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

  const typewriterText = useTypewriter("Latest News.", 150, 80, 2000);

  // Latest News Articles
  const latestNews = [
    {
      title: "Latest News",
      description: "Stay updated with our most recent announcements, product launches, and company milestones.",
      image: images.projects.latestInsights,
    },
    {
      title: "Press Releases",
      description: "Official press releases covering major announcements, partnerships, and corporate news.",
      image: images.projects.hotTopicsBackground || images.projects.latestInsights,
    },
    {
      title: "Blog",
      description: "Insights, thought leadership, and expert perspectives on technology, AI, and business transformation.",
      image: images.projects.insightsHero || images.projects.latestInsights,
    },
    {
      title: "Events",
      description: "Upcoming conferences, webinars, and events where you can meet the NeuroVerse team.",
      image: images.projects.latestInsights,
    },
    {
      title: "Media Kit",
      description: "Resources for journalists and media professionals including logos, press materials, and contact information.",
      image: images.projects.hotTopicsBackground || images.projects.latestInsights,
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
            {/* Large "News" Text with Typewriter Effect */}
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
                  Stay Updated
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Stay updated with our latest news and announcements. Explore press releases, blog posts, events, and media resources from NeuroVerse.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News Section - Two Column Layout */}
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
              Latest news
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Featured News */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col"
            >
              {/* Category with horizontal line */}
              <div className="mb-4">
                <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm md:text-base text-gray-600 font-medium">Awards and recognition</p>
              </div>

              {/* Headline */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                NeuroVerse is recognized as a Leader in Connected Product Engineering Services by independent research firm
              </h3>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                NeuroVerse today announced that it has been recognized as a Leader in The Forrester Wave™: Connected Product Engineering Services, Q4 2025 for its well-articulated and very strong vision for connected products.
              </p>

              {/* Date */}
              <p className="text-sm md:text-base text-gray-500 mb-8">Nov 6, 2025</p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Navigate to press releases or scroll to section
                  console.log("Navigate to press releases");
                }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 w-fit group"
              >
                See all press releases
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Right Column - Smaller News Items */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col space-y-8"
            >
              {/* News Item 1 */}
              <div className="pb-4 border-b border-gray-200">
                <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm md:text-base text-gray-600 font-medium mb-2">Client news</p>
                <h4 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-2 leading-tight">
                  NeuroVerse and Orano deploy the first intelligent humanoid robot in the nuclear sector
                </h4>
                <p className="text-xs md:text-sm text-gray-500">Nov 4, 2025</p>
              </div>

              {/* News Item 2 */}
              <div className="pb-4 border-b border-gray-200">
                <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm md:text-base text-gray-600 font-medium mb-2">Corporate news</p>
                <h4 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-2 leading-tight">
                  NeuroVerse announces the closing of the acquisition of Cloud4C
                </h4>
                <p className="text-xs md:text-sm text-gray-500">Nov 3, 2025</p>
              </div>

              {/* News Item 3 */}
              <div className="pb-4">
                <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                <p className="text-sm md:text-base text-gray-600 font-medium mb-2">Partners</p>
                <h4 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-gray-900 mb-2 leading-tight">
                  Siemens and NeuroVerse deepen partnership to empower industries for the next era of manufacturing
                </h4>
                <p className="text-xs md:text-sm text-gray-500">Oct 30, 2025</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Research and Insights Section */}
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
              Latest research and insights
            </h2>
          </motion.div>

          {/* Research Articles List */}
          <div className="space-y-6 md:space-y-8">
            {/* Article 1: World Energy Markets Outlook */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col md:flex-row gap-4 md:gap-6 pb-6 md:pb-8 border-b border-gray-200"
            >
              {/* Image Thumbnail */}
              <div className="flex-shrink-0 w-full md:w-48 lg:w-64 h-48 md:h-40 lg:h-48 rounded-lg overflow-hidden">
                <img
                  src={images.projects.latestInsights}
                  alt="World Energy Markets Outlook"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  {/* Category with horizontal line */}
                  <div className="mb-2">
                    <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                    <p className="text-sm md:text-base text-gray-600 font-medium">WEMO</p>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-2 leading-tight">
                    World Energy Markets Outlook
                  </h3>
                  {/* Date */}
                  <p className="text-sm md:text-base text-gray-500">16 Oct, 2025</p>
                </div>

                {/* Read More Button */}
                <div className="flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Article 2: Could AI unlock great customer service in the public sector? */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 md:gap-6 pb-6 md:pb-8 border-b border-gray-200"
            >
              {/* Image Thumbnail */}
              <div className="flex-shrink-0 w-full md:w-48 lg:w-64 h-48 md:h-40 lg:h-48 rounded-lg overflow-hidden">
                <img
                  src={images.projects.hotTopicsBackground || images.projects.latestInsights}
                  alt="AI Customer Service"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  {/* Category with horizontal line */}
                  <div className="mb-2">
                    <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                    <p className="text-sm md:text-base text-gray-600 font-medium">Gen AI</p>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-2 leading-tight">
                    Could AI unlock great customer service in the public sector?
                  </h3>
                  {/* Date */}
                  <p className="text-sm md:text-base text-gray-500">8 Oct, 2025</p>
                </div>

                {/* Read More Button */}
                <div className="flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Article 3: Rewiring today's factories to code tomorrow's cars */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-4 md:gap-6 pb-6 md:pb-8 border-b border-gray-200"
            >
              {/* Image Thumbnail */}
              <div className="flex-shrink-0 w-full md:w-48 lg:w-64 h-48 md:h-40 lg:h-48 rounded-lg overflow-hidden">
                <img
                  src={images.projects.insightsHero || images.projects.latestInsights}
                  alt="Rewiring factories"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  {/* Category with horizontal line */}
                  <div className="mb-2">
                    <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                    <p className="text-sm md:text-base text-gray-600 font-medium">Innovation</p>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-2 leading-tight">
                    Rewiring today's factories to code tomorrow's cars: A conversation with Dr. Luc Julia
                  </h3>
                  {/* Date */}
                  <p className="text-sm md:text-base text-gray-500 mb-1">1 Oct, 2025</p>
                  {/* Additional Text */}
                  <p className="text-xs md:text-sm text-blue-600 font-semibold uppercase tracking-wide">
                    NEUROVERSE RESEARCH INSTITUTE
                  </p>
                </div>

                {/* Read More Button */}
                <div className="flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Article 4: Agentic AI powered by integration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row gap-4 md:gap-6 pb-6 md:pb-8"
            >
              {/* Image Thumbnail */}
              <div className="flex-shrink-0 w-full md:w-48 lg:w-64 h-48 md:h-40 lg:h-48 rounded-lg overflow-hidden">
                <img
                  src={images.projects.latestInsights}
                  alt="Agentic AI"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  {/* Category with horizontal line */}
                  <div className="mb-2">
                    <div className="w-16 h-0.5 bg-gray-400 mb-2"></div>
                    <p className="text-sm md:text-base text-gray-600 font-medium">Intelligent industry</p>
                  </div>
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-2 leading-tight">
                    Agentic AI powered by integration
                  </h3>
                  {/* Date */}
                  <p className="text-sm md:text-base text-gray-500">29 Sep, 2025</p>
                </div>

                {/* Read More Button */}
                <div className="flex-shrink-0">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* See All Reports Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 md:mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Navigate to all reports page or section
                console.log("Navigate to all reports");
              }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 group"
            >
              See all reports
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* News Categories Section */}
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
              Explore News Categories
            </h2>
          </motion.div>

          {/* News Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {latestNews.map((item, index) => (
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
            ))}
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

