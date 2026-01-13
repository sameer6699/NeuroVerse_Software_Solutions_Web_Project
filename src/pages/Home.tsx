import ScrollTopButton from "@/components/ScrollTopButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router";
import { useRef, useState, useEffect } from "react";
import { images } from "@/assets";
import { 
  ArrowRight,
  CheckCircle2,
  Rocket,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Cloud,
  Brain,
  Code,
  Shield,
  Network,
  Cpu
} from "lucide-react";

// Typewriter animation hook with loop
function useTypewriter(text: string, speed: number = 50, deleteSpeed: number = 30, pauseTime: number = 2000) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
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
      setIsTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, text, speed, deleteSpeed, pauseTime, isDeleting]);

  return { displayedText, isTyping: isTyping && !isDeleting };
}

// Client Stories Carousel Component
function ClientStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const clientStories = [
    {
      headline: "NeuroVerse supports enterprise transformation in spearheading AI-powered digital infrastructure modernization",
      body: "The company worked with NeuroVerse, its long-term partner, to move from a legacy system to a modern AI-driven platform by establishing a Data Integration Center of Excellence (DICoE) underpinned by advanced machine learning solutions",
      backgroundImage: images.projects.latestInsights, // Using existing image as placeholder
    },
    {
      headline: "NeuroVerse enables financial services leader to revolutionize customer experience through intelligent automation",
      body: "A leading financial institution partnered with NeuroVerse to implement AI-powered fraud detection and customer service automation, resulting in 60% reduction in false positives and 40% improvement in customer satisfaction. School of stock Market Information",
      backgroundImage: images.projects.latestInsights,
    },
    {
      headline: "NeuroVerse transforms healthcare provider's operations with predictive analytics and intelligent systems",
      body: "A major healthcare network collaborated with NeuroVerse to deploy AI-driven patient risk prediction and resource optimization systems, achieving 30% cost reduction and 45% improvement in operational efficiency. About unisec management services: How Our Custom CRM Portal Help Their Business To Run the Faster and Smoother for second univest",
      backgroundImage: images.projects.latestInsights,
    },
  ];

  const nextStory = () => {
    setCurrentIndex((prev) => (prev + 1) % clientStories.length);
  };

  const prevStory = () => {
    setCurrentIndex((prev) => (prev - 1 + clientStories.length) % clientStories.length);
  };

  const goToStory = (index: number) => {
    setCurrentIndex(index);
  };

  const handleReadMore = () => {
    navigate('/news');
  };

  const currentStory = clientStories[currentIndex];

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden shadow-xl">
      {/* Yellow Industrial Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${currentStory.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.1) saturate(1.3) hue-rotate(-5deg)',
        }}
      >
        {/* Yellow overlay to create industrial yellow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/40 via-yellow-300/30 to-yellow-500/40"></div>
        {/* Industrial pattern overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
            `,
          }}
        ></div>
      </div>

      {/* White Card on Left Side */}
      <div
        key={currentIndex}
        className="absolute left-4 md:left-8 lg:left-12 xl:left-16 top-0 bottom-0 w-full md:w-1/2 lg:w-[45%] flex items-center p-6 md:p-8 lg:p-10 z-10"
      >
        <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 lg:p-10 w-full max-w-lg">
          <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-4 text-gray-900 dark:text-gray-100 leading-tight">
            {currentStory.headline}
          </h3>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {currentStory.body}
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleReadMore}
            className="bg-white border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 !text-gray-900 hover:!text-gray-900 font-semibold px-6 py-5 rounded-full group"
          >
            Read more
            <ArrowRight className="ml-2 h-5 w-5 !text-gray-900 group-hover:!text-gray-900 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Carousel Navigation - Pill-shaped Control */}
      <div className="absolute bottom-6 right-4 md:right-8 lg:right-12 xl:right-16 z-20">
        <div className="bg-[#faf9f7] backdrop-blur-sm rounded-full px-3 py-2.5 flex items-center gap-3 shadow-md border border-gray-200/50"
          style={{
            background: 'linear-gradient(135deg, #faf9f7 0%, #f5f4f2 100%)',
          }}
        >
          {/* Previous Button (Left Arrow) */}
          <button
            onClick={prevStory}
            className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label="Previous story"
            type="button"
          >
            <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-1">
                  {clientStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToStory(index)}
                      className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                        index === currentIndex
                          ? 'bg-blue-600 w-8 h-2 rounded-full'
                          : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
                      }`}
                      aria-label={`Go to story ${index + 1}`}
                      type="button"
                    />
                  ))}
          </div>

          {/* Next Button (Right Arrow) */}
          <button
            onClick={nextStory}
            className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            aria-label="Next story"
            type="button"
          >
              <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
  );
}

// Startup Journey Carousel Component
function AnnualReportCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const annualReports = [
    {
      title: "Join Our Journey: Building the Future of AI",
      description: "We're a fast-growing startup transforming businesses through innovative AI solutions. Partner with us to shape tomorrow's digital landscape.",
      buttonText: "Partner with us",
      image: images.projects.latestInsights,
    },
    {
      title: "Innovation Starts Here",
      description: "As a dynamic startup, we're pushing boundaries in AI-powered software development. Discover how we're revolutionizing enterprise solutions.",
      buttonText: "Learn more",
      image: images.projects.insightsHero,
    },
    {
      title: "Growing Fast, Building Smart",
      description: "Join us on our mission to democratize AI technology and make intelligent software accessible to businesses of all sizes.",
      buttonText: "Explore our vision",
      image: images.projects.hotTopicsBackground,
    },
  ];

  const nextReport = () => {
    setCurrentIndex((prev) => (prev + 1) % annualReports.length);
  };

  const prevReport = () => {
    setCurrentIndex((prev) => (prev - 1 + annualReports.length) % annualReports.length);
  };

  const goToReport = (index: number) => {
    setCurrentIndex(index);
  };

  // Handle button click based on current report
  const handleButtonClick = () => {
    const currentReport = annualReports[currentIndex];
    
    // Navigate to vision section if it's the "Explore our vision" button
    if (currentReport.buttonText === "Explore our vision") {
      // Navigate to about page with hash and state to scroll to vision section
      navigate("/about#vision", { state: { scrollToVision: true } });
    } else if (currentReport.buttonText === "Partner with us") {
      // Navigate to about page for partnership
      navigate("/about");
    } else if (currentReport.buttonText === "Learn more") {
      // Navigate to insights or about page
      navigate("/insights");
    }
  };

  const currentReport = annualReports[currentIndex];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row h-auto md:h-[600px] lg:h-[700px] relative">
        {/* Left Side - Blue Background with Content (60%) */}
        <div className="w-full md:w-[60%] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-12 lg:p-16 flex items-center justify-center relative">
          <div
            key={currentIndex}
            className="max-w-2xl z-10"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 text-white leading-tight">
              {currentReport.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              {currentReport.description}
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={handleButtonClick}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white rounded-full px-8 py-6 text-base md:text-lg font-semibold group"
            >
              {currentReport.buttonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Right Side - Abstract Image (40%) */}
        <div className="w-full md:w-[40%] relative h-[400px] md:h-auto overflow-hidden">
          <div
            key={currentIndex}
            className="w-full h-full relative"
          >
            {/* Abstract painting background - using gradient to simulate the painting */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 via-green-400 to-orange-500 opacity-90">
              {/* Abstract shapes to simulate painting */}
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-800/50 to-transparent"></div>
                <div className="absolute top-0 right-0 w-1/2 h-2/3 bg-gradient-to-l from-teal-600/40 to-transparent"></div>
                <div className="absolute bottom-0 left-1/3 w-1/3 h-1/2 bg-gradient-to-t from-green-500/30 to-transparent"></div>
                <div className="absolute top-1/3 right-1/4 w-1/4 h-1/3 bg-gradient-to-br from-orange-400/40 to-transparent rounded-full blur-xl"></div>
              </div>
            </div>
            {/* You can replace this with an actual image */}
            <img
              src={currentReport.image}
              alt={currentReport.title}
              className="w-full h-full object-cover mix-blend-overlay opacity-60"
            />
          </div>
        </div>

        {/* Carousel Navigation - Pill-shaped Control */}
        <div className="absolute bottom-6 right-6 z-20">
          <div className="bg-[#faf9f7] backdrop-blur-sm rounded-full px-3 py-2.5 flex items-center gap-3 shadow-md border border-gray-200/50"
            style={{
              background: 'linear-gradient(135deg, #faf9f7 0%, #f5f4f2 100%)',
            }}
          >
            {/* Previous Button (Left Arrow) */}
            <button
              onClick={prevReport}
              className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Previous report"
              type="button"
            >
              <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5 px-1">
                  {annualReports.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToReport(index)}
                      className={`transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 ${
                        index === currentIndex
                          ? 'bg-blue-600 w-8 h-2 rounded-full'
                          : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
                      }`}
                      aria-label={`Go to report ${index + 1}`}
                      type="button"
                    />
                  ))}
            </div>

            {/* Next Button (Right Arrow) */}
            <button
              onClick={nextReport}
              className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              aria-label="Next report"
              type="button"
            >
              <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Plain Video Component - No Controls, No Status Bar, No Fullscreen
function PlainVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video on load
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set video to autoplay and loop
    video.autoplay = true;
    video.loop = true;
    video.muted = true; // Required for autoplay in most browsers
    
    // Try to play the video
    const playPromise = video.play();
    
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Autoplay was prevented
        console.log('Autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <div className="relative">
      <div className="bg-black rounded-lg shadow-2xl overflow-hidden aspect-video relative">
        {/* Plain Video Element - No Controls */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={images.banners.codingVideo}
          playsInline
          loop
          autoPlay
          muted
          preload="auto"
          controls={false}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Badge text (static, no typewriter effect)
  const badgeText = "Where Innovation Meets Passion..!";


  // Handle path-based navigation and scroll to sections
  useEffect(() => {
    const pathToSectionId: { [key: string]: string } = {
      "/why-neuroverse": "why-neuroverse",
      "/products": "products",
      "/solutions": "solutions",
      "/case-studies": "case-studies",
      "/careers": "careers",
      "/capabilities": "capabilities",
      "/industries": "industries",
      "/blog": "blog",
    };

    // Handle hash-based navigation (for backward compatibility)
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          const lenis = window.lenis;
          if (lenis) {
            setTimeout(() => {
              lenis.scrollTo(element as HTMLElement, {
                offset: -80,
                duration: 1.5,
              });
            }, 100);
          } else {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
              window.scrollBy(0, -80);
            }, 150);
          }
        }
      }, 100);
    } 
    // Handle path-based navigation
    else if (location.pathname !== "/" && pathToSectionId[location.pathname]) {
      const sectionId = pathToSectionId[location.pathname];
      setTimeout(() => {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          const lenis = window.lenis;
          if (lenis) {
            setTimeout(() => {
              lenis.scrollTo(element as HTMLElement, {
                offset: -80,
                duration: 1.5,
              });
            }, 150);
          } else {
            setTimeout(() => {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
              window.scrollBy(0, -80);
            }, 200);
          }
        }
      }, 150);
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative pt-44 md:pt-52 lg:pt-60 xl:pt-64 pb-12 md:pb-16 px-4 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: `url(${images.hero.background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/60"></div>
        
        <div className="max-w-7xl mx-auto max-w-5k-content relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="w-full">
              <div className="mb-6">
                <Badge variant="outline" className="bg-[#faf9f7] border-border/50 px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow flex items-center gap-2 w-fit">
                  <Rocket className="w-4 h-4 text-primary" />
                  <span>
                    {badgeText}
                  </span>
                </Badge>
              </div>
              
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-2 leading-tight text-left">
                Engineering the <span className="gradient-text-animated">Next Generation</span> of Smart Software.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-left font-medium max-w-xl">
                Transforming businesses through cutting-edge AI solutions and innovative software development
              </p>

              <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Proven Industry Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Client-Focused Approach</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">Enterprise Solutions</span>
                </div>
              </div>
              
              {/* Request Callback Button - Commented Out */}
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-0">
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="bg-primary hover:bg-primary/90 text-white group min-w-[220px]"
                >
                  Request Callback
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div> */}
            </div>

            {/* Right Side - Transparent Video */}
            <div className="w-full flex items-center justify-center">
              <div className="relative w-full max-w-2xl">
                <video
                  src={images.hero.transparentVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-contain"
                  aria-label="NeuroVerse - Engineering the Next Generation of Smart Software"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* 
          ====================================================================
          INFINITE LOGO CAROUSEL SECTION - COMMENTED OUT
          ====================================================================
          This section contains the infinite scrolling logo carousel that was
          displayed in the hero section. It has been commented out but kept in
          the codebase for future use. To re-enable, simply uncomment this
          entire section.
          
          Features of this carousel:
          - Infinite scrolling animation (30s linear infinite)
          - Pauses on hover
          - Gradient fade effects on left and right edges
          - Responsive design (mobile, tablet, desktop)
          - Hover effects on individual logos
          - Seamless loop (duplicate set ensures no gaps)
          
          To re-enable: Remove the outer comment block markers {* ... *}
          ====================================================================
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-2 md:mt-3"
          >
            <div className="relative w-full overflow-hidden py-6 md:py-8">
              <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 lg:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 lg:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
              
              <div className="flex animate-scroll items-center gap-8 md:gap-12 lg:gap-16">
                <div className="flex shrink-0 gap-8 md:gap-12 lg:gap-16 items-center">
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 1</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 2</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 3</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 4</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 6</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 7</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 9</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex shrink-0 gap-8 md:gap-12 lg:gap-16 items-center">
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 1</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 2</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 3</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 4</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 6</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 7</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 8</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-12 md:h-16 lg:h-20 w-32 md:w-40 lg:w-48 bg-white border border-border/30 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 group">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <span className="text-muted-foreground text-xs md:text-sm font-medium group-hover:text-foreground transition-colors">Logo 9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          */}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-12 md:py-16 px-4 bg-white" aria-label="Highlights">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="mb-6 md:mb-8">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              Highlights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "AI Adoption and Scaling",
                subtitle: "From pilot programs to power users",
                description: "With AI adoption now mainstream, discover how organizations are scaling their advantage with cutting-edge AI solutions and transformative technologies.",
                image: images.banners.aiBanner || images.projects.insightsHero || images.logos.seedLink,
                alt: "AI Adoption and Scaling"
              },
              {
                title: "Innovation and Technology",
                subtitle: "Accelerating AI-powered operations",
                description: "Exploring the potential of AI-powered intelligent operations and innovative approaches to drive solutions for modern businesses.",
                image: images.banners.technologyInnovation || images.banners.researchBanner || images.projects.latestInsights || images.logos.seedLink,
                alt: "Innovation and Technology"
              },
              {
                title: "Industry Insights",
                subtitle: "Trends and developments",
                description: "Stay informed about the latest trends and developments in AI-driven innovation and digital transformation across industries.",
                image: images.banners.reportsBanner || images.projects.hotTopicsBackground || images.logos.seedLink,
                alt: "Industry Insights"
              }
            ].map((highlight, index) => (
              <div
                key={index}
                className="bg-white border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-full h-48 md:h-56 overflow-hidden relative">
                  <img
                    src={highlight.image}
                    alt={highlight.alt || highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6 group-hover:bg-blue-50/50 transition-colors duration-300">
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  {highlight.subtitle && (
                    <p className="text-sm md:text-base text-gray-500 mb-3 font-medium">
                      {highlight.subtitle}
                    </p>
                  )}
                  <p className="text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Deliver Real Value Section */}
      <section className="relative overflow-hidden">
        {/* Top Section - Light Blue Background (70%) */}
        <div className="relative bg-gradient-to-br from-blue-50 via-primary/10 to-cyan-50 py-12 md:py-16 px-4">
          <div className="max-w-7xl mx-auto max-w-5k-content">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-gray-900">
                <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                  We Deliver <span className="gradient-text">Real Value</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl font-medium mb-6">
                  Through our people centric approach and unique human AI chemistry, we transform businesses by combining cutting-edge artificial intelligence with deep human expertise. Our solutions don't just automate they amplify human potential, creating intelligent systems that learn, adapt, and evolve with your organization.
                </p>
              </div>

              {/* Right Side - Plain Video Player */}
              <PlainVideoPlayer />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" aria-label="What We Do">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              What we do
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions that drive innovation and transform businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Cloud & Infrastructure */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 group-hover:text-primary transition-colors">
                  Cloud & Infrastructure
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                AI and cloud solutions enhance digital innovation, scalability, and operational efficiency in the technology sector. We leverage cloud-native architectures, containerization, and DevOps practices to drive rapid deployment and seamless scaling.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our solutions ensure high availability, enable flexible infrastructure, improve performance, and ensure security compliance for competitive agility in the evolving technology landscape.
              </p>
            </div>

            {/* AI & Machine Learning */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 group-hover:text-primary transition-colors">
                  AI & Machine Learning
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Advanced AI and ML technologies improve intelligent automation and data-driven decision making. We partner with enterprises, startups, and technology companies to develop AI-powered solutions that transform business processes.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our solutions support both predictive analytics and real-time intelligence, ensuring seamless integration and continuity of AI capabilities across all business functions.
              </p>
            </div>

            {/* Software Engineering */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 group-hover:text-primary transition-colors">
                  Software Engineering
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Technology organizations face unique challenges and opportunities in today's digital landscape. The expansion of software capabilities and the disintegration of traditional technology boundaries require innovative approaches.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Data and AI-enhanced innovation, cloud-native development, and agile practices are driving transformation. Organizations breaking down barriers fastest will lead the next generation of technology.
              </p>
            </div>

            {/* Blockchain */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 group-hover:text-primary transition-colors">
                  Blockchain
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Blockchain and distributed ledger technologies enable secure, transparent, and decentralized solutions for various business applications. We leverage smart contracts, DeFi platforms, and enterprise blockchain solutions to drive innovation and trust.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our solutions ensure immutability, enable transparent transactions, improve security, and ensure compliance for competitive advantage in the evolving digital economy landscape.
              </p>
            </div>

            {/* Cybersecurity */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-red-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 group-hover:text-primary transition-colors">
                  Cybersecurity
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Advanced cybersecurity solutions protect digital assets, networks, and data from evolving threats. We partner with enterprises to develop comprehensive security strategies, threat detection systems, and incident response capabilities.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our solutions support both proactive threat prevention and real-time security monitoring, ensuring seamless protection and continuity of security operations across all digital infrastructure.
              </p>
            </div>

            {/* IoT & Edge Computing */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-gray-900 group-hover:text-primary transition-colors">
                  IoT & Edge Computing
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Internet of Things and edge computing solutions enable real-time data processing, device connectivity, and intelligent automation at the network edge. We develop IoT platforms, edge computing infrastructure, and smart device ecosystems.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Data processing at the edge, low-latency computing, and AI-enhanced IoT capabilities are driving transformation. Organizations leveraging edge intelligence fastest will lead the next generation of connected technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollTopButton />

      {/* Latest Insights Section */}
      <section className="py-12 md:py-16 px-4 bg-white relative" aria-label="Latest Insights">
        <div className="max-w-7xl mx-auto max-w-5k-content relative">
          <div className="mb-6 md:mb-8">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-left">
              Latest insights
            </h2>
          </div>

          {/* Three Card Layout */}
          <div className="space-y-6 md:space-y-8 relative z-0">
            {/* Card 1: Large Background Image with White Overlay Card */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl z-10">
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images.projects.latestInsights})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
                role="img"
                aria-label="The Future of AI-Driven Software Development 2025"
              >
                {/* Optional overlay for better text readability on image */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>

              {/* White Overlay Card - Positioned on Right Side */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-11/12 md:w-1/2 lg:w-[45%] flex items-center justify-center p-6 md:p-8 lg:p-10 z-20">
                <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10 w-full max-w-md relative z-30">
                  <p className="text-sm text-gray-600 dark:text-gray-500 mb-2 font-medium relative z-10 opacity-100 visible">
                    — Research Report
                  </p>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900 dark:text-gray-100 leading-tight relative z-10 opacity-100 visible">
                    The Future of AI-Driven Software Development 2025
                  </h3>
                  <p className="text-sm text-primary font-semibold relative z-10 opacity-100 visible">
                    NEUROVERSE RESEARCH INSTITUTE
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 and Card 3 Container */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative z-10">
              {/* Card 2: Solid Blue Background with White Text */}
              <div
                className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-lg p-8 md:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer group z-10"
                onClick={() => navigate("/insights")}
              >
                <div className="flex flex-col justify-between h-full min-h-[300px] md:min-h-[350px] relative z-10">
                  <div className="relative z-10 opacity-100 visible">
                    <p className="text-sm text-white/80 mb-3 font-medium opacity-100 visible">
                      — NEUROVERSE RESEARCH INSTITUTE
                    </p>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-white leading-tight opacity-100 visible">
                      Transforming businesses through AI: Building intelligent software solutions for tomorrow's enterprises
                    </h3>
                  </div>
                  <p className="text-sm text-white font-semibold uppercase relative z-10 opacity-100 visible">
                    NEUROVERSE RESEARCH INSTITUTE
                  </p>
                </div>
              </div>

              {/* Card 3: White Background with Abstract Background Image */}
              <div
                className="relative bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group z-10"
                onClick={() => navigate("/insights")}
              >
                <div className="relative flex h-full min-h-[300px] md:min-h-[350px]">
                  {/* Left Side - Text Content */}
                  <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-between relative z-20">
                    <div className="relative z-10 opacity-100 visible">
                      <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium opacity-100 visible">
                        — NEUROVERSE RESEARCH INSTITUTE
                      </p>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-900 dark:text-gray-100 leading-tight opacity-100 visible">
                        Innovation and technology leadership: Navigating the AI revolution in enterprise software development
                      </h3>
                    </div>
                    <p className="text-sm text-primary font-semibold uppercase relative z-10 opacity-100 visible">
                      NEUROVERSE RESEARCH INSTITUTE
                    </p>
                  </div>

                  {/* Right Side - Abstract Background Image */}
                  <div className="w-1/3 md:w-2/5 lg:w-2/5 relative overflow-hidden z-0">
                    <div 
                      className="absolute inset-0 opacity-80"
                      style={{
                        background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 20%, #ef4444 40%, #ec4899 60%, #a855f7 80%, #3b82f6 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 3s ease-in-out infinite',
                      }}
                    >
                      {/* Vertical lines effect */}
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)',
                      }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Insights Button */}
          <div className="mt-6 md:mt-8 relative z-0 isolate">
            <Button
              variant="outline"
              size="lg"
              className="bg-white border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 !text-gray-900 hover:!text-gray-900 font-semibold px-8 py-6 text-base group relative z-0 isolate"
              onClick={() => navigate("/insights")}
              onMouseEnter={(e) => {
                // Ensure cards remain visible on button hover
                e.stopPropagation();
              }}
            >
              More Insights
              <ArrowRight className="ml-2 h-5 w-5 !text-gray-900 group-hover:!text-gray-900 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Reports Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-blue-50/30" aria-label="Latest Reports">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-left">
              The latest reports from NEUROVERSE RESEARCH INSTITUTE
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
              Comprehensive research and insights on emerging trends, industry transformations, and technological innovations shaping the future of business and society.
            </p>
          </div>

          {/* Reports Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Report 1: Finance & Investment */}
            <div className="bg-white rounded-lg border border-border/50 p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col h-full">
              {/* Badge and Date Section */}
              <div className="mb-4">
                <Badge variant="outline" className="text-xs font-medium mb-3">
                  Finance & Investment
                </Badge>
                <p className="text-sm text-gray-600 dark:text-gray-500">
                  January 2025
                </p>
              </div>
              
              {/* Title Section */}
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-3 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                Investment trends 2025
              </h3>
              
              {/* Description Section - Flex-1 to push button to bottom */}
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 flex-1">
                Navigating uncertainty with confidence: Investment priorities for 2025. NeuroVerse's data-driven insights help organizations make informed investment decisions in AI and digital transformation.
              </p>
              
              {/* Institute Name Section */}
              <p className="text-xs text-primary font-semibold mb-4">
                NEUROVERSE RESEARCH INSTITUTE
              </p>
              
              {/* Button Section - Always at bottom */}
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-white border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 !text-gray-900 hover:!text-gray-900 font-semibold mt-auto group"
                onClick={() => navigate("/insights")}
              >
                Read Report
                <ArrowRight className="ml-2 h-4 w-4 !text-gray-900 group-hover:!text-gray-900 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Report 2: Sustainability */}
            <div className="bg-white rounded-lg border border-border/50 p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col h-full">
              {/* Badge and Date Section */}
              <div className="mb-4">
                <Badge variant="outline" className="text-xs font-medium mb-3">
                  Sustainability
                </Badge>
                <p className="text-sm text-gray-600 dark:text-gray-500">
                  December 2025
                </p>
              </div>
              
              {/* Title Section */}
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-3 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                Sustainable Gen AI
              </h3>
              
              {/* Description Section - Flex-1 to push button to bottom */}
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 flex-1">
                The environmental Impact of Gen AI and a roadmap for developing sustainable Gen AI practices. NeuroVerse is leading the way in creating energy-efficient AI solutions and sustainable machine learning frameworks.
              </p>
              
              {/* Institute Name Section */}
              <p className="text-xs text-primary font-semibold mb-4">
                NEUROVERSE RESEARCH INSTITUTE
              </p>
              
              {/* Button Section - Always at bottom */}
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-white border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 !text-gray-900 hover:!text-gray-900 font-semibold mt-auto group"
                onClick={() => navigate("/insights")}
              >
                Read Report
                <ArrowRight className="ml-2 h-4 w-4 !text-gray-900 group-hover:!text-gray-900 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Report 3: Consumer Insights */}
            <div className="bg-white rounded-lg border border-border/50 p-6 md:p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col h-full">
              {/* Badge and Date Section */}
              <div className="mb-4">
                <Badge variant="outline" className="text-xs font-medium mb-3">
                  Consumer Insights
                </Badge>
                <p className="text-sm text-gray-600 dark:text-gray-500">
                  November 2025
                </p>
              </div>
              
              {/* Title Section */}
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-3 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                What matters to today's consumer
              </h3>
              
              {/* Description Section - Flex-1 to push button to bottom */}
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 flex-1">
                Consumer preferences and purchasing behaviors are constantly evolving. NeuroVerse's AI-powered analytics provide deep insights into consumer behavior and enable personalized customer experiences.
              </p>
              
              {/* Institute Name Section */}
              <p className="text-xs text-primary font-semibold mb-4">
                NEUROVERSE RESEARCH INSTITUTE
              </p>
              
              {/* Button Section - Always at bottom */}
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-white border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 !text-gray-900 hover:!text-gray-900 font-semibold mt-auto group"
                onClick={() => navigate("/insights")}
              >
                Read Report
                <ArrowRight className="ml-2 h-4 w-4 !text-gray-900 group-hover:!text-gray-900 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Client Stories Section */}
      <section className="py-12 md:py-16 bg-white" aria-label="Recent Client Stories">
        {/* Full-width background container */}
        <div className="w-full">
          {/* Content container with padding */}
          <div className="max-w-7xl mx-auto max-w-5k-content px-4 sm:px-6 lg:px-8">
            <div className="mb-6 md:mb-8 flex justify-end">
              <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-right">
                Recent client stories
              </h2>
            </div>
          </div>
          
          {/* Full-width carousel container */}
          <div className="w-full px-0">
            <ClientStoriesCarousel />
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-12 md:py-16 px-4 bg-white" aria-label="Latest News">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="mb-6 md:mb-8">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-left">
              Latest news
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Featured News Item */}
            <div className="space-y-6">
              <div className="bg-white border border-border/50 rounded-lg p-6 md:p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium">
                  — Awards and recognition
                </p>
                <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                  NeuroVerse is recognized as a Leader in AI-Powered Software Development Services by independent research firm
                </h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  NeuroVerse today announced that it has been recognized as a Leader in The Forrester Wave™: AI-Powered Software Development Services, Q4 2025 for its well-articulated and very strong vision for intelligent software solutions.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Nov 6, 2025</span>
                </div>
              </div>

              {/* See all news Button */}
              <div>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => navigate('/news')}
                  className="bg-white border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 text-gray-900 hover:text-black font-semibold px-6 py-5 rounded-lg group"
                >
                  See all news
                  <ArrowRight className="ml-2 h-5 w-5 text-gray-900 group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
                </Button>
              </div>
            </div>

            {/* Right Column - Three News Items */}
            <div className="space-y-6 md:space-y-8">
              {/* News Item 1 */}
              <div className="bg-white border border-border/50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium">
                  — Client news
                </p>
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-4 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                  NeuroVerse and enterprise partners deploy the first intelligent AI-powered automation system in the financial sector
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Nov 4, 2025</span>
                </div>
              </div>

              {/* News Item 2 */}
              <div className="bg-white border border-border/50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium">
                  — Corporate news
                </p>
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-4 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                  NeuroVerse announces the closing of strategic partnerships to expand AI capabilities
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Nov 3, 2025</span>
                </div>
              </div>

              {/* News Item 3 */}
              <div className="bg-white border border-border/50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium">
                  — Partners
                </p>
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-4 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                  School of Stock Market and NeuroVerse deepen partnership to empower Stock Market Learning for the next era of AI-driven software development
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Oct 30, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside Stories Section */}
      <section className="py-12 md:py-16 px-4 bg-white" aria-label="Inside Stories">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="mb-12">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-left">
              Inside stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Large Story Block */}
            <div className="bg-white rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
                <img
                  src={images.banners.aiFuture || images.projects.latestInsights}
                  alt="Build the future with AI - Transforming businesses through intelligent software solutions"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium">
                  — Future-shaping projects
                </p>
                <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                  Build the future with AI
                </h3>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Transforming businesses through intelligent software solutions and cutting-edge AI technology. Our comprehensive approach combines advanced machine learning algorithms, natural language processing, and predictive analytics to create systems that not only automate processes but also learn and adapt to evolving business needs.
                </p>
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  We specialize in developing custom AI solutions that integrate seamlessly with existing infrastructure, enabling organizations to unlock new levels of efficiency, innovation, and competitive advantage. From intelligent automation to advanced data analytics, our AI-powered platforms help businesses make data-driven decisions faster and more accurately.
                </p>
              </div>
            </div>

            {/* Right Column - Two Story Blocks */}
            <div className="space-y-6 md:space-y-8">
              {/* Top Story Block */}
              <div className="bg-white rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="relative w-full h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden">
                  <img
                    src={images.banners.innovation || images.projects.latestInsights}
                    alt="How to power innovation - Why AI technology is at the core of digital transformation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium">
                    — Future-shaping projects
                  </p>
                  <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-3 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                    How to power innovation
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Why AI technology is at the core of digital transformation
                  </p>
                </div>
              </div>

              {/* Bottom Story Block */}
              <div className="bg-white rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                <div className="relative w-full h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden">
                  <img
                    src={images.banners.techLesson || images.projects.latestInsights}
                    alt="Tech lessons for positive futures - The lasting value of collaborative AI development"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium">
                    — Future-shaping projects
                  </p>
                  <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-3 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                    Tech lessons for positive futures
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    The lasting value of collaborative AI development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Journey Hero Section - Carousel */}
      <AnnualReportCarousel />
    </div>
  );
}
