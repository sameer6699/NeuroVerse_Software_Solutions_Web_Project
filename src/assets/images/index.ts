/**
 * Image Assets Index
 * 
 * Centralized export file for all image assets.
 * Import images from this file for better organization and type safety.
 * 
 * Usage:
 *   import { logos, heroImages } from '@/assets/images';
 *   <img src={logos.primary} alt="Logo" />
 */

// Logo images
export const logos = {
  primary: new URL('./logos/logo.svg', import.meta.url).href,
  primaryPng: new URL('./logos/logo.png', import.meta.url).href,
  withBackground: new URL('./logos/logo_bg.svg', import.meta.url).href,
  withBackgroundPng: new URL('./logos/logo_bg.png', import.meta.url).href,
  main: new URL('./logos/Main-logo-NV.png', import.meta.url).href,
  seedLink: new URL('./logos/SeedLink-1.png', import.meta.url).href,
  seedLinkLogo: new URL('./logos/logo copy.png', import.meta.url).href,
} as const;

// Hero section images
export const heroImages = {
  main: new URL('./hero/hero-main.jpg', import.meta.url).href,
  background: new URL('./hero/hero-bg.jpg', import.meta.url).href,
  image: new URL('./hero/hero-img.svg', import.meta.url).href,
  pattern: new URL('./hero/hero-pattern.svg', import.meta.url).href,
} as const;

// Feature images
export const featureImages = {
  ai: new URL('./features/ai-feature.jpg', import.meta.url).href,
  cloud: new URL('./features/cloud-feature.jpg', import.meta.url).href,
  security: new URL('./features/security-feature.jpg', import.meta.url).href,
  analytics: new URL('./features/analytics-feature.jpg', import.meta.url).href,
} as const;

// Testimonial images
export const testimonialImages = {
  placeholder: new URL('./testimonials/testimonial-placeholder.jpg', import.meta.url).href,
} as const;

// Team member images
export const teamImages = {
  placeholder: new URL('./team/team-placeholder.jpg', import.meta.url).href,
} as const;

// Partner/Client logos
export const partnerLogos = {
  placeholder: new URL('./partners/partner-placeholder.png', import.meta.url).href,
} as const;

// Project images
export const projectImages = {
  placeholder: new URL('./projects/project-placeholder.jpg', import.meta.url).href,
  latestInsights: new URL('./projects/17973908.jpg', import.meta.url).href,
  insightsHero: new URL('./projects/Flat_openSpace_offices_13.jpg', import.meta.url).href,
  hotTopicsBackground: new URL('./projects/empty-square-modern-architecture.jpg', import.meta.url).href,
} as const;

