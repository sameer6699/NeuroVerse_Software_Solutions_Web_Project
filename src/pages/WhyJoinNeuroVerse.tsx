import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, TrendingUp, CheckCircle2, BarChart3, Linkedin, ChevronLeft, ChevronRight, Heart, Award, Zap, Target, Globe, Lightbulb } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState } from "react";

/**
 * Why Join NeuroVerse Page Component
 * 
 * This page displays information about why to join NeuroVerse.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function WhyJoinNeuroVerse() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel content data
  const carouselSlides = [
    {
      id: 1,
      title: "Build your future with NeuroVerse",
      description: "NeuroVerse empowers talented individuals to achieve their career goals through innovative projects, continuous learning, and a supportive work environment. Our team of experts works on cutting-edge solutions that transform businesses and create lasting impact.",
      buttonText: "Explore opportunities",
      buttonLink: "/careers"
    },
    {
      id: 2,
      title: "Grow with cutting-edge technology",
      description: "Join a team that works with the latest technologies in AI, cloud computing, and digital transformation. We provide the resources, training, and mentorship you need to stay ahead in your field and build expertise in emerging technologies.",
      buttonText: "View technology stack",
      buttonLink: "/careers"
    },
    {
      id: 3,
      title: "Shape the future of innovation",
      description: "Be part of groundbreaking projects that make a real difference. At NeuroVerse, you'll work on solutions that transform industries, solve complex challenges, and create meaningful impact for clients and communities worldwide.",
      buttonText: "Discover our projects",
      buttonLink: "/careers"
    }
  ];

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Why Join NeuroVerse Benefits
  const benefits = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Work on cutting-edge AI and technology projects that shape the future of business and society. Be part of a team that's transforming industries through innovation."
    },
    {
      icon: Users,
      title: "Diverse Culture",
      description: "Join a diverse collective of free-thinkers, entrepreneurs, and experts from around the world. Experience a culture that values different perspectives and ideas."
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Access to continuous learning, career development programs, and opportunities to advance your career. We invest in your professional growth and success."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and a supportive environment that values your well-being. We believe in sustainable productivity and personal fulfillment."
    },
    {
      icon: Target,
      title: "Impactful Work",
      description: "Make a real difference by solving complex challenges and creating solutions that matter. Your work will have a meaningful impact on clients and society."
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connect with talented professionals and work on projects with global reach and impact. Be part of a worldwide community of innovators."
    },
  ];

  // Key Reasons to Join
  const reasons = [
    {
      icon: Award,
      title: "Recognition & Rewards",
      description: "Your contributions are recognized and rewarded. We celebrate achievements and provide competitive compensation packages."
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "Work with the latest technologies and tools. Stay at the forefront of innovation in AI, cloud computing, and digital transformation."
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work in teams that foster collaboration, creativity, and knowledge sharing. Build lasting relationships with colleagues who share your passion."
    },
    {
      icon: CheckCircle2,
      title: "Career Development",
      description: "Structured career paths with clear progression opportunities. Mentorship programs and training to help you reach your full potential."
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

      {/* Why Join NeuroVerse Card - Positioned outside hero section, extending from hero */}
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
                {/* Why Join NeuroVerse Text - Centered in the box */}
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
                  Why join NeuroVerse
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Join NeuroVerse-Specific Solutions Section */}
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
                  Why Join NeuroVerse
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Discover why NeuroVerse is the perfect place to build your career. Join a diverse collective of free-thinkers, entrepreneurs, and experts who are making a difference in the world of technology and business.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                  At NeuroVerse, we believe in empowering our people to reach their full potential. We offer a dynamic work environment, cutting-edge projects, and opportunities for growth that will shape your career and make a meaningful impact.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join NeuroVerse Banner/Carousel Section - Full Width */}
      <section className="relative bg-white py-8 md:py-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden"
        >
          {/* Background Image - Consistent, doesn't change with slides */}
          <div 
            className="absolute inset-0 w-full"
            style={{
              backgroundImage: `url(${images.banners.careerOperationAtNeuroverse})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(1.5px)',
            }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10"></div>
          </div>

          {/* Content Container - Animated carousel cards */}
          <div className="relative z-10 h-full flex items-center">
            <div className="max-w-7xl mx-auto max-w-5k-content w-full px-4 md:px-6 lg:px-8 xl:px-12">
              <div className="flex items-center justify-start">
                {/* Carousel Content - AnimatePresence for smooth transitions */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="bg-white rounded-xl p-6 md:p-8 lg:p-10 shadow-xl max-w-2xl"
                  >
                    {/* Headline */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                      {carouselSlides[currentSlide].title}
                    </h3>
                    
                    {/* Body Text */}
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                      {carouselSlides[currentSlide].description}
                    </p>

                    {/* Action Button */}
                    <motion.a
                      href={carouselSlides[currentSlide].buttonLink}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-sm"
                    >
                      <span>{carouselSlides[currentSlide].buttonText}</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </AnimatePresence>
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
                onClick={prevSlide}
                className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-1.5 px-1">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-blue-600 w-8 h-2'
                        : 'bg-white border-2 border-gray-300 w-2 h-2 hover:bg-gray-200'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Next Button (Right Arrow) */}
              <button
                onClick={nextSlide}
                className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* What we offer Section */}
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
              What we offer
            </h2>
          </motion.div>

          {/* Three Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Innovation & Growth */}
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
                  src={images.banners.innovationBanner}
                  alt="Innovation & Growth"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Innovation & Growth
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Work on cutting-edge projects that push the boundaries of technology. We provide opportunities to work with AI, cloud computing, and emerging technologies that shape the future.
                  </p>
                  <p className="text-sm md:text-base">
                    Our innovation labs and R&D initiatives give you the chance to experiment, prototype, and bring groundbreaking ideas to life while advancing your career.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Learning & Development */}
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
                  src={images.banners.learningDevelopmentBanner}
                  alt="Learning & Development"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  Learning & Development
                </h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p className="text-sm md:text-base">
                    Continuous learning is at the heart of our culture. We offer comprehensive training programs, mentorship opportunities, and access to industry-leading certifications.
                  </p>
                  <p className="text-sm md:text-base">
                    Whether you're starting your career or looking to advance, we provide structured career paths and development programs to help you reach your full potential.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Card 3: Work-Life Balance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={images.banners.workLifeBalanceBanner}
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
                    We believe in sustainable productivity and personal fulfillment. Our flexible working arrangements and supportive environment ensure you can excel at work while maintaining a healthy work-life balance.
                  </p>
                  <p className="text-sm md:text-base">
                    From remote work options to wellness programs, we provide the resources and support you need to thrive both professionally and personally.
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Paragraph */}
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
              We combine our end-to-end expertise with sector-specific knowledge, advanced technologies, and global resources to guide your career journey every step of the way. And our strong partnerships with leading technology companies means you'll work with the best tools and platforms in the industry.
            </p>

            {/* Bold Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-900 leading-tight">
              The career platform for your professional transformation
            </h2>

            {/* Dark Blue Line */}
            <div className="h-1 w-24 bg-blue-900 rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12 text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 mb-4">
              Key Benefits
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl text-left">
              Discover what makes NeuroVerse a great place to work
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
          className="grid grid-cols-1 md:grid-cols-5 w-full min-h-[400px]"
        >
            {/* Left Section - Dark Blue Text Box (60% - 3 columns) */}
            <div className="md:col-span-3 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                {/* Headline */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-white leading-tight">
                  Join a team that's transforming the future
                </h2>
                
                {/* Body Text */}
                <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                  At NeuroVerse, we're not just building software – we're creating solutions that make a difference. Join us and be part of a team that's recognized for innovation, excellence, and impact.
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

            {/* Right Section - Image (40% - 2 columns) - Matches Left Card Height */}
            <div className="md:col-span-2 relative h-64 md:h-full overflow-hidden group">
              <motion.img
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src={images.banners.futureTechnologyBanner}
                alt="NeuroVerse team - Future Technology"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-transparent to-blue-900/10"></div>
              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
      </section>

    </div>
  );
}

