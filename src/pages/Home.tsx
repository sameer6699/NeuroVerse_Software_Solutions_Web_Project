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

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

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

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge machine learning models tailored to your business needs"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with real-time processing capabilities"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with compliance certifications"
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Built to grow with your business from startup to enterprise"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated AI/ML specialists with proven track records"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Bespoke solutions designed for your unique challenges"
    }
  ];


  const capabilities = [
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
    "Recommendation Systems",
    "Anomaly Detection",
    "Process Automation"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      <Navbar />


      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4">
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
                <Badge variant="outline" className="bg-[#faf9f7] border-border/50 px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition-shadow">
                  Where Innovation Meets Passion
                </Badge>
              </motion.div>
              
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                We build <span className="gradient-text">intelligence</span> into products.
              </h1>
              
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                NeuroVerse partners with companies to design, deploy and scale AI-powered software — from prototypes to production. Transform your business with cutting-edge artificial intelligence solutions that drive real results.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">500+ Projects Delivered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">98% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">50+ Enterprise Clients</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="bg-primary hover:bg-primary/90 text-white group"
                >
                  Request Callback
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/case-studies")}
                  className="bg-[#faf9f7] border border-border/50 shadow-sm hover:shadow-md hover:text-black transition-all duration-300 group"
                >
                  See Case Studies
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
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

      {/* Why NeuroVerse Section */}
      <section id="why-neuroverse" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Why Choose <span className="gradient-text">NeuroVerse</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade AI solutions with the agility of a startup
            </p>
          </motion.div>

          {/* Detailed Why NeuroVerse Content */}
          <div className="space-y-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#faf9f7] border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm"
            >
              <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-8 xl:gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl xl:text-3xl">Proven Track Record</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    With over 500+ successful projects delivered across industries, NeuroVerse has established itself as a trusted partner in AI transformation. Our expertise spans from Fortune 500 enterprises to innovative startups, delivering measurable results that drive business growth.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Industry-Leading Success Rate</p>
                        <p className="text-sm text-muted-foreground">98% client satisfaction with projects completed on time and within budget</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Global Reach</p>
                        <p className="text-sm text-muted-foreground">Serving clients across 40+ countries with localized support and expertise</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Award-Winning Solutions</p>
                        <p className="text-sm text-muted-foreground">Recognized by industry leaders for innovation in AI and machine learning</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[Target, Globe, BarChart3, Lock].map((Icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-[#faf9f7] border border-border/50 rounded-2xl p-6 flex items-center justify-center aspect-square hover:scale-105 transition-transform shadow-sm hover:shadow-md"
                    >
                      <Icon className="w-12 h-12 text-primary" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 xl:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#faf9f7] border border-border/50 rounded-3xl p-6 xl:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl xl:text-2xl">Cutting-Edge Technology</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  We leverage the latest advancements in AI and machine learning, including Large Language Models (LLMs), computer vision, and advanced analytics. Our team stays at the forefront of technological innovation, ensuring your solutions are built with state-of-the-art capabilities.
                </p>
                <ul className="space-y-2">
                  {["Transformer-based architectures", "GPT and LLM integration", "Real-time inference pipelines", "Edge AI deployment"].map((tech, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#faf9f7] border border-border/50 rounded-3xl p-6 xl:p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-xl xl:text-2xl">Expert Team</h3>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our team comprises world-class AI/ML engineers, data scientists, and solution architects with extensive experience. Many of our experts hold advanced degrees from top universities and have worked at leading tech companies including Google, Microsoft, and Amazon.
                </p>
                <ul className="space-y-2">
                  {["PhD-level researchers", "Certified ML engineers", "Industry veterans (10+ years)", "Published AI research papers"].map((expert, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{expert}</span>
                    </li>
                  ))}
                </ul>
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
                  From initial consultation to production deployment and ongoing support, NeuroVerse provides comprehensive AI solutions. We handle every aspect of your AI journey, ensuring seamless integration with your existing infrastructure.
                </p>
              </div>
              <div className="grid md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4 xl:gap-6">
                {[
                  { title: "Discovery & Strategy", desc: "Understand your needs and define AI roadmap" },
                  { title: "Design & Development", desc: "Build custom solutions tailored to your business" },
                  { title: "Deployment & Integration", desc: "Seamless implementation in your environment" },
                  { title: "Ongoing Support", desc: "24/7 monitoring, optimization, and maintenance" }
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div>
            <h3 className="font-heading font-bold text-3xl text-center mb-12">Key Differentiators</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 xl:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Card className="bg-[#faf9f7] border border-border/50 h-full hover:scale-105 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="font-heading">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Our <span className="gradient-text">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI platforms and solutions designed for modern businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "AI Platform",
                description: "Enterprise-grade AI infrastructure for deploying and managing ML models at scale",
                features: ["Model training pipelines", "Real-time inference", "Auto-scaling", "Model monitoring"]
              },
              {
                title: "ML Solutions",
                description: "Pre-built machine learning solutions for common business challenges",
                features: ["NLP processing", "Computer vision", "Predictive analytics", "Recommendation engines"]
              },
              {
                title: "Data Analytics",
                description: "Advanced analytics platform with AI-powered insights and visualization",
                features: ["Real-time dashboards", "Predictive modeling", "Anomaly detection", "Custom reports"]
              },
              {
                title: "Custom Development",
                description: "Bespoke AI solutions tailored to your unique business requirements",
                features: ["Custom ML models", "Integration services", "API development", "Consulting"]
              },
              {
                title: "AI Consulting",
                description: "Strategic guidance to identify AI opportunities and build roadmaps",
                features: ["AI strategy", "Feasibility studies", "Technology selection", "ROI analysis"]
              },
              {
                title: "Training & Support",
                description: "Comprehensive training programs and 24/7 support for your AI initiatives",
                features: ["Team training", "Documentation", "24/7 support", "Best practices"]
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#faf9f7] border border-border/50 h-full hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl mb-3">{product.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 px-4 scroll-mt-20 bg-white">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Industry <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored AI solutions for specific industries and use cases
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-6 xl:gap-8">
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
      <section id="industries" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Industries <span className="gradient-text">We Served</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming businesses across diverse industries with cutting-edge AI solutions tailored to their unique challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 lg:gap-8">
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
            className="mt-16 bg-[#faf9f7] border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm gradient-border"
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

      {/* Capabilities Section */}
      <section id="capabilities" className="py-20 px-4 scroll-mt-20">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <div className="bg-[#faf9f7] border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Our <span className="gradient-text">Capabilities</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive AI/ML solutions for every business need
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 xl:gap-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center space-x-3 bg-[#faf9f7] border border-border/50 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{capability}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 px-4 scroll-mt-20 bg-gradient-to-b from-transparent to-primary/5">
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

          {/* Work Culture Section */}
          <div className="mb-16 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm"
            >
              <div className="text-center mb-12">
                <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                  Our <span className="gradient-text">Work Culture</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  At NeuroVerse, we believe that great culture drives great innovation. Our team is built on trust, collaboration, and a shared passion for pushing the boundaries of AI technology.
                </p>
              </div>

              <div className="grid md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 xl:gap-8">
                {[
                  {
                    icon: Users,
                    title: "Collaborative Environment",
                    description: "We foster a culture of open communication, knowledge sharing, and cross-functional collaboration. Every team member's voice is heard and valued."
                  },
                  {
                    icon: Rocket,
                    title: "Innovation First",
                    description: "We encourage experimentation, creative problem-solving, and continuous innovation. Your ideas have the power to shape the future of AI."
                  },
                  {
                    icon: TrendingUp,
                    title: "Growth Mindset",
                    description: "We invest in your professional development with mentorship programs, learning budgets, conference opportunities, and skill-building workshops."
                  },
                  {
                    icon: Heart,
                    title: "Work-Life Balance",
                    description: "We understand that sustainable innovation comes from well-rested, happy employees. Flexible hours, unlimited PTO, and mental health support are priorities."
                  },
                  {
                    icon: Globe,
                    title: "Diverse & Inclusive",
                    description: "We celebrate diversity in all its forms. Our inclusive culture ensures everyone feels welcome, respected, and empowered to do their best work."
                  },
                  {
                    icon: Sparkles,
                    title: "Impact-Driven",
                    description: "Every project we work on has real-world impact. You'll see your work transforming businesses and improving lives globally."
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 hover:scale-105 transition-transform border border-border shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-heading font-bold text-xl mb-3">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Why Work Here */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 flex items-center justify-center gap-3"
                >
                  <Target className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                  <span className="gradient-text">Why Work at NeuroVerse?</span>
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
                >
                  Join a team that values innovation, growth, and meaningful impact
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 auto-rows-fr">
                {[
                  {
                    title: "Cutting-Edge Projects",
                    description: "Work on the most innovative AI projects using state-of-the-art technology. From LLMs to computer vision, you'll tackle challenges at the forefront of AI.",
                    icon: Rocket,
                    gradient: "from-primary to-accent",
                    delay: 0.1
                  },
                  {
                    title: "Career Growth",
                    description: "Clear career progression paths with opportunities to move into leadership roles. We promote from within and invest in your long-term success.",
                    icon: TrendingUp,
                    gradient: "from-accent to-primary",
                    delay: 0.2
                  },
                  {
                    title: "Collaborative Culture",
                    description: "Join a team where collaboration trumps competition. Share knowledge, learn from peers, and build something amazing together.",
                    icon: Users,
                    gradient: "from-primary via-accent to-primary",
                    delay: 0.3
                  },
                  {
                    title: "Impact & Meaning",
                    description: "Your work directly impacts businesses and lives. See your AI solutions deployed in production, driving real-world transformation.",
                    icon: Target,
                    gradient: "from-accent to-primary",
                    delay: 0.4
                  },
                  {
                    title: "Work-Life Balance",
                    description: "We respect your time and boundaries. No overwork culture. Sustainable productivity and personal well-being go hand in hand.",
                    icon: Heart,
                    gradient: "from-primary to-accent",
                    delay: 0.5
                  },
                  {
                    title: "Competitive Benefits",
                    description: "Enjoy comprehensive health coverage, flexible PTO, stock options, and perks designed to support your success both professionally and personally.",
                    icon: Award,
                    gradient: "from-accent to-primary",
                    delay: 0.6
                  }
                ].map((point, i) => {
                  const IconComponent = point.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: point.delay }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative"
                    >
                      <Card className="bg-white h-full border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden group-hover:shadow-xl shadow-sm">
                        <CardHeader className="pb-4">
                          <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-xl`}></div>
                            <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <IconComponent className="w-7 h-7 text-white" />
                            </div>
                            <div className="absolute top-0 left-0 w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <CardTitle className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                            {point.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                            {point.description}
                          </CardDescription>
                        </CardContent>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="text-center"
              >
                <Button 
                  size="lg" 
                  onClick={() => navigate("/contact")} 
                  className="relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Open Positions
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </motion.div>
            </motion.div>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto max-w-5k-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative bg-[#faf9f7] border border-border/50 gradient-border rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-primary/20"
          >
            {/* Background gradient effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 group-hover:text-primary transition-colors duration-300"
                >
                  Ready to Transform Your Business?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground leading-relaxed"
                >
                  Let's discuss how AI can accelerate your growth
                </motion.p>
              </div>

              {/* Right Buttons */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
              >
                <Button
                  size="lg"
                  onClick={() => navigate("/contact")}
                  className="relative px-6 py-6 text-base font-semibold bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group/btn overflow-hidden min-w-[200px]"
                >
                  <span className="relative z-10">Schedule a Consultation</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/case-studies")}
                  className="relative px-6 py-6 text-base font-semibold bg-[#faf9f7] border-2 border-border/50 hover:border-primary/50 hover:bg-primary/5 transform hover:scale-105 transition-all duration-300 group/btn min-w-[200px] shadow-sm hover:shadow-md"
                >
                  <span className="relative z-10">View Success Stories</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </Button>
              </motion.div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
