import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Search, Filter, Calendar, FileText, Book, Play, Mic, Download, Linkedin, Facebook, X } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";

/**
 * Research Library Page Component
 * 
 * This page displays research and insights from across the business.
 * Inspired by Capgemini's research library design.
 */
export default function ResearchLibrary() {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Featured Research Items
  const featuredResearch = [
    {
      id: 1,
      title: "World Payments Report 2025",
      description: "Our new study finds that consumers trust generative AI to assist with financial planning, medical diagnosis, and relationship advice.",
      type: "Report",
      date: "January 2025",
      category: "Capgemini Research Institute",
      image: images.banners.reportsBanner,
      gradient: "from-blue-600 via-indigo-700 to-purple-800"
    },
    {
      id: 2,
      title: "Engineering biology",
      description: "How engineering biology can be applied in different sectors – and how it has the power to transform industries.",
      type: "Report",
      date: "December 2024",
      category: "Capgemini Research Institute",
      image: images.banners.researchBanner,
      gradient: "from-green-500 via-emerald-600 to-teal-700"
    },
    {
      id: 3,
      title: "Generative AI in organizations",
      description: "Organizations are accelerating their use of generative AI, and there has been an increase in investment in the technology over the last 12 months.",
      type: "Report",
      date: "November 2024",
      category: "Capgemini Research Institute",
      image: images.banners.aiBanner,
      gradient: "from-orange-500 via-red-600 to-pink-700"
    },
  ];

  // Research Items
  const researchItems = [
    {
      id: 1,
      title: "Reindustrialization of Europe and US",
      description: "The resurgence of manufacturing: Reindustrialization strategies in Europe and the US - 2025.",
      type: "Report",
      date: "January 2025",
      category: "Capgemini Research Institute",
      industries: ["Manufacturing", "Industrial"],
      topics: ["Business operations", "Intelligent industry"],
      image: images.banners.manufacturingHeroBanner,
      gradient: "from-blue-500 via-blue-600 to-indigo-700"
    },
    {
      id: 2,
      title: "The B2B Pulse",
      description: "Top six expectations of telecom's business customers.",
      type: "Report",
      date: "December 2024",
      category: "Capgemini Research Institute",
      industries: ["Telecoms"],
      topics: ["Customer experience", "Future of connectivity"],
      image: images.banners.technologyHeroBanner,
      gradient: "from-teal-500 via-cyan-600 to-blue-700"
    },
    {
      id: 3,
      title: "The battery revolution",
      description: "Exploring the future of energy storage and sustainable power solutions.",
      type: "Report",
      date: "November 2024",
      category: "Capgemini Research Institute",
      industries: ["Energy & utilities"],
      topics: ["Sustainability", "Emerging technologies"],
      image: images.banners.technologyBgBanner,
      gradient: "from-gray-800 via-gray-900 to-black"
    },
    {
      id: 4,
      title: "Investment trends 2025",
      description: "Navigating uncertainty with confidence: Investment priorities for 2025.",
      type: "Report",
      date: "January 2025",
      category: "Capgemini Research Institute",
      industries: ["Financial services"],
      topics: ["Business operations", "Digital transformation"],
      image: images.banners.financeHeroBanner,
      gradient: "from-blue-600 via-indigo-700 to-purple-800"
    },
    {
      id: 5,
      title: "Sustainable Gen AI",
      description: "The environmental Impact of Gen AI and a roadmap for developing sustainable Gen AI practices.",
      type: "Report",
      date: "December 2024",
      category: "Capgemini Research Institute",
      industries: ["General services"],
      topics: ["Gen AI", "Sustainability", "ESG"],
      image: images.banners.innovation,
      gradient: "from-green-500 via-emerald-600 to-teal-700"
    },
    {
      id: 6,
      title: "What matters to today's consumer",
      description: "Consumer preferences and purchasing behaviors are constantly evolving.",
      type: "Report",
      date: "November 2024",
      category: "Capgemini Research Institute",
      industries: ["Retail", "Consumer products"],
      topics: ["Customer experience", "Customer first"],
      image: images.banners.retailEcommerceHeroBanner,
      gradient: "from-pink-500 via-purple-600 to-indigo-700"
    },
    {
      id: 7,
      title: "Digital transformation in healthcare",
      description: "How digital technologies are revolutionizing patient care and healthcare delivery.",
      type: "Whitepaper",
      date: "October 2024",
      category: "Capgemini Research Institute",
      industries: ["Healthcare"],
      topics: ["Digital transformation", "Health"],
      image: images.banners.healthcareBanner,
      gradient: "from-blue-500 via-cyan-600 to-teal-700"
    },
    {
      id: 8,
      title: "The future of cloud computing",
      description: "Exploring cloud strategies and infrastructure modernization for enterprise success.",
      type: "Report",
      date: "September 2024",
      category: "Capgemini Research Institute",
      industries: ["High Tech"],
      topics: ["Cloud", "Digital core"],
      image: images.banners.cloudDataCenter,
      gradient: "from-indigo-500 via-purple-600 to-pink-700"
    },
    {
      id: 9,
      title: "Cybersecurity in the age of AI",
      description: "Understanding how AI is transforming cybersecurity strategies and threat detection.",
      type: "Research brief",
      date: "August 2024",
      category: "Capgemini Research Institute",
      industries: ["General services"],
      topics: ["Cybersecurity", "Gen AI"],
      image: images.banners.cybersecurityHeroBg,
      gradient: "from-red-500 via-orange-600 to-yellow-700"
    },
  ];

  // Filter options
  const industries = [
    "Aerospace & Defense", "Automotive", "Banking", "Banking & capital markets",
    "Consumer products", "Energy & utilities", "Financial services", "Healthcare",
    "High Tech", "Hospitality & Travel", "Insurance", "Life sciences",
    "Manufacturing", "Media & Entertainment", "Public sector", "Retail", "Telecoms"
  ];

  const topics = [
    "5G and Edge", "Agentic AI", "Applications", "Business operations",
    "Capgemini Research Institute", "Cloud", "Customer experience", "Customer first",
    "CX and brand", "Cybersecurity", "Data and AI", "Digital core",
    "Digital inclusion", "Digital transformation", "Digital workplace", "Emerging technologies",
    "Engineering", "Enterprise management", "ESG", "Future of connectivity",
    "Gen AI", "Health", "Innovation", "Intelligent industry", "Mobility",
    "Public sector", "Quality & testing", "Reinventing work", "Smart cities",
    "Software product engineering", "Supply chain", "Sustainability", "Talent and people",
    "Telco", "WEMO"
  ];

  const contentTypes = [
    "Book", "Capgemini Research Institute", "Conversations for tomorrow",
    "Other reports", "Playbook", "Podcast", "Podcast episode", "Podcast series",
    "Point of view", "Report", "Research brief", "Webinar", "Whitepaper"
  ];

  // Filter research items
  const filteredResearch = researchItems.filter(item => {
    const matchesSearch = searchQuery === "" || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesIndustries = selectedIndustries.length === 0 ||
      item.industries.some(ind => selectedIndustries.includes(ind));
    
    const matchesTopics = selectedTopics.length === 0 ||
      item.topics.some(topic => selectedTopics.includes(topic));
    
    const matchesTypes = selectedTypes.length === 0 ||
      selectedTypes.includes(item.type);

    return matchesSearch && matchesIndustries && matchesTopics && matchesTypes;
  });

  const toggleFilter = (category: string, value: string, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
    setter(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedIndustries([]);
    setSelectedTopics([]);
    setSelectedTypes([]);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
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
            backgroundImage: `url(${images.banners.researchBanner})`,
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

      {/* Research Library Card - Positioned outside hero section, extending from hero */}
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
                {/* Research Library Text - Centered in the box */}
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
                  Research library
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
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
                  Research and insights from across NeuroVerse
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Research and insights from across NeuroVerse, including reports and research notes from the NeuroVerse Research Institute – ranked #1 in the world for the quality of its research by independent analysts for six consecutive times – an industry first.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredResearch.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
              >
                <div className={`relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br ${item.gradient}`}>
                  <div className="absolute inset-0 opacity-90">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                    }}></div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.category}</span>
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
            ))}
          </div>
        </div>
      </section>

      {/* Research Items Grid with Search */}
      <section className="relative bg-white py-8 md:py-10 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Search Bar - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 flex justify-center"
          >
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search research and insights..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-600 transition-colors text-lg shadow-sm"
              />
            </div>
          </motion.div>

          {/* Filter Toggle - Centered, Right After Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span className="font-semibold">Filters</span>
            </button>
            {(selectedIndustries.length > 0 || selectedTopics.length > 0 || selectedTypes.length > 0) && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
                <span>Clear all</span>
              </button>
            )}
          </motion.div>

          {/* Filter Panels */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              {/* Industries Filter */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Industries</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {industries.map((industry) => (
                    <label key={industry} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        checked={selectedIndustries.includes(industry)}
                        onChange={() => toggleFilter("industries", industry, setSelectedIndustries)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm">{industry}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Topics Filter */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Topics</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {topics.map((topic) => (
                    <label key={topic} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        checked={selectedTopics.includes(topic)}
                        onChange={() => toggleFilter("topics", topic, setSelectedTopics)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm">{topic}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Content Types Filter */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Content Type</h3>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {contentTypes.map((type) => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                      <input
                        type="checkbox"
                        checked={selectedTypes.includes(type)}
                        onChange={() => toggleFilter("types", type, setSelectedTypes)}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className="text-sm">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Count - Centered */}
          <div className="mb-8 text-center">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredResearch.length}</span> research and insights
            </p>
          </div>
          {filteredResearch.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-4">No results matching your search</p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredResearch.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full flex flex-col"
                >
                  <div className={`relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br ${item.gradient}`}>
                    <div className="absolute inset-0 opacity-90">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                      }}></div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                        {item.industries[0]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{item.category}</span>
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
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredResearch.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mt-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-700 transition-all duration-300"
              >
                Show 10 more research and insights
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

