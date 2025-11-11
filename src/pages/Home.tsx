import ScrollTopButton from "@/components/ScrollTopButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useNavigate, useLocation } from "react-router";
import { useRef, useState, useEffect, useCallback } from "react";
import { images } from "@/assets";
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Code, 
  Database, 
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Award,
  Target,
  Rocket,
  Globe,
  BarChart3,
  Lock,
  Star,
  Clock,
  Layers,
  Cpu,
  Network,
  FileCode,
  TrendingDown,
  PlayCircle,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  ChevronRight,
  ChevronLeft,
  Lightbulb,
  Cog,
  Palette,
  Heart,
  DollarSign,
  ShoppingCart,
  Factory,
  GraduationCap,
  Building2,
  Car,
  Plane,
  Briefcase,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize
} from "lucide-react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

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

  const clientStories = [
    {
      headline: "NeuroVerse supports enterprise transformation in spearheading AI-powered digital infrastructure modernization",
      body: "The company worked with NeuroVerse, its long-term partner, to move from a legacy system to a modern AI-driven platform by establishing a Data Integration Center of Excellence (DICoE) underpinned by advanced machine learning solutions",
      backgroundImage: images.projects.latestInsights, // Using existing image as placeholder
    },
    {
      headline: "NeuroVerse enables financial services leader to revolutionize customer experience through intelligent automation",
      body: "A leading financial institution partnered with NeuroVerse to implement AI-powered fraud detection and customer service automation, resulting in 60% reduction in false positives and 40% improvement in customer satisfaction",
      backgroundImage: images.projects.latestInsights,
    },
    {
      headline: "NeuroVerse transforms healthcare provider's operations with predictive analytics and intelligent systems",
      body: "A major healthcare network collaborated with NeuroVerse to deploy AI-driven patient risk prediction and resource optimization systems, achieving 30% cost reduction and 45% improvement in operational efficiency",
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

  const currentStory = clientStories[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] rounded-lg overflow-hidden shadow-xl"
    >
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
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 top-0 bottom-0 w-full md:w-1/2 lg:w-[45%] flex items-center p-6 md:p-8 lg:p-10 z-10"
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
            className="bg-white border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 text-gray-900 font-semibold px-6 py-5 rounded-full group"
          >
            Read more
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>

      {/* Carousel Navigation - Pill-shaped Control */}
      <div className="absolute bottom-6 right-6 z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-[#faf9f7] backdrop-blur-sm rounded-full px-3 py-2.5 flex items-center gap-3 shadow-md border border-gray-200/50"
          style={{
            background: 'linear-gradient(135deg, #faf9f7 0%, #f5f4f2 100%)',
          }}
        >
          {/* Previous Button (Left Arrow) */}
          <button
            onClick={prevStory}
            className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-1">
            {clientStories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStory(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8 h-2 rounded-full'
                    : 'bg-gray-300 w-2 h-2 rounded-full hover:bg-gray-400'
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button (Right Arrow) */}
          <button
            onClick={nextStory}
            className="p-1.5 hover:bg-gray-200/50 rounded-full transition-all duration-200 active:scale-95"
            aria-label="Next story"
          >
            <ChevronRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

// YouTube-like Video Player Component
function YouTubeVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const volumeSliderRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isVolumeHovered, setIsVolumeHovered] = useState(false);

  // Format time helper
  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return "0:00";
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    if (hrs > 0) {
      return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
      playPromise
        .then(() => {
          // Video started playing
          setIsPlaying(true);
        })
        .catch((error) => {
          // Autoplay was prevented
          console.log('Autoplay prevented:', error);
          setIsPlaying(false);
        });
    }

    // Handle video end to ensure looping
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {
        setIsPlaying(false);
      });
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  // Update current time
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);
    
    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);
    video.addEventListener('durationchange', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
      video.removeEventListener('durationchange', updateDuration);
    };
  }, []);

  // Handle play/pause
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  // Handle progress bar click
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const progressBar = progressRef.current;
    if (!video || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    video.currentTime = percent * video.duration;
    setCurrentTime(video.currentTime);
  };

  // Handle volume change
  const handleVolumeChange = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    const volumeSlider = volumeSliderRef.current;
    if (!video || !volumeSlider) return;

    const rect = volumeSlider.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    video.volume = percent;
    setVolume(percent);
    setIsMuted(percent === 0);
  };

  // Toggle mute
  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted || volume === 0) {
      video.muted = false;
      video.volume = volume || 0.5;
      setIsMuted(false);
      setVolume(video.volume);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  }, [volume]);

  // Toggle fullscreen
  const toggleFullscreen = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  }, []);

  // Auto-hide controls
  useEffect(() => {
    if (!isHovered && isPlaying) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      setShowControls(true);
    }
  }, [isHovered, isPlaying]);

  // Handle mouse movement
  const handleMouseMove = () => {
    setShowControls(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isPlaying) {
      setTimeout(() => setShowControls(false), 3000);
    }
  };

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Handle keyboard shortcuts (when video is focused/hovered)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const video = videoRef.current;
      const container = containerRef.current;
      if (!video || !container) return;

      // Only handle if hovering over video or video is playing
      if (!isHovered && !isPlaying) return;

      switch (e.code) {
        case 'Space':
          if (container.contains(document.activeElement) || isHovered) {
            e.preventDefault();
            togglePlay();
          }
          break;
        case 'ArrowLeft':
          if (container.contains(document.activeElement) || isHovered) {
            e.preventDefault();
            video.currentTime = Math.max(0, video.currentTime - 10);
          }
          break;
        case 'ArrowRight':
          if (container.contains(document.activeElement) || isHovered) {
            e.preventDefault();
            video.currentTime = Math.min(video.duration, video.currentTime + 10);
          }
          break;
        case 'ArrowUp':
          if (container.contains(document.activeElement) || isHovered) {
            e.preventDefault();
            video.volume = Math.min(1, video.volume + 0.1);
            setVolume(video.volume);
            setIsMuted(false);
            video.muted = false;
          }
          break;
        case 'ArrowDown':
          if (container.contains(document.activeElement) || isHovered) {
            e.preventDefault();
            video.volume = Math.max(0, video.volume - 0.1);
            setVolume(video.volume);
            if (video.volume === 0) setIsMuted(true);
          }
          break;
        case 'KeyM':
          if (container.contains(document.activeElement) || isHovered) {
            e.preventDefault();
            toggleMute();
          }
          break;
        case 'KeyF':
          if (container.contains(document.activeElement) || isHovered) {
            e.preventDefault();
            toggleFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isHovered, isPlaying, togglePlay, toggleMute, toggleFullscreen]);

  const progressPercent = duration ? (currentTime / duration) * 100 : 0;
  const volumePercent = volume * 100;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <div
        ref={containerRef}
        className="bg-black rounded-lg shadow-2xl overflow-hidden aspect-video relative group"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src={images.banners.codingVideo}
          playsInline
          loop
          autoPlay
          muted={isMuted}
          preload="auto"
          onClick={togglePlay}
        >
          Your browser does not support the video tag.
        </video>

        {/* Center Play Button Overlay */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer z-20 transition-opacity duration-300"
            onClick={togglePlay}
          >
            <div className="bg-black/60 rounded-full p-4 hover:bg-black/80 transition-all">
              <Play className="w-16 h-16 text-white" fill="white" />
            </div>
          </div>
        )}

        {/* Controls Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Progress Bar */}
          <div
            ref={progressRef}
            className="absolute bottom-16 left-0 right-0 h-1 bg-white/30 cursor-pointer group/progress"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-red-600 transition-all duration-150 relative group-hover/progress:h-1.5"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="text-white hover:text-gray-300 transition-colors p-1"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" fill="currentColor" />
              ) : (
                <Play className="w-6 h-6" fill="currentColor" />
              )}
            </button>

            {/* Volume Control */}
            <div
              className="flex items-center gap-2 group/volume"
              onMouseEnter={() => setIsVolumeHovered(true)}
              onMouseLeave={() => setIsVolumeHovered(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="text-white hover:text-gray-300 transition-colors p-1"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
              
              {/* Volume Slider */}
              <div
                ref={volumeSliderRef}
                className={`h-1 bg-white/30 rounded-full cursor-pointer transition-all duration-300 overflow-hidden ${
                  isVolumeHovered ? 'w-20 opacity-100' : 'w-0 opacity-0'
                }`}
                onClick={handleVolumeChange}
              >
                <div
                  className="h-full bg-white transition-all"
                  style={{ width: `${volumePercent}%` }}
                />
              </div>
            </div>

            {/* Time Display */}
            <div className="flex items-center gap-1 text-white text-sm font-medium ml-auto">
              <span>{formatTime(currentTime)}</span>
              <span>/</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Settings Button (Optional) */}
            <button
              className="text-white hover:text-gray-300 transition-colors p-1"
              aria-label="Settings"
            >
              <Cog className="w-6 h-6" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              className="text-white hover:text-gray-300 transition-colors p-1"
              aria-label={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? (
                <Minimize className="w-6 h-6" />
              ) : (
                <Maximize className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Typewriter animation for badge text (faster speed, loops continuously)
  const badgeText = "Where Innovation Meets Passion..!";
  const { displayedText, isTyping } = useTypewriter(badgeText, 40, 25, 1500);


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
          const lenis = (window as any).lenis;
          if (lenis) {
            setTimeout(() => {
              lenis.scrollTo(element, {
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
          const lenis = (window as any).lenis;
          if (lenis) {
            setTimeout(() => {
              lenis.scrollTo(element, {
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
        className="relative pt-32 pb-12 md:pb-16 px-4 min-h-[80vh] flex items-center"
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
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6"
              >
                <Badge variant="outline" className="bg-[#faf9f7] border-border/50 px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow flex items-center gap-2 w-fit">
                  <Rocket className="w-4 h-4 text-primary" />
                  <span>
                    {displayedText}
                    <span className="inline-block w-0.5 h-4 bg-primary ml-1 animate-pulse">|</span>
                  </span>
                </Badge>
              </motion.div>
              
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-2 leading-tight text-left">
                Engineering the <span className="gradient-text-animated">Next Generation</span> of Smart Software.
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-left font-medium max-w-xl">
                Transforming businesses through cutting-edge AI solutions and innovative software development
              </p>

              <div className="flex flex-wrap gap-4 md:gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">1+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">98% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground whitespace-nowrap">20+ Enterprise Clients</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-0">
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="bg-primary hover:bg-primary/90 text-white group min-w-[220px]"
                >
                  Request Callback
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Right Side - SVG Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full flex items-center justify-center"
            >
              <div className="relative w-full max-w-2xl">
                <img
                  src={images.hero.image}
                  alt="Hero Illustration"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>

          {/* Infinite Carousel Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-2 md:mt-3"
          >
            <div className="relative w-full overflow-hidden py-4">
              {/* Infinite Carousel Container */}
              <div className="flex animate-scroll items-center gap-8 md:gap-12 lg:gap-16">
                {/* First set of logos */}
                <div className="flex shrink-0 gap-8 md:gap-12 lg:gap-16 items-center">
                  {/* Replace these placeholder divs with your actual logo images */}
                  {/* Example structure for each logo:
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14">
                    <img 
                      src="/path-to-logo.png" 
                      alt="Logo Name" 
                      className="h-full w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
                    />
                  </div>
                  */}
                  {/* Placeholder for logos - replace with actual logos */}
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 1</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 2</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 3</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 4</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 5</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 6</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 7</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 8</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 9</span>
                  </div>
                </div>
                {/* Duplicate set for seamless loop - same gap ensures spacing between Logo 9 and Logo 1 matches other logos */}
                <div className="flex shrink-0 gap-8 md:gap-12 lg:gap-16 items-center">
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 1</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 2</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 3</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 4</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 5</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 6</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 7</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 8</span>
                  </div>
                  <div className="flex items-center justify-center shrink-0 h-10 md:h-12 lg:h-14 w-24 md:w-28 lg:w-32 bg-[#faf9f7] border border-border/50 rounded-lg">
                    <span className="text-muted-foreground text-xs">Logo 9</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-8 md:py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6">
              Highlights
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "AI Adoption and Scaling",
                subtitle: "From pilot programs to power users",
                description: "With AI adoption now mainstream, discover how organizations are scaling their advantage with NeuroVerse's cutting-edge AI solutions and transformative technologies.",
                image: images.banners.aiBanner || images.projects.insightsHero || images.logos.seedLink,
                alt: "AI Adoption and Scaling"
              },
              {
                title: "NeuroVerse Innovation Lab Launch",
                subtitle: "Accelerating AI-powered operations",
                description: "Accelerating our vision for Agentic AI-powered Intelligent Operations through our new Innovation Lab, driving breakthrough solutions for enterprises worldwide.",
                image: images.banners.researchBanner || images.projects.latestInsights || images.logos.seedLink,
                alt: "NeuroVerse Innovation Lab Launch"
              },
              {
                title: "Q3 2025 Performance",
                subtitle: "Strong growth and expansion",
                description: "Learn about our Q3 2025 revenues and achievements as we continue to lead the industry in AI-driven innovation and digital transformation.",
                image: images.banners.reportsBanner || images.projects.hotTopicsBackground || images.logos.seedLink,
                alt: "Q3 2025 Performance"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="bg-white border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="w-full h-48 md:h-56 overflow-hidden relative">
                  <img
                    src={highlight.image}
                    alt={highlight.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              </motion.div>
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
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-gray-900"
              >
                <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                  We Deliver <span className="gradient-text">Real Value</span>
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl font-medium">
                  Through our people centric approach and unique human AI chemistry, we transform businesses by combining cutting-edge artificial intelligence with deep human expertise. Our solutions don't just automate they amplify human potential, creating intelligent systems that learn, adapt, and evolve with your organization.
                </p>
              </motion.div>

              {/* Right Side - YouTube-like Video Player */}
              <YouTubeVideoPlayer />
            </div>
          </div>
        </div>
      </section>

      <ScrollTopButton />

      {/* Latest Insights Section */}
      <section className="py-8 md:py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-left">
              Latest insights
            </h2>
          </motion.div>

          {/* Three Card Layout */}
          <div className="space-y-6 md:space-y-8">
            {/* Card 1: Large Background Image with White Overlay Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-xl"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${images.projects.latestInsights})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Optional overlay for better text readability on image */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>

              {/* White Overlay Card - Positioned on Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-11/12 md:w-1/2 lg:w-[45%] flex items-center justify-center p-6 md:p-8 lg:p-10"
              >
                <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 lg:p-10 w-full max-w-md">
                  <p className="text-sm text-gray-600 dark:text-gray-500 mb-2 font-medium">
                    — Research Report
                  </p>
                  <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-900 dark:text-gray-100 leading-tight">
                    The Future of AI-Driven Software Development 2025
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    NEUROVERSE RESEARCH
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Card 2 and Card 3 Container */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Card 2: Solid Blue Background with White Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-lg p-8 md:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              >
                <div className="flex flex-col justify-between h-full min-h-[300px] md:min-h-[350px]">
                  <div>
                    <p className="text-sm text-white/80 mb-3 font-medium">
                      — NeuroVerse Research
                    </p>
                    <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-white leading-tight">
                      Transforming businesses through AI: Building intelligent software solutions for tomorrow's enterprises
                    </h3>
                  </div>
                  <p className="text-sm text-white font-semibold uppercase">
                    NEUROVERSE RESEARCH
                  </p>
                </div>
              </motion.div>

              {/* Card 3: White Background with Abstract Background Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
              >
                <div className="relative flex h-full min-h-[300px] md:min-h-[350px]">
                  {/* Left Side - Text Content */}
                  <div className="flex-1 p-8 md:p-10 lg:p-12 flex flex-col justify-between z-10">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium">
                        — NeuroVerse Research
                      </p>
                      <h3 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-900 dark:text-gray-100 leading-tight">
                        Innovation and technology leadership: Navigating the AI revolution in enterprise software development
                      </h3>
                    </div>
                    <p className="text-sm text-primary font-semibold uppercase">
                      NEUROVERSE RESEARCH
                    </p>
                  </div>

                  {/* Right Side - Abstract Background Image */}
                  <div className="w-1/3 md:w-2/5 lg:w-2/5 relative overflow-hidden">
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
              </motion.div>
            </div>
          </div>

          {/* More Insights Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-white border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 text-gray-900 font-semibold px-8 py-6 text-base group"
            >
              More Insights
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Recent Client Stories Section */}
      <section className="py-8 md:py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8 flex justify-end"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-right">
              Recent client stories
            </h2>
          </motion.div>

          <ClientStoriesCarousel />
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-8 md:py-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-left">
              Latest news
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Featured News Item */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 text-gray-900 font-semibold px-6 py-5 rounded-lg group"
                >
                  See all news
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Three News Items */}
            <div className="space-y-6 md:space-y-8">
              {/* News Item 1 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border border-border/50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
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
              </motion.div>

              {/* News Item 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-border/50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
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
              </motion.div>

              {/* News Item 3 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-border/50 rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <p className="text-sm text-gray-600 dark:text-gray-500 mb-3 font-medium">
                  — Partners
                </p>
                <h3 className="font-heading font-bold text-xl md:text-2xl lg:text-3xl mb-4 text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors">
                  Microsoft and NeuroVerse deepen partnership to empower enterprises for the next era of AI-driven software development
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>Oct 30, 2025</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside Stories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8 text-left">
              Inside stories
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Large Story Block */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            >
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
                <img
                  src={images.projects.latestInsights}
                  alt="AI-Powered Innovation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Transforming businesses through intelligent software solutions and cutting-edge AI technology
                </p>
              </div>
            </motion.div>

            {/* Right Column - Two Story Blocks */}
            <div className="space-y-6 md:space-y-8">
              {/* Top Story Block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="relative w-full h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden">
                  <img
                    src={images.projects.latestInsights}
                    alt="Sustainable Technology"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              </motion.div>

              {/* Bottom Story Block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg overflow-hidden border border-border/50 hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              >
                <div className="relative w-full h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden">
                  <img
                    src={images.projects.latestInsights}
                    alt="Team Collaboration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Report Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div className="flex flex-col md:flex-row h-auto md:h-[600px] lg:h-[700px]">
          {/* Left Side - Blue Background with Content (60%) */}
          <div className="w-full md:w-[60%] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8 md:p-12 lg:p-16 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl z-10"
            >
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 text-white leading-tight">
                Discover our 2024 Integrated Annual Report
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Partner for a digital and sustainable world.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-white rounded-full px-8 py-6 text-base md:text-lg font-semibold group"
              >
                Discover more
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right Side - Abstract Image (40%) */}
          <div className="w-full md:w-[40%] relative h-[400px] md:h-auto overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
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
                src={images.projects.latestInsights}
                alt="Abstract Art"
                className="w-full h-full object-cover mix-blend-overlay opacity-60"
              />
            </motion.div>
          </div>
        </div>

        {/* Carousel Navigation - Bottom Center */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-3 flex items-center gap-4 shadow-lg"
          >
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === 1
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
