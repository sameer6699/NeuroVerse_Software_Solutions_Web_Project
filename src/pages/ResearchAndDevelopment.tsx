import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Linkedin, ChevronLeft, ChevronRight, Globe, Microscope, Shield, Factory, Users, Heart, Zap } from "lucide-react";
import { images } from "@/assets";
import { useRef } from "react";

/**
 * Research and Development Page Component
 * 
 * This page displays initiatives for research and development, inspired by Capgemini's
 * "Initiatives and research with the World Economic Forum" section.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function ResearchAndDevelopment() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Joint Initiatives Data
  const initiatives = [
    {
      title: "Technology Convergence",
      description: "The integration of various technologies to drive sustainable economic growth. We explore how AI, IoT, blockchain, and cloud computing converge to create transformative solutions.",
      icon: Globe,
      color: "from-blue-500 to-indigo-600",
      technologies: ["AI/ML", "IoT", "Blockchain", "Cloud Computing"]
    },
    {
      title: "Bioeconomy Initiative",
      description: "Biotechnology applied to digital and industrial innovations to create a sustainable bioeconomy. We develop solutions that combine biological systems with advanced technology.",
      icon: Microscope,
      color: "from-green-500 to-emerald-600",
      technologies: ["Biotechnology", "Digital Innovation", "Sustainability", "Industrial Biology"]
    },
    {
      title: "GovTech Center Network",
      description: "Digital and technological solutions to enhance government efficiency and public services. We work with public sector organizations to modernize citizen services.",
      icon: Shield,
      color: "from-purple-500 to-violet-600",
      technologies: ["Digital Government", "Public Services", "Citizen Engagement", "E-Governance"]
    },
    {
      title: "AI Safe Systems and Technologies",
      description: "AI technologies to ensure safe, ethical, and governed deployment across sectors. We develop frameworks for responsible AI implementation and governance.",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      technologies: ["AI Ethics", "AI Governance", "Safe AI", "Responsible AI"]
    },
    {
      title: "Industry Net Zero Accelerator",
      description: "Tech innovations in manufacturing and supply chains to accelerate the path to net zero. We help organizations achieve carbon neutrality through intelligent technology.",
      icon: Factory,
      color: "from-teal-500 to-cyan-600",
      technologies: ["Sustainability", "Carbon Neutrality", "Smart Manufacturing", "Supply Chain"]
    },
    {
      title: "Shaping the New Frontiers of Work",
      description: "Digital tools, artificial intelligence, and automation to redefine the future of work and workforce dynamics. We explore how technology transforms workplace collaboration.",
      icon: Users,
      color: "from-pink-500 to-rose-600",
      technologies: ["Future of Work", "AI Automation", "Workforce Transformation", "Digital Collaboration"]
    },
    {
      title: "Healthcare Digital Transformation",
      description: "AI, data, and digital platforms to revolutionize healthcare delivery and patient outcomes. We develop intelligent healthcare solutions that improve patient care.",
      icon: Heart,
      color: "from-red-500 to-pink-600",
      technologies: ["Digital Health", "AI in Healthcare", "Patient Care", "Health Analytics"]
    },
    {
      title: "Energy Innovation Lab",
      description: "Advanced energy solutions and smart grid technologies to power the future sustainably. We research renewable energy integration and intelligent power systems.",
      icon: Zap,
      color: "from-yellow-500 to-amber-600",
      technologies: ["Renewable Energy", "Smart Grid", "Energy Storage", "Power Systems"]
    },
  ];

  // Featured Insights
  const featuredInsights = [
    {
      title: "Technology Convergence",
      subtitle: "Exploring the converging nature of today's tech explosion.",
      description: "Discover how multiple technologies are converging to create unprecedented opportunities for innovation and growth.",
      image: images.projects.hotTopicsBackground,
    },
    {
      title: "Actionable Recommendations for a Commercial Bioeconomy",
      subtitle: "From policy to practice.",
      description: "Practical insights on building a sustainable bioeconomy through biotechnology and digital innovation.",
      image: images.projects.latestInsights,
    },
    {
      title: "Navigating the AI Frontier",
      subtitle: "Primer on the evolution and impact of AI agents.",
      description: "Understanding how AI agents are transforming industries and reshaping business operations.",
      image: images.projects.insightsHero,
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

      {/* Research and Development Card - Positioned outside hero section */}
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
                {/* Title Text - Centered in the box */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="relative z-10 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight"
                  style={{
                    fontFamily: "'Poppins', 'Montserrat', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Initiatives for Research and Development
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
                  As a strategic partner, we engage to develop solutions to some of the world's most pressing challenges.
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  We work together on structured, multi-year initiatives involving private, public, and multistakeholder collaborations to address large-scale global challenges. These efforts create a space to engage, share knowledge and ideas, and address emerging issues.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl">
                  NeuroVerse takes on a leadership role in many of these initiatives and communities, offering insights that influence the global agenda and help create industry breakthroughs and economic solutions. We do this in collaboration with key leaders and experts with whom we share the same goal: To improve the state of the world.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-orange-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Insights Section */}
      <section className="relative bg-gradient-to-b from-white via-gray-50/30 to-white py-12 md:py-16 px-4">
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
              Featured insights
            </h2>
          </motion.div>

          {/* Featured Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {featuredInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              >
                {/* Image */}
                <div className="relative w-full h-48 md:h-56 overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {insight.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 italic">
                    {insight.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                    {insight.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    <span>Discover the report</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Joint Initiatives Section */}
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
              Joint initiatives
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl">
              Our collaborative initiatives bring together industry leaders, researchers, and innovators to address global challenges and drive sustainable innovation.
            </p>
          </motion.div>

          {/* Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <motion.div
                  key={initiative.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    {/* Icon Header */}
                    <div className={`relative w-full h-32 overflow-hidden bg-gradient-to-br ${initiative.color}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Decorative Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                        }}></div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-grow">
                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {initiative.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                        {initiative.description}
                      </p>
                      
                      {/* Technologies Tags */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {initiative.technologies.slice(0, 2).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md group-hover:bg-blue-100 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {initiative.technologies.length > 2 && (
                          <span className="px-2 py-1 text-xs font-medium text-gray-500">
                            +{initiative.technologies.length - 2} more
                          </span>
                        )}
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
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}

