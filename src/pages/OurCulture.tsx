import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Users, Target, Handshake, Award, Sparkles } from "lucide-react";
import { images } from "@/assets";
import { useRef } from "react";
import { useNavigate } from "react-router";

/**
 * Our Culture Page Component
 * 
 * This page displays NeuroVerse's culture, inspired by Capgemini's design style.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function OurCulture() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const navigate = useNavigate();

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

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
            backgroundImage: `url(${images.banners.ourCulture || images.banners.aboutUsBanner || images.hero.background})`,
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

      {/* Our Culture Card - Positioned outside hero section, extending from hero */}
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
                {/* Our Culture Text - Centered in the box */}
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
                  Our Culture
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
              {/* Icon Placeholder */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-gray-200 bg-white shadow-md flex items-center justify-center">
                <Users className="w-7 h-7 md:w-8 md:h-8 text-gray-600" />
              </div>
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
                  A collaborative environment where creativity thrives
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  At NeuroVerse, our culture is built on collaboration, innovation, and a shared commitment to excellence. We believe that the best solutions come from diverse perspectives working together toward a common goal.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Our team members are encouraged to share ideas freely, challenge conventional thinking, and explore new possibilities. We foster an inclusive environment where every voice is heard and valued, recognizing that innovation flourishes when people from different backgrounds, experiences, and expertise come together.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl">
                  Through open communication, cross-functional collaboration, and a culture of continuous learning, we create an atmosphere where creativity can thrive. We celebrate both individual achievements and team successes, understanding that our collective strength drives our ability to deliver exceptional results for our clients and make a meaningful impact in the technology industry.
                </p>
                <div className="pt-4">
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Excellence in Execution Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-1">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={images.banners.ourStoryBannerImg || images.banners.aboutUsBanner || images.hero.background}
                  alt="Excellence in execution"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="order-2">
              <div className="bg-white rounded-lg p-8 md:p-10 lg:p-12 shadow-lg">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  Excellence in execution
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  As we successfully deliver over 10,000 projects a year, we combine a passion for understanding our clients' needs with the ability to address challenges with agility and ingenuity. Our processes and methodologies are designed in such a way that we are able to bring forward the best ideas and expertise from around the world to address our clients' specific issues – and deliver quickly and efficiently.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Because of this, we've been able to achieve a customer retention rate of 90%, and a client satisfaction rate of 9.2/10.
                </p>
                <motion.button
                  onClick={() => navigate("/about")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-colors duration-300 w-fit"
                >
                  <span>Read our client stories</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnering for Transformation Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-lg p-8 md:p-10 lg:p-12 shadow-lg">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  Partnering for transformation
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Our global ecosystem of technology partners are a strategic asset for our clients – from the hyperscalers AWS, Microsoft and Google, to the broader ecosystem of established and emerging technology companies. Together with our partners, we help our clients to transform their customer experiences, transform their business, and ultimately transform their markets, by unlocking the power of digitalization.
                </p>
                <motion.button
                  onClick={() => navigate("/about")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-colors duration-300 w-fit"
                >
                  <span>Meet our partners</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={images.banners.innovationTechnology || images.banners.aboutUsBanner || images.hero.background}
                  alt="Partnering for transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investing in Our People Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="order-1">
              <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <img
                  src={images.banners.lifeAtBanner || images.banners.ourCulture || images.hero.background}
                  alt="Investing in our people"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="order-2">
              <div className="bg-white rounded-lg p-8 md:p-10 lg:p-12 shadow-lg">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-6 leading-tight">
                  Investing in our people
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                  Our people are key to helping us deliver the future we want for our company, our clients, and our world. With our world-class development programs and collaborative culture, we are continuously investing in our people to help them gain the knowledge and experience required to give technology that human touch the world needs.
                </p>
                <motion.button
                  onClick={() => navigate("/careers")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-colors duration-300 w-fit"
                >
                  <span>Meet our people</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Purpose Banner Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20">
        <div className="relative w-full overflow-hidden">
          {/* Dark Blue Background with Gradient */}
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12 md:py-16 lg:py-20 px-4 md:px-8">
            {/* Subtle gradient overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/20 to-transparent opacity-50"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/30 to-transparent"></div>
            
            {/* Content */}
            <div className="max-w-7xl mx-auto max-w-5k-content relative z-10">
              <div className="flex items-center justify-between gap-6 md:gap-8">
                <div className="flex-1">
                  <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-white leading-relaxed text-center lg:text-left">
                    At NeuroVerse, we are driven by a shared purpose: <span className="font-bold">Unleashing human energy through technology for an inclusive and sustainable future.</span>
                  </p>
                </div>
                
                {/* Quotation Marks */}
                <div className="hidden lg:flex text-white text-8xl xl:text-9xl font-serif opacity-30">
                  "
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

