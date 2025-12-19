import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Users, Building2, Shield, FileText } from "lucide-react";
import { images } from "@/assets";
import { useRef } from "react";
import { useNavigate } from "react-router";

/**
 * Management and Governance Page Component
 * 
 * This page displays information about NeuroVerse's management and governance structure.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function ManagementGovernance() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const navigate = useNavigate();

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Management cards data
  const managementCards = [
    {
      title: "Board of Directors",
      image: images.banners.aboutUsSecondBanner || images.banners.aboutUsBanner,
      description: "Our Board of Directors determines NeuroVerse's strategies, makes key appointments, and decides on major issues related to the functioning and future of our organization."
    },
    {
      title: "Management team",
      image: images.banners.teamImg || images.banners.ourCulture,
      description: "The Group Executive Board is in charge of ensuring the collective management of the Group's operations and strategic direction."
    },
    {
      title: "Responsible business",
      image: images.banners.companyValues || images.banners.ourCulture,
      description: "We ensure that our strategic plans are effectively implemented at the operational level while maintaining ethical standards and responsible practices."
    }
  ];

  // Generic operations and other related reports agreements data
  const genericOperationsAgreements = [
    {
      description: "Annual Operations Report - Comprehensive overview of NeuroVerse's operational activities, financial performance, and strategic initiatives for the fiscal year",
      date: "March 15, 2025",
      fileSize: "2.5 MB",
      format: "pdf"
    },
    {
      description: "Quarterly Business Review - Detailed analysis of business operations, market performance, and key metrics for Q1 2025",
      date: "January 20, 2025",
      fileSize: "1.8 MB",
      format: "pdf"
    },
    {
      description: "Corporate Governance Report - Annual report on governance practices, board activities, and compliance with regulatory requirements",
      date: "December 10, 2025",
      fileSize: "3.2 MB",
      format: "pdf"
    },
    {
      description: "Sustainability and ESG Report - Comprehensive report on environmental, social, and governance initiatives and achievements",
      date: "November 5, 2025",
      fileSize: "4.1 MB",
      format: "pdf"
    },
    {
      description: "Technology Innovation Report - Overview of research and development activities, technology investments, and innovation milestones",
      date: "October 18, 2025",
      fileSize: "2.9 MB",
      format: "pdf"
    },
    {
      description: "Financial Performance Summary - Key financial metrics, revenue analysis, and business growth indicators",
      date: "September 30, 2025",
      fileSize: "1.5 MB",
      format: "pdf"
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
            backgroundImage: `url(${images.banners.aboutUsBanner})`,
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

      {/* Management and Governance Card - Positioned outside hero section */}
      <div className="relative -mt-24 md:-mt-32 lg:-mt-40 z-30">
        <div className="max-w-7xl mx-auto max-w-5k-content px-4 md:px-6 lg:px-8">
          <div className="flex justify-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              {/* Blue Background Box */}
              <div 
                className="relative rounded-lg px-8 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 xl:py-28 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
              >
                {/* Title Text */}
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
                  Management and Governance
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-gray-900 mb-6 leading-tight">
              Our current management and governance structure, in place since 2025, enables us to write the next chapter in our history with passion, energy, and a continued focus on responsible and multicultural global leadership.
            </h2>
            
            <div className="space-y-6 mt-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                The Board of Directors determines NeuroVerse's strategies, makes key appointments, and decides on major issues related to the functioning and future of our organization. The Group Executive Board is in charge of ensuring the collective management of the Group's operations. The Executive Committee helps define NeuroVerse's principle direction, its major strategic priorities, and the associated action plans. It ensures that these plans are effectively implemented at the operational level.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our success is built upon our ability to establish relationships of trust. We therefore strive to communicate regularly with all stakeholders to ensure that digital and technological transformation is a source of long-term growth that takes into account economic, social, and environmental challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accelerating the transition to sustainability and inclusion Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto max-w-5k-content px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-lg shadow-2xl">
            {/* Left Panel - Dark Blue Background */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-6 leading-tight">
                Accelerating the transition to sustainability and inclusion
              </h3>
              <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
                There has never been a better time to leverage technology and human energy to tackle environmental, social, and governance (ESG) challenges.
              </p>
              <motion.button
                onClick={() => navigate("/about")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 w-fit border-2 border-white"
              >
                <span>Our approach to ESG</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Right Panel - Single Image */}
            <div className="relative w-full h-64 md:h-80 lg:h-full min-h-[400px]">
              <img
                src={images.banners.escBannerImg || images.banners.aboutUsSecondBanner || images.banners.aboutUsBanner}
                alt="Accelerating the transition to sustainability and inclusion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* More on our management and governance structure Section */}
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
              More on our management and governance structure
            </h2>
          </motion.div>

          {/* Three Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {managementCards.map((card, index) => (
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
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4 flex-grow">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Generic Operations and Other Related Reports Agreements Section */}
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
              Operations related reports and agreement
            </h2>
            <p className="text-base md:text-lg text-gray-600">
              Publicly available reports and agreements related to our operations, governance, and business activities
            </p>
          </motion.div>

          {/* Agreements List */}
          <div className="space-y-0 border-t border-gray-200">
            {genericOperationsAgreements.map((agreement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-b border-gray-200 py-6 md:py-8 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-base md:text-lg text-gray-900 leading-relaxed mb-2">
                      {agreement.description}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {agreement.date}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-300 w-fit border border-blue-200"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Download document {agreement.fileSize}.{agreement.format}
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Policies Section - Full Width */}
      <section className="relative w-full py-12 md:py-16 lg:py-20">
        <div className="w-full">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 w-full p-8 md:p-12 lg:p-16">
            <div className="max-w-7xl mx-auto max-w-5k-content flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                  Our policies
                </h3>
                <p className="text-base md:text-lg text-white/90 leading-relaxed">
                  See our library of policies and codes of conduct
                </p>
              </div>
              <motion.button
                onClick={() => navigate("/about")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 w-fit border-2 border-white"
              >
                <span>Visit library</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

