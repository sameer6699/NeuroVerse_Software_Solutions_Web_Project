import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Menu, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

/**
 * Career Path Page Component
 * 
 * This page displays career path information at NeuroVerse.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function CareerPath() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const navigate = useNavigate();

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Carousel state for brands
  const [currentBrandIndex, setCurrentBrandIndex] = useState(0);

  // Career paths data
  const careerPaths = [
    {
      title: "Students and graduates",
      description: "Take the first step in a bold new direction. A career at NeuroVerse offers you the opportunity to follow an existing passion or cultivate new ones. Develop your career in the direction you want to take it.",
      image: images.banners.learningDevelopmentBanner || images.banners.teamImg || images.projects.latestInsights
    },
    {
      title: "Experienced professionals",
      description: "Bring your mastery and experience to a global business that values and celebrates its experts, and we will provide you with the opportunity to take the next meaningful step in your career journey.",
      image: images.banners.collaborativeEnvironmentBanner || images.banners.teamImg || images.projects.latestInsights
    },
    {
      title: "Executives",
      description: "Developing our leaders is one of NeuroVerse's key priorities. We have designed leading-edge learning initiatives specifically for helping you as an executive to enhance your people and business skills.",
      image: images.banners.futureTechnologyBanner || images.banners.teamImg || images.projects.latestInsights
    }
  ];

  // Brands carousel data
  const brands = [
    {
      title: "Careers at NeuroVerse Invent",
      description: "We bring together a diverse collective of disruptors, change makers, and movers and shakers to form an innovation and transformation powerhouse.",
      brandName: "NeuroVerse Invent",
      image: images.banners.innovationBanner || images.projects.latestInsights
    },
    {
      title: "Careers at NeuroVerse Engineering",
      description: "Join our engineering team and work on cutting-edge technology solutions that transform businesses and create lasting impact across industries.",
      brandName: "NeuroVerse Engineering",
      image: images.banners.technologyInnovation || images.projects.latestInsights
    },
    {
      title: "Careers at NeuroVerse Digital",
      description: "Be part of our digital transformation team, helping clients navigate the digital landscape with innovative solutions and strategic insights.",
      brandName: "NeuroVerse Digital",
      image: images.banners.futureTechnologyBanner || images.projects.latestInsights
    }
  ];

  // Carousel navigation functions
  const nextBrand = () => {
    setCurrentBrandIndex((prev) => (prev + 1) % brands.length);
  };

  const prevBrand = () => {
    setCurrentBrandIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const goToBrand = (index: number) => {
    setCurrentBrandIndex(index);
  };

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
            backgroundImage: `url(${images.banners.whyNvHeroBanner})`,
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

      {/* Career paths Card - Positioned outside hero section, extending from hero */}
      <div className="relative -mt-24 md:-mt-32 lg:-mt-40 z-30">
        <div className="max-w-7xl mx-auto max-w-5k-content px-4 md:px-6 lg:px-8">
          <div className="flex justify-end">
            <div className="relative">
              {/* Blue Background Box - Overlay on right side */}
              <div 
                className="relative rounded-lg px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 xl:py-28 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 cursor-pointer group hover:shadow-3xl transition-shadow duration-300"
                onClick={() => {
                  navigate("/careers/career-path");
                }}
              >
                {/* Career paths Text - Centered in the box */}
                <h1
                  className="relative z-10 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight whitespace-nowrap group-hover:scale-105 transition-transform duration-300"
                  style={{
                    fontFamily: "'Poppins', 'Montserrat', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  Career paths
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero/Introductory Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-12">
            {/* Icons - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-5 md:gap-6 flex-shrink-0"
            >
              {/* Menu Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center shadow-sm">
                <Menu className="w-7 h-7 md:w-8 md:h-8 text-gray-600" />
              </div>
              {/* Info Icon */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center shadow-sm">
                <Info className="w-7 h-7 md:w-8 md:h-8 text-gray-600" />
              </div>
            </motion.div>

            {/* Content - Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 leading-tight">
                  As a graduate or an experienced professional, you will be working with the world's leading brands to enhance and transform the way they do business.
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-5xl">
                  With our portfolio of innovative market offers and technologies, we empower and encourage you to create your own career path. You get the freedom to build your personalized career journey with challenging global projects across the industries and businesses. You will get opportunities to contribute to society through social innovation, digital inclusion initiatives and environmental impact projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore career paths according to experience Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900">
              Explore career paths according to experience
            </h2>
          </motion.div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {careerPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="relative w-full h-64 md:h-72 overflow-hidden">
                  <img
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {path.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    {path.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore opportunities with NeuroVerse Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900">
              Explore opportunities with NeuroVerse
            </h2>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 overflow-hidden rounded-2xl shadow-2xl">
              {/* Left Side - Card Content */}
              <motion.div
                key={currentBrandIndex}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3 bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900">
                    {brands[currentBrandIndex].title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl">
                    {brands[currentBrandIndex].description}
                  </p>
                  <div className="pt-4">
                    <span className="text-2xl md:text-3xl font-heading font-bold text-blue-600">
                      {brands[currentBrandIndex].brandName}
                    </span>
                  </div>
                </div>

                {/* Navigation and Button */}
                <div className="mt-8 flex flex-col gap-6">
                  {/* Navigation Dots and Arrows */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={prevBrand}
                        className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                        aria-label="Previous brand"
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </button>
                      <div className="flex items-center gap-2">
                        {brands.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => goToBrand(index)}
                            className={`transition-all duration-300 rounded-full ${
                              index === currentBrandIndex
                                ? 'bg-blue-600 w-8 h-2'
                                : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to brand ${index + 1}`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={nextBrand}
                        className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                        aria-label="Next brand"
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Learn More Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/careers")}
                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 w-fit"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-5 h-5 text-blue-600" />
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Side - Image */}
              <div className="lg:col-span-2 relative h-64 md:h-96 lg:h-full min-h-[400px] overflow-hidden">
                <motion.img
                  key={currentBrandIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src={brands[currentBrandIndex].image}
                  alt={brands[currentBrandIndex].brandName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join us Footer/Call-to-Action Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white mb-4">
                Join us
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                Are you ready to take on the challenge? Find the opportunity that fits you
              </p>
            </motion.div>

            {/* Right Side - Search Jobs Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/careers")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-lg"
              >
                <span>Search Jobs</span>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
