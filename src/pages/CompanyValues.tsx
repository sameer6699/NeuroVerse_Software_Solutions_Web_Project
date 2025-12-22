import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Linkedin, Facebook, Shield, Heart, Zap, Lock, Users, Award, Target, Sparkles, Star } from "lucide-react";
import { images } from "@/assets";
import { useRef } from "react";
import { useNavigate } from "react-router";

/**
 * Company Values Page Component
 * 
 * This page displays NeuroVerse's values and ethics, inspired by Capgemini's design style.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function CompanyValues() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const navigate = useNavigate();

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Nine Core Values
  const coreValues = [
    {
      title: "Honesty",
      icon: Shield,
      description: "We believe in loyalty, integrity, and uprightness. We refuse underhanded methods and understand that lack of openness and integrity will be penalized. Our commitment to honesty builds trust with our clients, partners, and team members."
    },
    {
      title: "Boldness",
      icon: Zap,
      description: "We embrace entrepreneurship and take considered risks. Our commitment and firmness in decisions, combined with challenging orientations, drive innovation. We understand the need to combine boldness with prudence to achieve sustainable growth."
    },
    {
      title: "Trust",
      icon: Lock,
      description: "We empower individuals and teams through decentralized decision-making. We foster openness in sharing ideas and information within the company, creating an environment where trust is the foundation of all our relationships."
    },
    {
      title: "Freedom",
      icon: Users,
      description: "We value independence in thought, judgment, and deeds. Our entrepreneurial spirit, creativity, tolerance, and respect for different cultures and customs are essential qualities in our multicultural organization."
    },
    {
      title: "Fun",
      icon: Heart,
      description: "We believe in feeling good about being part of the company or team. We take pride in our work, celebrate our sense of accomplishment, and enjoy being part of challenging projects that make a difference."
    },
    {
      title: "Modesty",
      icon: Award,
      description: "We remain humble in our achievements and open to learning. We listen more than we speak, value feedback, and continuously strive to improve. Modesty keeps us grounded and focused on what truly matters."
    },
    {
      title: "Team Spirit",
      icon: Users,
      description: "We work together as one cohesive unit, supporting each other and sharing common goals. Our team spirit drives collaboration, innovation, and collective success. Together, we achieve more than we ever could alone."
    },
    {
      title: "Innovation",
      icon: Sparkles,
      description: "We continuously push the boundaries of what's possible, embracing new technologies and creative solutions. Our commitment to innovation drives us to explore uncharted territories, challenge conventional thinking, and deliver cutting-edge solutions that transform businesses and industries."
    },
    {
      title: "Excellence",
      icon: Star,
      description: "We strive for excellence in everything we do, setting high standards and continuously raising the bar. Our pursuit of excellence means delivering exceptional quality, exceeding expectations, and never settling for good enough. We are committed to being the best at what we do."
    }
  ];

  // Explore cards data
  const exploreCards = [
    {
      title: "Who we are",
      image: images.banners.ourStoryCardImg || images.banners.aboutUsBanner || images.hero.background,
      description: "Discover the people and culture behind NeuroVerse"
    },
    {
      title: "Environment, social and governance",
      image: images.banners.csrBannerImg || images.banners.companyValues || images.hero.background,
      description: "Our commitment to sustainable and responsible business practices"
    },
    {
      title: "Corporate social responsibility",
      image: images.banners.csrBannerImg || images.banners.ourCulture || images.hero.background,
      description: "Making a positive impact on society and communities"
    }
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
            backgroundImage: `url(${images.banners.companyValues || images.banners.aboutUsBanner || images.hero.background})`,
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

      {/* Company Values Card - Positioned outside hero section, extending from hero */}
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
                {/* Company Values Text - Centered in the box */}
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
                  Company Values
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
                  At NeuroVerse, our Values and Ethics are at the heart of our identity.
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  We believe that strong values and sound ethics are the foundation for profitable and sustainable business. Our nine core values—Honesty, Boldness, Trust, Freedom, Fun, Modesty, Team Spirit, Innovation, and Excellence—express our personality, inspire and guide us, and we cherish individual freedoms and initiatives within the discipline of alignment with our values.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Our ethical culture guides team members globally, promoting an ethical approach, inquiry, dialogue, and debate to define "doing the right thing" within the business and Group. Our commitment to core values and ethical business practices has been a distinguishing factor from the outset.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <blockquote className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-semibold text-gray-900 leading-relaxed max-w-5xl mx-auto mb-6">
              "Our values are at the heart of the company and have become its hallmark: an entrepreneurial spirit above all else, respect for all cultures, and love for our clients."
            </blockquote>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              — NeuroVerse Leadership Team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our nine Values Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left mb-4">
              Our nine Values
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed max-w-4xl">
              Discover our Values and what they mean for the Group, and for each of us:
            </p>
          </div>

          {/* Values List - Vertical Layout */}
          <div className="space-y-10 md:space-y-12 lg:space-y-14">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 md:gap-8 items-start"
                >
                  {/* Icon - Left Side */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg bg-blue-600 border-2 border-blue-600 flex items-center justify-center shadow-sm">
                      <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </div>
                  </div>
                  
                  {/* Content - Right Side */}
                  <div className="flex-1">
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 md:mb-6">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Honoring Human Rights Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              {/* Short horizontal dash above heading */}
              <div className="w-12 h-0.5 bg-gray-400 mb-4"></div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                Honoring human rights
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                At NeuroVerse, human rights are fundamental to everything we do. We recognize that respecting and upholding human dignity is essential not only for ethical business practices but for building sustainable, meaningful relationships with our employees, partners, and the communities we serve.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our human rights framework is integrated throughout our operations, from how we treat our team members to how we engage with suppliers and contribute to local communities. Through our confidential reporting system, team members can raise concerns about human rights issues at any time, knowing they will be handled with care, respect, and immediate attention.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={images.banners.lifeAtBanner || images.banners.ourCulture || images.hero.background}
                  alt="Honoring human rights"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Column 1: Fostering open dialogue and growth */}
            <div className="flex flex-col">
              {/* Short horizontal dash above heading */}
              <div className="w-12 h-0.5 bg-gray-400 mb-4"></div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                Fostering open dialogue and growth
              </h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 flex-grow">
                We believe that the best ideas come from listening to those who work closest to our challenges and opportunities. Our culture of open communication encourages team members at all levels to share insights, raise concerns, and propose improvements. Through regular feedback sessions, anonymous surveys, and direct channels to leadership, we ensure that every perspective is valued and considered.
              </p>
              {/* Image */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={images.banners.ourStoryBannerImg || images.banners.aboutUsBanner || images.hero.background}
                  alt="Fostering open dialogue and growth"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Column 2: Championing responsible AI development */}
            <div className="flex flex-col">
              {/* Short horizontal dash above heading */}
              <div className="w-12 h-0.5 bg-gray-400 mb-4"></div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                Championing responsible AI development
              </h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 flex-grow">
                We develop and implement AI solutions that are fair, transparent, and beneficial to all stakeholders. Our approach is built on principles of accountability, inclusivity, and human-centered design. Our comprehensive guidelines ensure that AI technologies enhance human capabilities, promote diversity, prevent bias, and maintain clear accountability for AI-driven decisions.
              </p>
              {/* Image */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={images.banners.innovationTechnology || images.banners.aboutUsBanner || images.hero.background}
                  alt="Championing responsible AI development"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Column 3: Ensuring transparency and integrity */}
            <div className="flex flex-col">
              {/* Short horizontal dash above heading */}
              <div className="w-12 h-0.5 bg-gray-400 mb-4"></div>
              <h4 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-4 leading-tight">
                Ensuring transparency and integrity
              </h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 flex-grow">
                We maintain the highest standards of integrity through proactive management of potential conflicts of interest. Our clear policies and user-friendly digital tools help team members identify situations where personal interests might intersect with professional responsibilities.
              </p>
              {/* Image */}
              <div className="relative w-full h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={images.banners.ourCulture || images.banners.aboutUsBanner || images.hero.background}
                  alt="Ensuring transparency and integrity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instilling an Ethical Culture Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-lg p-8 md:p-10 lg:p-12 shadow-lg">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  Instilling an ethical culture
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Our Code of Business Ethics outlines our aspirations and values. A comprehensive training program, revamped in 2024, promotes ethical culture internally. This training is mandatory for all employees and must be taken annually to ensure we maintain the highest standards of ethical conduct.
                </p>
                <motion.button
                  onClick={() => navigate("/about")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 w-fit"
                >
                  <span>Code of Business Ethics</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={images.banners.ourCulture || images.banners.aboutUsBanner || images.hero.background}
                  alt="Ethical culture"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Objectives Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-lg p-8 md:p-10 lg:p-12 shadow-lg">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  Our objectives
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  As part of our Environmental, Social, and Governance (ESG) policy, we have set three key objectives:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-gray-700">
                      Maintain our employees' belonging index above 80
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-gray-700">
                      Keep over 80% of the employees with a positive perception of our Values, culture, and ethical behaviors in the Group
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="text-base md:text-lg text-gray-700">
                      Enhance awareness and foster the adoption of Ethical AI practices
                    </span>
                  </li>
                </ul>
                <motion.button
                  onClick={() => navigate("/about")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors duration-300 w-fit"
                >
                  <span>Visit our ESG pages</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={images.banners.ourStoryBannerImg || images.banners.aboutUsBanner || images.hero.background}
                  alt="Our objectives"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Honoring Human Rights Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-lg p-8 md:p-10 lg:p-12 shadow-lg">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  Honoring human rights
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  We have a deep commitment to protecting and promoting human rights as a prerequisite for achieving our objectives. Our dedication to human rights forms the basis for our overarching Code of Business Ethics and extends to our entire ecosystem, including the supply chain and local communities.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  A "Speakup" tool is accessible round the clock to address human rights violations, ensuring that every voice is heard and every concern is addressed with the utmost seriousness and confidentiality.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={images.banners.lifeAtBanner || images.banners.ourCulture || images.hero.background}
                  alt="Honoring human rights"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speaking Up Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-lg p-8 md:p-10 lg:p-12 shadow-lg">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  Speaking up
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  We are committed to ethical conduct and maintaining the highest standards of integrity. Our 24-7 web and phone-based ethics helpline, "Speakup," ensures that every team member can report concerns confidentially and safely.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  We guarantee fair investigation, complete confidentiality, and protection from retaliation for all reporters. Your voice matters, and we are here to listen.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300 w-fit"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={images.banners.ourStoryCardImg || images.banners.aboutUsBanner || images.hero.background}
                  alt="Speaking up"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* One of the World's Most Ethical Companies Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-lg p-8 md:p-10 lg:p-12 shadow-lg">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  One of the World's Most Ethical Companies®
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  We nurture our ethical culture year on year, constantly improving our approach. This commitment has helped us become one of the most trusted and respected companies in the industry.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Recognized for our ethical leadership and responsible business practices, we are proud to be an ethical employer and a responsible player in the global technology landscape.
                </p>
                <motion.button
                  onClick={() => navigate("/about")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300 w-fit"
                >
                  <span>Find out more</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Award Badge */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 md:p-10 lg:p-12 shadow-xl text-center">
                <div className="text-white">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">2025</div>
                  <div className="text-2xl md:text-3xl font-semibold mb-2">WORLD'S MOST</div>
                  <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">ETHICAL</div>
                  <div className="text-2xl md:text-3xl font-semibold mb-6">COMPANIES</div>
                  <div className="text-lg md:text-xl font-medium mb-4">ETHISPHERE</div>
                  <div className="text-sm md:text-base opacity-90">ETHICAL LEADERSHIP RECOGNITION</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore NeuroVerse Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Title */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 text-left">
              Explore NeuroVerse
            </h2>
          </div>

          {/* Three Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {exploreCards.map((card, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => {
                  if (card.title === "Who we are") {
                    navigate("/about");
                  }
                }}
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Purpose Banner Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full overflow-hidden"
        >
          {/* Dark Blue Background with Gradient */}
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12 md:py-16 lg:py-20 px-4 md:px-8">
            {/* Subtle gradient overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent opacity-50"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/30 to-transparent"></div>
            
            {/* Content */}
            <div className="max-w-7xl mx-auto max-w-5k-content relative z-10">
              <div className="flex items-center justify-between gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex-1"
                >
                  <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-white leading-relaxed">
                    At NeuroVerse, we are driven by a shared purpose: <span className="font-bold">Unleashing human energy through technology for an inclusive and sustainable future.</span>
                  </p>
                </motion.div>
                
                {/* Quotation Marks */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hidden lg:flex text-white text-8xl xl:text-9xl font-serif opacity-30"
                >
                  "
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

