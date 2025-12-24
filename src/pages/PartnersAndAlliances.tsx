import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/assets";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

/**
 * Partners & Alliances Page Component
 * 
 * This page displays information about NeuroVerse's technology partners and alliances.
 * The Navbar and Footer are automatically included via the global Layout component.
 */
export default function PartnersAndAlliances() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const navigate = useNavigate();

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Carousel state for Client Stories
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  // Global Partners Data
  const globalPartners = [
    {
      name: "Adobe",
      logo: "Adobe", // Placeholder - you'll add actual logos
      description: "Achieve hyper-personalized customer experience using the power of data."
    },
    {
      name: "AWS",
      logo: "AWS",
      description: "Unlock sustainable growth and competitive advantage through scalable, cloud-powered innovation."
    },
    {
      name: "Dassault Systèmes",
      logo: "Dassault",
      description: "Transform your world digitally. A connected future awaits."
    },
    {
      name: "Databricks",
      logo: "Databricks",
      description: "Accelerate innovation by unifying data science, engineering, and business."
    },
    {
      name: "Dell Technologies",
      logo: "Dell",
      description: "Powering the future of digital transformation through innovation."
    },
    {
      name: "Duck Creek",
      logo: "Duck Creek",
      description: "Shaping the future for property and casualty (P&C) insurance enterprises."
    },
    {
      name: "Google Cloud",
      logo: "Google Cloud",
      description: "Unleash what's possible. Innovate for growth and reinvent your business models."
    },
    {
      name: "Guidewire",
      logo: "Guidewire",
      description: "A winning combination for property and casualty (P&C) insurance."
    },
    {
      name: "IBM",
      logo: "IBM",
      description: "IBM puts smart to work. NeuroVerse helps you make the most of it."
    },
    {
      name: "Informatica",
      logo: "Informatica",
      description: "Achieve greater business outcomes by accelerating your data's AI-readiness."
    },
    {
      name: "Intel",
      logo: "Intel",
      description: "Delivering innovative cross-industry end-to-end sustainable solutions on Intel technology."
    },
    {
      name: "Majesco",
      logo: "Majesco",
      description: "Driving rapid innovation and next-generation digital capabilities across the insurance value chain."
    },
    {
      name: "Microsoft",
      logo: "Microsoft",
      description: "Working together to help companies boost business value with cloud-powered solutions."
    },
    {
      name: "Mistral AI",
      logo: "Mistral AI",
      description: "Redefining what's possible with generative AI - securely, responsibly, and at scale."
    },
    {
      name: "MongoDB",
      logo: "MongoDB",
      description: "Get ready for higher performance, reduced costs, and greater ease of use."
    }
  ];

  // Latest Updates Data
  const latestUpdates = [
    {
      type: "Client story",
      title: "NeuroVerse, Mistral AI and SAP combine forces to offer secure, scalable gen AI-powered solutions for regulated industries",
      description: "This unique collaboration provides a trusted and secure environment to deploy custom AI solutions within SAP for those industries with strict data requirements such as financial services, public sector, aerospace & defense, and energy & utilities.",
      image: images.banners.innovationCardImg || images.banners.aboutUsBanner
    },
    {
      type: "Press release",
      title: "We expand our strategic partnership with Google Cloud to revolutionize CX across industries with agentic AI",
      description: "",
      image: images.banners.technologyInnovation || images.banners.aboutUsBanner
    },
    {
      type: "Press release",
      title: "We accelerate the enterprise adoption of agentic AI for industries with NVIDIA",
      description: "",
      image: images.banners.aiFuture || images.banners.aboutUsBanner
    }
  ];

  // Cloud Partners Data
  const cloudPartners = [
    {
      name: "Microsoft Azure",
      logo: "Azure",
      description: "Build, deploy, and manage applications through Microsoft's global network of datacenters with Azure cloud services."
    },
    {
      name: "Google Cloud Platform (GCP)",
      logo: "GCP",
      description: "Transform your business with Google Cloud's secure, scalable infrastructure and AI-powered solutions."
    },
    {
      name: "Oracle Cloud",
      logo: "Oracle",
      description: "Accelerate innovation with Oracle's integrated cloud applications and platform services for enterprise workloads."
    },
    {
      name: "AWS",
      logo: "AWS",
      description: "Unlock sustainable growth and competitive advantage through scalable, cloud-powered innovation."
    },
    {
      name: "IBM Cloud",
      logo: "IBM Cloud",
      description: "Leverage IBM's enterprise-grade cloud infrastructure and AI capabilities for mission-critical applications."
    },
    {
      name: "Alibaba Cloud",
      logo: "Alibaba Cloud",
      description: "Empower your business with Alibaba Cloud's comprehensive suite of cloud computing services."
    },
    {
      name: "Salesforce",
      logo: "Salesforce",
      description: "Transform customer relationships with Salesforce's cloud-based CRM and business applications."
    },
    {
      name: "VMware Cloud",
      logo: "VMware",
      description: "Modernize your infrastructure with VMware's hybrid cloud solutions and multi-cloud management."
    },
    {
      name: "Red Hat OpenShift",
      logo: "Red Hat",
      description: "Deploy and scale containerized applications with Red Hat's enterprise Kubernetes platform."
    }
  ];

  // Client Stories Data
  const clientStories = [
    {
      title: "Wind Tre calls in new marketing capabilities in support of customer experience",
      description: "By engaging with NeuroVerse, Wind Tre develops and implements a solution based on Pega, Adobe and Google Cloud components that enables more personalized inbound and outbound customer communication.",
      image: images.banners.teamImg || images.banners.aboutUsBanner
    },
    {
      title: "Transforming digital experiences through strategic partnerships",
      description: "Leveraging our technology partnerships to deliver innovative solutions that drive business transformation.",
      image: images.banners.collaborativeCardImg || images.banners.aboutUsBanner
    },
    {
      title: "Accelerating cloud migration with trusted partners",
      description: "Working with leading cloud providers to enable seamless digital transformation for enterprise clients.",
      image: images.banners.cloudNativeBannerImg || images.banners.aboutUsBanner
    }
  ];


  // Explore Further Cards
  const exploreFurther = [
    {
      title: "Awards and recognition",
      description: "Each year we are recognized as a global business and IT Innovator with our partners.",
      image: images.banners.excellenceInExecutionBannerImg || images.banners.aboutUsBanner,
      link: "/about"
    },
    {
      title: "Newsroom",
      description: "See the latest news on successes and developments across our technology partnerships.",
      image: images.banners.latestNewsBannerImg || images.banners.aboutUsBanner,
      link: "/news"
    },
    {
      title: "Events",
      description: "Join us at our partners' events where we share insights on our services and solutions.",
      image: images.banners.innovationCardImg || images.banners.aboutUsBanner,
      link: "/about"
    }
  ];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % clientStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + clientStories.length) % clientStories.length);
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
            backgroundImage: `url(${images.banners.strategicPartnershipBannerImage || images.banners.aboutUsBanner})`,
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

      {/* Partners & Alliances Card - Positioned outside hero section */}
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
                  Partners & Alliances
                </motion.h1>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Section - Introduction */}
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
              We partner with leading technology companies to power business transformation for our clients.
            </h2>
            
            <div className="space-y-6 mt-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Explore how we accompany our clients in harnessing the potential of technology, to optimize the operation of their systems and processes, and offer their customers exceptional personalized experiences at the cutting-edge of Innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Global Partners Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              We identify and execute growth initiatives with our partners for specific market segments.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {globalPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-16 mb-4 flex items-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {partner.name}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="relative bg-gray-50 py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8">
              Latest updates
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Main Story - Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1"
            >
              <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={latestUpdates[0].image}
                    alt={latestUpdates[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                    {latestUpdates[0].type}
                  </span>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-3">
                    {latestUpdates[0].title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {latestUpdates[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Two Stories */}
            <div className="md:col-span-1 space-y-6 md:space-y-8">
              {latestUpdates.slice(1).map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
                      {update.type}
                    </span>
                    <h3 className="text-lg md:text-xl font-heading font-bold text-gray-900">
                      {update.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Cloud Partners Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-4">
              Our Cloud Partners
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8">
              We collaborate with leading cloud providers to deliver scalable, secure, and innovative cloud solutions that drive digital transformation.
            </p>
          </motion.div>

          {/* Cloud Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {cloudPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-16 mb-4 flex items-center">
                  <div className="text-2xl font-bold text-gray-800">
                    {partner.name}
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8">
              Client stories
            </h2>
          </motion.div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <img
                src={clientStories[currentStoryIndex].image}
                alt={clientStories[currentStoryIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-center">
                <div className="w-full px-6 md:px-12 flex items-center justify-between gap-6 md:gap-8">
                  {/* Left Side - Content */}
                  <div className="max-w-2xl text-white flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-4">
                      {clientStories[currentStoryIndex].title}
                    </h3>
                    <p className="text-base md:text-lg text-white/90 mb-6 leading-relaxed">
                      {clientStories[currentStoryIndex].description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <span>Read more</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Right Side - Navigation Arrows */}
                  <div className="flex flex-col gap-4 items-center">
                    <button
                      onClick={nextStory}
                      className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                      aria-label="Next story"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <button
                      onClick={prevStory}
                      className="bg-white/90 hover:bg-white text-gray-900 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                      aria-label="Previous story"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {clientStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStoryIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStoryIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore Further Section */}
      <section className="relative bg-white py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-8">
              Explore further
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {exploreFurther.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => navigate(item.link)}
              >
                <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative w-full h-48 md:h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

