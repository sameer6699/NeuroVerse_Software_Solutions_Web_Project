import Navbar from "@/components/Navbar";
import ScrollTopButton from "@/components/ScrollTopButton";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useInView } from "framer-motion";
import { useNavigate, useLocation } from "react-router";
import { useRef, useState, useEffect } from "react";
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
  Briefcase
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
      
      <Navbar />


      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-2 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 xl:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-2 mb-4"
              >
                <Badge variant="outline" className="bg-[#faf9f7] border-border/50 px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-primary" />
                  <span>
                    {displayedText}
                    <span className="inline-block w-0.5 h-4 bg-primary ml-1 animate-pulse">|</span>
                  </span>
                </Badge>
              </motion.div>
              
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Engineering the <span className="gradient-text-animated">Next Generation</span> of Smart Software.
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed text-left max-w-3xl">
                NeuroVerse Software Solutions is a global technology studio that merges deep technical expertise with visionary thinking. We build intelligent, scalable, and human-centered software solutions that empower businesses to evolve, adapt, and lead in the age of AI.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">2+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">98% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">20+ Enterprise Clients</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
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

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-[#faf9f7] border border-border/50 rounded-3xl p-8 shadow-sm gradient-border">
                <div className="grid grid-cols-2 gap-4">
                  {[Brain, Database, Zap, Shield].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="bg-[#faf9f7] border border-border/50 rounded-2xl p-6 flex items-center justify-center aspect-square shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.05, y: -4 }}
                    >
                      <Icon className="w-12 h-12 text-primary" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ScrollTopButton />

      {/* Our Partners Section */}
      <section id="partners" className="pt-2 pb-12 overflow-hidden">
        <div className="w-full">
          {/* Infinite Carousel Container */}
          <div className="relative w-full overflow-hidden py-6">
            <div className="flex animate-scroll items-center gap-12 md:gap-16 lg:gap-20">
              {/* First set of logos */}
              <div className="flex shrink-0 gap-12 md:gap-16 lg:gap-20 items-center">
                {/* Replace these placeholder divs with your actual partner logo images */}
                {/* Example structure for each logo:
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24">
                  <img 
                    src="/path-to-partner-logo.png" 
                    alt="Partner Name" 
                    className="h-full w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
                */}
                {/* Placeholder for partner logos - replace with actual logos */}
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 1</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 2</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 3</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 4</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 5</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 6</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 7</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 8</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 9</span>
                </div>
              </div>
              {/* Duplicate set for seamless loop - same gap ensures spacing between Logo 9 and Logo 1 matches other logos */}
              <div className="flex shrink-0 gap-12 md:gap-16 lg:gap-20 items-center">
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 1</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 2</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 3</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 4</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 5</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 6</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 7</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 8</span>
                </div>
                <div className="flex items-center justify-center shrink-0 h-16 md:h-20 lg:h-24 w-32 md:w-40 lg:w-48 bg-[#faf9f7] border border-border/50 rounded-lg">
                  <span className="text-muted-foreground text-sm">Logo 9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why NeuroVerse Section */}
      <section id="why-neuroverse" className="pt-16 pb-0 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              Why Choose <span className="gradient-text">NeuroVerse</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade AI solutions with the agility of a startup
            </p>
          </motion.div>

          {/* Vision and Mission Section */}
          <div className="space-y-12 mb-16">
            <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 xl:gap-12">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#faf9f7] border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl xl:text-4xl">
                    <span className="gradient-text">Vision</span>
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the world's most trusted technology partner, empowering businesses globally to harness the transformative power of artificial intelligence. We envision a future where intelligent software solutions drive innovation, efficiency, and sustainable growth across all industries.
                </p>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#faf9f7] border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl xl:text-4xl">
                    <span className="gradient-text">Mission</span>
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To deliver intelligent, scalable, and human-centered software solutions that solve real-world challenges. We merge deep technical expertise with visionary thinking to build AI-powered systems that enable businesses to evolve, adapt, and lead in the age of artificial intelligence.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#faf9f7] border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm gradient-border"
            >
              <div className="text-center mb-8">
                <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-heading font-bold text-3xl mb-4">End-to-End Solutions</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  From initial consultation to production deployment and ongoing support, NeuroVerse provides comprehensive software solutions. We handle every aspect of your software developement journey, ensuring seamless integration with your existing infrastructure.
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 xl:gap-6">
                {[
                  { title: "Discovery & Strategy", desc: "Understand your needs and define project roadmap" },
                  { title: "Design & Development", desc: "Build custom solutions tailored to your business" },
                  { title: "Deployment & Integration", desc: "Seamless implementation in your environment" },
                  { title: "Ongoing Support", desc: "24/7 monitoring, optimization, and maintenance" }
                ].map((step, i) => (
                  <>
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center flex-1"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">{i + 1}</span>
                      </div>
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </motion.div>
                    {i < 3 && (
                      <div key={`arrow-${i}`} className="hidden md:flex items-center justify-center self-start pt-6">
                        <ChevronRight className="w-8 h-8 text-primary" />
                      </div>
                    )}
                  </>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="pt-0 pb-20 px-4 scroll-mt-20 bg-gradient-to-b from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-2 px-4 py-2 text-sm font-medium bg-[#faf9f7] border-border/50">
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              Our Solutions
            </Badge>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-2 leading-tight">
              Comprehensive AI <span className="gradient-text">Platforms & Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-0">
              Designed for modern businesses seeking to leverage artificial intelligence for competitive advantage
            </p>
          </motion.div>

          {/* Product Cards - Two Column Layout with Alternating Image/Description */}
          <div className="space-y-16 md:space-y-24">
            {/* Product 1: AI Platform - Image Left, Description Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="bg-[#faf9f7] border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Mockup Image */}
                  <div className="relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-8 md:p-12 flex items-center justify-center min-h-[400px] md:min-h-[500px]">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative w-full max-w-md"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-3xl"></div>
                        <img
                          src={images.logos.seedLink}
                          alt="AI Platform Mockup"
                          className="relative w-full h-auto object-contain rounded-lg shadow-2xl"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Right Side - Description */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <Badge variant="outline" className="mb-4 bg-background/50 border-primary/30 text-primary">
                        <Cpu className="w-3 h-3 mr-2" />
                        Enterprise Platform
                      </Badge>
                      <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4 gradient-text">
                        AI Platform
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Enterprise-grade AI infrastructure for deploying and managing ML models at scale. Built for organizations that need robust, scalable, and production-ready machine learning capabilities.
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Key Features
                      </p>
                      <ul className="space-y-3">
                        {[
                          { name: "Model training pipelines", icon: Layers },
                          { name: "Real-time inference", icon: Zap },
                          { name: "Auto-scaling", icon: TrendingUp },
                          { name: "Model monitoring", icon: BarChart3 }
                        ].map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-1 flex-shrink-0">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                                <feature.icon className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <span className="text-base text-muted-foreground pt-1">{feature.name}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        onClick={() => navigate("/contact")}
                        className="bg-primary hover:bg-primary/90 text-white group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => navigate("/contact")}
                        className="border-border/50 hover:bg-primary/5"
                      >
                        Request Demo
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Product 2: ML Solutions - Description Left, Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Card className="bg-[#faf9f7] border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Description */}
                  <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                    <div className="mb-6">
                      <Badge variant="outline" className="mb-4 bg-background/50 border-primary/30 text-primary">
                        <Brain className="w-3 h-3 mr-2" />
                        Pre-built Solutions
                      </Badge>
                      <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4 gradient-text">
                        ML Solutions
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        Pre-built machine learning solutions for common business challenges. Accelerate your AI journey with ready-to-deploy solutions that solve real-world problems.
                      </p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <p className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Key Features
                      </p>
                      <ul className="space-y-3">
                        {[
                          { name: "NLP processing", icon: FileCode },
                          { name: "Computer vision", icon: Target },
                          { name: "Predictive analytics", icon: TrendingUp },
                          { name: "Recommendation engines", icon: Sparkles }
                        ].map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="mt-1 flex-shrink-0">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-md">
                                <feature.icon className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <span className="text-base text-muted-foreground pt-1">{feature.name}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        size="lg"
                        onClick={() => navigate("/contact")}
                        className="bg-primary hover:bg-primary/90 text-white group"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => navigate("/contact")}
                        className="border-border/50 hover:bg-primary/5"
                      >
                        Request Demo
                      </Button>
                    </div>
                  </div>

                  {/* Right Side - Mockup Image */}
                  <div className="relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 md:p-12 flex items-center justify-center min-h-[400px] md:min-h-[500px] order-1 md:order-2">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative w-full max-w-md"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl"></div>
                        <img
                          src={images.logos.seedLink}
                          alt="ML Solutions Mockup"
                          className="relative w-full h-auto object-contain rounded-lg shadow-2xl"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Additional Products Grid - Compact View */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                More <span className="gradient-text">Solutions</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our complete suite of AI-powered solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Data Analytics",
                  description: "Advanced analytics platform with AI-powered insights",
                  icon: BarChart3,
                  color: "from-green-500 to-emerald-500",
                  features: ["Real-time dashboards", "Predictive modeling", "Anomaly detection", "Custom reports"]
                },
                {
                  title: "Custom Development",
                  description: "Bespoke AI solutions tailored to your requirements",
                  icon: Code,
                  color: "from-orange-500 to-amber-500",
                  features: ["Custom ML models", "Integration services", "API development", "Consulting"]
                },
                {
                  title: "AI Consulting",
                  description: "Strategic guidance to identify AI opportunities",
                  icon: Lightbulb,
                  color: "from-indigo-500 to-blue-500",
                  features: ["AI strategy", "Feasibility studies", "Technology selection", "ROI analysis"]
                },
                {
                  title: "Training & Support",
                  description: "Comprehensive training and 24/7 support",
                  icon: GraduationCap,
                  color: "from-teal-500 to-cyan-500",
                  features: ["Team training", "Documentation", "24/7 support", "Best practices"]
                }
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="bg-[#faf9f7] border border-border/50 h-full hover:shadow-lg transition-all duration-300 shadow-sm cursor-pointer group">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="font-heading text-xl mb-2">{product.title}</CardTitle>
                      <CardDescription className="text-sm">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-12 px-4 scroll-mt-20 bg-white">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Industry <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored AI solutions for specific industries and use cases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4 xl:gap-5">
            {[
              {
                industry: "Healthcare",
                solutions: ["Medical image analysis", "Drug discovery", "Patient risk prediction", "Clinical decision support"]
              },
              {
                industry: "Finance",
                solutions: ["Fraud detection", "Credit scoring", "Algorithmic trading", "Risk management"]
              },
              {
                industry: "Retail & E-commerce",
                solutions: ["Personalized recommendations", "Inventory optimization", "Price forecasting", "Customer segmentation"]
              },
              {
                industry: "Manufacturing",
                solutions: ["Predictive maintenance", "Quality control", "Supply chain optimization", "Process automation"]
              },
              {
                industry: "Technology",
                solutions: ["AI-powered software", "Automated testing", "DevOps optimization", "Cloud AI services"]
              },
              {
                industry: "Education",
                solutions: ["Personalized learning", "Automated grading", "Content recommendation", "Learning analytics"]
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#faf9f7] border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading font-bold text-2xl mb-4">{solution.industry}</h3>
                <ul className="space-y-2">
                  {solution.solutions.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Served Section */}
      <section id="industries" className="py-12 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Industries <span className="gradient-text">We Served</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming businesses across diverse industries with cutting-edge AI solutions tailored to their unique challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 lg:gap-5">
            {[
              {
                icon: Heart,
                industry: "Healthcare & Life Sciences",
                description: "Revolutionizing patient care with AI-powered diagnostic tools, drug discovery platforms, and predictive health analytics.",
                services: [
                  "Medical Imaging Analysis",
                  "Drug Discovery & Development",
                  "Patient Risk Prediction",
                  "Clinical Decision Support",
                  "Electronic Health Records (EHR) AI",
                  "Telemedicine Solutions"
                ],
                stats: "95% Accuracy in Medical Diagnoses",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: DollarSign,
                industry: "Banking & Financial Services",
                description: "Enhancing security, automating processes, and delivering personalized financial services through intelligent automation.",
                services: [
                  "Fraud Detection & Prevention",
                  "Algorithmic Trading",
                  "Credit Risk Assessment",
                  "Regulatory Compliance",
                  "Customer Service Automation",
                  "Portfolio Optimization"
                ],
                stats: "60% Reduction in False Positives",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: ShoppingCart,
                industry: "Retail & E-commerce",
                description: "Driving sales growth through personalized shopping experiences, inventory optimization, and intelligent supply chain management.",
                services: [
                  "Recommendation Engines",
                  "Demand Forecasting",
                  "Price Optimization",
                  "Customer Segmentation",
                  "Supply Chain Optimization",
                  "Visual Search & Discovery"
                ],
                stats: "40% Increase in Conversion Rates",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Factory,
                industry: "Manufacturing & Industrial",
                description: "Maximizing efficiency and reducing downtime through predictive maintenance, quality control, and process automation.",
                services: [
                  "Predictive Maintenance",
                  "Quality Control Automation",
                  "Production Optimization",
                  "Supply Chain Management",
                  "IoT Integration",
                  "Energy Management"
                ],
                stats: "30% Reduction in Downtime",
                color: "from-orange-500 to-amber-500"
              },
              {
                icon: GraduationCap,
                industry: "Education & EdTech",
                description: "Personalizing learning experiences, automating administrative tasks, and improving educational outcomes with AI.",
                services: [
                  "Personalized Learning Paths",
                  "Automated Grading Systems",
                  "Content Recommendation",
                  "Student Performance Analytics",
                  "Adaptive Assessments",
                  "Virtual Tutoring"
                ],
                stats: "45% Improvement in Learning Outcomes",
                color: "from-purple-500 to-violet-500"
              },
              {
                icon: Car,
                industry: "Automotive & Transportation",
                description: "Enabling autonomous vehicles, optimizing logistics, and improving safety through computer vision and predictive analytics.",
                services: [
                  "Autonomous Vehicle Technology",
                  "Route Optimization",
                  "Fleet Management",
                  "Predictive Maintenance",
                  "Traffic Management",
                  "Driver Behavior Analysis"
                ],
                stats: "25% Fuel Efficiency Improvement",
                color: "from-gray-500 to-slate-500"
              },
              {
                icon: Building2,
                industry: "Real Estate & Construction",
                description: "Optimizing property management, construction planning, and market analysis with intelligent data insights.",
                services: [
                  "Property Valuation Models",
                  "Construction Site Monitoring",
                  "Market Trend Analysis",
                  "Energy Efficiency Optimization",
                  "Facility Management",
                  "Predictive Maintenance"
                ],
                stats: "20% Cost Reduction in Operations",
                color: "from-yellow-500 to-amber-500"
              },
              {
                icon: Plane,
                industry: "Travel & Hospitality",
                description: "Enhancing guest experiences, optimizing operations, and maximizing revenue through AI-driven insights.",
                services: [
                  "Dynamic Pricing",
                  "Personalized Recommendations",
                  "Demand Forecasting",
                  "Customer Service Chatbots",
                  "Revenue Management",
                  "Operational Efficiency"
                ],
                stats: "35% Revenue Growth",
                color: "from-indigo-500 to-blue-500"
              },
              {
                icon: Briefcase,
                industry: "Professional Services",
                description: "Streamlining workflows, automating repetitive tasks, and delivering data-driven insights for consulting and legal firms.",
                services: [
                  "Document Analysis",
                  "Contract Review Automation",
                  "Client Relationship Management",
                  "Business Intelligence",
                  "Process Automation",
                  "Knowledge Management"
                ],
                stats: "50% Time Savings on Routine Tasks",
                color: "from-teal-500 to-cyan-500"
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#faf9f7] border border-border/50 h-full hover:scale-105 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <industry.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-heading text-xl mb-2">{industry.industry}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {industry.stats}
                        </Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed mb-4">
                      {industry.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-muted-foreground mb-3">Our Services:</p>
                      <ul className="space-y-2">
                        {industry.services.map((service, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Industry Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-[#faf9f7] border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm gradient-border"
          >
            <div className="text-center mb-12">
              <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Trusted by Leading Organizations
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've delivered transformative AI solutions across multiple industries, helping organizations achieve remarkable results.
              </p>
            </div>
            <div className="grid md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 xl:gap-6">
              {[
                { value: "9+", label: "Industries Served", icon: Building2 },
                { value: "500+", label: "Projects Delivered", icon: CheckCircle2 },
                { value: "50+", label: "Enterprise Clients", icon: Users },
                { value: "98%", label: "Client Satisfaction", icon: Star }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center bg-[#faf9f7] border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-heading font-bold text-3xl gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 scroll-mt-20 bg-white">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results from real clients across various industries. See how we've transformed businesses with AI.
            </p>
          </motion.div>

          <Tabs defaultValue="retail" className="w-full">
            <TabsList className="bg-[#faf9f7] border border-border/50 shadow-sm mb-8 grid w-full grid-cols-3 md:w-auto md:grid-cols-3">
              <TabsTrigger value="retail">Retail</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="finance">Finance</TabsTrigger>
            </TabsList>
            <TabsContent value="retail">
              <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 xl:gap-8">
                <Card className="bg-[#faf9f7] border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="default">E-commerce</Badge>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <CardTitle className="font-heading text-2xl mb-3">Fortune 500 Retailer</CardTitle>
                    <div className="text-3xl font-bold gradient-text mb-4">40% Increase in Sales</div>
                    <CardDescription className="text-base">
                      Implemented AI-powered recommendation system that increased customer engagement and sales by 40%. The solution processed millions of transactions daily and personalized product suggestions in real-time.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Customer Engagement</span>
                        <span className="font-semibold">+65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Conversion Rate</span>
                        <span className="font-semibold">+52%</span>
                      </div>
                      <Progress value={52} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Revenue Growth</span>
                        <span className="font-semibold">+40%</span>
                      </div>
                      <Progress value={40} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#faf9f7] border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="default">Supply Chain</Badge>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <CardTitle className="font-heading text-2xl mb-3">Global Retail Chain</CardTitle>
                    <div className="text-3xl font-bold gradient-text mb-4">25% Cost Reduction</div>
                    <CardDescription className="text-base">
                      Deployed AI-driven inventory optimization system that reduced stockouts by 80% and cut inventory costs by 25% while maintaining 99% availability.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Inventory Efficiency</span>
                        <span className="font-semibold">+45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Stockout Reduction</span>
                        <span className="font-semibold">-80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="healthcare">
              <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 xl:gap-8">
                <Card className="bg-[#faf9f7] border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="default">Healthcare</Badge>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <CardTitle className="font-heading text-2xl mb-3">Healthcare Provider Network</CardTitle>
                    <div className="text-3xl font-bold gradient-text mb-4">30% Cost Reduction</div>
                    <CardDescription className="text-base">
                      Deployed predictive analytics platform that reduced operational costs by 30% through optimized resource allocation. The AI system analyzes patient flow, predicts demand, and optimizes staffing schedules.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Operational Efficiency</span>
                        <span className="font-semibold">+35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Patient Wait Times</span>
                        <span className="font-semibold">-45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#faf9f7] border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="default">Medical Imaging</Badge>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <CardTitle className="font-heading text-2xl mb-3">Hospital System</CardTitle>
                    <div className="text-3xl font-bold gradient-text mb-4">92% Diagnosis Accuracy</div>
                    <CardDescription className="text-base">
                      Built computer vision system for medical image analysis that improved diagnostic accuracy to 92% and reduced analysis time from hours to minutes, enabling faster treatment decisions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Diagnosis Speed</span>
                        <span className="font-semibold">+300%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Accuracy Improvement</span>
                        <span className="font-semibold">+18%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="finance">
              <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 xl:gap-8">
                <Card className="bg-[#faf9f7] border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="default">Financial Services</Badge>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <CardTitle className="font-heading text-2xl mb-3">Global Bank</CardTitle>
                    <div className="text-3xl font-bold gradient-text mb-4">95% Fraud Detection</div>
                    <CardDescription className="text-base">
                      Built real-time fraud detection system that improved detection accuracy to 95% while reducing false positives by 60%. The system processes millions of transactions per second and flags suspicious activity instantly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Detection Accuracy</span>
                        <span className="font-semibold">95%</span>
                      </div>
                      <Progress value={95} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">False Positives Reduction</span>
                        <span className="font-semibold">-60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Response Time</span>
                        <span className="font-semibold">0.5s</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-[#faf9f7] border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="default">Fintech</Badge>
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    </div>
                    <CardTitle className="font-heading text-2xl mb-3">Credit Platform</CardTitle>
                    <div className="text-3xl font-bold gradient-text mb-4">50% Risk Reduction</div>
                    <CardDescription className="text-base">
                      Developed ML-powered credit scoring system that reduced default rates by 50% and increased loan approval accuracy. The system analyzes 1000+ data points in real-time for faster credit decisions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Default Rate Reduction</span>
                        <span className="font-semibold">-50%</span>
                      </div>
                      <Progress value={50} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Approval Accuracy</span>
                        <span className="font-semibold">+38%</span>
                      </div>
                      <Progress value={38} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-20 px-4 scroll-mt-20 bg-white">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Join Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build the future of AI with a team of passionate innovators
            </p>
          </motion.div>

          {/* Why Join Section */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#faf9f7] border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                {[
                  {
                    icon: Rocket,
                    title: "Cutting-Edge Projects",
                    description: "Work on innovative AI projects using state-of-the-art technology and tackle challenges at the forefront of AI."
                  },
                  {
                    icon: TrendingUp,
                    title: "Career Growth",
                    description: "Clear progression paths with opportunities to move into leadership roles. We promote from within."
                  },
                  {
                    icon: Users,
                    title: "Collaborative Culture",
                    description: "Join a team where collaboration trumps competition. Share knowledge and build something amazing together."
                  },
                  {
                    icon: Target,
                    title: "Impact & Meaning",
                    description: "Your work directly impacts businesses and lives. See your AI solutions deployed in production."
                  },
                  {
                    icon: Heart,
                    title: "Work-Life Balance",
                    description: "We respect your time and boundaries. Sustainable productivity and personal well-being go hand in hand."
                  },
                  {
                    icon: Award,
                    title: "Competitive Benefits",
                    description: "Comprehensive health coverage, flexible PTO, stock options, and perks designed to support your success."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#faf9f7] border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm mb-16"
          >
            <div className="grid md:grid-cols-3 gap-6 xl:gap-8">
              {[
                { value: "50+", label: "Team Members", icon: Users },
                { value: "98%", label: "Satisfaction", icon: Star },
                { value: "24/7", label: "Support", icon: Clock }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-heading font-bold text-3xl gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Browse Open Positions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl p-8 md:p-12 border border-border/50">
              <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Browse Currently <span className="gradient-text">Open Positions</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Explore our current job openings and find the perfect role that matches your skills and passion. We're looking for talented individuals to join our innovative team and help shape the future of AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="bg-primary hover:bg-primary/90 text-white group"
                >
                  View All Openings
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/contact")}
                  className="bg-[#faf9f7] border border-border/50 shadow-sm hover:shadow-md"
                >
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
