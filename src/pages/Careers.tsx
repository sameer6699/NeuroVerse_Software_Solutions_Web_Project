import { motion, useScroll, useTransform } from "framer-motion";
import { Linkedin, ArrowRight, Search } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "@/components/ui/input";

/**
 * Careers Page Component
 * 
 * This page displays career opportunities and job listings at NeuroVerse.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function Careers() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Background Image */}
      <section 
        ref={heroRef}
        className="relative pt-32 pb-20 px-4 min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${images.projects.insightsHero || images.hero.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Blurred Background Overlay */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {/* Heavy blur effect for the background */}
          <div 
            className="absolute inset-0 backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(107, 114, 128, 0.3) 50%, rgba(30, 58, 138, 0.3) 100%)',
            }}
          ></div>
        </motion.div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto max-w-5k-content relative z-10 w-full">
          <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-12">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-4 md:space-y-6"
            >
              {/* First Line: "Don't wait for opportunity" with strike-through on "Don't wait for" */}
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-blue-300 md:text-blue-200">
                  <span className="relative inline-block">
                    <span className="line-through decoration-white decoration-2 md:decoration-4">Don't wait for</span>
                    <span className="ml-2 md:ml-3">opportunity</span>
                  </span>
                </h1>
              </div>

              {/* Second Line: "Create your destiny" */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white"
                style={{
                  fontFamily: "'Poppins', 'Montserrat', sans-serif",
                  fontStyle: 'italic',
                  letterSpacing: '-0.02em',
                }}
              >
                Create your destiny
              </motion.h2>
            </motion.div>

            {/* CTA Link: "Explore all jobs" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 cursor-pointer group"
              onClick={() => {
                // Scroll to jobs section or navigate
                const jobsSection = document.getElementById('jobs-section');
                if (jobsSection) {
                  jobsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="text-white text-lg md:text-xl font-medium group-hover:text-blue-200 transition-colors duration-300">
                Explore all jobs
              </span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-blue-200 group-hover:translate-x-1 transition-all duration-300" />
            </motion.div>

            {/* Search Bar */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
              onSubmit={handleSearch}
              className="w-full max-w-4xl mt-8 md:mt-12"
            >
              <div className="relative flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
                {/* Magnifying Glass Icon */}
                <div className="absolute left-4 md:left-6 z-10">
                  <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                </div>

                {/* Search Input */}
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs by location, profession or keywords"
                  className="w-full h-14 md:h-16 pl-12 md:pl-16 pr-20 md:pr-24 text-base md:text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400"
                />

                {/* Search Button - Blue Circular Button */}
                <button
                  type="submit"
                  className="absolute right-2 md:right-3 w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors duration-300 shadow-lg"
                  aria-label="Search jobs"
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
              </div>
            </motion.form>
          </div>
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
            className="w-6 h-10 border-2 border-white/70 rounded-full flex items-start justify-center p-2 bg-white/20 backdrop-blur-sm shadow-md"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Content Section Below Hero */}
      <section id="jobs-section" className="relative bg-white py-8 md:py-10 px-4">
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
                  Join NeuroVerse
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Become part of a diverse collective of free-thinkers, entrepreneurs and experts – and help us to make a difference. Explore career opportunities that match your skills and passion.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join NeuroVerse Section */}
      <section id="why-join-section" className="relative bg-white py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left">
              Why join NeuroVerse
            </h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Innovation First",
                description: "Work on cutting-edge AI and technology projects that shape the future of business and society.",
              },
              {
                title: "Diverse Culture",
                description: "Join a diverse collective of free-thinkers, entrepreneurs, and experts from around the world.",
              },
              {
                title: "Growth Opportunities",
                description: "Access to continuous learning, career development programs, and opportunities to advance your career.",
              },
              {
                title: "Work-Life Balance",
                description: "Flexible working arrangements and a supportive environment that values your well-being.",
              },
              {
                title: "Impactful Work",
                description: "Make a real difference by solving complex challenges and creating solutions that matter.",
              },
              {
                title: "Global Network",
                description: "Connect with talented professionals and work on projects with global reach and impact.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 md:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore NeuroVerse Section */}
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
              Explore NeuroVerse
            </h2>
          </motion.div>

          {/* Cards Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Card 1: Why join NeuroVerse - Image with white overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => {
                // Navigate or scroll to section
                const section = document.getElementById('why-join-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${images.projects.latestInsights})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              
              {/* White Overlay Box at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 md:p-6 flex items-center justify-between">
                <span className="text-base md:text-lg lg:text-xl font-heading font-bold text-gray-900">
                  Why join NeuroVerse
                </span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-900 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>

            {/* Card 2: Life at NeuroVerse - Solid Blue Background */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden cursor-pointer group bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col justify-between p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              onClick={() => {
                // Scroll to Life at NeuroVerse gallery section
                const gallerySection = document.getElementById('life-at-neuroverse-gallery');
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="text-base md:text-lg lg:text-xl font-heading font-bold text-white">
                Life at NeuroVerse
              </span>
              <div className="flex justify-end">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>

            {/* Card 3: Career paths - Image with white overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => {
                // Navigate to career paths section
                console.log("Navigate to Career paths");
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${images.projects.hotTopicsBackground || images.projects.latestInsights})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              
              {/* White Overlay Box at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 md:p-6 flex items-center justify-between">
                <span className="text-base md:text-lg lg:text-xl font-heading font-bold text-gray-900">
                  Career paths
                </span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-900 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>

            {/* Card 4: Diversity and Inclusion - Solid Blue Background */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden cursor-pointer group bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col justify-between p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              onClick={() => {
                // Navigate to diversity and inclusion section
                console.log("Navigate to Diversity and Inclusion");
              }}
            >
              <span className="text-base md:text-lg lg:text-xl font-heading font-bold text-white">
                Diversity and Inclusion
              </span>
              <div className="flex justify-end">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>

            {/* Card 5: Let's connect - Image with white overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => {
                navigate("/contact");
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{
                  backgroundImage: `url(${images.projects.insightsHero || images.projects.latestInsights})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              
              {/* White Overlay Box at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 md:p-6 flex items-center justify-between">
                <span className="text-base md:text-lg lg:text-xl font-heading font-bold text-gray-900">
                  Let's connect
                </span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-900 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>

            {/* Card 6: Meet our people - Solid Blue Background */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden cursor-pointer group bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col justify-between p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              onClick={() => {
                // Navigate to meet our people section
                console.log("Navigate to Meet our people");
              }}
            >
              <span className="text-base md:text-lg lg:text-xl font-heading font-bold text-white">
                Meet our people
              </span>
              <div className="flex justify-end">
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers at NeuroVerse Section - Two Column Layout */}
      <section className="relative w-full py-8 md:py-10">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden shadow-2xl">
            {/* Left Column - Dark Blue Background (40-45% width) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center min-h-[500px] md:min-h-[600px]"
            >
              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-6 md:mb-8"
              >
                Careers at NeuroVerse
              </motion.h2>

              {/* Paragraph Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-base md:text-lg lg:text-xl text-white leading-relaxed mb-8 md:mb-10 max-w-xl"
              >
                Get the future you want – for yourself, for our clients, and for society as a whole.
              </motion.p>

              {/* Brand/Logo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 md:mb-10"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white" style={{ fontFamily: "'Poppins', 'Montserrat', sans-serif", fontStyle: 'italic', letterSpacing: '-0.02em' }}>
                    NeuroVerse
                  </span>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-white">
                    invent
                  </span>
                </div>
              </motion.div>

              {/* Call to Action Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Navigate to jobs or scroll to jobs section
                  const jobsSection = document.getElementById('jobs-section');
                  if (jobsSection) {
                    jobsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 w-fit group"
              >
                <span>Find your future at NeuroVerse</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Right Column - Image (55-60% width) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3 relative h-[500px] md:h-[600px] lg:h-full min-h-[500px] md:min-h-[600px] overflow-hidden"
            >
              {/* Background Image - Office/People Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images.projects.latestInsights})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Subtle overlay for better visual effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life at NeuroVerse Gallery Section */}
      <section id="life-at-neuroverse-gallery" className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 mb-4 md:mb-6">
              Life at NeuroVerse
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Explore our vibrant work culture, collaborative environment, and the people who make NeuroVerse unique.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Gallery Item 1: Collaborative Workspaces */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={images.projects.latestInsights}
                alt="Collaborative Workspaces"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-white text-lg md:text-xl lg:text-2xl font-heading font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  Collaborative Workspaces
                </p>
              </div>
            </motion.div>

            {/* Gallery Item 2: Innovation Hub */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={images.projects.hotTopicsBackground || images.projects.latestInsights}
                alt="Innovation Hub"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-white text-lg md:text-xl lg:text-2xl font-heading font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  Innovation Hub
                </p>
              </div>
            </motion.div>

            {/* Gallery Item 3: Team Building Events */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={images.projects.insightsHero || images.projects.latestInsights}
                alt="Team Building Events"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-white text-lg md:text-xl lg:text-2xl font-heading font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  Team Building Events
                </p>
              </div>
            </motion.div>

            {/* Gallery Item 4: Learning & Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={images.projects.latestInsights}
                alt="Learning & Development"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-white text-lg md:text-xl lg:text-2xl font-heading font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  Learning & Development
                </p>
              </div>
            </motion.div>

            {/* Gallery Item 5: Diverse Perspectives */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={images.projects.hotTopicsBackground || images.projects.latestInsights}
                alt="Diverse Perspectives"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-white text-lg md:text-xl lg:text-2xl font-heading font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  Diverse Perspectives
                </p>
              </div>
            </motion.div>

            {/* Gallery Item 6: Community Engagement */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-xl group cursor-pointer"
            >
              <img
                src={images.projects.insightsHero || images.projects.latestInsights}
                alt="Community Engagement"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-end p-4 md:p-6">
                <p className="text-white text-lg md:text-xl lg:text-2xl font-heading font-semibold group-hover:text-blue-300 transition-colors duration-300">
                  Community Engagement
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore NeuroVerse Section - Three Cards */}
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
              Explore NeuroVerse
            </h2>
          </motion.div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Why join NeuroVerse */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative cursor-pointer group"
              onClick={() => {
                const section = document.getElementById('why-join-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg mb-4 md:mb-6">
                <img
                  src={images.projects.latestInsights}
                  alt="Why join NeuroVerse"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Label */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Why join NeuroVerse
                </h3>
              </div>
            </motion.div>

            {/* Card 2: Professions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative cursor-pointer group"
              onClick={() => {
                // Navigate to professions section or page
                console.log("Navigate to Professions");
              }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg mb-4 md:mb-6">
                <img
                  src={images.projects.hotTopicsBackground || images.projects.latestInsights}
                  alt="Professions"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Label */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Professions
                </h3>
              </div>
            </motion.div>

            {/* Card 3: Join us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative cursor-pointer group"
              onClick={() => {
                navigate("/contact");
              }}
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 lg:h-80 rounded-lg overflow-hidden shadow-lg mb-4 md:mb-6">
                <img
                  src={images.projects.insightsHero || images.projects.latestInsights}
                  alt="Join us"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Label */}
              <div className="text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  Join us
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section - Full Width */}
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
                  Ready to rewrite your future?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  Join NeuroVerse and be part of a team that's transforming the future of technology and business.
                </p>
              </div>

              {/* Right Side - Browse Open Opportunities Button */}
              <div className="flex-shrink-0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Scroll to jobs section or navigate to jobs page
                    const jobsSection = document.getElementById('jobs-section');
                    if (jobsSection) {
                      jobsSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // If jobs section doesn't exist, you can navigate to a jobs page
                      // navigate("/jobs");
                    }
                  }}
                  className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg group"
                >
                  Browse Open Opportunities
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