// Banner images
export const bannerImages = {
  aiBanner: new URL('./banner-Images/AI-Banner Image.jpg', import.meta.url).href,
  researchBanner: new URL('./banner-Images/Research-banner.jpg', import.meta.url).href,
  reportsBanner: new URL('./banner-Images/reports-banners.jpg', import.meta.url).href,
  healthcareBanner: new URL('./banner-Images/health-care-banner.jpg', import.meta.url).href,
  healthcareHeroBanner: new URL('./banner-Images/hero-section-health-care-banner.jpg', import.meta.url).href,
  healthcareHeroBanner1: new URL('./banner-Images/hero-section-health-care-banner-1.jpg', import.meta.url).href,
  healthcareHeroBannerNew: new URL('./banner-Images/healthcare-hero-banner.jpg', import.meta.url).href,
  healthcareTechBanner: new URL('./banner-Images/healthcare-tech-banner.jpg', import.meta.url).href,
  healthcareTech2Banner: new URL('./banner-Images/healthcare-tech-2-banner.jpg', import.meta.url).href,
  financeHeroBanner: new URL('./banner-Images/finance-hero-section-banner.jpg', import.meta.url).href,
  financeBgBanner: new URL('./banner-Images/finance-bg-banner.jpg', import.meta.url).href,
  retailEcommerceHeroBanner: new URL('./banner-Images/retail-&-Ecommerce.jpg', import.meta.url).href,
  retailEcommerceBgBanner: new URL('./banner-Images/retail-ecomm-bg.jpg', import.meta.url).href,
  manufacturingHeroBanner: new URL('./banner-Images/manufacturing-hero-bg.jpg', import.meta.url).href,
  technologyHeroBanner: new URL('./banner-Images/technology-hero-bg.jpg', import.meta.url).href,
  technologyBgBanner: new URL('./banner-Images/tech-bg-img.jpg', import.meta.url).href,
  cloudDataCenter: new URL('./banner-Images/cloud-data-center.jpg', import.meta.url).href,
  codingVideo: new URL('./banner-Images/codig-video.mp4', import.meta.url).href,
  userExperience: new URL('./banner-Images/user-experience.jpg', import.meta.url).href,
  customerSatisfaction: new URL('./banner-Images/bg-customer-satisfaction.jpg', import.meta.url).href,
  customerExperience: new URL('./banner-Images/customer-experience.jpg', import.meta.url).href,
  digitalMarketing: new URL('./banner-Images/digital-marketing.jpg', import.meta.url).href,
  softwareServices: new URL('./banner-Images/software-services.jpg', import.meta.url).href,
  cybersecurityHeroBg: new URL('./banner-Images/cybersecurity-hero-bg.jpg', import.meta.url).href,
  cyberBg: new URL('./banner-Images/cyber-bg.jpg', import.meta.url).href,
  technologyInnovation: new URL('./banner-Images/technology-innovation.jpg', import.meta.url).href,
  aiFuture: new URL('./banner-Images/AI-Future.jpg', import.meta.url).href,
  innovation: new URL('./banner-Images/innovation.jpg', import.meta.url).href,
  techLesson: new URL('./banner-Images/tech-lesson.jpg', import.meta.url).href,
  healthcareIndustry: new URL('./banner-Images/health-care-industry.jpg', import.meta.url).href,
  healthcareCardImg: new URL('./banner-Images/health-care-card-img.jpg', import.meta.url).href,
  healthcareImageBgImg: new URL('./banner-Images/health-care-image-bg-img.jpg', import.meta.url).href,
  hospitalManagementImg: new URL('./banner-Images/hospital-management-img.jpg', import.meta.url).href,
  telemedicinePosterImg: new URL('./banner-Images/telemedicine-poster-img.jpg', import.meta.url).href,
  medicalAiImg: new URL('./banner-Images/medial-ai.jpg', import.meta.url).href,
  medicalEngagementPicture: new URL('./banner-Images/medical-engagement-picture.jpg', import.meta.url).href,
  bankingFinancialServiceSection: new URL('./banner-Images/banking-financial-service-section.jpg', import.meta.url).href,
  financeIndustry: new URL('./banner-Images/finance-industry.jpg', import.meta.url).href,
  ecommerceIndustry: new URL('./banner-Images/ecom.jpg', import.meta.url).href,
  manufacturingIndustry: new URL('./banner-Images/Manufacturing-card-img.jpg', import.meta.url).href,
  technologyIndustry: new URL('./banner-Images/tech-card-img.jpg', import.meta.url).href,
  educationTechnologyIndustry: new URL('./banner-Images/edu-tech-card.jpg', import.meta.url).href,
  wealthManagementStockImage: new URL('./banner-Images/welth-management-stock-image.jpg', import.meta.url).href,
  fintechDigitalPaymentImg: new URL('./banner-Images/fintech-digital-payment-img.jpg', import.meta.url).href,
  digitalBankingPlatformImg: new URL('./banner-Images/digital-banking-platform-img.jpg', import.meta.url).href,
  tradingInvestmentImg: new URL('./banner-Images/trading-investment-img.jpg', import.meta.url).href,
  fraudDetectionSystem: new URL('./banner-Images/fraud-detection-system.jpg', import.meta.url).href,
  wealthManagementPosterImg: new URL('./banner-Images/welth-management-poster-img.jpg', import.meta.url).href,
  ecomImg: new URL('./banner-Images/ecom-img.jpg', import.meta.url).href,
  ecomNew2Img: new URL('./banner-Images/ecom-new-2-img.jpg', import.meta.url).href,
  retailAnalysisImg: new URL('./banner-Images/retail-analysis-img.jpg', import.meta.url).href,
  omnichannelRetailImg: new URL('./banner-Images/omnical-retail-img.jpg', import.meta.url).href,
  aiRecommendationSystemImg: new URL('./banner-Images/ai-recommendation system img.jpeg', import.meta.url).href,
  inventoryManagementSystemImg: new URL('./banner-Images/inventory-management-system-img.jpeg', import.meta.url).href,
  cepImg: new URL('./banner-Images/CEP-img.jpeg', import.meta.url).href,
  factoryImg: new URL('./banner-Images/factory-img.jpeg', import.meta.url).href,
  industry40Img: new URL('./banner-Images/industry-4.0-img.jpeg', import.meta.url).href,
  productionAndQualityImg: new URL('./banner-Images/production-and-quality-img.jpeg', import.meta.url).href,
  logisticsImg: new URL('./banner-Images/logistics-img.jpeg', import.meta.url).href,
  smartFactoryImg: new URL('./banner-Images/smart-factory-img.jpeg', import.meta.url).href,
  predictiveMaintenanceImg: new URL('./banner-Images/predictive-maintainance-img.jpeg', import.meta.url).href,
  supplyChainOptimizationImg: new URL('./banner-Images/supply-chain-optimization-img.jpeg', import.meta.url).href,
  qualityManagementImg: new URL('./banner-Images/quality-management-img.jpeg', import.meta.url).href,
  technologyBgCardImg: new URL('./banner-Images/technology-bg-card-img.jpeg', import.meta.url).href,
  aiAndMlImg: new URL('./banner-Images/AI-and-ML-inmg.jpeg', import.meta.url).href,
  aiMlBannerImg: new URL('./banner-Images/AI-ML_banner-img.jpeg', import.meta.url).href,
  cloudInfraImg: new URL('./banner-Images/cloud-infra-img.jpeg', import.meta.url).href,
  cloudInfraCardImg: new URL('./banner-Images/cloud-infra-card-img.jpeg', import.meta.url).href,
  swEngineeringImg: new URL('./banner-Images/sw-engineering-img.jpeg', import.meta.url).href,
  swDevelopmentCardImg: new URL('./banner-Images/sw-deelopment-card-img.jpeg', import.meta.url).href,
  blockchainImg: new URL('./banner-Images/blockchain-img.jpeg', import.meta.url).href,
  cybersecurityCardImg: new URL('./banner-Images/cybersecurity-card-img.jpeg', import.meta.url).href,
  cybersecurityCardImgNew: new URL('./banner-Images/cybersecurity-card-img-new.jpeg', import.meta.url).href,
  cyberSecurityCardImg: new URL('./banner-Images/cyber-security-card-img.jpeg', import.meta.url).href,
  iotEdgeComputing: new URL('./banner-Images/IOT-edge-computing.jpeg', import.meta.url).href,
  cloudNativePlatform: new URL('./banner-Images/cloud-native-platform.jpeg', import.meta.url).href,
  aiPoweredAnalytics: new URL('./banner-Images/AI_powered-Analytics.jpeg', import.meta.url).href,
  dataAnalyticsBannerImg: new URL('./banner-Images/data-analytics-banner-img.jpeg', import.meta.url).href,
  devOpsAutomationImg: new URL('./banner-Images/dev-ops-automation-img.jpeg', import.meta.url).href,
  enterpriseSoftwareImg: new URL('./banner-Images/enterprise-software-img.jpeg', import.meta.url).href,
  multiCloud: new URL('./banner-Images/multi-cloud.jpeg', import.meta.url).href,
  cloudNative: new URL('./banner-Images/cloud-native.jpeg', import.meta.url).href,
  cloudMigration: new URL('./banner-Images/cloud-migration.jpeg', import.meta.url).href,
  multiCloudMigration: new URL('./banner-Images/multi-cloud-migration.jpg', import.meta.url).href,
  cloudNativeDevelopment: new URL('./banner-Images/cloud-native-development.png', import.meta.url).href,
  hybridCloud: new URL('./banner-Images/hybrid-cloud.png', import.meta.url).href,
  cloudFooterBanner: new URL('./banner-Images/Cloud-footer-banner-img.png', import.meta.url).href,
  userEngagementCustomerExperience: new URL('./banner-Images/user-engagement-customer-experience.png', import.meta.url).href,
  digitalConsumer: new URL('./banner-Images/digital-consumer.png', import.meta.url).href,
  customerExcellence: new URL('./banner-Images/customer-excellance.png', import.meta.url).href,
  omnicalCrmFunnel: new URL('./banner-Images/omnical-crm-funnel.png', import.meta.url).href,
  ecomEngineImg: new URL('./banner-Images/e-com-engine-img.png', import.meta.url).href,
  customerExperiencePlatform: new URL('./banner-Images/customer-experience-platform.png', import.meta.url).href,
  customerRoyaltyPlatform: new URL('./banner-Images/customer-royalty-platform.png', import.meta.url).href,
  customerFooterBannerImage: new URL('./banner-Images/customer-footer-banner-image.png', import.meta.url).href,
  threatDetectionAndResponse: new URL('./banner-Images/threat-detection-and-response.png', import.meta.url).href,
  identityAndAccessManagement: new URL('./banner-Images/identity-and-access-management.png', import.meta.url).href,
} as const;

// Export all images as a single object for convenience
export const images = {
  logos,
  hero: heroImages,
  features: featureImages,
  testimonials: testimonialImages,
  team: teamImages,
  partners: partnerLogos,
  projects: projectImages,
  banners: bannerImages,
} as const;

// Type exports for TypeScript support
export type LogoImage = typeof logos[keyof typeof logos];
export type HeroImage = typeof heroImages[keyof typeof heroImages];
export type FeatureImage = typeof featureImages[keyof typeof featureImages];

